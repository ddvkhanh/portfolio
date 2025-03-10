export const contacts = [
    {
        contact: "LinkedIn",
        icon: "devicon-linkedin-plain",
        url: "https://www.linkedin.com/in/ddvkhanh/"
    },
    {
        contact: "GitHub",
        icon: "devicon-github-original",
        url: "https://github.com/ddvkhanh"
    },
]


export const skills = [
    {
        title: "Programming Languages",
        skill: [
            {
                name: "C#",
                icon:
                    "devicon-csharp-plain",
            },
            {
                name: "Java",
                icon:
                    "devicon-java-plain",
            },
            {
                name: "JavaScript",
                icon:
                    "devicon-javascript-plain",
            },
            {
                name: "Angular",
                icon:
                    "devicon-angular-plain",
            },
            {
                name: "React",
                icon:
                    "devicon-react-original",
            },
            {
                name: "Typescript",
                icon:
                    "devicon-typescript-plain",
            },
            {
                name: "CSS",
                icon:
                    "devicon-css3-plain",
            },
            {
                name: "SCSS",
                icon:
                    "devicon-sass-plain",
            },
            {
                name: "HTML",
                icon:
                    "devicon-html5-plain",
            },
        ],

    },
    {
        title: "Framework and Tools",
        skill: [
            {
                name: ".NET Core",
                icon:
                    "devicon-dotnetcore-plain",
            },
            {
                name: "Docker",
                icon:
                    "devicon-docker-plain",
            },
            {
                name: "NextJs",
                icon:
                    "devicon-nextjs-original-wordmark",
            },
            {
                name: "Node.js",
                icon:
                    "devicon-nodejs-plain",
            },
            {
                name: "Express.js",
                icon:
                    "devicon-express-original",
            },
            {
                name: "SpringBoot",
                icon:
                    "devicon-spring-original",
            },
            {
                name: "Swagger",
                icon:
                    "devicon-swagger-plain",
            },
            {
                name: "Git",
                icon:
                    "devicon-git-plain",
            },
        ]
    },

    {
        title: "Database and Clouds",
        skill: [
            {
                name: "AWS",
                icon:
                    "devicon-amazonwebservices-plain-wordmark",
            },
            {
                name: "Azure",
                icon:
                    "devicon-azuredevops-plain",
            },
            {
                name: "Firebase",
                icon:
                    "devicon-firebase-plain",
            },
            {
                name: "MSSQL",
                icon:
                    "devicon-microsoftsqlserver-plain",
            },
            {
                name: "MongoDB",
                icon:
                    "devicon-mongodb-plain",
            },
            {
                name: "MySQL",
                icon:
                    "devicon-mysql-original",
            },
        ]
    },
    {
        title: "Agile (Scrum)",
        skill: [
            {
                name: "Jira",
                icon:
                    "devicon-jira-plain",
            },
            {
                name: "Confluence",
                icon:
                    "devicon-confluence-plain",
            },
        ]
    },
];

export const experiences = [
    {
        id: 0,
        start: "Oct 2021",
        end: "current",
        title: "Software Engineer",
        company: "Telstra Health",
        description: [
            "Participated in the technical design and development of digital communication systems (SMS, Email).",
            "Delivered responsive, user-friendly web applications by contributing to front-end development.",
            "Led data migration efforts by implementing table triggers, stored procedures, and background tasks to validate, categorize, and ingest data, enabling smooth transfers and accurate business logic execution.",
            "Resolved complex integration issues related to HL7, OCR, and FHIR, facilitating seamless data exchange and system interoperability.",
            "Regularly maintained and upgraded key software dependencies, improving security, performance, and compatibility.",
            "Identified and resolved vulnerabilities uncovered through Penetration testing and Coverity scanning, achieving compliance with CWE security standards.",
            "Troubleshot production incidents, delivering impact analysis, remediation scripts, and permanent fixes to uphold system stability.",
            "Collaborated with testers, product owners, developers, while mentoring new team members to maintain high quality deliverables."

        ],
        logo: "/images/telstra-health-logo.svg",
        skills: [
            "Java",
            "SpringBoot",
            "MSSQL",
            "JavaScript",
            "jquery",
            "Angular",
            "React",
            "HTML",
            "CSS",
            "Postman",
            "Swagger",
            "Azure",
            "Jenkins"
        ],
        achievement: ""
    },
    {
        id: 1,
        start: "Oct 2020",
        end: "Nov 2020",
        title: "Web Development Intern",
        company: "Furo",
        description: [
            "Provided usability feedback on the web interface and implemented enhancements using React.js and supporting libraries, improving chart display and filtering.",
            "Collaborated daily with team members to streamline development workflows.",
            "Enhanced UI features using, delivering a more user - friendly experience.",
            "Refactored code to improve readability and efficiency."
        ],
        logo: "/images/furo-logo.png",
        skills: [
            "React",
            "MaterialUI",
            "AntDesign",
        ]
    },
    {
        id: 2,
        start: "Mar 2020 ",
        end: "Jun 2020",
        title: "Technical Developer Intern",
        company: "Digital Innovation Lab, Swinburne University of Technology",
        description: [
            "Proposed and implemented UI enhancements for a mobile application.",
            "Conducted performance testing to support further application development.",
            "Utilized project management skills and Agile methodology in product development.",
            "Developed and documented a web application for log measurements, which was utilized by the team in subsequent project phases."
        ],
        logo: "/images/swinburne-logo.jpg",
        skills: [
            "JavaScript",
            "Node.js",
            "AWS",
        ]
    },
];

export const education = [
    {
        institution: "Swinburne University",
        start: "2018",
        end: "2020",
        degree: "Master of Information Technology (Data Analytics)",
        achievement: [
            "GPA: 3.8/4",
            "Swinburne International Excellence Scholarship - Postgraduate"
        ],
        logo: "/images/swinburne-logo.jpg"
    },
    {
        institution: "RMIT University",
        start: "2014",
        end: "2017",
        degree: "Bachelor's in International Business ",
        achievement: [
            "GPA: 3.3/4",
            "RMIT University Vietnam Awards - 2014 Undergraduate Scholarship"
        ],
        logo: "/images/rmit-logo.jpg"
    },
];


export const certifications = [
    {
        institution: "AWS",
        year: "2024",
        name: "AWS Certified Developer - Associate",
    },
    {
        institution: "Microsoft",
        year: "2024",
        name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    },
    {
        institution: "Institute of Applied Technology NSW",
        year: "2024",
        name: "Data Security & Information Privacy ",
    },
    {
        institution: "SAFe",
        year: "2021",
        name: "Certified SAFe® 5 Agilist",
    },
];

export const projects = [
    {
        title: "Togo App",
        description: "This is my personal MEAN stack app for keeping track of places I want to explore in Australia. It also features a tab that helps me randomly decide which cuisine to try next.",
        demo: "https://togo-app-7b50c51a4f28.herokuapp.com/",
        github: "https://github.com/ddvkhanh/togo-app",
        thumbnail: "/images/togo-img.png",
        tech: [
            "Angular",
            "MongoDB",
            "Express.js",
            "Node.js",
            "Heroku",
            "Bootstrap"
        ]
    },
    {
        title: "Recipe Book",
        description: "Sign up and create your own recipe book to save all your favorite recipes along with the ingredients. You can also add those ingredients to your shopping list to make cooking easier!",
        demo: "https://angular-recipe-31e2b.web.app/",
        github: "https://github.com/ddvkhanh/angular-recipe-book",
        thumbnail: "/images/recipe-img.png",
        tech: [
            "Angular",
            "Bootstrap",
            "Node.js",
            "Firebase"
        ]
    },
    {
        title: "Todo List",
        description: "Front-end application to store list of todos.",
        demo: "https://todo-app-kdang.vercel.app/",
        github: "https://github.com/ddvkhanh/todo-app",
        thumbnail: "/images/todos.png",
        tech: [
            "React",
            "TailwindCSS"]
    },
    {
        title: "Tree E-commerce",
        description: "This was a university team project where we developed a shopping site for fire-retardant trees.",
        demo: "",
        github: "https://github.com/ddvkhanh/trees-ecommerce",
        thumbnail: "/images/greenery-guard-img.png",
        tech: [
            "React",
            "CSS"]
    },

];
