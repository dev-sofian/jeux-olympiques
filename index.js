const stats = [
    { id: "stat-pays", chiffre: "92", label: "Pays participants" },
    { id: "stat-athletes", chiffre: "2 917", label: "Athlètes attendus" },
    { id: "stat-sports", chiffre: "16", label: "Sports au programme" },
    { id: "stat-epreuves", chiffre: "116", label: "Épreuves" },
    { id: "stat-jours", chiffre: "16", label: "Jours de compétition" }
];

const villes = [{
        nom: "Milan",
        couleur: "#E8F4FD",
        description: "Milan accueille les cérémonies d'ouverture et de clôture au stade San Siro, ainsi que les épreuves de patinage de vitesse et de hockey sur glace.",
        tags: ["Cérémonie d'ouverture", "Patinage de vitesse", "Hockey sur glace", "Curling"]
    },
    {
        nom: "Cortina d'Ampezzo",
        couleur: "#E8F8F0",
        description: "Située à 1 224 m d'altitude, Cortina est la ville du ski. Elle avait déjà accueilli les JO en 1956 et revient 70 ans plus tard.",
        tags: ["Ski alpin", "Biathlon", "Bobsleigh", "Luge", "Skeleton"]
    },
    {
        nom: "Valtellina",
        couleur: "#FEF9E7",
        description: "La vallée de Valtellina, au nord de Milan, offre des pentes idéales pour le ski de fond et le biathlon dans un environnement montagneux.",
        tags: ["Ski de fond", "Combiné nordique"]
    },
    {
        nom: "Livigno",
        couleur: "#F4ECF7",
        description: "Station de ski d'altitude à 1 800 m, Livigno accueille le snowboard et le ski acrobatique.",
        tags: ["Snowboard", "Ski acrobatique"]
    }
];

const chiffres = [
    { valeur: "14", desc: "Sites de compétition" },
    { valeur: "348", desc: "Médailles distribuées" },
    { valeur: "2,5 Mds", desc: "Téléspectateurs attendus" },
    { valeur: "-8°C", desc: "Température moyenne à Cortina" },
    { valeur: "70 ans", desc: "Depuis les derniers JO à Cortina" },
    { valeur: "1956", desc: "Dernière édition italienne" }
];

const calendrier = [
    { date: "6 Fév", titre: "Cérémonie d'ouverture", lieu: "Stade San Siro, Milan" },
    { date: "7 Fév", titre: "Premières épreuves", lieu: "Ski alpin & Biathlon" },
    { date: "8 Fév", titre: "Patinage artistique – Équipes", lieu: "Palais des sports, Milan" },
    { date: "11 Fév", titre: "Descente hommes", lieu: "Cortina d'Ampezzo" },
    { date: "14 Fév", titre: "Hockey sur glace – Phase de groupes", lieu: "Milan" },
    { date: "18 Fév", titre: "Snowboard – Half-pipe", lieu: "Livigno" },
    { date: "22 Fév", titre: "Cérémonie de clôture", lieu: "Milan" }
];

function afficherStats() {
    stats.forEach(s => {
        const el = document.getElementById(s.id);
        el.innerHTML = `
        <span class="stat-chiffre">${s.chiffre}</span>
        <span class="stat-label">${s.label}</span>
        `;
    });
}

function afficherVilles() {
    const grille = document.getElementById("villesGrille");
    villes.forEach(v => {
        const carte = document.createElement("div");
        carte.className = "ville-carte";
        const tagsHtml = v.tags.map(t => `<span class="ville-tag">${t}</span>`).join("");
        carte.innerHTML = `
            <div class="ville-couleur" style="background:${v.couleur}"></div>
            <div class="ville-corps">
                <h3>${v.nom}</h3>
                <p>${v.description}</p>
                <div class="ville-tags">${tagsHtml}</div>
            </div>
        `;
        grille.appendChild(carte);
    });
}

function afficherChiffres() {
    const grille = document.getElementById("chiffresGrille");
    chiffres.forEach(c => {
        const carte = document.createElement("div");
        carte.className = "chiffre-carte";
        carte.innerHTML = `
            <span class="chiffre-valeur">${c.valeur}</span>
            <span class="chiffre-desc">${c.desc}</span>
        `;
        grille.appendChild(carte);
    });
}

function afficherCalendrier() {
    const liste = document.getElementById("calendrierListe");
    calendrier.forEach(e => {
        const item = document.createElement("div");
        item.className = "calendrier-item";
        item.innerHTML = `
            <div class="calendrier-date">${e.date}</div>
            <div class="calendrier-info">
                <strong>${e.titre}</strong>
                <span>${e.lieu}</span>
            </div>
        `;
        liste.appendChild(item);
    });
}

function actionFormulaire() {
    const bouton = document.getElementById("boutonEnvoyer");
    bouton.addEventListener("click", function() {
        const prenom = document.getElementById("prenom").value.trim();
        const pays = document.getElementById("pays-favori").value;
        if (!prenom || !pays) {
            alert("Veuillez indiquer le prénom et le pays favori.");
            return;
        }
        const conf = document.getElementById("confirmation");
        conf.textContent = `Merci ${prenom} ! Tu mises sur ${pays} pour les JO de 2026 !`;
        conf.style.display = "block";
        bouton.disabled = true;
        bouton.style.opacity = ".5";
    });
}

afficherStats();
afficherVilles();
afficherChiffres();
afficherCalendrier();
actionFormulaire();