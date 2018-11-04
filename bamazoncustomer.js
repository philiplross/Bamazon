var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    
    user: "root",
  
   
    password: "DJcorgi02",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });

  function start() {


   console.log("is working");
    inquirer
      .prompt({
      //  console.log("whats the ID of your product 1-10?", choices);
      type: input,  
      message: "whats the ID of your product 1-10?",
        choices: [1,2]
      })
     
  
  };
  

