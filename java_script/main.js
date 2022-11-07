//Single element selectors
//the following are used to select a single element.
console.log(document.getElementById('my-form'));
//to select different type of tags like h1,class,id,containers and so on example as follows
console.log(document.querySelector('h1'))

//multi element selectors used to select multiple values at ones
//the recommended tag is
console.log(document.querySelectorAll('.items'))
//we can use this but not recommended
console.log(document.getElementsByClassName('items'))
//save in array
const items=document.querySelectorAll('.items')
items.forEach((item)=>console.log(item));

const ul=document.querySelector('.items');
//manupilate the items
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello'
ul.children[1].innerText='Biniam'
ul.lastElementChild.innerHTML='<h1>Hello</h1>'
const btn=document.querySelector('.btn');
btn.style.background='Red'
//how to accept values or events that is done in html
const btn1=document.querySelector('.btn');
btn1.addEventListener('click',(e)=>{
    //used to prevent flashing of the page
    e.preventDefault();
    console.log(e.target.id);
});