let profilPageContainer = document.getElementById("profilContainer");
let projetPageContainer = document.getElementById("projetContainer");
let certifPageContainer = document.getElementById("certifContainer");
let couleurPageContainer = document.getElementById("couleurContainer");

let btsPageContainer = document.getElementById("btsContainer");
let veillePageContainer = document.getElementById("veilleContainer");
let entreprisePageContainer = document.getElementById("entrepriseContainer");

let introPage = document.getElementById("intro-page-demarrage");
let accPageContainer = document.getElementById("acc-container");

let navBarText = document.getElementsByClassName('navBarText');
let navBarTextSub = document.getElementsByClassName('navBarTextSub');



let showPageDelay = 600;
let showPageDelay2 = 2000;

window.addEventListener('load', function () {
    hidePageIntro(introPage);
});

function accPage() { // ACCEUIL

    // Hide les pages
    hidePage(projetPageContainer);
    hidePage(profilPageContainer);
    hidePage(certifPageContainer);
    hidePage(btsPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    setTimeout(function () {
        whitedNavbarText();
    }, 100);
}

function profilPage() { // PROFIL

    // Hide les pages
    hidePage(projetPageContainer);
    hidePage(certifPageContainer);
    hidePage(btsPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    // Affiche la page demandé
    setTimeout(function () {
        console.log("Profil");
        showPage(profilPageContainer);
    }, showPageDelay);
}

function projetPage() { // PROJET

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(certifPageContainer);
    hidePage(btsPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    // Affiche la page demandé
    setTimeout(function () {
        showPage(projetPageContainer);
    }, showPageDelay);
}

function certifPage() { // CERTIFICATION

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(projetPageContainer);
    hidePage(btsPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    // Affiche la page demandé
    setTimeout(function () {
        showPage(certifPageContainer);
    }, showPageDelay);
}

function btsPage() { // BTS

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(projetPageContainer);
    hidePage(certifPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    // Affiche la page demandé
    setTimeout(function () {
        // console.log("BTS");
        showPage(btsPageContainer);
    }, showPageDelay);
}

function veillePage() { // VEILLE

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(certifPageContainer);
    hidePage(projetPageContainer);
    hidePage(couleurPageContainer);

    hidePage(entreprisePageContainer);
    
    // Affiche la page demandé
    setTimeout(function () {
        showPage(veillePageContainer);
    }, showPageDelay);

    setTimeout(function () {
        blackedNavbarText();
    }, 800);
}

function entreprisePage() { // ENTREPRISE

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(certifPageContainer);
    hidePage(projetPageContainer);
    hidePage(couleurPageContainer);

    hidePage(veillePageContainer);
    
    // Affiche la page demandé
    setTimeout(function () {
        showPage(entreprisePageContainer);
    }, showPageDelay);

    setTimeout(function () {
        blackedNavbarText();
    }, 800);
}

function couleurPage() { // COULEUR MANAGER

    // Hide les pages
    hidePage(profilPageContainer);
    hidePage(projetPageContainer);
    hidePage(certifPageContainer);
    hidePage(btsPageContainer);

    hidePage(veillePageContainer);
    hidePage(entreprisePageContainer);

    // Affiche la page demandé
    setTimeout(function () {
        showPage(couleurPageContainer);
    }, showPageDelay);
}

function hidePage(pageContainer) {
    // pageContainer.classList.remove("fade-in");
    // pageContainer.classList.add("fade-out");
    pageContainer.style.opacity = "0";

    setTimeout(function () {
        pageContainer.style.display = "none";
    }, 500);
}

function hidePageIntro(pageContainer) {
    // pageContainer.classList.add("fade-out");
    pageContainer.style.opacity = "0";

    setTimeout(function () {
        pageContainer.style.display = "none";
        // pageContainer.style.zIndex = "-1";
    }, 1500);
}

function showPage(pageContainer) {
    pageContainer.style.display = "flex";
    setTimeout(function () {
        // pageContainer.classList.remove("fade-out");
        // pageContainer.classList.add("fade-in");
        pageContainer.style.opacity = "1";
    }, 10);
}

function blackedNavbarText() {
    for (let i = 0; i < navBarText.length; i++) {
        navBarText[i].style.color = '#000';
        navBarText[i].style.opacity = '0';
    }
    for (let j = 0; j < navBarTextSub.length; j++) {
        navBarTextSub[j].style.opacity = '0';
    }
}

function whitedNavbarText() {
    for (let i = 0; i < navBarText.length; i++) {
        navBarText[i].style.color = '#FFF';
        navBarText[i].style.opacity = '1';
    }
    for (let j = 0; j < navBarTextSub.length; j++) {
        navBarTextSub[j].style.opacity = '0.2';
    }
}



// function showPageNavBar(pageContainer) {
//     pageContainer.style.display = "flex";
//     pageContainer.style.opacity = "0";
//     setTimeout(function () {
//         pageContainer.style.transition = "opacity 2s";
//         pageContainer.style.opacity = "1";
//     }, 10);
// }
