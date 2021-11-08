let iconoMenu = document.querySelector('#icono-menu');
let menu = document.querySelector('#menu');

eventos();
function eventos(){

}

iconoMenu.addEventListener('click', (e) => {
    if(menu.classList.contains('menu-show')){
        menu.classList.remove('menu-show');
    }else{
        menu.classList.add('menu-show');
    }
});