/** This javascript file written by @Timothy Mwandha is part of the final assignment of
 * the catalyst course - Refactory - CIU - on 9th Sept 2019 -  and the purpose of the script
 * is to validate the data entered into student detail entry form. The application 
 * sends the data into a database*/
 



/**  Declaration of the method  */
var validData = () => {


    /** Declaration and definition of variables that store the HTML5 elements
     * in the Toyota mail order form. */
  
    const surname = document.getElementById('surname');
    const givenname = document.getElementById('givenname');
    const gender = document.getElementByName('gender');
    const dob = document.getElementById('dob');
    const country = document.getElementById('country');
    const residence = document.getElementById('residence');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
       
    
    /**   these conditional statements check IF the data validation rules have been met/ broken,
     * and gives the user feedback to enter the correct data. Else the interpreter continues 
     * to execute. */
  
    //validating the data entered into the surname element
  
    if (surname.value.length == 0 || surname.value ==null) {
        surname.value = "surname is required";
        surname.style.border = "2px solid blue";
        console.log("surname is false");
      }
    else {
        console.log("surname is true");
      }
  
  
  //validating the data entered into the given name element 
    if (surname.value.length == 0 || surname.value ==null) {
        surname.value = "Given is required";
        surname.style.border = "2px solid blue";
        console.log("Given name is false");
        }
    else {
        console.log("given name is true");
    }

// validation whether one of the gender radio buttons is checked.
    if(!sexm.checked && !sexf.checked){
        alert("Please select one of the gender options")
        gender.style.border = "2px solid blue";
        console.log("gender option is not selected");
    }
    else{
        
        }
  //validation DOB
        if(dob==null){
            alert("Select your DOB.");

        }


  //validating the country selected in the drop down.
    if (country.value == "default") {
        country.value = "Country field is required"
        country.style.border = "2px solid blue";
        country.focus();
        console.log("country is false");
     }
    else {
        console.log("country is true");
      
    }
  //validating that residence field is not left blank
    if(residence == ""){
        residence.value = "This field is required."
        residence.style.border = "2px solid blue";
        residence.focus();
        console.log("residence is empty");
    }
  
  //validating the data entered into the part number element
    let numerals = /^[0-9]+$/
  if (phone.value.length == 0 || !phone.value.match(numerals)) {
      phone.value = "This phone field is required."
      phone.style.border = "2px solid blue";
      phone.focus();
      console.log("phone number is false");
      
    }
    else {
      console.log("part number is true");
      
    }
  
  //validating that the email address entered conforms to email format.
   
        if(!email.value.includes('@') || !email.value.includes('.') ){
            email.value = "This email field is required."
            email.style.border="2px solid blue";
            email.focus();
                        }
        else{
            
        }