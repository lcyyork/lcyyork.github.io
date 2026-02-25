---
layout: post
title: setting up your development environment
date: 2021-11-11 10:00:00+0800
description: setting up a Linux or macOS system for quantum chemistry research
tags: [ basics, linux, software ]
categories: easy
---

As a quantum chemist, your daily workflow will include deriving equations, translating them into code, debugging, running large-scale computations, analyzing data, visualizing results, and writing papers.
A well-configured development environment is essential for productivity.

This guide outlines a recommended setup for **macOS** and **Linux** systems.
If you are currently using Windows, please install **Windows Subsystem for Linux (WSL)** and work inside a Linux environment whenever possible.

Although we illustrate the setup using macOS, almost all tools listed below also work on Linux.

---

## Developer Tools

These tools form the foundation of your research workflow.

- **[Xcode and Commond Line Tools](https://developer.apple.com/xcode/resources)**:
  Required on macOS for compilers and development utilities.

- **[Homebrew](https://brew.sh/)**:
  The de facto package manager for macOS.
  Linux users should use their system package manager (e.g., `apt` for Ubuntu, `dnf` for Rocky Linux).

- **[iTerm2](https://iterm2.com/)**:
  A powerful and customizable terminal emulator (macOS).

- **[Oh My Zsh](https://ohmyz.sh/)**:
  A framework for managing your Zsh configuration.
  Combined with iTerm2, it significantly improves terminal usability.

- **[Anaconda / Miniconda](https://www.anaconda.com/products/individual)**:
  A Python distribution for scientific computing.
  Installing **[Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/main)** is usually sufficient and lighter weight.
  Also, please use Python 3.

- **[Visual Studio Code (VS Code)](https://code.visualstudio.com)**:
  A lightweight but powerful code editor.
  Install extensions for Python, C/C++, Git, and remote SSH development.

- **[JetBrains IDEs (PyCharm, CLion)](https://www.jetbrains.com)**:
  Excellent integrated development environments.
  Students can apply for a free academic license.

- **[Vim](https://www.vim.org/)**:
  Learning a terminal-based editor is highly recommended.
  You may configure Vim yourself or use a preconfigured distribution (e.g., [Spf13-Vim](https://github.com/spf13/spf13-vim)).

You may also consult curated software lists such as [mac-dev-setup](https://github.com/nicolashery/mac-dev-setup) for additional tools.

---

## Quantum Chemistry Packages

Below are widely used quantum chemistry packages.
All are open-source or free for academic use.

- **[PySCF](https://pyscf.org/)**: Python-based electronic structure package
- **[OpenMolcas](https://gitlab.com/Molcas/OpenMolcas)**: Multiconfigurational quantum chemistry
- **[ORCA](https://www.faccts.de/docs/orca/6.1/tutorials)**: General-purpose quantum chemistry software
- **[GAMESS](https://www.msg.chem.iastate.edu/GAMESS)**: General ab initio quantum chemistry package
- **[CFOUR](https://cfour.uni-mainz.de/cfour)**: High-level coupled cluster methods
- **[Psi4](https://psicode.org)**: Open-source ab initio quantum chemistry package
- **[Forte](https://github.com/evangelistalab/forte)**: A Psi4 plugin focused on multireference methods

You are not expected to master all of these immediately.
However, you should be comfortable installing, compiling (if necessary), and running at least one major package.

---

## Visualization Tools

Visualization is an important skill.
Clear molecular figures and orbital plots are essential for communication.

- **[Avogadro](https://avogadro.cc)**: Molecular editor and visualizer
- **[VMD](https://www.ks.uiuc.edu/Research/vmd)**: Molecular visualization software
- **[PyMOL](https://pymol.org/2)**: Molecular graphics system (academic version available via Homebrew)
- **[Matplotlib](https://matplotlib.org)**: Python plotting library for publication-quality figures

---

## Reference Management

Choose one reference manager and learn to use it well:

- **[Zotero](https://www.zotero.org)**
- **[Mendeley](https://www.mendeley.com/download-reference-manager)**
- **[EndNote](https://endnote.com)**
- **[Papers](https://www.papersapp.com)**

Proper citation management will save you enormous time when writing papers.

---

## Writing and Publishing

- **[LaTeX (MacTeX / TeX Live)](https://www.latex-project.org/get)**:
  Required for professional scientific writing.

- **Adobe Illustrator** or **Inkscape**:
  For polishing vector graphics before publication.

---

## Final Remarks

Your computer is your primary research instrument.
Investing time early in learning these skills will dramatically accelerate your research progress.

You may also want to check the [awesome-mac](https://wangchujiang.com/awesome-mac/) list for other awesome macOS softwares.
