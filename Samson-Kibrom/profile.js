const validate = () => {
  form = document.getElementById("my-form");

  surname = document.getElementById("surname");
  givenname = document.getElementById("givenname");
  dob = document.getElementById("dob");
  dropDownBox = document.getElementById("country");
  country = document.getElementById("optionCountry");
  residence = document.getElementById("residence");
  phone = document.getElementById("phone");
  email = document.getElementById("email");
  warningMessage = document.getElementsByClassName("warningMessage");

  const borderColour = (theField, theStyle) => {
    theField.style.border = theStyle;
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    let regexEmpty = /^\s*$/;

    if (regexEmpty.test(surname.value) == true) {
      borderColour(surname, "1px solid red");
      warningMessage[0].innerHTML = "Surname is required";
      warningMessage[0].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(surname, "1px solid rgb(122, 122, 139)");
      warningMessage[0].innerHTML = "";
    }

    if (regexEmpty.test(givenname.value) == true) {
      borderColour(givenname, "1px solid red");
      warningMessage[1].innerHTML = "Given name is required";
      warningMessage[1].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(givenname, "1px solid rgb(122, 122, 139)");
      warningMessage[1].innerHTML = "";
    }

    if (regexEmpty.test(dob.value) == true) {
      borderColour(dob, "1px solid red");
      warningMessage[2].innerHTML = "Date of birth is required";
      warningMessage[2].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(dob, "1px solid rgb(122, 122, 139)");
      warningMessage[2].innerHTML = "";
    }

    if (country.selected == true) {
      borderColour(dropDownBox, "1px solid red");
      warningMessage[3].innerHTML = "Country Field is required";
      warningMessage[3].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(country, "1px solid rgb(122, 122, 139)");
      warningMessage[3].innerHTML = "";
    }

    if (regexEmpty.test(residence.value) == true) {
      borderColour(residence, "1px solid red");
      warningMessage[4].innerHTML = "Residence Field is required";
      warningMessage[4].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(residence, "1px solid rgb(122, 122, 139)");
      warningMessage[4].innerHTML = "";
    }

    if (regexEmpty.test(phone.value) == true) {
      borderColour(phone, "1px solid red");
      warningMessage[5].innerHTML = "Phone Field is required";
      warningMessage[5].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(phone, "1px solid rgb(122, 122, 139)");
      warningMessage[5].innerHTML = "";
    }

    if (regexEmpty.test(email.value) == true) {
      borderColour(email, "1px solid red");
      warningMessage[6].innerHTML = "Email Field is required";
      warningMessage[6].style =
        "color: red; font-family: Tahoma, Arial, sans-serif;";
    } else {
      borderColour(email, "1px solid rgb(122, 122, 139)");
      warningMessage[6].innerHTML = "";
    }
  });
};

validate();
