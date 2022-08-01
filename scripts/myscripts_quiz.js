function quiz_1() {
    document.querySelector(".radio1_1").style["color"] = "#6b3939";
    document.querySelector(".radio2_1").style["color"] = "#6b3939";
    document.querySelector(".radio3_1").style["color"] = "#148c35";
    document.querySelector(".radio4_1").style["color"] = "#6b3939";
}

function quiz_2() {
    document.querySelector(".radio1_2").style["color"] = "#6b3939";
    document.querySelector(".radio2_2").style["color"] = "#6b3939";
    document.querySelector(".radio3_2").style["color"] = "#6b3939";
    document.querySelector(".radio4_2").style["color"] = "#148c35";
}

function quiz_3() {
    document.querySelector(".radio1_3").style["color"] = "#6b3939";
    document.querySelector(".radio2_3").style["color"] = "#148c35";
    document.querySelector(".radio3_3").style["color"] = "#6b3939";
    document.querySelector(".radio4_3").style["color"] = "#6b3939";
}

function quiz_4() {
    document.querySelector(".radio1_4").style["color"] = "#148c35";
    document.querySelector(".radio2_4").style["color"] = "#6b3939";
    document.querySelector(".radio3_4").style["color"] = "#6b3939";
    document.querySelector(".radio4_4").style["color"] = "#6b3939";
}

function quiz_5() {
    document.querySelector(".radio1_5").style["color"] = "#6b3939";
    document.querySelector(".radio2_5").style["color"] = "#6b3939";
    document.querySelector(".radio3_5").style["color"] = "#148c35";
    document.querySelector(".radio4_5").style["color"] = "#6b3939";
}

function quiz_6() {
    document.querySelector(".radio1_6").style["color"] = "#6b3939";
    document.querySelector(".radio2_6").style["color"] = "#148c35";
    document.querySelector(".radio3_6").style["color"] = "#6b3939";
    document.querySelector(".radio4_6").style["color"] = "#6b3939";
}

function quiz_7() {
    document.querySelector(".radio1_7").style["color"] = "#6b3939";
    document.querySelector(".radio2_7").style["color"] = "#148c35";
    document.querySelector(".radio3_7").style["color"] = "#6b3939";
    document.querySelector(".radio4_7").style["color"] = "#6b3939";
}

function quiz_8() {
    document.querySelector(".radio1_8").style["color"] = "#6b3939";
    document.querySelector(".radio2_8").style["color"] = "#6b3939";
    document.querySelector(".radio3_8").style["color"] = "#148c35";
    document.querySelector(".radio4_8").style["color"] = "#6b3939";
}

function quiz_9() {
    document.querySelector(".radio1_9").style["color"] = "#148c35";
    document.querySelector(".radio2_9").style["color"] = "#6b3939";
    document.querySelector(".radio3_9").style["color"] = "#6b3939";
    document.querySelector(".radio4_9").style["color"] = "#6b3939";
}

function quiz_10() {
    document.querySelector(".radio1_10").style["color"] = "#148c35";
    document.querySelector(".radio2_10").style["color"] = "#6b3939";
    document.querySelector(".radio3_10").style["color"] = "#6b3939";
    document.querySelector(".radio4_10").style["color"] = "#6b3939";
}

var personagem = document.querySelector(".personagem");
var bloco = document.querySelector(".bloco");
var score = 0;
var morto = true;



var morte = setInterval(function(){
    var p_top = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    var b_left = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));


    if(b_left<40 && b_left > 0 && p_top >=125){
        alert("Você Perdeu! Sua pontuação foi de " + score + " pontos!")
        bloco.classList.remove("start");
        morto = true;
    }

}, 10);

var score_e_dif = setInterval(function(){
    if(morto === false){
        score++;
    }
}, 1000)


function pulo(){
    if(personagem.classList != "pular"){
        personagem.classList.add("pular");
    }
    setTimeout(function(){
        personagem.classList.remove("pular");    
    }, 500);
}

function start(){
    score = 0;
    bloco.classList.add("start");
    morto = false;
}

