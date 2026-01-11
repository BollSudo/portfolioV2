
export const wakatimeDataURL =
    {
        languages: "https://raw.githubusercontent.com/bollsudo/bollsudo/main/data/wakatime/langs.json"
    }

export const aboutMe =
    {
        name: "Boll",
        lastname: "Master",
        description: ["Hi! Je suis actuellement étudiant en 3e année de BUT Informatique à l'IUT de Montpellier. J’entreprends une spécialité dans le développement d’application en suivant le parcours Réalisation d'Applications, Conception, Développement et Validation (RACDV).", "Ma passion consiste à allier mon intérêt pour les systèmes physiques avec mes compétences en informatique. J’ai découvert l’informatique en développant des scripts Python permettant de visualiser des systèmes physiques simples, comme des pendules simples ou doubles, ou encore des systèmes à N corps. Progressivement, je me suis spécialisé dans les systèmes informatiques, que j’aime déconstruire et analyser pour en comprendre en profondeur le fonctionnement. C’est pourquoi, dans chacun de mes projets, je m’assure de bien maîtriser les systèmes et composants sur lesquels je travaille, afin de produire un code propre, robuste et de qualité.", "Minutieux, j'aime aussi m'assurer que les applications que je développe soit agréable et ergonomique tout en assurant leurs fonctionnalités. Plongé dans l'informatique, je ne me lasse jamais à découvrir de nouvelles technologies ou de nouveaux langages. Mes dernières découvertes passionnantes étant React et Three.js.", "En ce qui concerne mes études, je compte terminer ma formation et poursuivre mes études en école d'ingénieur ou en Master. En-dehors des études, je suis un aficionado du badminton et du volley ! Je m'intéresse constamment aux dernières nouveautés technologiques, à l'espace et la culture japonaise. 💻🪐🌸🏸🏐"],
        quote: "Dopest quote ever"
    }

export const socials = {
    github: "https://github.com/BollSudo",
    linkedin: "https://www.linkedin.com/in/renaudj/",
    mail: "mailto:julien.renaud1212@gmail.com",
    wakatime: "https://wakatime.com/@Boll",
    cv: "/pdf/CV.pdf"
}

export const zodiacs = ["aquarius", "aries", "cancer", "capricorn", "gemini", "leo", "libra", "pisces", "sagittarius", "scorpio", "taurus", "virgo"]

export const navLinks = [
    {
        id: "about",
        title: "Me",
    },
    {
        id: "carrier",
        title: "Parcours",
    },
    {
        id: "projects",
        title: "Projets",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        // icon: web,
    },
    {
        title: "React Native Developer",
        // icon: mobile,
    },
    {
        title: "Backend Developer",
        // icon: backend,
    },
    {
        title: "Content Creator",
        // icon: creator,
    },
];

const technologies = [
    { name : "Bootstrap", icon: "bootstrap.svg", wakaName: "Bootstrap" },
    { name : "CSS 3", icon: "css3.svg", wakaName: "CSS" },
    { name : "Docker", icon: "docker.png", wakaName: "Docker" },
    { name : "HTML 5", icon: "html5.svg", wakaName: "HTML" },
    { name : "Java", icon: "java.png", wakaName: "Java" },
    { name : "JavaFx", icon: "javafx.png", wakaName: "---" },
    { name : "JavaScript", icon: "js.png", wakaName: "JavaScript" },
    { name : "n8n", icon: "n8n.png", wakaName: "---" },
    { name : "Node JS", icon: "nodejs.svg", wakaName: "---" },
    { name : "PHP", icon: "php.svg", wakaName: "PHP" },
    { name : "Python", icon: "python.png", wakaName: "Python" },
    { name : "React JS", icon: "react.png", wakaName: "JavaScript" },
    { name : "Sass", icon: "sass.png", wakaName: "Sass" },
    { name : "Symfony", icon: "symfony.png", wakaName: "PHP" },
    { name : "Tailwind CSS", icon: "tailwind.png", wakaName: "CSS" },
    { name : "Three JS", icon: "threejs.png", wakaName: "JavaScript" },
    { name : "Vue JS", icon: "vue.png", wakaName: "JavaScript" },
    { name : "C#", icon: "csharp.svg", wakaName: "C#"},
    { name : "Godot", icon: "godot.svg", wakaName: "Godot Resource"},
    { name : "Postgres", icon: "postgresql.svg", wakaName: "SQL"},
    { name : "Scala", icon: "scala.svg", wakaName: "Scala"},
]

const experiences = [
    {
        id: 1,
        title: "IUT Montpellier-Sète",
        company_name: "IUT Montpellier-Sète",
        icon: "/assets/logos/company/iutms.png",
        iconBg: "rgb(255,255,255)",
        date: "2023 - 2026",
        points: [
            "Diplôme de BUT en Informatique avec spécialisation en Réalisation d'applications, conception, développement et validation (RACDV)"
        ],
        animation: "bow",
    },
    {
        id: 2,
        title: "Développeur logiciel Python",
        company_name: "CIRAD",
        icon: "/assets/logos/company/cirad.png",
        iconBg: "rgb(156,255,160)",
        date: "Janvier 2025 - Avril 2025",
        points: [
            "Conception et réalisation d'une application de bureau en Python pour soutenir le développement d'un jeu sérieux hybride 'Course contre la mouche'",
            "Collaboration avec une équipe pluridisciplinaire et des chercheurs en agronomie",
            "Mise en place d'une interface utilisateur graphique avec Tkinter",
            "Implémentation d'un système de localisation et de génération de données à des fins de recherche",
        ],
        animation: "nod",
    },
    {
        id: 3,
        title: "Université de Montpellier",
        company_name: "Université de Montpellier",
        icon: "/assets/logos/company/um.png",
        iconBg: "rgb(255,141,144)",
        date: "2020 - 2023",
        points: ["Licence Physique Fondamentale"],
        animation: "code",
    },
    {
        id: 4,
        title: "Lycée Louis-Antoine de Bougainville",
        company_name: "Lycée Louis-Antoine de Bougainville",
        icon: "/assets/logos/company/lfb.png",
        iconBg: "rgb(253,225,169)",
        date: "",
        points: [
            "BAC Scientifique S-SVT spécialité Mathématiques"
        ],
        animation: "texting",
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

export { services, technologies, experiences, testimonials };