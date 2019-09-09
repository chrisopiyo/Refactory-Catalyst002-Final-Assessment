// function to validate all the input fields
function Validate() {
    surname = document.getElementById("surname");
    const validSurname = /^[A-Za-z]+$/;
    if (surname.value.match(validSurname)) {
        surname.style.border = "2px green solid";
        document.getElementById("surnameError").style.display = "none";

    }
    else {
        document.getElementById("surnameError").innerHTML = "Sur name is required"
        surname.style.border = "2px red solid";
        return false;
    }
    console.log("connected")
}
// Validate();

