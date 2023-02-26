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
// ul.firstElementChild.textContent='Hello'
// ul.children[1].innerText='Biniam'
// ul.lastElementChild.innerHTML='<h1>Hello</h1>'
// const btn=document.querySelector('.btn');
// btn.style.background='Red'
//how to accept values or events that is done in html
/* const btn1=document.querySelector('.btn');
btn1.addEventListener('click',(e)=>{
    //used to prevent flashing of the page
    e.preventDefault();
    //this will show us the class name.
    console.log(e.target.className);
    //changing the background when we click the button
    document.querySelector('#my-form').style.background=
    '#ccc';
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Heloo</h1>';
}); */
//reading the input and display on the page or memory.
 const myform=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userList=document.querySelector('#users');

 myform.addEventListener('submit',onSubmit);
 function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        //alert('please enter a field');
         msg.classList.add('error');//we are adding the styling from css 
         msg.innerHTML='please enter all fields'
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `));
        //add a child of lists to the UL in line 44
        userList.appendChild(li);

        //clearing the fields after we enter value
        nameInput.value='';
        emailInput.value='';
    
    }
 }
