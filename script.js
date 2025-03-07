'use strict';

///////////////////////////////////////
// Modal window
console.log('hello world')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//how dom works behind the scene
// every single node is node
// there are differnt types node 
// elemnt type,tect,type comment type and node type
//inhiretance
// child node can acsess parent node 
//document that we use in dom manuplation is another type of dom node
// special node type called event target thank to inheritance bwcause ue can call add event listenrt on every node type in the dom api
//SELECTING
// the entire html
console.log(document.documentElement)
console.log(document.head)
console.log(document.body )


document.querySelector('.header')
const allSection=document.querySelectorAll('.section')
console.log(allSection)