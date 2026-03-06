# Journal de bord - Julie et Sofian

## Répartition du travail

| Fichier | Auteur |
|---|---|
| index.html / index.css / index.js | Sofian |
| sports.html / sports.css / sports.js | Julie |
| pays.html / pays.css / pays.js | Julie et Sofian |
| style.css | Julie et Sofian |
| README.md | Sofian |

## Page d'acceuil (index.html, index.css, index.js)

- Sofian a travaillé sur ces fichiers.

Le body du fichier est séparé en plusieurs parties:

- La section "navbar" qui est la barre de navigation située en haut de page avec une classe "navbar" qui, dans le fichier style.css, a pour position la valeur "sticky" ce qui permet de la laisser constamment dans la vision du client. Cette section est liée au fichier style.css et non pays.css afin que les autres fichiers html puissent utiliser cette propriété. De plus, cette section utilise la propriété "flex" pour ajouter de la cohérence. Enfin, cette section rassemble les boutons "acceuil", "sports" et "pays" pour naviguer entre chaque page.

- La section "hero" qui est le "haut de page" de ce fichier. Il consiste à présenter très rapidement les JO d'hiver. Cette section a été la plus amusante à réaliser car je me suis aventuré dans des exemples de décorations CSS sur internet, selon moi, la première impression d'un site fait son tout. Sur le fichier index.css, la classe ".hero" m'a permi de réaliser un dégradé de couleur à l'aide des couleurs de base que j'ai placé à la racine (:root) sur style.css en utilisant la fonction "linear-gradient". De plus, j'ai pu réaliser une animation de chutes de flocons grâce à la propriété ".flocon" dans le fichier index.css, qui réalise des translations (mouvements) des flocons, ainsi qu'à l'aide des fonctions creerFlocon(); et afficherFlocons(); dans le fichier index.js dont on donne aux éléments créés la classe "flocon" pour que les mouvements se produisent. 

- La section "stats-bandeau" qui utilise le tableau "stats" dans index.js afin d'en faire une sorte de bandeau, séparé en flex (dans index.css -> .stats-bandeau) afin d'afficher les statistiques de ces JO.

- Les section "villes hôtes", "chiffres clés", "calendrier des épreuves" qui se ressemblent beaucoup, qui sont consituées d'un titre avec la classe "section-titre" et d'un contenu qui sont différents, mais la structure reste la même. Ces sections sont affichées grâce aux fonctions afficherVilles();, afficherChiffre(); et afficherCalendrier(); dans le fichier index.js.

- La section "formulaire" comme son nom l'indique consiste en un formulaire pouvant être rempli par le client. Je me suis beaucoup cassé la tête à le faire, je me suis beaucoup inspiré de certains exemples sur internet. 