// Element initialization
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("form");

//Email Validation 

form.addEventListener("submit", function(e){
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(email === "" || !emailPattern.test(email)) {
        errorMessage.textContent = "Oops! Please check your email";
        errorMessage.classList.add("error");
        return;
    }
    errorMessage.textContent = "";
    errorMessage.classList.remove("error");

    form.reset();
});
  


