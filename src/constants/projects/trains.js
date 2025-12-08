export const trains = {
    id: 3,
    priority: 8,
    name: "Trains",
    date: "2024",
    repo: "",
    summary:
        "",
    thumbnail: {
        type: "image",
        source: ""
    },
    context:
        "Dans le cadre d'un projet de trois mois de 1ère année de **BUT Informatique**, en binôme, nous avons développé une application de bureau en **Java** qui se présente sous la forme d'un exécutable. Cette application consiste en une version numérique d'un jeu de plateau nommé *Trains ©*. L'objectif de ce projet était d'**informatiser la mécanique** du jeu afin d'**implémenter une Interface Homme Machine (IHM) ergonomique** en passant par l'**exploration des algorithmes de graphes**. La structure du projet suit la convention **Maven**.",
    competences: [
        {
            title: "Mécanique du jeu",
            link: "https://github.com/BollSudo/A1-SAE-TRAINS-Mecanique",
            description: "Cette phase met en avant l’application de concepts de développement orienté objet et de qualité de développement. Ce projet a mis en avant mes capacités à diviser et à catégoriser le problème en plusieurs briques/classes propres à la programmation orientée objet. J'ai également su développer mes compétences techniques en appliquant divers concepts et principes de programmation, dont l’**héritage**, le principe **YAGNI** (« You Ain’t Gonna Need It »), le principe **KISS** (« Keep It Simple, Stupid »), le principe **DRY** (« Do not Repeat Yourself »), et la méthode de **développement par les tests** (TDD). Les tests étaient réalisés avec le **framework de test unitaire JUnit**."
        },
        {
            title: "Algos de graphes",
            link: "https://github.com/BollSudo/A1-SAE-TRAINS-Graphe",
            description: "Cette partie se focalise sur les algorithmes de graphe et l’implémentation d’un **graphe simple non orienté pondéré en POO à travers Java**, qui se décompose en deux objets : *Sommet* et *Graphe*.  \n" +
                "\n" +
                "Les algorithmes implémentés sont :\n" +
                "\n" +
                "- algorithme de **Dijkstra**  \n" +
                "- algorithme de la **coloration gloutonne**  \n" +
                "- algorithme de **recherche exhaustive** visant à trouver le nombre de sous-graphes complets d’ordre *k* ou *k*-clique dans un graphe  \n" +
                "- algorithme pour **lister les différentes classes de connexité** d’un graphe  \n" +
                "- algorithme de **recherche d’un isthme ou d’un cycle** dans un graphe  \n" +
                "- algorithmes d’**identification du type de graphe** (*chaîne*, *cycle*, *arbre*, *forêt*, *connexe*)  \n" +
                "\n" +
                "Par ailleurs, ces notions théoriques sont directement reliées au plateau du jeu perçu comme un graphe planaire. J'ai aussi appris à appliquer des concepts essentiels, comme les **Comparator**, **Iterator**, et **Collection**."
        },
        {
            title: "IHM JavaFX",
            link: "https://github.com/BollSudo/A1-SAE-TRAINS-IHM",
            description: "Le but de cette dernière est de donner vie à notre jeu, en implémentant une interface graphique ergonomique et fonctionnelle. Pour cela, nous avons utilisé la bibliothèque **JavaFX**, avec laquelle j'ai pu découvrir et appliquer les notions de **Binding**, **Binding haut niveau**, **Binding bas niveau**, **Binding bidirectionnel** et **observation des propriétés à travers les Listeners**. \n\n J'ai su également adopter la **division efficace du code**, en séparant la partie fonctionnelle et la gestion des événements dans les classes *Contrôleurs* associées, de la partie création graphique dans les fichiers *.fxml*, et le style dans les fichiers *.css*. \n\n Finalement, j'ai appris à **packager un projet sous Windows avec les outils JPackage et WiX** (*Windows Installer XML*) sous la forme d'un exécutable."
        }
    ],
    technologies: ["Java", "JavaFx"],
    tags: [],
    links: [],
    assets_dir: "/assets/projects/trains/",
    logo: "logo.png",
    gallery: {
        name: "image",
        dir: "gallery/",
        content_begin: [{title: "Menu IHM Trains", src: "trainsMenu.png"}, {title:"IHM Trains", src: "trainsIHM.png"}, {title: "Tableau de score IHM Trains", src: "scoreTrains.png"}],
        content_end: [{title:"Structure Projet Maven", src: "maven.png"}, {title:"Tests avec JUnit", src: "junit.png"}, {title:"Enum. sur les effets de cartes", src: "effets.png"}, {title:"Algo coloration gloutonne", src: "coloGloutonne.png"}, {title:"Bindings dans 'VueJoueurCourant'", src: "bindings.png"}, {title: "Executable TRAINS", src: "executable.png"}]
    },
    contributors: ["Alexandre D.", "Julien R."],
}