---
layout: post
title: cluster witout internet connection
date: 2024-07-22 10:00:00+0800
description: "setting up cluster 18: SSH tunneling, CentOS 7 vault fix, and environment modules installation"
tags: [ linux, cluster maintenance ]
categories: linux
---

> Note: CentOS 7 has reached end-of-life (EOL).
> These instructions are intended for maintaining legacy systems.

This document records procedures for:
- Accessing the internet from an offline server via SSH tunnel
- Fixing the CentOS 7 repository issue
- Installing Environment Modules from source

---

## 1. Internet Connection via SSH Tunnel

If server A does not have direct internet access, but another server does,
we can tunnel traffic through SSH using dynamic port forwarding.
Although we use CentOS 7 here, the approach in this section also works for Rocky Linux 8.

References:
- https://unix.stackexchange.com/questions/157743/tunnel-yum-traffic-through-another-server-via-ssh
- https://unix.stackexchange.com/questions/111972/connect-to-the-internet-on-a-vpn-connected-server-without-internet

### 1.1 Configure YUM to Use Proxy

Edit:
```
/etc/yum.conf
```

Add:
```
proxy=socks5h://localhost:1080
```

### 1.2 Establish SSH Tunnel

```
ssh -D 1080 YOUR_USER@YOUR_SERVER_WITH_FULL_WEB_ACCESS
```

This creates a local SOCKS5 proxy on port 1080.
Keep this terminal open.

### 1.3 Test the Connection

```
curl --socks5 127.0.0.1:1080 http://www.baidu.com
```

If successful, internet traffic is being routed through the SSH tunnel.

### 1.4 Configure Proxy for Conda and Git

Edit `~/.condarc`:

```
proxy_servers:
  http: socks5://127.0.0.1:1080
  https: socks5://127.0.0.1:1080
```

Edit `~/.gitconfig`:

```
[http]
    proxy = socks5://127.0.0.1:1080
[https]
    proxy = socks5://127.0.0.1:1080
```

---

## 2. Fix: mirrorlist.centos.org No Longer Available

Since CentOS 7 is EOL, the default mirrorlist no longer resolves.

Reference:
- https://serverfault.com/questions/1161816/mirrorlist-centos-org-no-longer-resolve

### 2.1 Switch to Vault Repository

```
sed -i 's/mirror.centos.org/vault.centos.org/g' /etc/yum.repos.d/*.repo
sed -i 's/^#.*baseurl=http/baseurl=http/g' /etc/yum.repos.d/*.repo
sed -i 's/^mirrorlist=http/#mirrorlist=http/g' /etc/yum.repos.d/*.repo
```

These lines essentially replace `mirror.centos.org` to `vault.centos.org` in `/etc/yum.repos.d/CentOS-Base.repo`.

### 2.2 Update System

```
yum update
```

---

## 3. Install Environment Modules

Environment Modules allow dynamic modification of shell environments,
which is useful for managing compilers, MPI, and scientific software.

Documentation:
- https://modules.readthedocs.io/en/stable/INSTALL.html

### 3.1 Download Source (with SSH tunnel)

```
curl --socks5 127.0.0.1:1080 -LJO \
https://github.com/cea-hpc/modules/releases/download/v5.4.0/modules-5.4.0.tar.gz
```

### 3.2 Extract

```
tar xfz modules-5.4.0.tar.gz
cd modules-5.4.0
```

### 3.3 Compile and Install

```
./configure --prefix=/usr/share/Modules \
            --modulefilesdir=/usr/share/Modules/modulefiles
make
make install
```

### 3.4 Enable Modules at Shell Startup

```
ln -s /usr/share/Modules/init/profile.sh /etc/profile.d/modules.sh
ln -s /usr/share/Modules/init/profile.csh /etc/profile.d/modules.csh
```

Log out and back in, or run:
```
source /etc/profile.d/modules.sh
```

### 3.5 Test Modules

```
module sh-to-mod bash example/source-script-in-modulefile/foo-1.2/foo-setup.sh arg1 > modulefiles/foo/1.2

module avail
module load foo/1.2
```

---

## Final Remarks

These procedures are primarily for maintaining legacy CentOS 7 cluster nodes.

For new deployments, consider:
- Rocky Linux or AlmaLinux
- A modern workload manager (e.g., SLURM)
- Lmod instead of classic Environment Modules

Maintaining clear documentation is essential for long-term cluster stability.
