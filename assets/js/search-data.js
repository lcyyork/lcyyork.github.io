// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-members",
              title: "members",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/";
              },
            },{id: "dropdown-gallery",
              title: "gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/";
              },
            },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-installing-psi4-and-forte",
        
          title: "installing Psi4 and Forte",
        
        description: "a step-by-step guide to installing Psi4 and Forte",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/forte/";
          
        },
      },{id: "post-setting-up-wsl2",
        
          title: "setting up WSL2",
        
        description: "a step-by-step guide to installing WSL2 on Windows 11 Home Edition",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/wsl2/";
          
        },
      },{id: "post-cluster-witout-internet-connection",
        
          title: "cluster witout internet connection",
        
        description: "setting up cluster 18: SSH tunneling, CentOS 7 vault fix, and environment modules installation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ssh-tunnel/";
          
        },
      },{id: "post-installing-centos-6-on-a-cluster-node",
        
          title: "installing CentOS 6 on a cluster node",
        
        description: "installing CentOS 6 on computing nodes (cluster 10/11)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/centos6/";
          
        },
      },{id: "post-writing-scientific-papers",
        
          title: "writing scientific papers",
        
        description: "basic skills for writing scientific papers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/writing-papers/";
          
        },
      },{id: "post-tutorials-for-quantum-chemistry",
        
          title: "tutorials for quantum chemistry",
        
        description: "notes and programming projects for learning quantum chemistry",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/basic-qc/";
          
        },
      },{id: "post-setting-up-your-development-environment",
        
          title: "setting up your development environment",
        
        description: "setting up a Linux or macOS system for quantum chemistry research",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/setup-environment/";
          
        },
      },{id: "post-getting-started",
        
          title: "getting started",
        
        description: "basic computer skills for quantum chemists",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/basics/";
          
        },
      },{id: "books-the-configuration-interaction-method-advances-in-highly-correlated-approaches",
          title: 'The Configuration Interaction Method: Advances in Highly Correlated Approaches',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/AdvQuantumChem_Sherrill1999/";
            },},{id: "books-group-theory-and-chemistry",
          title: 'Group Theory and Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Bishop/";
            },},{id: "books-chemical-applications-of-group-theory",
          title: 'Chemical Applications of Group Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Cotton/";
            },},{id: "books-molecular-electronic-structure-theory",
          title: 'Molecular Electronic-Structure Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Helgaker/";
            },},{id: "books-second-quantization-based-methods-in-quantum-chemistry",
          title: 'Second Quantization-Based Methods in Quantum Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/JorgensenSimons/";
            },},{id: "books-quantum-chemistry",
          title: 'Quantum Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Levine/";
            },},{id: "books-atomic-many-body-theory",
          title: 'Atomic Many-Body Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/LindgrenMorrison/";
            },},{id: "books-an-introduction-to-coupled-cluster-theory-for-computational-chemists",
          title: 'An Introduction to Coupled Cluster Theory for Computational Chemists',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/RevComputChem_Crawford2000/";
            },},{id: "books-modern-quantum-mechanics",
          title: 'Modern Quantum Mechanics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Sakurai/";
            },},{id: "books-writing-science",
          title: 'Writing Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Schimel/";
            },},{id: "books-principles-of-quantum-mechanics",
          title: 'Principles of Quantum Mechanics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Shankar/";
            },},{id: "books-many-body-methods-in-chemistry-and-physics",
          title: 'Many-Body Methods in Chemistry and Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ShavittBartlett/";
            },},{id: "books-the-elements-of-style",
          title: 'The Elements of Style',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/StrunkWhite/";
            },},{id: "books-modern-quantum-chemistry",
          title: 'Modern Quantum Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/SzaboOstlund/";
            },},{id: "books-a-manual-for-writers-of-research-papers-theses-and-dissertations",
          title: 'A Manual for Writers of Research Papers, Theses, and Dissertations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Turabian/";
            },},{id: "books-fundamentals-of-matrix-computations",
          title: 'Fundamentals of Matrix Computations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Watkins/";
            },},{id: "news-york-presented-applications-of-dsrg-to-exchange-couplings-at-the-physical-chemistry-seminar-of-westlake-university-many-thanks-to-professor-bing-gu-for-the-kind-invitation-sparkles",
          title: 'York presented applications of DSRG to exchange couplings at the Physical Chemistry Seminar...',
          description: "",
          section: "News",},{id: "news-first-group-meeting-of-spring-2026-mar-2",
          title: 'First Group Meeting of Spring 2026 (Mar. 2)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-happy-chinese-new-year-may-the-year-of-the-horse-racehorse-bring-you-strength-energy-and-success-in-all-your-endeavors",
          title: 'Happy Chinese New Year! May the Year of the Horse :racehorse: bring you...',
          description: "",
          section: "News",},{id: "news-congratulations-to-ziyu-on-her-paper-being-accepted-in-inorganic-chemistry-tada-tada-tada",
          title: 'Congratulations to Ziyu on her paper being accepted in Inorganic Chemistry! :tada::tada::tada:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%79%61%6E%67.%6C%69@%62%6E%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Chenyang-Li-36/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lHAtER0AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0059-4174", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chenyang-li-bb074241", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
