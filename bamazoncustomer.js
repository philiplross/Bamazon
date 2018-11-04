var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,


  user: "root",


  password: "DJcorgi02",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

function start() {


  console.log("Question:");
   inquirer
     .prompt({
     type: input,  
     message: "whats the ID of your product 1-10?",
       choices: [1,2,3,4,5,6,7,8,9,10]
     })
    

 start()
 console.log("Answer:");
 
};





