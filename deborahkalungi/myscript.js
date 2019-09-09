// function to validate all the input fields
function Validate() {
    surname = document.getElementById("surname");
    givenname = document.getElementById("givenname");
    dateofbirth = document.getElementById("dateofbirth");
    country = document.getElementById("country");
    // function which validates surname to ensure that 
    // its not left blank and elements entered are only characters from a-z.
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

    // function which validates surname to ensure that 
    // its not left blank and elements entered are only characters from a-z.
    const valid_givenname = /^[A-Za-z]+$/;
    if (givenname.value.match(valid_givenname)) {
        givenname.style.border = "2px green solid";
        document.getElementById("given_name_error").style.display = "none";

    }
    else {
        document.getElementById("given_name_error").innerHTML = "Given name is required"
        givenname.style.border = "2px red solid";
        return false;
    }


    // function which validates Date of birth to ensure that 
    // its not left blank.

    const valid_date = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
    if (dateofbirth.value.match(valid_date)) {
        dateofbirth.style.border = "2px green solid";
        document.getElementById("date_error").style.display = "none";

    }
    else {
        document.getElementById("date_error").innerHTML = "date of bith is required in the formart specified in the input"
        dateofbirth.style.border = "2px red solid";
        return false;
    }

     // function which validates country


}


