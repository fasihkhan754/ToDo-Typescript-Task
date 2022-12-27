#!/usr/bin/env node

import inquirer from "inquirer";

let TODO:string[]=[];
let check=true;

type ans={
 todo:string,
 more:boolean
}

while(check){
    const answer:ans=await inquirer.prompt([
        {
            type:"input",
            name:"todo",
            message:"Enter The name of your task  : "
        },
        {
            type:"confirm",
            name:"more",
            message:"Add more toDo's  : ",
            default:false
        }
    ])
    const ans=answer;
    check=ans.more;
    if(ans.todo){
        TODO.push(ans.todo);
    }else{
        console.log("Please Do valid entry");
    }

}
if(TODO.length>0){
    let count=1;
    console.log("Your ToDo's are :")
    TODO.forEach(td => {
        console.log("\t"+count+"). "+td);
        count++;
    });
}else{
    console.log("\n No Work ToDo (kick-back n Relax)");
}
//console.log(answer)