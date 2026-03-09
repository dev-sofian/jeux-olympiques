function creerFlocon() {
    const flocon = document.createElement("div");
    flocon.className = "flocon";
    flocon.textContent = "❄";
    flocon.style.left = Math.random() * 100 + "vw";
    flocon.style.animationDuration = (Math.random() * 6 + 4) + "s";
    flocon.style.animationDelay = (Math.random() * 5) + "s";
    flocon.style.fontSize = (Math.random() * 1.2 + .6) + "rem";
    return flocon;
}

function afficherFlocons() {
    const conteneur = document.getElementById("flocons");
    for (let i = 0; i < 22; i++) {
        conteneur.appendChild(creerFlocon());
    }
}

afficherFlocons();