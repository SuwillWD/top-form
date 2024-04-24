submit = document.getElementById("submit");

submit.onclick = (e) => {
    e.preventDefault();
    if (document.getElementById("password") !== document.getElementById("confirm-password")) {
        alert("Please enter the same password!");
    }
};