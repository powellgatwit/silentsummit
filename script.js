var wrapper = document.querySelector('.upper-container svg');

var year = new Date().getFullYear;

function draw() {
    wrapper.classList.add('active');
}

function show(section) {
    //clear current showing
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("publishing").style.display = "none";
    document.getElementById("labs").style.display = "none";
    document.getElementById(section).style.display = "inline";
}

//function to print year in copyright notice
function copydate() {
    document.getElementById("copyyear").innerHTML = new Date().getFullYear();
}

window.onload = copydate();