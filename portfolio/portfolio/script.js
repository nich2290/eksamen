window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    //registre klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        //menuen er nu skjult - ændr menuknap til lll
    } else {
        document.querySelector("#menuknap").textContent = "✖";
    }

}
