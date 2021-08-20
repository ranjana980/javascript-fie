let readlineSync = require("readline-sync");
var yourName =readlineSync.question("what is your name")
if (yourName=="ranjana"){
    password=readlineSync.question("enter the password")
    if (password=="ranjana@123"){
        console.log("login successfull")
    }else{
        console.log("your paasword is wrong")
    }
}else{
    console.log("your name is wrong")
}