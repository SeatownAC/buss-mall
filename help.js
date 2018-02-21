'use strict';

//create global variables
var btn = document.getElementById('btn');
var input = document.getElementById('item');
var tasks = document.getElementById('tasks');

//conditional that asks is there a property currently on local storage that is a list? Does it have a value equal to ''?
//split will coerce it back inot an array and get rid of the comma
//else we will take out the comma and set up an empty array that we can fill

if(localStorage.list) {
    var list = localStorage.list.split(',');

} else {
    var list = [];
}

//save the state of our application
//attach it to some sort of event listener...click advised
//grab our list and push the value of what we type in to local storage
//every time you add an item your item will go to local storage

function save() {
    list.push(input.value);
    localStorage.list = list;
    //meta data so you can see what is happening in action
    console.log('list arr:', list);
    console.log('localSorage list:', localStorage.list);
}

//make naming conventions easy to read, name your functions after what they are doing

function create() {
    var val = input.value;
    //creating the item so getting the value of the input 
    var item = document.createElement('li');
    //each individual list item
    //do what to the list? Put stuff in it that is coming through the val
    //in the past we've used inner html or text content...this is NEW
    //.createTextNode will solve problems in the future
    ////just appending child text specifically to just an element in memory.
    //Putting nothing but text on the Node.
}


item.appendChild(document.createTextNode(val));
//need to take our tasks which is our ul and append child with the added li we just created
tasks.appendChild(item);
//each time you press enter you get a new empty value to enter a new val
input.value = '';

}
