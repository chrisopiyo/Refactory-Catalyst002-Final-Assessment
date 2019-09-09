// Validating the student entry form
surName = /^[a-zA-Z]{5,25}$/;
givenNm = /^[a-zA-Z]{5,25}$/;
dateOfBIrth = /^[0-9]{10}$/;
residence = /^[a-zA-Z]{25}$/;
phone =/^[0-9]{10}$/;
email = /^[a-z]{3,15}$/;

// Getting html inputs
 var surNames = document.getElementById('surnam');
 var givenn = document.getElementById('gname');

var studentValidate =()=>{
    if(surNames.value.match(surName)){
        surnam.style.border="1px solid green";
    }
    else{
        document.getElementById('surnm').value="Sur Name is Required"

    }
    if(givenn.match(givenNm)){
        givenn.style.border="1px solid green";
    }
    else{
        document.getElementById('givenm').value="Given Name is Required";
    }
}
studentValidate();