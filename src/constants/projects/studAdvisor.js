export const studAdvisor = {
    id: 2,
    priority: 7,
    name: "StudAdvisor",
    date: "2024",
    repo: "https://github.com/BollSudo/A2-SAE-PHP",
    summary:
        "",
    thumbnail: {
        type: "image",
        source: ""
    },
    context:
        "Dans le cadre du projet tuteuré du semestre trois de BUT Informatique, il nous a été demandé de développer un **site web dynamique, portable et sécurisé en PHP**. Ce site web devait répondre au besoin client du responsable d'études et avait pour objectif primaire de favoriser l'aide à la poursuite d'études des étudiants de BUT3. Le projet s'étend sur une durée d'environ quatre mois et s'est fait en équipe de cinq étudiants.",
    competences: [
        {
            title: "",
            link: "",
            description: "Le développement du site suivait une **architecture Modèle Vue Contrôleur (MVC)**, n'utilisait aucun framework et avait **_Composer_** comme gestionnaire de dépendances. Le site web interagit avec une **base de données _MariaDB_**. Le projet était accompagné d'une application de la **méthode AGILE SCRUM**. Il s'est déroulé en quatre sprints ou itérations (cycle de développement) d'au moins deux semaines pour lesquelles j'ai occupé le rôle de **SCRUM Master** durant les deux premières itérations. Ma fonction était de veiller à ce que l'équipe applique bien la méthode tout en initiant les rituels tels que les stand-ups meetings réguliers, la planification, les réunions d'affinage et les rétrospectives de fin de sprint. \n\n En parallèle, j'ai mobilisé mes compétences techniques pour développer des fonctionnalités clé. Parmi ces dernières, je me suis consacré au développement du **système d'importation des données** relatives aux dossiers des étudiants. J'ai également travaillé sur l'implémentation d'un **système de gestion d'agrégations de notes** permettant la génération automatisé des avis de poursuite d'études. Ces implémentations m'ont permis de solidifier mes bases techniques en PHP et SQL : d'une part, via l'implémentation de divers formulaires accompagnées d'une double vérification côté client et côté serveur ; d'autre part, via la **conception d'une base de données** robuste prête à accueillir des données tout en assurant leur sécurité et leur confidentialité. La qualité du code est étayée par l'application constante des principes fondamentaux de qualité de développement tels que **SOLID, DRY, et KISS**. Durant ce projet, j'ai appliqué trois grands patterns de conception justifiés, tels que **le Singleton, la Stratégie ou bien la Composite**. J'ai aussi mobilisé mes compétences à développer des interfaces utilisateur tout en respectant les **normes d'accessibilités et la responsivité**."
        }
    ],
    technologies: ["HTML 5", "CSS 3", "JavaScript", "PHP"],
    tags: [],
    links: [
        {
            label: "Lien du dépot git",
            url: "https://github.com/BollSudo/A2-SAE-PHP"
        },
    ],
    assets_dir: "/assets/projects/studAdvisor/",
    logo: "logo.png",
    gallery: {
        name: "image",
        dir: "gallery/",
        content_begin: [{title:"Page liste d'agrégations", src:"agreg.png"}, {title:"Formulaiire création d'agrégations", src:"agregform.png"}, {title:"Page dossier étudiant", src:"etudinfos.png"}],
        content_end: [{title:"Page importation", src:"importation.png"}, {title:"Authentification", src:"login.png"}, {title:"Diagramme de classes UML : Système d'agrégations", src:"modeleAgregation.png"}, {title:"Diagramme de classes UML : Système d'importation", src:"modeleImport.png"}]
    },
    contributors: ["Adam L.", "Bryan B.", "Julien R.", "Milwenn F.", "Nathan Raphaël L."],
}