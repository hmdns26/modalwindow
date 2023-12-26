'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
const closeModal =function(){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}
const openModal =function(){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}
for (let i = 0 ; i < btnOpen.length ; i++ ){
    btnOpen[i].addEventListener('click',openModal)
};
btnClose.addEventListener('click',closeModal);
overLay.addEventListener('click',closeModal)
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})