function setFormMessage(formElement, type, message)
{
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");
    messageElement.classList.add('form_message--${type}');
}

//setFormMessage(loginForm, "success", "You are succefully Logged in!");

document.addEventListener("DOMContentLoaded", () => { //when the document is ready pass this function
    const loginForm = document.querySelector('#login'); //Creating a variable and equaling it with the login page
    const createAccount = document.querySelector('#createAccount');//Create a varible "const" and linking it with create account page

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>
    {
        e.preventDefault();
       loginForm.classList.add("form--hidden");
       createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>
    {
        e.preventDefault()//We dont get redirect
       loginForm.classList.add("form--hidden");
       createAccountForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

});

