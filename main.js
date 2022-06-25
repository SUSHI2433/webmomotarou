'use strict'

{

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

const etoImages = document.querySelectorAll('.etoImage');

etoImages.forEach(etoImage=>{
etoImage.addEventListener('mouseover',()=>{
    etoImage.classList.add('hoverImage');
    const clickButton=document.createElement('p');
    clickButton.textContent='click';
    etoImage.appendChild(clickButton);
    etoImage.nextElementSibling.classList.add('hoverImage'); 
})})

etoImages.forEach(function(etoImage){
    etoImage.addEventListener('mouseout',()=>{
        etoImage.classList.remove('hoverImage');
        const clickButton1=document.querySelectorAll('p')[1];
        etoImage.removeChild(clickButton1);

    })})

open.addEventListener('click',()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
})
close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
})

}
// window.onload = function() {
//     alert("ページが読み込まれました！");
//   };
