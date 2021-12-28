const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
function Bclick(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    localStorage.setItem("username", username);
    // greeting.innerText = "Hello "+ username;
    greeting.innerText = `Hello ${username}`;
    console.log(username);
}

// function paintGreetings(username){
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove("hidden");
// }

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", Bclick);
}else{
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove("hidden");
}

function Hlink(event){
    console.log(event);
    alert("Click!");
}

link.addEventListener("click", Hlink);

