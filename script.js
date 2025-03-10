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
// document.querySelector('.header').prepend(message)
// inserting as a last child
// dom element is unique we can only have once
// document.querySelector('.header').append(message)

//before

// inserting the element before the header as a sibling
// document.querySelector('.header').before(message)
document.querySelector('.header').after(message)


//delete an element
// no need to select the message element because it is already saved
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   message.remove();
// // 
// });


// STYLES
// styles directly applied to the inline style
message.style.backgroundColor='#37383d'
message.style.width="120%"
console.log(message.style.height)
// all properties with its value
console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)
message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+20+'px'

document.documentElement.style.setProperty( '--color-primary', 'orangered')

//ATTRIBUTES
// reads only standard property like src,alt,className
const logo=document.querySelector('.nav__logo');
// absolute url
console.log(logo.src)
console.log(logo.alt)
console.log(logo.className)


logo.alt='Beatifull minimalist logo'
// for those that are not standards
console.log(logo.getAttribute('designer'))
logo.setAttribute('company','Bankist')
// relative url
console.log(logo.getAttribute('src'))
const links=document.querySelector('.twitter-link')
console.log(links.href);
console.log(links.getAttribute('href'))


//Data attributes

console.log(logo.dataset.versionNumber)
//CLass
// logo.classList.add('c','background-pink');
// logo.classList.remove('')
// logo.classList.toggle('')
// logo.classList.contains('')
// logo.className="jonas"

// smoth scroling
// const btnScrollTo=document.querySelector('.btn--scroll-to');
// const section1=document.querySelector("section--1");

// btnScrollTo.addEventListener('click',function(e){
//   const s1coords=sect
// })
// smotthe scrolling
const btnScrollTO=document.querySelector('.btn--scroll-to')
const section1=document.querySelector('#section--1');


btnScrollTO.addEventListener('click',function(e){
 const s1coords=section1.getBoundingClientRect();
 console.log(s1coords) 
 console.log(e.target.getBoundingClientRect())
})