window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector(".greybox").addEventListener("click", dropdown);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("menuknap").src = "Icons/Menu.svg";
    } else {
        document.getElementById("menuknap").src = "iconX/No.svg";
    }
}


const dropdownbox = document.querySelectorAll(".greybox");

dropdownbox.forEach(e => {

    e.addEventListener("click", dropdown);
})



function dropdown() {
    console.log("dropdown");
    for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].className == "dropdown hidden") {
            this.childNodes[i].className = "dropdown";


        } else if (this.childNodes[i].className == "dropdown") {
            this.childNodes[i].className = "dropdown hidden";

        } else if (this.childNodes[i].className == "linkikon") {
            this.childNodes[i].className = "linkikon rotate";

        } else if (this.childNodes[i].className == "linkikon rotate") {
            this.childNodes[i].className = "linkikon";

        }
    }

}
