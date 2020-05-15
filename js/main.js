header = document.getElementById("r-header");
logo0 = document.getElementById("r-logo0");
section0 = document.getElementById("r-section0");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "#BF0005";
    header.style.paddingTop = "10px";
    header.style.paddingBottom = "10px";
    logo0.style.width = "10%";
    logo0.style.left = "2%";
    logo0.style.bottom = "4%";
  } else {
    header.style.backgroundColor = "#00000000";
    header.style.paddingTop = "30px";
    header.style.paddingBottom = "30px";
    logo0.style.width = "30%";
    logo0.style.left = "30%";
    logo0.style.bottom = "22%";
    
  }
}