const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const removeBtn = document.querySelector(".remove");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
    // removeBtn.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    //Show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
    // removeBtn.classList.add("hidden");
} else {
    //Show the greetings
    paintGreetings(savedUsername);
}

// function removeStorage() {
//     localStorage.removeItem("username");
//     greeting.classList.add("hidden");
//     loginForm.classList.remove("hidden");
// }

// removeBtn.addEventListener("click", removeStorage);