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

Sofian a travaillé sur ces fichiers.

Le body du fichier est séparé en plusieurs parties:

- La section "navbar" qui est la barre de navigation située en haut de page avec une classe "navbar" qui, dans le fichier style.css, a pour position la valeur "sticky" ce qui permet de la laisser constamment dans la vision du client. Cette section est liée au fichier style.css et non pays.css afin que les autres fichiers html puissent utiliser cette propriété. De plus, cette section utilise la propriété "flex" pour ajouter de la cohérence. Enfin, cette section rassemble les boutons "acceuil", "sports" et "pays" pour naviguer entre chaque page.

- La section "hero" qui est le "haut de page" de ce fichier. Il consiste à présenter très rapidement les JO d'hiver. Cette section a été la plus amusante à réaliser car je me suis aventuré dans des exemples de décorations CSS sur internet, selon moi, la première impression d'un site fait son tout. Sur le fichier index.css, la classe ".hero" m'a permi de réaliser un dégradé de couleur à l'aide des couleurs de base que j'ai placé à la racine (:root) sur style.css en utilisant la fonction "linear-gradient". De plus, j'ai pu réaliser une animation de chutes de flocons grâce à la propriété ".flocon" dans le fichier index.css, qui réalise des translations (mouvements) des flocons, ainsi qu'à l'aide des fonctions creerFlocon(); et afficherFlocons(); dans le fichier hero.js dont on donne aux éléments créés la classe "flocon" pour que les mouvements se produisent. 

- La section "stats-bandeau" qui utilise le tableau "stats" dans index.js afin d'en faire une sorte de bandeau, séparé en flex (dans index.css -> .stats-bandeau) afin d'afficher les statistiques de ces JO.

- Les section "villes hôtes", "chiffres clés", "calendrier des épreuves" qui se ressemblent beaucoup, qui sont consituées d'un titre avec la classe "section-titre" et d'un contenu qui sont différents, mais la structure reste la même. Ces sections sont affichées grâce aux fonctions afficherVilles();, afficherChiffre(); et afficherCalendrier(); dans le fichier index.js. L'utilisation de la fonction css :hover est particulièrement bien choisie sur les sections "villes hôtes" et "calendrier" afin que la navigation avec le curseur est agréable avec des animations légères. 

- La section "formulaire" comme son nom l'indique consiste en un formulaire pouvant être rempli par le client. Je me suis beaucoup cassé la tête à le faire, je me suis beaucoup inspiré de certains exemples sur internet. 

- La section "footer"

## Les styles (style.css)

Julie et Sofian ont travaillé sur ce fichier.

- La "base" prend en compte trois éléments: :root {} qui définit les couleurs du site; le selecteur universel * {} qui réinitialise la marge et le padding; body {} qui définit les règles de base du corps.

## Page des sports (sports.html, sports.js, sports.css)
Julie a travaillé sur ces fichiers.

Le body du fichier est séparé en plusieurs parties:

-La section "navbar" qui a déjà été décrite

-la section"hero" qui a déjà été décrite

-La section "section-wrapper" qui est la partie principale de la page. Elle utilise le tableau "sports" dans sports.js pour pouvoir afficher chaque sport avec une photo, le nom et la présentation du sport. Le résultat est satisfaisant et j’ai apprécié faire cette partie plus que pour pays car le final me paraît plus abouti. En revanche, j’ai passé 1 heure à essayer de régler un problème qui n’existait pas car j’avais tout simplement oublier de lier le fichier sports.html et sports.js.
          
-Je n’ai pas grand-chose à dire sur sports.css et sports.js car j’ai surtout récupéré ce qui avait été utiliser sur le afficherCalendrier(); en changeant l’emplacement des éléments à l’intérieur et leur contenu puisque je souhaitais utiliser le même format. Ça ma permis de bien comprendre l’intérêt de chaque ligne et les impacts sur le résultat. Ainsi a été créé afficherSports(); qui utilise le tableau « sports » dans le même fichier sports.js contenant la photo, le nom et la description de chaque sport. Le fichier sports.css rend le tout agréable à regarder et donne un résultat propre et fini.

-La section "footer" qui permet d’afficher tout en bas de la page les prénoms des créateurs et le nom du projet. Il est le même pour chaque page.


## Page des pays (pays.html, pays.js, pays.css)
Julie et Sofian ont travaillé sur ces fichiers.
Le body du fichier est séparé en plusieurs parties:

-La section "navbar" qui a déjà été décrite

-La section "hero" qui a déjà été décrite également

-La section "footer" encore une fois déjà décrite auparavant.

-La section "section-wrapper" qui sert à afficher le tableau des pays avec leur drapeau, nom, nombre d’athlètes et nombre de médailles. Il s’agit d’un tableau simple avec un entête les données propres à chaque pays en dessous. Cette section est affichée grâce à afficherPays(); qui elle même utilise, de la même manière que "sports.js", un tableau comportant tout les éléments de afficherPays();. 

-Sofian s’est occupé du css pour cette page.
