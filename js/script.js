const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.cross-icon');
const showMoreMenu = document.querySelector('#show-more-menu');
const showProductMenu = document.querySelector('#show-product-menu');
hamburgerIcon.addEventListener('click' , function(){
    hamburMenu.classList.add('show-hamburger-menu');
} ) ;
hamburMenu.addEventListener("click", function(){
    hamburMenu.classList.remove('show-hamburger-menu' );
}) ;
showMoreMenu.addEventListener('mouseenter', function(e){
    const ul = e.target.childNodes[5];
    ul.style.animation = 'showUp 0.35s 1';
    ul.style.display = 'Block';
});
showMoreMenu.addEventListener('mouseleave' , function(e){
    const ul= e.target.childNodes[5];
    ul.style.display = 'none';
});
showProductMenu.addEventListener('mouseenter', function(e){
    const div = e.target.childNodes[5];
    div.style.animation = 'showUp 0.35s 1';
    div.style.display = 'flex';
});
showProductMenu.addEventListener('mouseleave', function(e){
    const div = e.target.childNodes[5];
    div.style.display= 'none';
});