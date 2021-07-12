let img1;
let img2;
let img3;
let valueImg1 = "";
let valueImg2 = "";
let valueImg3 = "";

function imgRandom1() {
    let r = Math.floor(Math.random() * 5)

    if (r == 0) {
        img1 = document.getElementById("1").src = "imgs/nobita 1.png";
        valueImg1 = "1";
    } else if (r == 1) {
        img1 = document.getElementById("1").src = "imgs/xuka 1.png";
        valueImg1 = "2";
    } else if (r == 2) {
        img1 = document.getElementById("1").src = "imgs/chaien 1.png";
        valueImg1 = "3";
    } else if (r == 3) {
        img1 = document.getElementById("1").src = "imgs/xeko 1.png";
        valueImg1 = "4";
    } else {
        img1 = document.getElementById("1").src = "imgs/doremon 1.png";
        valueImg1 = "5";
    }

    if (valueImg1 === valueImg2 && valueImg1 === valueImg3) {
        document.getElementById("ok").style.border = "5px solid green";
    } else {
        document.getElementById("ok").style.border = "1px solid black";
    }
}

function imgRandom2() {
    let r = Math.floor(Math.random() * 5);
    if (r == 0) {
        img2 = document.getElementById("2").src = "imgs/nobita 2.png";
        valueImg2 = "1";
    } else if (r == 1) {
        img2 = document.getElementById("2").src = "imgs/xuka 2.png";
        valueImg2 = "2";
    } else if (r == 2) {
        img2 = document.getElementById("2").src = "imgs/chaien 2.png";
        valueImg2 = "3";
    } else if (r == 3) {
        img2 = document.getElementById("2").src = "imgs/xeko 2.png";
        valueImg2 = "4";
    } else {
        img2 = document.getElementById("2").src = "imgs/doremon 2.png";
        valueImg2 = "5";
    }

    if (valueImg1 === valueImg2 && valueImg1 === valueImg3) {
        document.getElementById("ok").style.border = "5px solid green";
    } else {
        document.getElementById("ok").style.border = "1px solid black";
    }
}

function imgRandom3() {
    let r = Math.floor(Math.random() * 5);
    if (r == 0) {
        img3 = document.getElementById("3").src = "imgs/nobita 3.png";
        valueImg3 = "1";
    } else if (r == 1) {
        img3 = document.getElementById("3").src = "imgs/xuka 3.png";
        valueImg3 = "2";
    } else if (r == 2) {
        img3 = document.getElementById("3").src = "imgs/chaien 3.png";
        valueImg3 = "3";
    } else if (r == 3) {
        img3 = document.getElementById("3").src = "imgs/xeko 3.png";
        valueImg3 = "4";
    } else {
        img3 = document.getElementById("3").src = "imgs/doremon 3.png";
        valueImg3 = "5";
    }

    if (valueImg1 === valueImg2 && valueImg1 === valueImg3) {
        document.getElementById("ok").style.border = "5px solid green";
    } else {
        document.getElementById("ok").style.border = "1px solid black";
    }

}
