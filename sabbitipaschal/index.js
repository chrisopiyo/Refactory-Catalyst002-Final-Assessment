// sabbiti.

const express = require ('express');


const parser = require ('body-parser');


const morgan = require('morgan');


const mysql = require('mysql');


const app = express();


var html_dir = './public/';


// making node access our html files in public dir


app.use(express.static('./public'))



app.get('/', function(req,res){

    var ross = {root :__dirname}

    res.sendFile(html_dir +'/Students Details Entry Form.html',ross);


});


// a static file or folder contains things that will not dynamically change.


// html pages are templates.


// utilising morgan console details


app.use(morgan('short'));


// utilising body_parser to


app.use(parser.urlencoded({extended:false}));


app.listen(4009);


// for windows,  we dont need a password.


const connection = mysql.createConnection({


    host : 'localhost',
    user : 'root',
    database : 'labsession',
    password : ''


})


console.log('server running on port : 4009')


app.post('/jotori', (req,res)=>{


//  creating variables to store the values submitted.



const surname = req.body.surname;

const givenname = req.body.givenname;

const sexm =req.body.sexm;

const sexf = req.body.sexf;

const dob = req.body.dob;

const country = req.body.country;

const por = req.body.por;

const phone = req.body.phone;

const email = req.body.email;

                                     


    // putting the order according to the database table.


    const querystring = "INSERT INTO student (surname,givenname,sexm,sexf,dob,country,por,phone,email) VALUES (?,?,?,?,?,?,?,?,?)"


    //  putting the order according to the html values.


    connection.query(querystring,[surname,givenname,sexm,sexf,dob,country,por,phone,email])



    console.log('getting the form input ' + req.body.country);


    res.end();

    
})









