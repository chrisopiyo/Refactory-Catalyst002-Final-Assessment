

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {

   

event.preventDefault();





const surname = document.getElementById('surname');


    const givenname = document.getElementById('givenname');


        const sexm = document.getElementById('sexm');


            const sexf = document.getElementById('sexf');


                const dob = document.getElementById('dob');


                    const country = document.getElementById('country');


                    
const por = document.getElementById('por');


const phone = document.getElementById('phone');


    const email = document.getElementById('email');










if( !/[A-Za-z]/.test(surname) || surname.value ===""){



 surname.style.border = "1px solid red";

 document.getElementById('surfirst').style.visibility='visible';
 

}





if( !/[A-Za-z]/.test(givenname) || givenname.value ===""){



    givenname.style.border = "1px solid red";
   
    document.getElementById('givenfirst').style.visibility='visible';
    
   
   }



   
if( !/[A-Za-z]/.test(dob) || dob.value ===""){



    dob.style.border = "1px solid red";
   
    document.getElementById('dobfirst').style.visibility='visible';
    
   
   }




   
if( !/[A-Za-z]/.test(country) || givenname.value ===""){



    country.style.border = "1px solid red";
   
    document.getElementById('countryfirst').style.visibility='visible';
    
   
   }



   
if( !/[A-Za-z]/.test(por) || givenname.value ===""){



    por.style.border = "1px solid red";
   
    document.getElementById('porfirst').style.visibility='visible';
    
   
   }


   
	if(!email.value.includes ("@") ||!email.value.includes (".")){


        email.style.border = "1px solid red";

        document.getElementById('emailfirst').style.visibility='visible';


       }


       
let numbers = /^[0-9]+$/

if (!phone.value.match (numbers) || phone.value ===""){


phone.style.border = "1px solid red";


document.getElementById('phonefirst').style.visibility='visible';


}

})


							
                                    













