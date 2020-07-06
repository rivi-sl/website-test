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
subtitle3card1 = document.getElementById("r-se3-subtitle-card-1");
subtitle3card2 = document.getElementById("r-se3-subtitle-card-2");
subtitle3card3 = document.getElementById("r-se3-subtitle-card-3");
title4 = document.getElementById("r-se4-title");
cards4 = document.getElementById("r-se4-cards");
collect4 = document.getElementById("r-se4-collect");

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
    //section3
    if ((document.body.scrollTop > 1200 && document.body.scrollTop < 1500) 
        || (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1500)){
            title3.style.fontSize = "4rem";
            subtitle3card1.style.fontSize = "3rem";
            subtitle3card2.style.fontSize = "3rem";
            subtitle3card3.style.fontSize = "3rem";
    }else{
            title3.style.fontSize = "2rem";
            subtitle3card1.style.fontSize = "1.5rem";
            subtitle3card2.style.fontSize = "1.5rem";
            subtitle3card3.style.fontSize = "1.5rem";
    }

    // Section 4
    if ((document.body.scrollTop > 1600 && document.body.scrollTop < 1970) 
        || (document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop < 1970)){
            title4.style.fontSize = "4rem";
            document.body.style.backgroundColor = "black";
            cards4.style.height = "70vh";
            cards4.style.opacity = "1";
            cards4.style.visibility = "visible";
            collect4.style.color = "white";
            collect4.style.fontSize = "2rem";
    }else{
        title4.style.fontSize = "2rem";
        document.body.style.backgroundColor = "white";
        cards4.style.height = "60vh";
        cards4.style.opacity = "0";
        cards4.style.visibility = "hidden";
        collect4.style.color = "black";
        collect4.style.fontSize = "1.5rem";
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

//chatbot
let bot = new RiveScript();

const brains = [
    './chatbot/brain.rive'
 // another brain
 ];
 bot.loadFile(brains).then(botReady).catch(botNotReady);

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');
form.addEventListener('submit', (e) => {
 e.preventDefault();
 selfReply(input_box.value);
 input_box.value = '';
});
function botReply(message){
 message_container.innerHTML += `<span class="bot">${message}</span>`;
 location.href = '#edge';
}
function selfReply(message){
 message_container.innerHTML += `<span class="self">${message}</span>`;
 location.href = '#edge';
 
 bot.reply("local-user", message).then(function(reply) {
 botReply(reply);
 });
}
function botReady(){
 bot.sortReplies();
 botReply('Hello, can I help you?');
}
function botNotReady(err){
 console.log("An error has occurred.", err);
}
//chat bot tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
//chatbot toggle
function bottoggle() {
    var x = document.getElementById("bottoggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
