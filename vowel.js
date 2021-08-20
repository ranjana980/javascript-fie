// this program will console first vowels of the string in correct order after thet it will console the consonat in correct order
let readlineSync = require("readline-sync");
var a=readlineSync.question("enter any word:- ")
var j="aeiou"
var k="bcdfghjklmnpqrstuvwxyz"
for (var i in a){
    if (j.includes(a[i])){
        console.log(a[i])
    }
}
for (i in a){
    if (k.includes(a[i])){
      console.log(a[i])
}
}
                 
        