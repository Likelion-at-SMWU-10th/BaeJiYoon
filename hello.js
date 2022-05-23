const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");

function loginSB(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    hello.innerText = `Nice to meet you, ${userName} !`;
    hello.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSB);