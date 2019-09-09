const validate = () => {
  form = document.getElementById("my-form");

  surname = document.getElementById("surname");
  givenname = document.getElementById("givenname");
  dob = document.getElementById("dob");
  country = document.getElementById("country");
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
        "color: red; font-family: Helvetica, sans-serif;";
    } else {
      borderColour(surname, "1px solid rgb(122, 122, 139)");
      warningMessage[0].innerHTML = "";
    }

    if (regexEmpty.test(givenname.value) == true) {
      borderColour(givenname, "1px solid red");
      warningMessage[1].innerHTML = "Given name is required";
      warningMessage[1].style =
        "color: red; font-family: Helvetica, sans-serif;";
    } else {
      borderColour(givenname, "1px solid rgb(122, 122, 139)");
      warningMessage[1].innerHTML = "";
    }

    if (regexEmpty.test(surname.value) == true) {
      borderColour(dob, "1px solid red");
      warningMessage[0].innerHTML = "Surname is required";
      warningMessage[0].style =
        "color: red; font-family: Helvetica, sans-serif;";
    } else {
      borderColour(surname, "1px solid rgb(122, 122, 139)");
      warningMessage[0].innerHTML = "";
    }
  });
};

validate();
