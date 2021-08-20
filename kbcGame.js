var question_list=["1.what is the capital of india","2.how many occieans in india","3.which courses is teach in navgurukul."]
var options_list=[["hrayana","mumbai","uttar-prades","delhi"],["one","two","three","seven"],["software engineering","fasion-desinging","hardware","b.tech"]]
var anser_list=["delhi","seven","software engineering"]
i=0
count=0
while(i<question_list.length){
    console.log(question_list[i])
    j=0
    while (j<options_list[i].length){
        console.log(j+1,options_list[i][j])
        j+=1
    }
    let readlineSync=require("readline-sync");
    let life_line=readlineSync.question("do you want to use lifeline:-");
    if (life_line=="yes"){
        if(count==0){
            console.log(1,options_list[i][i])
            console.log(2,anser_list[i])
            let readlineSync=require("readline-sync");
            let newChance=readlineSync.question("type your answer:-");
            if (newChance==anser_list[i]){
                console.log("your answer is correct you won 5000")
            }else{
                console.log("your answer is wrong")
        }
        count+=1
        }else{
            console.log("you already used lifeline")
            let readlineSync = require("readline-sync");
            let user1Chances = readlineSync.question("type your answer:- ");
            if (user1Chances==anser_list[i]){
                console.log("your answer is correct you won 5000")
            }else{
                console.log("your answer is wrong")
            }
        }
    }else{
        let readlineSync = require("readline-sync");
        let userChances = readlineSync.question("type your answer:- ");
        if (userChances==anser_list[i]){
            console.log("your answer is correct you won 5000")
        }else{
            console.log("your answer is wrong")
        }
    }
    i+=1


}
