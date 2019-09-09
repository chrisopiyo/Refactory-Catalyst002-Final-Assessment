
/* 
   Function to validate all the inputs, radio buttons and check box 
   in the html file and return a valid response to help the 
   user know where they have inputed a wrong value. If the value provided 
   is wrong, the input will turn red and if the value is right, it will 
   turn green.
*/
const validate = () => { 

    //Validating name making sure it contains only alphabetes.
    const nam = document.getElementById("surname");
    const myName = /^[A-Za-z]+$/;
    let namVal = false;
    nam.addEventListener("input", e => {
        e.preventDefault();

        if (nam.value.match(myName)) {
            nam.style.border = "1px solid green";
            namVal = true;
        } else {
            nam.style.border = "1px solid red";
            namVal = false;
        }
    });

    const namG = document.getElementById("givenname");
    let namGVal = false;
    namG.addEventListener("input", e => {
        e.preventDefault();

        if (namG.value.match(myName)) {
            namG.style.border = "1px solid green";
            namGVal = true;
        } else {
            namG.style.border = "1px solid red";
            namGVal = false;
        }
    });

    
    document.getElementById("my-form").addEventListener("submit", e => {
        e.preventDefault();

        if (namVal == false) {
            nam.style.border = "1px solid red";
            document.getElementsByClassName("message")[0].innerHTML =
                "Sur name is required.";
            document.getElementsByClassName("message")[0].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[0].innerHTML = "";
        }

        if (namGVal = false) {
            namG.style.border = "1px solid red";
            document.getElementsByClassName("message")[1].innerHTML =
                "Given name is required.";
            document.getElementsByClassName("message")[1].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[1].innerHTML = "";
        }
        

        
    });
};

//Calling the validate function.
validate();
