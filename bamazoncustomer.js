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

  // function start() {
  //   inquirer
  //     .prompt({
  //       name: "idNumber",
  //       type: "rawlist",
  //       message: "Whats the ID number of your item?",
  //       choices: [1,2,3,4,5,6,7,8,9,10]
  //     })
      
    //   .then(function(answer) {
    //     // based on their answer, either call the bid or the post functions
    //     if (answer.idNumber.toUpperCase() === "Id Number") {
    //       postAuction();
    //     }
    //     else {
    //       bidAuction();
    //     }
    //   });
  // };

