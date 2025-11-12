export const veryBadSplit = {
    id: 5,
    name: "Very Bad Split",
    date: "2025",
    repo: "https://github.com/BollSudo/A2-SAE-VeryBadSplit",
    summary:
        "TBD...",
    thumbnail: {
        type: "image",
        source: ""
    },
    context:
        "Dans le cadre du projet de semestre 4 du **BUT Informatique**, il nous a été demandé d’**améliorer un site existant de gestion de dépenses** pour des événements. Le site web devait intégrer des **fonctionnalités réactives** et **ergonomiques**, tout en respectant les **normes de sécurité** et de performance.\n",
    competences: [
        {
            title: "Audit et Sécurité",
            link: "",
            description: "Avant de pouvoir **améliorer la qualité du code** ou ajouter de nouvelles fonctionnalités, il a d’abord été nécessaire de **détecter les failles de sécurité** présentes dans l’application existante. Durant cette phase d’analyse, j’ai su **identifier les vulnérabilités** de l’application en proposant, pour chacune, un scénario d’exploitation, une évaluation du niveau de risque, ainsi qu’une solution pour les corriger.\n" +
                "\n" +
                "Parmi les failles mises en évidence figuraient notamment :\n" +
                "\n" +
                "- **Injections SQL**\n" +
                "- **Injections HTML et XSS**\n" +
                "- **Stockage de données sensibles** dans les *Cookies*\n" +
                "- **Stockage des mots de passe en clair** dans la base de données\n" +
                "- **Utilisation d’un algorithme de hachage déterministe** non sécurisé\n" +
                "- **Vulnérabilité CSRF**\n" +
                "- **Système de récupération de compte non sécurisé**\n" +
                "- **Anomalies de mise à jour** liées à un schéma non normalisé de la base de données\n"
        },
        {
            title: "Normalisation BD",
            link: "",
            description: "Afin d’éviter toutes **anomalies** de mise à jour et toute **redondance** liée aux données, il a été nécessaire de **normaliser la base de données**. La normalisation permet de justifier le passage d’un schéma non normalisé vers un schéma relationnel sain et conforme aux formes normales.\n" +
                "\n" +
                "J’ai procédé à décomposer la relation initiale afin de l’amener en **troisième forme normale (3NF)**, tout en veillant à ce que la transformation soit **sans perte de données** et **sans perte de dépendances fonctionnelles**. Pour ce faire, j’ai d’abord identifié les **dépendances fonctionnelles** à partir des **règles de gestion** spécifiques à l’application.\n" +
                "\n" +
                "La décomposition a été réalisée en s’appuyant sur le **théorème de Casey-Delobel**, garantissant la préservation de l’information. Enfin, j’ai **comparé les fermetures transitives** de la relation initiale et de la relation normalisée afin de vérifier l’absence de toute perte de dépendances fonctionnelles."
        },
        {
            title: "Amélioration des fonctionnalités",
            link: "",
            description: "Cette phase met en avant les différentes **améliorations** et fonctionnalités que j’ai développées au cours du projet. J’ai amélioré le **système de routage** en intégrant celui basé sur les **attributs** de *Symfony*. J’ai également **réfactré le code** afin d’alléger la responsabilité des contrôleurs, en introduisant des **services** initialisés via un **conteneur de dépendances**, configuré avec un fichier *.yaml* et tirant parti du **branchement automatique** (autowiring) de *Symfony*.\n" +
                "\n" +
                "J’ai ensuite pu tester l’application en implémentant des **tests unitaires** garantissant une **couverture** fonctionnelle satisfaisante du système. J’ai renforcé la **sécurité du code** en empêchant les injections SQL via l’utilisation de *requêtes préparées*, en améliorant la validation des formulaires côté serveur, et en introduisant un système d’authentification plus robuste.\n" +
                "\n" +
                "L’**ergonomie de l’application** a également été optimisée grâce à l’ajout de fonctionnalités *JavaScript*. Je me suis notamment penché sur l’utilisation d’une **bibliothèque réactive personnalisée** pour améliorer l’expérience utilisateur."
        },
    ],
    technologies: ["HTML 5", "CSS 3", "JavaScript", "PHP", "Docker"],
    tags: [],
    links: [],
    assets_dir: "/assets/projects/veryBadSplit/",
    logo: "",
    gallery: {
        name: "image",
        dir: "gallery/",
        content_begin: [{title: "UI Page Event", src: "pageEventTri.png"},{title: "Auth via 'clean' route", src: "routeTri.png"},{title: "UI Page Profile", src: "pageCompteTri.png"},],
        content_end: [{title: "Structure MVCS du Projet", src: "structTri.png"},{title: "Fichier de configuration du conteneur de dépendances (avec autowiring)", src: "autowire.png"},{title: "Liste des routes", src: "routesTri.png"},]
    },
    contributors: ["Milwenn F", "Nathan Raphaël L.", "Julien R."],
}