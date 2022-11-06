const name = "Biniam"
const age = 36; //used to define constant value
console.log(age);
let a = 20;
a = 21;//reasign value is possible bc it is not constant

//String,Numbers,Boolean,null,undefined are data types which are directly assigned to memory
console.log(typeof a);
//concatenation
console.log('my name is ' + name + ' and i am ' + age + ' years old')
//Template String is used as a replacement of concatenation
console.log(`My name is ${name} and i am ${age} years old`)
//properties of String
const str = "Hello World";
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.substring(0, 5).toUpperCase())
const techno = 'technology,computers,It,code';
console.log(techno.split(','))

//Arrays in javascript
const fruits = ['apples', 'oranges', 'pears']
//push is used to add data to the end of array
fruits.push('mango')
//unshift is used to add data in the beggning of array
fruits.unshift('banana')
// pop is used to delete the last data of the array
fruits.pop()
console.log(fruits)

const person = {
    firstName: 'Biniam',
    lastName: 'Haile',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'styrbjörnsvägen 14',
        city: 'Hägesrten',
        state: 'Stockholm'
    }
}
//adding element to already existing object
person.email = 'biniam@js.se'
//destructuring  is used to get some elements of the object to use them ddirectly
const {firstName, lastName, address: {city}} = person
console.log(lastName)
console.log(person)
//Array of objects
const todos = [
    {
        id: 1,
        text:'take out trash',
        isCompleted:true
    },
    {
        id: 2,
        text:'meeting with hr',
        isCompleted:true
    },
    {
        id: 3,
        text:'working 7 hours',
        isCompleted:false
    }
]
console.log(todos[1])
console.log(todos[1].isCompleted)
//Changing the object into json format inorder to send it to back end server
const todoJson=JSON.stringify(todos);
console.log(todoJson)
//For loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i])
}
//enhanced for loop
for(let todo of todos){
    console.log(todo)
}
//while loop
let i=0;
while (i<10){
    console.log(`while loop number ${i}`)
    i+=3
}
//foreach to iterate through array, map used to create a new array from an array, filter used to create a new array based on condition
todos.forEach(function (todo){
    console.log(todo.text)
})
//map
const todoText= todos.map(function (todo){
    return todo.text
})
console.log(todoText)
//filter
const todoCompleted=todos.filter(function (todo) {
    return todo.isCompleted===true

})
console.log(todoCompleted)
// we can filter and map at the same time
const todoCompl=todos.filter(function (todo) {
    return todo.isCompleted===true

}).map(function (todo){
    return todo.text
})
console.log(todoCompl)
