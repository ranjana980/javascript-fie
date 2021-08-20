const n=require("readline-sync");
var name=Number(n.question("enter name: "))
i=1
dic={}
while (i<=name){
    dic[i]=i*i
    i+=1
}
console.log(dic)
