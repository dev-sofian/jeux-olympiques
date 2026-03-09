const sports = [{
        photo: "https://www.lequipe.fr/_medias/img-photo-jpg/camille-rast-vise-un-premier-succes-en-geant-en-coupe-du-monde-c-pallot-zoom/1500000002351212/0:0,2000:1333-1200-800-75/a4300.jpg",
        nom: "Ski alpin",
        description: "Le ski alpin est un ensemble de disciplines du ski qui se pratiquent dans un contexte de loisirs (ski de piste ou hors-piste) ou de compétition (slalom, slalom géant, super géant, descente et duel). C'est un sport olympique depuis 1936, les premiers championnats du monde remontent à 1931 et la Coupe du monde est née en 1967. Toutes ces compétitions se déroulent sous l'égide de la Fédération internationale de ski. La dénomination « alpin » permet de faire la distinction entre les principales familles de pratique du ski : le ski alpin, le ski de randonnée et le ski nordique. Elle est par ailleurs souvent utilisée pour désigner le ski de piste, qui n'en est qu'une composante. "
    },
    {
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Biathlon_-_Mosses_-_3.jpg/500px-Biathlon_-_Mosses_-_3.jpg",
        nom: "Biathlon",
        description: "Le biathlon est une épreuve sportive combinant deux disciplines. Par coutume, quand on parle du biathlon, on évoque ce sport d'hiver qui associe le ski de fond au tir à la carabine. D'origine militaire, il combine ainsi l'endurance nécessaire au ski de fond et le calme et l'adresse nécessaires au tir. La maîtrise de ces deux disciplines pourtant antagonistes est le principe même du biathlon, sport olympique depuis les Jeux de Squaw Valley en 1960. Les pratiquants de ce sport sont appelés biathlètes."
    
    },
    {
		photo: "https://www.assurance-prevention.fr/wp-content/uploads/2024/12/404-hockey-glace_5.jpg",
        nom: "Hockey",
        description: "Le hockey sur glace, appelé le plus souvent hockey, est un sport d’équipe qui se joue sur une patinoire spécialement aménagée. L’objectif de chaque équipe est de marquer des buts en envoyant un disque de caoutchouc vulcanisé, appelé rondelle ou palet, à l’intérieur du but adverse situé à une extrémité de la patinoire. L’équipe se compose de plusieurs lignes de cinq joueurs, qui se relaient sur la glace, ainsi que d'un gardien de but. Les joueurs se déplacent en patins à glace et manipulent la rondelle à l’aide d’un bâton de hockey également appelé crosse en France ou canne de hockey en Belgique et en Suisse.Le hockey est originaire du Canada et s’est développé à la fin du XIXe siècle en Amérique du Nord. Sport de vitesse, il est souvent qualifié de « sport collectif le plus rapide du monde », mais c’est aussi un sport de contact, voire violent, avec ses mises en échec parfois dangereuses."
    },
	{
        photo: "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/vqys54onceefbza1qu9p",
        nom: "Snowboard",
        description: "Le snowboard, surf des neiges, planche à neige au Canada francophone ou plus rarement planche de neige en Europe, est un sport de glisse sur neige. L'équipement se compose d'une planche, de fixations dont il existe plusieurs types, et de bottes adaptées. La position sur la planche est proche de celle du skateur : de profil, les pieds posés sur la planche, l'un derrière l'autre. Les adeptes de ce sport sont appelés planchistes au Québec, nivoplanchistes en France ou snowboardeurs par anglicisme."
    },
	{
        photo: "https://www.nbc.com/sites/nbcblog/files/2026/01/gettyimages-2250317604.jpg",
        nom: "Patinage artistique",
        description: "Le patinage artistique est un sport et une discipline artistique exécutés sur la glace, synthétique, artificielle ou naturelle qui développent les qualités physiques et la sensibilité artistique. Il se pratique individuellement ou en duo avec des patins à glace. Ce sport est particulièrement populaire en Amérique du Nord, en Europe et en Asie, notamment au Japon. Le patinage artistique est une activité en perpétuelle évolution. Il s'agit pour les patineurs et patineuses de faire des sauts (simples, doubles, triples) des pirouettes, en suivant un thème musical choisi soit par le patineur, soit par son entraîneur"
    },


];

function afficherSports() {
    const liste = document.getElementById("sportsListe");
    calendrier.forEach(e => {
        const item = document.createElement("div");
        item.className = "sports-item";
        item.innerHTML = `
            <div><img class="cellule-photo"src=${e.photo}</img></div>
            <div class="sports-info">
                <strong>${e.nom}</strong>
                <span>${e.description}</span>
            </div>
        `;
        liste.appendChild(item);
    });
}

afficherSports();
