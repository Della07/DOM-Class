// document.querySelector(`.clear-tasks`).addEventListener('click', onClick);

// function onClick(e) {

//     let val;
//     val = e;
//     //event target element
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     val = e.type; // EVENT TYPE
//     val = e.timeStamp; // TIMESTAMP
//     val = e.clientY; //Coordinate shts
//     val = e.clientX; //Coordinate shts
//     val = e.offsetY; //Coords event relative to the element
//     val = e.offsetX; //Coords event relative to the element

//     console.log(val);
//     e.preventDefault();



// }
//CLick



// const clearBtn = document.querySelector('.clear-tasks');

// const card = document.querySelector('.card');
// const heading = document.querySelector('h6');

// // clearBtn.addEventListener('click', runEvent);
// // clearBtn.addEventListener('dblclick', runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);
// // clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {


//     e.preventDefault();
//     console.log(`EVENT TYPE : ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;

// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

// const heading = document.querySelector('h6');
// const select = document.querySelector('select');
// const li = document.querySelector('li.collection-item');


// //CLEAR INPUT
// taskInput.value = '';
// // taskInput.addEventListener('keypress', runEvent);
// // taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('submit', runSub);
// taskInput.addEventListener('input', runEvent);

// function runEvent(e) {

//     console.log(`EVENT TYPE: ${e.type}`);
//     console.log(e.target.value);
//     // heading.innerHTML = e.target.value;

//     e.preventDefault();

// }


// document.querySelector('.card-title').addEventListener('click', function () {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//     console.log('.col');
// });

//EVENT DELIGATION


//DELETE
// const delItem = document.querySelector('.delete-item');
// document.body.addEventListener('click', deleteItem);

// delItem.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {

//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();

//     }
// }



// //SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '36');

// // //SET SESSION STORAGE ITEM
// // sessionStorage.setItem('tangina', 'wow');

// //REMOVE FROM LOCAL STORAGE
// // localStorage.removeItem('name');

//GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //CLEAR LOCALSTORAGE
// localStorage.clear();

// console.log(name, age);


//ADDDING LOCAL STORAGE ITEM
// document.querySelector('form').addEventListener('submit', function (e) {
//     const task = document.getElementById('task').value;

//     let tasks;

//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('Task saved');
//     e.preventDefault();
//     document.getElementById('task').value = '';
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function (task) {
//     console.log(task);

// });