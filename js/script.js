// masukan element html ke dalam variabel
const navbar = document.getElementById('header-navigasi');
window.addEventListener('scroll',function(){
    if(window.scrollY > 1 ){
        navbar.classList.add('bayangan');
    } else{
        navbar.classList.remove('bayangan');
    }
});


const miniNav = document.getElementsByClassName('mini-navbar')[0];
const buttonNav = document.getElementById('button-nav');
buttonNav.onclick = showMiniNav;

function showMiniNav(){
    miniNav.classList.add('terlihat');
    
}


const buttonClose = document.getElementById('button-close');
buttonClose.onclick = closeMiniNav;

function closeMiniNav(){
    miniNav.classList.remove('terlihat');
}