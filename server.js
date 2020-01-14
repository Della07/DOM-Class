// document.getElementById('addTask').onclick = function () {


//     console.log("clicked");
// }
// CREATE ELEMENT
//  const li = document.createElement('li');

//  //ADD CLASS TO
//  li.className = 'collection-item';

//  //ADD ELEMENT TO

//  li.id = "new-item";

//  //ADD ATTRIBUTE
//  li.setAttribute('title', 'New Item');

//  //CREATE TEXT NODE AND APPEND
//  li.appendChild(document.createTextNode('New List Item'));

//  //CREATE NEW LINK
//  const link = document.createElement('a');

//  //ADD CLASSES
//  link.className = 'delete-item secondary-content';

//  //ADD ICON
//  link.innerHTML = "<i class='fa fa-trash'></i>";

//  //APPEND LINK INTO li
//  li.appendChild(link);

//  //APPEND li as child to ul
//  document.querySelector('ul.collection').appendChild(li);

//  console.log(li);

// REPLACE ELEMENT
// const newHeading = document.createElement('h4');

// //ADD ID
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task Lists'));

// // GET THE OLD HEADING
// const oldHeading = document.getElementById('task-title');
// //PARENT
// const cardAction = document.querySelector('.card-action');

// //REPLACE
// cardAction.replaceChild(newHeading, oldHeading);

// //REMOVE ELEMENT
// const lis = document.querySelector('li');
// const list = document.querySelector('ul');

// //LIST REMOVE ITEM
// lis.remove();

// //REMOVE CHILD ELEMENT
// list.removeChild(list.childNodes[3]);

// //CLASS & ATTRIB
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// val = link;

// //ATRRIBUTE
// val = link.getAttribute('href');
// val = link.setAttribute(`href`, `http://google.com`);
// link.setAttribute('title', 'google');
// val = link.hasAttribute(`title`);
// val = link;

// console.log(val);


// console.log(document.getElementById('task-title'));
// GET THINGS FROM THE ELEMENT
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');
// // CHANGE STYLING

// // taskTitle.style.backgroundColor = 'green'
// taskTitle.style.padding = '5px'

// taskTitle.textContent = 'Task List';
// taskTitle.innerHTML = '<div class="blue white-text" style="padding:5px; border-radius:10px;">Task List</div>'

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.background = 'green';



// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);
// items[0].style.color = 'blue';
// items[0].textContent = 'BLUE ITEM';
// items[2].textContent = 'BLUE ITEM';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// //FOREACH NG TAGNAME
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//     console.log(li.className);
//     li.textContent = `${index} : Hey`
// });
// console.log(lis);


// document.querySelectorAll FOR EACH
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//     item.textContent = `${index} : Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liEven.forEach(function (li, index) {
//     li.style.background = '#ddd';
// });

// liOdd.forEach(function (li, index) {
//     li.style.background = 'gray';
// });




// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // GET CHILD NODES
// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[2].nodeType;

// //GET CHILDREN ELEMENT NODES
// val = list.children[1].textContent = 'HELLOOO';
// val = list.children[3].children[0].className = 'test-link';
// val = list.firstElementChild;
// val = list.lastElementChild;
// val = list.firstElementChild;
// val = list.parentElement.parentElement;

// // GET NEXT SIBLING

// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling

// console.log(val);








// //CHANGE CONTENT
// taskTitle.innerHTML = '<div class="blue"><i class="fa fa-bomb"></i> NO TASK YET</div>'

// document.querySelector('li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(even)').style.color = 'blue';
// document.getElementsByTagName('li').innerHTML = '<div class="blue"></div>';




// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.head;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].method;
// val = document.links[0].action;

// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts;
// val = document.scripts[0].getAttribute('src');
// console.log(val);

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);


// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// // // var, let, const 

// // var name = 'John Doe';

// // name = 'Bobby Ferrer';


// // console.log(name);

// // // Init var 
// // var greeting;
// // console.log(greeting);

// // greeting = 'hello';
// // console.log(greeting);

// // // letter, numbers, _, $
// // // Can not start with number 


// // // Multi word vars
// // var firstName = 'John'; // camel case
// // var first_name = 'Sara'; // Underscore 
// // var FirstName = 'Tom'; // Pascal case

// //LET
// // let name;
// // name = 'John Doe';
// // console.log(name);
// // name = 'Smith';
// // console.log(name);


// // // CONST 
// // const name = 'John';
// // console.log(name);
// // // Can not reasign 
// // name = 'sara';

// // const person = {
// //     name: 'John',
// //     age: '36'
// // }
// // person.name = 'Sara';
// // console.log(person);

// // const numbers = [1,2,3,4,5];
// // numbers.push(6);

// // console.log(numbers);


// // let val;

// // // Number to string 
// // val = String(555);
// // val = String(5+5);

// // //bool to string
// // val = String(true);

// // val = new Date();




// // // String to number

// // val = Number('5');
// // // val = Number(false);

// // val = Number(null);
// // val = [1,2,3];

// // // val = parseInt('100.30');
// // val = parseFloat('100.30');

// // const val1 = String(5);
// // const val2 = 6;
// // const sum = Number(val1 + val2);


// // // Output
// // console.log(sum);



// // console.log(val);


// // const firstName = 'William';
// // const lastName = 'Johnson';
// // const age = 36;
// // const str = 'Hello there my name is Bobby';
// // const tags = 'Web design, web development, programing';


// // let val;

// // val = firstName + lastName;

// // //Concatenation

// // val = firstName + ' ' +lastName;

// // // Append
// // val = 'Bobby ';
// // val += 'Ferrer';

// // val = 'Hell0, my name is ' + firstName +  ' and I am ' + age;

// // val = `Hello, my name is ${firstName} and I am ${age}`;

// // // concat
// // val = firstName.concat(' ', lastName);


// // //Change to uppercase
// // val = firstName.toUpperCase();
// // val = firstName.toLowerCase();


// // // split

// // val = str.split(' ');
// // val = tags.split(' ');



// // 


// // // console.log(val);

// // const name = 'John';
// // const age = 30;
// // const job = 'Web developer';
// // const city = 'Manila';
// // let html;

// // // without template string (es5)
// //  html = '<ul><li>Name: ' + name +
// //         '</li><li>Age: ' + age + 
// //         '</li>' + '</ul>';




// // // with template string (es6)

// // html = `<ul>
// //             <li>Name: ${name}</li>
// //             <li>Age: ${age}</li>
// //             <li>Job: ${job}</li>
// //             <li>City: ${city}</li>
// //             <li>${age > 30 ? `${age}` : "Under 30" }
// //         </ul>`;

// //         document.body.innerHTML = html;


// // const person = {
// //    firstName: 'Steve',
// //    lastName: 'Smith',
// //    age: 36,
// //    email: 'steve#gmail.com',
// //    hobbies: ['music', 'sport'],
// //    address: {
// //        city: 'Manila',
// //        state:'Phil'
// //    },

// //    getBirthYear: function() {
// //        return 2019 - this.age;
// //    }
// // };

// // let val;

// // val = person.getBirthYear();
// // val = person.address['state'];


// // // console.log(val);


// // const people = [ {name: 'John', age: 30}, {name: 'mike', age: 23}, {name: 'Nancy', age: 26} ];


// // for(let i = 0; i < people.length; i++) {
// //   console.log(people[i].name,people[i].age);

// // }

// // if(something){
// //   //do something
// // } else {
// //     // so something else
// // }

// // const id = 100;
// // // EQUAL TO
// // if(id == 100){
// //   console.log('Correct');
// // } else {
// //     console.log('false');
// // }

// // if(id != 100){
// //     console.log('Correct');
// //   } else {
// //       console.log('false');
// //   }

// //   if(id !== 100){
// //     console.log('Correct');
// //   } else {
// //       console.log('false');
// //   }\

// // function greet(firstName = 'john', lastName = 'Doe') {
// //   if (typeof firstName === 'undefined') {
// //     firstName = 'John';
// //   }
// //   if (typeof lastName === 'undefined') {
// //     lastName = 'Doe';
// //   }
// //   return `hello ${firstName} ${lastName}`;
// // }

// // console.log (greet());

// // const square = function(x = 3) {
// //   return x * x;
// // }

// // console.log(square());

// // //imediately invokable function exspression iife's
// // (function (){
// //   console.log("iiffeeee takbooo!!!!!!!!!!!!");
// // })();


// // property methods


// // const todo = {
// //   add: function () {
// //     console.log("Add to do");

// //   },
// //   edit: function (id) {
// //     console.log(`Edit  todo ${id}`)
// //   }
// // }

// // todo.delete = function () {
// //   console.log('deleted')
// // }

// // todo.add();
// // todo.edit(22);

// // todo.delete();

// // const emel = {
// //   jerry: function () {
// //     console.log("sample");
// //   }
// // }

// // emel.jerry();

// //FORLOOP
// // for (let i = 0; i < 10; i++) {
// //   if (i == 1) {
// //     console.log(`*`);
// //   }
// // }



// // WHILE LOOP
// // let i = 0;
// // while (i < 10) {
// //   console.log(`asdasdas ${i}`);
// //   i++;
// // }


// //DO WHILE
// // let i = 0;
// // do {
// //   console.log(`number ${i}`);
// //   i++
// // } while (i < 5);

// //LOOP THROUGH ARRAY

// // const cars = [`ford`, `cherry`, `chevy`, `toyota`];

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }

// //FOREACH LOOP
// // cars.forEach(function (index, car, array) {
// //   console.log(`${car} : ${index}`);
// //   console.log(array);
// // });

// // //MAP
// // const users = [{
// //     id: 1,
// //     name: `John`
// //   },
// //   {
// //     id: 2,
// //     name: `Sarah`
// //   },
// //   {
// //     id: 3,
// //     name: `Karen`
// //   },
// //   {
// //     id: 4,
// //     name: `Steve`
// //   }
// // ];

// // const ids = users.map(function (user) {
// //   return user.name;

// // });

// // console.log(ids);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 16
// }

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }