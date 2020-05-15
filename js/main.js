header = document.getElementById("r-header");
navbrand = document.getElementById("r-nav-brand");
logo0 = document.getElementById("r-logo0");
section0 = document.getElementById("r-section0");
mcaption0 = document.getElementById("r-mcaption0");

window.onload = function () {
    scrollFunction()
};
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "#BF0005";
        header.style.paddingTop = "10px";
        header.style.paddingBottom = "10px";
        navbrand.style.fontSize = "180%";
        logo0.style.width = "10%";
        logo0.style.left = "2%";
        logo0.style.bottom = "4%";
        section0.style.clipPath = "ellipse(170% 80% at 30% 28%)";
        mcaption0.style.fontSize = "300%";
        mcaption0.style.left = "15%";

    } else {
        header.style.backgroundColor = "#00000000";
        header.style.paddingTop = "30px";
        header.style.paddingBottom = "30px";
        navbrand.style.fontSize = "280%";
        logo0.style.width = "30%";
        logo0.style.left = "30%";
        logo0.style.bottom = "22%";
        section0.style.clipPath = "ellipse(90% 65% at 30% 28%)";
        mcaption0.style.fontSize = "130%";
        mcaption0.style.left = "35%";

    }
}

var typed = new Typed('.typeWriter', {
    strings: ["Things We Missed!", "We Never Updated?", "RiVi", "Time for the Change", "It's not only a Software Company", "But More..."],
    loop: true,
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 3000,
});