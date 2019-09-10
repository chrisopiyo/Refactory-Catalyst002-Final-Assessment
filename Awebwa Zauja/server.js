const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");

const parser =require("body-parser");
const session = require("express-session");
var html_dir ="./public/";
const app =express();

app.use(morgan("short"));
app.use(express.static("./public"));
app.use(parser.urlencoded({ extended: false }));

//starting a ssession and save unintialized instance.
app.use(session({
    secret:"secret",//hide the sessions(informmation of the users)
    resave:true,
    saveUninitialized:true
}));

//routes to serve the static files

app.get("/",function(req,res){
    res.sendfile(html_dir + "entryform.html");
});


// creating a connection to the database
const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    database:'refactory',
    password : ''
});

// creating the table attributes in the database
app.post("/details",(req,res)=> {
    const surname = req.body.surname;
    const givenname = req.body.givenname;
    const gender = req.body.gender;
    const dateofbirth = req.body.dateofbirth;
    const contact = req.body.contact;
    const country = req.body.country;
    const residence = req.body.residence;
    const email = req.body.email;
    const skills = req.body.skills;
    const projects = req.body.projects;

    // console.log(surgivenname);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // query for inserting into the table
    var sql = "INSERT INTO student (surname, givenname, gender, dateofbirth, contact, country, residence, email, skills, projects) VALUES (?,?,?,?,?,?,?,?,?,?)";
    connection.query(sql, [surname, givenname, gender, dateofbirth, contact, country, residence, email, skills, projects], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
//   res.redirect("/"); 
     
		
        res.end();
    });





app.listen(3001);

console.log("App running at server 3001");
