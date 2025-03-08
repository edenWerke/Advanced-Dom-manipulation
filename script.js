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
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body )

// //this does not update it self when we manuplate the html
// //modern one we should this
// document.querySelector('.header')
// const allSection=document.querySelectorAll('.section')
// console.log(allSection)

// document.getElementById('section--1');
// //returns an html coolection called life collection means if the dom changes the html automatically changes

// const allButtons=document.getElementsByTagName('button')
// console.log(allButtons)


// console.log(document.getElementsByClassName('btn'))

// creating and inserting an element
// cool and we use most of the time
// .insertAdjacentHTML
// creates the dom element
const message=document.createElement('div');
message.classList.add('cookie-message')
//inserting a text
message.textContent="we use cookie for improved functionality and analytics"
console.log(message)
// inserting an html
message.innerHTML='we use cookie for improved functionality and analytics<button class="btn btn--close-cookie">GOT IT !</button>'
//inserting to our dom

//inserting as a first child
document.querySelector('.header').prepend(message)
// inserting a last child
document.querySelector('.header').append(message)