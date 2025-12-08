export const cirad = {
    id: 4,
    priority: 3,
    name: "Race against the Fly",
    date: "2025",
    repo: "",
    summary:
        "TBD...",
    thumbnail: {
        type: "image",
        source: ""
    },
    context:
        "Dans le cadre de mon stage de deuxième année de **BUT Informatique**, j'ai réalisé un stage au sein du [CIRAD](https://www.cirad.fr/). Ma mission consistait à développer une **interface graphique ergonomique** en *Python* pour accueillir un **jeu sérieux hybride** nommé \"Course contre la mouche\", basé sur un modèle scientifique. En partant d’un script initialement codé en *R*, intégrant le modèle, j’ai assuré sa refactorisation en *Python*, ainsi que la conception de la mécanique du jeu et de l’interface graphique. L’application est déployable sous forme d’un **exécutable** compatible avec les trois principaux systèmes d’exploitation : *Windows*, *macOS* et *Linux*. \n\n L’objectif principal de cette mission était de **simplifier la saisie des données** issues d’une partie de jeu dans le modèle, afin de fluidifier les processus d’exploitation. Un second objectif était de rendre le jeu accessible à un public plus large en intégrant la **localisation** (multilingue) dans l’application. Celle-ci remplit une double fonction : être à la fois un **support pédagogique** pour sensibiliser les acteurs de la filière mangue à l’infestation par la mouche des fruits, et un **outil de recherche** permettant l’enregistrement et l’exploitation des données issues des sessions de jeu.",
    competences: [
        {
            title: "Mécanique du jeu",
            link: "",
            description: "La première partie du projet consiste à **réfactrer le code existant** du modèle sous *Python* afin de l'incorporer à la **mécanique du jeu**. Cette étape est précédée d’une phase de **conception**, qui consiste à modéliser les différentes entités du jeu et leurs relations à l’aide d’un *diagramme UML*, tout en respectant les **principes de conception orientée objet** tels que **SOLID**."
        },
        {
            title: "Interface Graphique",
            link: "",
            description: "La deuxième partie du projet consiste à concevoir et à mettre en place l’interface graphique du jeu au-dessus de la mécanique existante, à travers des **interfaces utilisateur**. L’objectif est de développer une **IHM ergonomique** facilitant la saisie des données par les animateurs. Cette phase inclut une étape de **prototypage** réalisée sur *Figma*, suivie de la conception de l’IHM, puis de son développement."
        },
        {
            title: "Tests et Packaging",
            link: "",
            description: "Le projet a été validé à l’aide de **tests unitaires** et de **tests fonctionnels**. Une **pipeline d’intégration et de déploiement continu** (*CI/CD*) a également été mise en place afin d’**automatiser les tests de régression** à chaque modification du code. Le **packaging** de l’application a été réalisé à l’aide du module *Nuitka* de *Python*, permettant ainsi d’assurer une **performance optimale** et une **compilation multiplateforme** sur *Windows*, *macOS* et *Linux*."
        }
    ],
    technologies: ["Python"],
    tags: [],
    links: [
        {
            label: "Rapport de stage",
            url: "/pdf/rpst.pdf"
        },
    ],
    assets_dir: "/assets/projects/cirad/",
    logo: "logo.ico",
    gallery: {
        name: "image",
        dir: "gallery/",
        content_begin: [],
        content_end: []
    },
    contributors: ["Julien R."],
}