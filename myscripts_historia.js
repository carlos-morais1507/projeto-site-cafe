    function slider(){
    let img_index = 1;
    document.getElementById("radio1").checked = true;

    setInterval(function() {
        frente();
    }, 4000)

    function frente(){
    if(img_index === 5){
        img_index = 1;
    }  else {
        img_index++;
    }
    document.getElementById("radio"+img_index).checked = true;
    }
}

function independencia(){
    const d = new Date();
    const dia = d.getDate();
    const mes = d.getMonth() + 1;


    const check = true;
    
    if(dia === 7 && mes === 9){
        document.querySelector(".cont_esp").classList.remove("oculto");
        document.querySelector("body").style.backgroundColor = "#f4ee85";
        document.querySelector(".cont_h").style["color"] = "#396B47";
        document.querySelector("header").style.backgroundColor = "#396B47"
    }
}

let click = false;
document.querySelector(".menu_lateral_icone").addEventListener("click", () => {
    if(click){
        document.querySelector(".menu_lateral_historia").classList.remove("amostra");
        click = false;
    } else {
        document.querySelector(".menu_lateral_historia").classList.add("amostra");
        click = true;
    }
})

independencia();
slider();
