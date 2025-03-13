'use strict';
const btnScrollTO = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
console.log('hello world');
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
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTO.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //getting the box size of th button
  console.log(e.target.getBoundingClientRect());
  //  getting the offset or current position
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // height and width of the view port
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //SCROLLING
  //  window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset)
  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset,
  //   top:s1coords.top+window.pageYOffset,
  //   behavior:'smooth'
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('my link ');

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
//event delegation

//1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //mayching stratagy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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
// const message=document.createElement('div');
// message.classList.add('cookie-message')
// //inserting a text
// message.textContent="we use cookie for improved functionality and analytics"
// console.log(message)
// // inserting an html
// message.innerHTML='we use cookie for improved functionality and analytics<button class="btn btn--close-cookie">GOT IT !</button>'
//inserting to our dom

//inserting as a first child
// document.querySelector('.header').prepend(message)
// inserting as a last child
// dom element is unique we can only have once
// document.querySelector('.header').append(message)

//before

// inserting the element before the header as a sibling
// document.querySelector('.header').before(message)
// document.querySelector('.header').after(message)

//delete an element
// no need to select the message element because it is already saved
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   message.remove();
// //
// });

// STYLES
// styles directly applied to the inline style
// message.style.backgroundColor='#37383d'
// message.style.width="120%"
// console.log(message.style.height)
// // all properties with its value
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)
// message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+20+'px'

// document.documentElement.style.setProperty( '--color-primary', 'orangered')

// //ATTRIBUTES
// // reads only standard property like src,alt,className
// const logo=document.querySelector('.nav__logo');
// // absolute url
// console.log(logo.src)
// console.log(logo.alt)
// console.log(logo.className)

// logo.alt='Beatifull minimalist logo'
// // for those that are not standards
// console.log(logo.getAttribute('designer'))
// logo.setAttribute('company','Bankist')
// // relative url
// console.log(logo.getAttribute('src'))
// const links=document.querySelector('.twitter-link')
// console.log(links.href);
// console.log(links.getAttribute('href'))

// //Data attributes

// console.log(logo.dataset.versionNumber)
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

//EVENTS
// SIGNAL THAT SOMETHING HAPPENED ON THE PAGE
// const h1 = document.querySelector('h1');
// const alertH1=function(e){
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter',alertH1)
// }

// h1.addEventListener('mouseenter',alertH1);
// h1.removeEventListener('mouseenter',alertH1)
// setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000)
// // h1.onmouseenter=function(e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // };
// //remove event listener
// // rgb(225,225,225)
// const randomInt=(min,max)=>Math.floor(Math.random()*max-min)+1;

// const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// console.log(randomColor(0,255))

// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log(e.target,e.currentTarget)
//   //stop propagation
// e.stopPropagation()

// })
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log(e.target,e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log(e.target,e.currentTarget)
// },true)
//listeninig to the captur event not the bubbling event
//capturing is from botto to up
// traversing  through the dom

const h1 = document.querySelector('h1');
// selecting child elemenet using parent element

console.log(h1.querySelectorAll('.highlight'));
// getting all the child nodes including comments too
console.log(h1.childNodes);

//getting the element only but direct children
console.log(h1.children);
h1.firstElementChild.style.color = 'pink';
h1.lastElementChild.style.color = 'orangered';
// going up ward
console.log(h1.parentNode);
console.log(h1.parentElement);
//finding the closest parent elemnt of h1 and appling style to it
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//going sideways selecting siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
//all siblings from the parent element
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
// creating tabs
// const tabs=document.querySelectorAll('.operations__tab')
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations_content');

tabs.forEach(t =>
  t.addEventListener('click', () => {
    console.log('tab');
  })
);

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
});
