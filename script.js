const form = document.querySelector(".feedback-form");
const resultp = document.querySelector("p");
const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const userResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);

    if (userResult && feedbackResult){
        resultp.setAttribute("class","success");
        resultp.style.backgroundColor="green";
        resultp.style.color = "black";
        resultp.style.padding="20px";
        resultp.textContent = "Feedback form submitted, Thank you!";
    }else {
        resultp.setAttribute("class","error");
        resultp.style.backgroundColor="red";
        resultp.style.color = "white";
        resultp.style.padding="20px";
        resultp.textContent = "Please check username and feedback, try again!";
    }
});

form.username.addEventListener("keyup", (event) => {
    const userResult = usernamePattern.test(event.target.value);
    if (userResult){
        form.username.setAttribute("class","accepted");
    }else { 
        form.username.setAttribute("class","rejected");
    }
});

form.feedback.addEventListener("keyup", (event) => {
    const userResult = feedbackPattern.test(event.target.value);
    if (userResult){
        form.feedback.setAttribute("class","accepted");
    }else { 
        form.feedback.setAttribute("class","rejected");
    }
});