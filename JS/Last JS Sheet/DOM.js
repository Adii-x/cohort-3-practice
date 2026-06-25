// Easy

// Question 16

// const colors = ['#FF5A5F', '#087E8B', '#8B8982', '#A882DD', '#F3FFB9'];
// const main = document.querySelector('main');
// const btn = document.querySelector('button');

// let i = 0;

// btn.addEventListener('click', () => {
//     main.style.backgroundColor = colors[i];
//     i = (i + 1) % colors.length;
// })

// Quesiton 17

// const inp = document.querySelector('input');
// const span = document.querySelector('span');

// inp.addEventListener('input', (e) =>{
//     let count = e.target.value.split("").length;
//     span.textContent = count;
// })

// Question 18

// const h5 = document.querySelector('h5');
// const div = document.querySelector('#more');

// h5.addEventListener('click', () =>{

//     if(div.classList.toggle('hid')){
//         h5.textContent = "Show More"
//     } else {
//         h5.textContent = "Show Less"
//     }

// })

// Question 19

// const span = document.querySelector('span');
// const btn = document.querySelector('button');

// let count = 0;

// btn.addEventListener('click', () =>{
//     span.textContent = ++count;
// })

// Question 20

// const inp = document.querySelector('input');
// const addBtn = document.querySelector('button');
// const ul = document.querySelector('.container ul');

// addBtn.addEventListener('click', () => {

//     const task = inp.value.trim();

//     if(!task) return;

//     ul.innerHTML += `<li>${task}<span id="delete">Delete</span></li>`

//     inp.value = "";

// })

// Question 23

// const inp = document.querySelector("input");
// const span = document.querySelector("span");

// inp.addEventListener('input', (e) => {

//     if(e.target.value.trim() === "") return;

//     span.textContent = ((9 / 5) * e.target.value) + 32;

// })

// Question 24

// const span = document.querySelector("span");

// setInterval(function(){
//     span.textContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
// }, 1000)

// Question 25

// const main = document.querySelector("main");
// const btn = document.querySelector("button");

// btn.addEventListener('click', () => {

//     main.classList.toggle('dark')

// });

// Question 26

// const form = document.querySelector("#myForm");
// const nameInput = form.querySelector("#name");
// const emailInput = form.querySelector("#email");
// const nameError = nameInput.parentElement.querySelector(".nameError");
// const emailError = emailInput.parentElement.querySelector(".emailError");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = nameInput.value;
//   const email = emailInput.value;

//   console.log(name, email)

//   if (name === "") {nameError.textContent = "Name is required!!"; return}
//   else nameError.textContent = "";

//   if (email === "") {emailError.textContent = "Email is required!!"; return}
//   else emailError.textContent = "";

//   form.reset();
// });


// Question 