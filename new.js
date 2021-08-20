var str= "My name is kumar, and my friend’s name is Dhamu is";
var subString="is"
var res = str.split(" ");
var count=0
i=0
while (i<res.length){
    if (res[i]==subString){
        count+=1
    }
    i+=1
}
console.log("The", subString,"is there",count, "times in the strings")