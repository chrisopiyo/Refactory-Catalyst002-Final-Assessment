
formValidation = ()=>{
    var surname = document.getElementById('surname');
    var givenname = document.getElementById('givenname');
    var dob = document.getElementById('dob');
    var country = document.getElementById('country');
    var residence = document.getElementById('residence');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');


    document.getElementById("student-profile").addEventListener("submit", e => {
        e.preventDefault();
        
    const nameregex = /^[A-Za-z]+$/;
    if(surname.value.match(nameregex)){
        document.getElementsByClassName('message')[0].innerHTML =""
        
    }
    else{
        document.getElementsByClassName('message')[0].innerHTML = "Sur name is required"
        document.getElementsByClassName('message')[0].style = "1px solid red" 

    }
});
}