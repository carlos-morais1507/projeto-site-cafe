var menu = document.querySelector(".menu_cel");
let click_menu = false;

function menu_cel(){
    if(click_menu){
        menu.classList.add("none");
        click_menu = false;
    } else {
        menu.classList.remove("none");
        click_menu = true;
    }
}