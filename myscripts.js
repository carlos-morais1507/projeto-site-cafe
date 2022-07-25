const d = new Date();
const dia_atual = d.getDate();
const desfocado = document.querySelector(".cont");
const invertido = document.querySelector(".calendario_btn");
const escondido_m = document.querySelector(".menu_cal");
const escondido_btn= document.querySelector(".cal_btn_2");
let clickado_b = false;
let clickado_i = false;
let clickado_n = false;

document.querySelector(".prev").addEventListener("click", () => {
    d.setMonth(d.getMonth() - 1);
    calendario();
})
document.querySelector(".next").addEventListener("click", () => {
    d.setMonth(d.getMonth() + 1);
    calendario();
})

function clicka(){
  desfoca_main();
  remove_botao_calendario();  
  mostra_menu();
}

function desfoca_main(){
    if(clickado_b){
        desfocado.classList.remove("blur");
        clickado_b = false;
    } else {
        desfocado.classList.add("blur");
        clickado_b = true;      
    }
}

function remove_botao_calendario(){
    if(clickado_i){
        invertido.classList.remove("removido");
        clickado_i = false;
    } else {
        invertido.classList.add("removido");
        clickado_i = true;
    }
}

function mostra_menu(){
    if(clickado_n){
        escondido_btn.classList.add("none");
        escondido_m.classList.add("none");
        clickado_n = false;
    } else {
        escondido_btn.classList.remove("none");
        escondido_m.classList.remove("none");
        clickado_n = true;
    }
}

function calcula_dias(){
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }
    
    let dia = new Date().getDate();
    let mes = 1 + d.getMonth();
    let ano = d.getFullYear();
    let qtd_dias = 0;
    let dia_cafe = 0;
    let dia_hoje = 0;
    let dias_faltam = 0;
    
    for(let i=1 ; i <= 4 ; i++){
        if(i === 4) {
            dia_cafe+= 14;
        } else {
            let dias = getDaysInMonth(ano, i);
            dia_cafe += dias;
        }
    }
    
    for(let j=1 ; j <= mes ; j++){
        if(j === mes){
            dia_hoje += dia;
        } else {
            dia_hoje += getDaysInMonth(ano, j);
        }
    }

    if(dia_hoje > dia_cafe){
        dias_faltam = 365 - dia_hoje + dia_cafe;
    } else {
        dias_faltam = dia_cafe - dia_atual;
    }

    document.querySelector(".contador").innerHTML = dias_faltam;
}

function calendario(){
    d.setDate(1);

    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
    "Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const dias_s = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    const primeirodia_s = d.getDay();
    const ultimodia_s = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDay();
    let data = dias_s[new Date().getDay()] + ", " + new Date().getDate() + " de " + meses[new Date().getMonth()] + " de " + 
    d.getFullYear();
    let dias_c = "";
    let dias_mes = document.querySelector(".dias");
    const diasnomes = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const prev_diasnomes = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
    const prox_diasnomes = 7 - ultimodia_s - 1;


    document.querySelector(".mes h1").innerHTML = meses[d.getMonth()];
    document.querySelector(".mes p").innerHTML = data;


    for(let i = primeirodia_s; i > 0; i--){
        dias_c += `<div class="prev-dia">${prev_diasnomes - i + 1}</div>`;
    }

    for(let j = 1; j <= diasnomes; j++){
        if(j === new Date().getDate() && d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear()){
            dias_c += `<div class="hoje">${j}</div>`;
        } else {
            dias_c += `<div>${j}</div>`;
        }
    }

    for(let k = 1; k <= prox_diasnomes; k++){
        dias_c += `<div class="prox-dia">${k}</div>`;
        dias_mes.innerHTML = dias_c;
    }
}




calendario();
calcula_dias();






