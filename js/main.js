header = document.getElementById("r-header");
navbrand = document.getElementById("r-nav-brand");
section0 = document.getElementById("r-section0");
logo0 = document.getElementById("r-se0-logo");
mcaption0 = document.getElementById("r-se0-mcaption");
section1 = document.getElementById("r-section1");
title1 = document.getElementById("r-se1-title");
quote1 = document.getElementById("r-se1-quote");
quote1t = document.getElementById("r-se1-quote-t");
title2 = document.getElementById("r-se2-title");
icon2 = document.getElementsByClassName("r-se2-icon");
card2t = document.getElementsByClassName("r-se2-card-t");
title3 = document.getElementById("r-se3-title");
cards3 = document.getElementById("r-se3-cards");
collect3 = document.getElementById("r-se3-collect");

window.onload = function () {
    // if(document.body.scrollTop < 650 || document.documentElement.scrollTop < 650){
        scrollFunction();
    // }
    // else if(document.body.scrollTop < 1250 || document.documentElement.scrollTop < 1250){
    //     scrollFunction_65();
    // }
};
window.onscroll = function () {
        scrollFunction();
};

function scrollFunction() {
    // Head Section
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
    
    // Section 1
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
            title1.style.fontSize = "4rem";
            quote1.style.fontSize = "150%";
            quote1t.style.whiteSpace = "normal";
            section1.style.paddingBottom = "0px";
    }else{
        title1.style.fontSize = "2rem";
        quote1.style.fontSize = "100%";
        quote1t.style.whiteSpace = "nowrap";
        section1.style.paddingBottom = "100px";
    }
    
    // Section 2
    if ((document.body.scrollTop > 750 && document.body.scrollTop < 950) 
        || (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 950)){
            title2.style.fontSize = "4rem";
            for(var i = 0; i < 3; i++) {
                icon2[i].style.fontSize = "4rem";
                icon2[i].style.display = "block";
                card2t[i].style.fontSize = "2rem";
            }
    }else{
        title2.style.fontSize = "2rem";
        for(var i = 0; i < 3; i++) {
            icon2[i].style.fontSize = "2rem";
            icon2[i].style.display = "inline";
            card2t[i].style.fontSize = "1.5rem";
        }
    }

    // Section 3
    if ((document.body.scrollTop > 1100 && document.body.scrollTop < 1370) 
        || (document.documentElement.scrollTop > 1100 && document.documentElement.scrollTop < 1370)){
            title3.style.fontSize = "4rem";
            document.body.style.backgroundColor = "black";
            cards3.style.height = "70vh";
            cards3.style.opacity = "1";
            cards3.style.visibility = "visible";
            collect3.style.color = "white";
            collect3.style.fontSize = "2rem";
    }else{
        title3.style.fontSize = "2rem";
        document.body.style.backgroundColor = "white";
        cards3.style.height = "60vh";
        cards3.style.opacity = "0";
        cards3.style.visibility = "hidden";
        collect3.style.color = "black";
        collect3.style.fontSize = "1.5rem";
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