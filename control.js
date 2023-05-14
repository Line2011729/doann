


//-----------------------------den01----------------------------

var btnon = document.getElementById('btnon01');
var btnoff = document.getElementById('btnoff01');

btnon.onclick = function() {
    document.getElementById("den01").src = "./img/denon.png"

    database.ref("/room1").update({
        "light1" : 1
    });
}

btnoff.onclick = function() {
    document.getElementById("den01").src = "./img/denoff.png"

    database.ref("/room1").update({
        "light1" : 0
    });
}

//den02

var btnon1 = document.getElementById('btnon02');
var btnoff1 = document.getElementById('btnoff02');

btnon1.onclick = function() {
    document.getElementById("den02").src = "./img/denon.png"
}

btnoff1.onclick = function() {
    document.getElementById("den02").src = "./img/denoff.png"
}

//den03

var btnon2 = document.getElementById('btnon03');
var btnoff2 = document.getElementById('btnoff03');

btnon2.onclick = function() {
    document.getElementById("den03").src = "./img/denon.png"
}

btnoff2.onclick = function() {
    document.getElementById("den03").src = "./img/denoff.png"
}

//slider
let slider = document.getElementById("myRange")
let output = document.getElementById("value")
let quatchange = document.getElementById("quat01")


slider.oninput = function() {
    let giatri = slider.value;
    output.innerHTML = this.value
//quạt
    if(giatri >=31 && giatri <= 70){
        quatchange.setAttribute("src","./img/quatvang.png")
    }
    else if (giatri >= 71 && giatri <= 99) {
        quatchange.setAttribute("src","./img/quatxanhduong.png")
    }
    else if (giatri >= 100) {
        quatchange.setAttribute("src","./img/quaton.png")
    } 
    else {quatchange.setAttribute("src","./img/quatoff.png")}
}

slider.addEventListener("mousemove",function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(117,252,117)'+ x +'%, rgb(214,214,214)'+ x +'%)';
    slider.style.background = color;
})

//---------------------------------------------PHÒNG 2---------------------------//
 
//den12

var btnon21 = document.getElementById('btnon11');
var btnoff21 = document.getElementById('btnoff11');

btnon21.onclick = function() {
    document.getElementById("light1").src = "./img/denon.png"
}

btnoff21.onclick = function() {
    document.getElementById("light1").src = "./img/denoff.png"
}

//den02

var btnon22 = document.getElementById('btnon12');
var btnoff22 = document.getElementById('btnoff12');

btnon22.onclick = function() {
    document.getElementById("light2").src = "./img/denon.png"
}

btnoff22.onclick = function() {
    document.getElementById("light2").src = "./img/denoff.png"
}

//maylanh phong2

var btnon23 = document.getElementById('btnon13');
var btnoff23 = document.getElementById('btnoff13');

btnon23.onclick = function() {
    document.getElementById("lanh").src = "./img/miston.png"
}

btnoff23.onclick = function() {
    document.getElementById("lanh").src = "./img/mistoff.png"
}

//slider
let slider1 = document.getElementById("myRange2")
let output1 = document.getElementById("value2")
let quatchange1 = document.getElementById("fan2")


slider1.oninput = function() {
    let giatri1 = slider1.value;
    output1.innerHTML = this.value
//quạt
    if(giatri1 >=31 && giatri1 <= 70){
        quatchange1.setAttribute("src","./img/quatvang.png")
    }
    else if (giatri1 >= 71 && giatri1 <= 99) {
        quatchange1.setAttribute("src","./img/quatxanhduong.png")
    }
    else if (giatri1 >= 100) {
        quatchange1.setAttribute("src","./img/quaton.png")
    } 
    else {quatchange1.setAttribute("src","./img/quatoff.png")}
}

slider.addEventListener("mousemove",function() {
    var x1 = slider1.value;
    var color1 = 'linear-gradient(90deg, rgb(117,252,117)'+ x +'%, rgb(214,214,214)'+ x +'%)';
    slider1.style.background = color1;
})

//---------------------------------------------PHÒNG KHÁCH---------------------------//

var btnon31 = document.getElementById('btnon21');
var btnoff31 = document.getElementById('btnoff21');

btnon31.onclick = function() {
    document.getElementById("tivi").src = "./img/tvon.png"
}

btnoff31.onclick = function() {
    document.getElementById("tivi").src = "./img/tvoff.png"
}

//den02

var btnon32 = document.getElementById('btnon22');
var btnoff32 = document.getElementById('btnoff22');

btnon32.onclick = function() {
    document.getElementById("lightkhach").src = "./img/denon.png"
}

btnoff32.onclick = function() {
    document.getElementById("lightkhach").src = "./img/denoff.png"
}

//den03

var btnon33 = document.getElementById('btnon23');
var btnoff33 = document.getElementById('btnoff23');

btnon33.onclick = function() {
    document.getElementById("congrao").src = "./img/raomo.png"
}

btnoff33.onclick = function() {
    document.getElementById("congrao").src = "./img/raodong.png"
}