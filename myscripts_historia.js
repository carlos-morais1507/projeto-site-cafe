carrossel_img = document.querySelector(".carrossel_img");
let img_selector = 1;

function frente(){
    if (img_selector === 4){
        img_selector = 1;
    } else {
        img_selector ++;
    }
    carrossel();
    console.log(img_selector);
}

setInterval(frente, 1000);

document.querySelector(".ant_img").addEventListener("click", () => {
    if (img_selector === 1){
        img_selector = 4;
    } else {
        img_selector --;
    }
    console.log(img_selector);
    carrossel();
})

document.querySelector(".prox_img").addEventListener("click", () => {
    if (img_selector === 4){
        img_selector = 1;
    } else {
        img_selector ++;
    }
    carrossel();
})


function carrossel(){
    switch (img_selector) {
        case 1:
            carrossel_img.src = "assets/historia/image_1.png";
            break;
        case 2:
            carrossel_img.src = "assets/historia/image_2.png";
            break;
        case 3:
            carrossel_img.src = "assets/historia/image_3.jpeg";
            break;
        case 4:
            carrossel_img.src = "assets/historia/image_4.jpg";
            break;                       
    }
}

carrossel();