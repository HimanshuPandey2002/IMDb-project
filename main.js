const moviesContainer = document.querySelector('.movies');
const moviesSection = document.querySelectorAll('.movies .movies-section');
const movies = document.querySelector('.movies-section');
const btn = document.querySelectorAll('.btn');
const MenuIcon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('.dropdown-container');
const fullPage = document.querySelector('.full-page');
const close = document.querySelector('.close');


for(let i = 0; i<moviesSection.length; i++){
    moviesSection[i].addEventListener('mouseenter', function(){
        btn[i].classList.add('display');
    });
    
    moviesSection[i].addEventListener('mouseleave', function(){
        btn[i].classList.remove('display');
    });
}

MenuIcon.addEventListener('click', ()=>{
    dropdown.style.display = 'block';
    fullPage.style.display = 'none';
    dropdown.classList.add('anim1');
    dropdown.classList.remove('anim');
});

close.addEventListener('click', ()=>{
    dropdown.style.display = 'none';
    fullPage.style.display = 'block';
    fullPage.classList.add('anim');
    dropdown.classList.remove('anim1');
});