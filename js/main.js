header = document.getElementById("r-header");
navbrand = document.getElementById("r-nav-brand");
logo0 = document.getElementById("r-logo0");
section0 = document.getElementById("r-section0");
mcaption0 = document.getElementById("r-mcaption0");
section1 = document.getElementById("r-section1");
title0 = document.getElementById("r-title0");
quote0 = document.getElementById("r-quote0");
quote0text = document.getElementById("r-quote0-text");
title2 = document.getElementById("r-title2");
icon2 = document.getElementsByClassName("r-icon2");
cardt2 = document.getElementsByClassName("r-cardt2");

window.onload = function () {
    // if(document.body.scrollTop < 650 || document.documentElement.scrollTop < 650){
        scrollFunction();
    // }
    // else if(document.body.scrollTop < 1250 || document.documentElement.scrollTop < 1250){
    //     scrollFunction_65();
    // }
};
window.onscroll = function () {
    // if(document.body.scrollTop < 650 || document.documentElement.scrollTop < 650){
        scrollFunction();
    // }
    // else if(document.body.scrollTop < 1250 || document.documentElement.scrollTop > 1250){
    //     scrollFunction_65();
    // }
};

function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "#BF0005";
        header.style.paddingTop = "10px";
        header.style.paddingBottom = "10px";
        navbrand.style.fontSize = "180%";
        logo0.style.width = "6%";
        logo0.style.left = "2%";
        logo0.style.bottom = "4%";
        section0.style.clipPath = "ellipse(170% 80% at 30% 28%)";
        mcaption0.style.fontSize = "350%";
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
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        logo0.style.backgroundColor = "#000";
        logo0.style.borderRadius = "10%";
        logo0.style.padding = "10px";
        mcaption0.style.fontSize = "200%";
    }else{
        logo0.style.backgroundColor = "#0000";
        logo0.style.borderRadius = "0%";
        logo0.style.padding = "0";
    }

    if ((document.body.scrollTop > 350 && document.body.scrollTop < 620) 
        || (document.documentElement.scrollTop > 350 && document.documentElement.scrollTop < 620)){
            title0.style.fontSize = "4rem";
            quote0.style.fontSize = "150%";
            quote0text.style.whiteSpace = "normal";
            section1.style.paddingBottom = "0px";
    }else{
        title0.style.fontSize = "2rem";
        quote0.style.fontSize = "100%";
        quote0text.style.whiteSpace = "nowrap";
        section1.style.paddingBottom = "100px";
    }
    
    if ((document.body.scrollTop > 650 && document.body.scrollTop < 950) 
        || (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 950)){
            title2.style.fontSize = "4rem";
            for(var i = 0; i < 3; i++) {
                icon2[i].style.fontSize = "4rem";
                icon2[i].style.display = "block";
                cardt2[i].style.fontSize = "2rem";
            }
    }else{
        title2.style.fontSize = "2rem";
        for(var i = 0; i < 3; i++) {
            icon2[i].style.fontSize = "2rem";
            icon2[i].style.display = "inline";
            cardt2[i].style.fontSize = "1.5rem";
        }
    }
}

function showDescription(id){
    if ((document.body.scrollTop > 650 && document.body.scrollTop < 950) 
        || (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 950)){
            document.getElementById(id).style.visibility = "visible";
            document.getElementById(id).style.opacity = "1";
    }
}
function hideDescription(id){
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.opacity = "0";
}

var typed = new Typed('.typeWriter', {
    strings: ["Things We Missed!", "We Never Updated?", "RiVi", "Time for the Change", "It's not only a Software Company", "But More..."],
    loop: true,
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 3000,
});