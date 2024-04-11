const jatekosPont = document.querySelector("#jatekosPont");
const botPont = document.querySelector("#botPont");
const dontetlenPont = document.querySelector("#dontetlen");
const gombok = document.querySelectorAll(".b2");
const ujraGomb = document.querySelector("#ujra");
const botKep = document.querySelector("#botKep");
const bejelento = document.querySelector("#bejelentes");
const sotetGomb = document.querySelector("#sotetGomb");
const stilusLink = document.querySelector("#css");
var sotetMod = false;
let jatekosValasz;
let botValasz;
let eredmeny;
var nyertErtek = 0;
var vesztettErtek = 0;
var dontetlenErtek = 0;

gombok.forEach(gomb => gomb.addEventListener("click", () => {
    jatekosValasz = gomb.name;
    gombok.forEach(gomb => gomb.disabled = true);
    console.log(jatekosValasz)
    bot()
    kiNyert()
    lap()

}))

ujraGomb.addEventListener("click", function() {
    ujJatek();
});

sotetGomb.addEventListener("click", function() {
    sotet();
});

function bot() {
    const randomSzam = Math.floor(Math.random() * 3) + 1;

    if (randomSzam == 1) {
        botValasz = "Rock"

    } else if (randomSzam == 2) {
        botValasz = "Paper"

    } else if (randomSzam == 3) {
        botValasz = "Scrissors"

    } 

    console.log(randomSzam);
    
    console.log(botValasz)
}

function kiNyert() {
    if (jatekosValasz == botValasz) {
        eredmeny = "Dontetlen";
        dontetlenErtek += 1;
    } else if (botValasz == "Rock") {
        if (jatekosValasz == "Paper") {
            eredmeny = "Nyert";
            nyertErtek += 1;
        } else if (jatekosValasz == "Scrissors") {
            eredmeny = "Vesztett";
            vesztettErtek += 1;
        }

    } else if (botValasz == "Paper") {
        if (jatekosValasz == "Scrissors") {
            eredmeny = "Nyert";
            nyertErtek += 1;
        } else if (jatekosValasz == "Rock") {
            eredmeny = "Vesztett";
            vesztettErtek += 1;
        }
        
    } else if (botValasz == "Scrissors") {
        if (jatekosValasz == "Rock") {
            eredmeny = "Nyert";
            nyertErtek += 1;
        } else if (jatekosValasz == "Paper") {
            eredmeny = "Vesztett";
            vesztettErtek += 1;
        }

    }

}

function ujJatek() {
    gombok.forEach(gomb => gomb.disabled = false);
    console.log("ujra")
    eredmeny = null;
    botKep.src = "";
    bejelento.textContent = "";

}

function sotet() {
    if (sotetMod == false) {
        stilusLink.href = "sotet.css"
        console.log("sotet");
        sotetMod = true;
    } else {
        stilusLink.href = "vilagos.css"
        console.log("vilagos");
        sotetMod = false;
    }
}

function lap() {
    if (botValasz == "Rock") {
        botKep.src = "Rock.png";
    } else if (botValasz == "Paper") {
        botKep.src = "Paper.png";
    } else if (botValasz == "Scrissors") {
        botKep.src = "Scrissors.png";
    }

    if (eredmeny == "Dontetlen") {
        bejelento.textContent = "Döntetlen!";
    } else if (eredmeny == "Nyert") {
        bejelento.textContent = "Nyertél!";
    } else if (eredmeny == "Vesztett") {
        bejelento.textContent = "Vesztettél!";
    }

    jatekosPont.textContent = "Nyert: " + nyertErtek;
    botPont.textContent = "Vesztett: " + vesztettErtek;
    dontetlenPont.textContent = "Döntetlen: " + dontetlenErtek;
}

