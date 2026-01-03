export const myAvatar = {
    id: 7,
    priority: 1,
    name: "MyAvatar",
    date: new Date(2025, 10, 0),
    repo: "",
    summary:
        "Un clone du service Gravatar.Ce service permet aux utilisateurs de gérer un avatar associé à leur adresse email, qui peut être utilisé sur divers sites web.",
    thumbnail: {
        type: "image",
        source: ""
    },
    context:
        "**MyAvatar** est une application web (server-side rendered) développée en environ deux mois avec le framework **Symfony** dans le cadre d'un projet de 3e année de BUT Informatique. L’objectif principal est de permettre aux utilisateurs de **gérer leur identité numérique** à travers un système avancé de **gestion d’avatars**. L’application propose un système d’**inscription et d’authentification sécurisée**. Une fois connecté, l’utilisateur accède à un espace personnel lui permettant de modifier ses informations, de gérer plusieurs avatars et de contrôler la **visibilité de son profil**. Un **panneau d’administration** est également intégré afin de permettre la gestion des utilisateurs, le paramétrage du site et la mise en maintenance de l’application. Le projet repose sur une architecture moderne intégrant une **API**, une base de données **PostgreSQL**, une infrastructure **Docker** pour le développement et un **pipeline CI/CD GitLab** assurant tests et déploiements automatisés.\n",
    competences: [
        {
            "title": "Système d'inscription et authentification sécurisée",
            "description": "Durant ce projet, je me suis occupé de développer un **système d'authentification sécurisée** en utilisant *Symfony*. Cette tâche m'a permis de mettre en pratique mes compétences en matière de sécurité avec les **services de sécurisation** proposées par *Symfony* (hashage, rôles, protection des routes...) et de modélisaiton de l'entité utilisateur avec **Doctrine ORM**. Elle m'a également permis de manipuler les formulaires et les **validations** côté serveur."
        },
        {
            "title": "Confidentialité, Internationalisation et Front",
            "description": "Je me suis également occupé de développer un système de **confidentialité** et de protection des données, en rendant le profil utilisateur **masquable** et en permettant la suppression définitive des données utilisateur. J'ai pu aussi mettre en place une **internationalisation** (i18n) pour permettre la traduction du site (côté serveur) en plusieurs langues. Quant au **front-end**, j'ai pu expérimenter avec le plugin *Daisy UI* de *Tailwind CSS*, qui permet de créer des interfaces utilisateur modernes et agréables. Je me suis occupé du design des formulaires, du **changement de thèmes** et de la page d'accueil."
        },
        {
            "title": "Maintenance et Tests",
            "description": "Le développement d'une application web moderne nécessite souvent des tâches de **maintenance**, de gestion des données et de **tests**. Pour cela, je me suis chargé de développer des **commandes Symfony** pour permettre la création et la suppression d'utilisateurs via CLI, ainsi que la gestion des rôles administrateur. Quant à la gestion des tests, j'ai pu mettre en place des **tests unitaires**, des tests d'intégration et des tests API pour assurer la qualité du code avec **PHPUnit**. Un **rapport de couverture** des tests est également généré pour une meilleure visualisation."
        },
    ],
    technologies: ["HTML 5", "CSS 3", "JavaScript", "PHP", "Docker", "Tailwind CSS", "Node JS", "Symfony"],
    tags: [],
    links: [],
    assets_dir: "/assets/projects/myAvatar/",
    logo: "logo.png",
    gallery: {
        name: "image",
        dir: "gallery/",
        content_begin: [{title: "Page d'accueil", src: "myAvatarHome.png"}, {title: "Page paramètre de langue du serveur", src: "myAvatarLocale.png"}, {title: "Page profil utilisateur", src: "myAvatarUI.png"}],
        content_end: [{title: "Page d'inscription (thème cupcake)", src: "myAvatarRegister.png"}, {title: "Exemple d'une commande Symfony en CLI", src: "myAvatarCLI.png"}, {title: "Couverte de ligne des tests", src: "myAvatarCoverage.png"}]
    },
    contributors: ["Julien R.", "Kilyan S.", "Matteo D.", "Milwenn F."],
}