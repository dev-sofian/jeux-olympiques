const pays = [
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg", nom: "Norvège", athletes: 80, medailles: 41 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", nom: "Allemagne", athletes: 189, medailles: 26 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg", nom: "Autriche", athletes: 117, medailles: 18 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg", nom: "États-Unis", athletes: 235, medailles: 33 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg", nom: "Canada", athletes: 211, medailles: 21 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", nom: "France", athletes: 162, medailles: 23 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg", nom: "Suède", athletes: 110, medailles: 18 },
    { drapeau: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", nom: "Italie", athletes: 195, medailles: 30 }
];

function afficherPays() {
    const liste = document.getElementById("paysListe");
    const maxAthletes = Math.max(...pays.map(p => p.athletes));
    pays.forEach(e => {
        const item = document.createElement("tr");
        item.className = "pays-liste"
        const pct = (e.athletes / maxAthletes) * 100;
        item.innerHTML = `
            <td class="cellule-drapeau"><img src="${e.drapeau}" alt="${e.nom}"></td>
            <td class="cellule-nom">${e.nom}</td>
            <td>
                <span class="athletes-nombre">${e.athletes}</span>
            </td>
            <td class="medailles-or">🥇 ${e.medailles}</td>
        `;
        liste.appendChild(item);
    });
}

afficherPays();