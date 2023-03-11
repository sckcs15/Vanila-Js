
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText ="Hello " + username; 
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username= loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
    greeting.innerText ="Hello " + username; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
   paintGreeting(savedUsername);
}