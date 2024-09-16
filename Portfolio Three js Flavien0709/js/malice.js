const btnContainer = document.getElementById('btnM-container');
const scoreDiv = document.getElementById('score');
let lastPosition = { x: 0, y: 0 }; // Stockage last pos
let resetTimeout;
var score = 0;
var scoreScaling = 1;

btnContainer.addEventListener('mouseenter', () => {

    score += 1;
    scoreScaling += 0.1;
    scoreDiv.style.scale = scoreScaling;
    scoreDiv.textContent = score;

    clearTimeout(resetTimeout); // Annule le timer de reset

    //hauteur de l'ecran -150 px pour pas que ca depasse
    const min = -window.innerHeight + 150;
    const max = 0;
    let x, y, distance;

    do {
        x = Math.floor(Math.random() * (max - min + 1)) + min;
        y = Math.floor(Math.random() * (max - min + 1)) + min;

        // Nouvel position du btn > 250px de la derniere position
        distance = Math.sqrt(Math.pow(x - lastPosition.x, 2) + Math.pow(y - lastPosition.y, 2));
    } while (distance < 250);

    // Peux pas aller a + de -200 dans un sens si l'autre est pas a - de -200
    if (x > -200 && y > -200) {
        if (Math.random() < 0.5) {
            x = Math.floor(Math.random() * (-200 - min + 1)) + min;
        } else {
            y = Math.floor(Math.random() * (-200 - min + 1)) + min;
        }
    }

    const minR = 30;
    const maxR = 360;

    let rotationRad = 0;
    if (doRotate() === 1) {
        rotationRad = Math.floor(Math.random() * (maxR - minR + 1)) + minR;
    }

    // Changement de position + rota if ca rota
    btnContainer.style.transform = `translate(${x}px, ${y}px) rotate(${rotationRad}deg)`;

    // MAJ last position
    lastPosition = { x, y };

    // Redémarre le timer
    resetTimeout = setTimeout(() => {
        btnContainer.style.transform = 'translate(0, 0) rotate(0deg)'; // Reset position du container
        lastPosition = { x: 0, y: 0 }; // Reset de last pos

        score = 0; //reset du score pour le vIdEo GaMiNg
        scoreDiv.textContent = ""; // reset l'affichage du score
        scoreScaling = 1; // reset var scaling
        scoreDiv.style.scale = scoreScaling; //reset scaling

    }, 1500); // 1.5 sec

    function doRotate() {
        return Math.random() < 0.70 ? 1 : 0;
    }

});

