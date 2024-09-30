<<<<<<< HEAD:game.js
const player =document.getElementById("pl-score");
const computer=document.getElementById("com-score");
let boxes =document.querySelectorAll(".box");
let message =document.getElementById("msg");
let data =document.getElementById("data");

 let com = function comgen(){
   let option = ["paper","scissor","rock"]
   indx=Math.floor (Math.random()*3);
   return option[indx]
}

function Game(player_choice){
      let com_choice = com();
      if(player_choice === com_choice){
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        message.innerText="match is draw";
      }
      else if(player_choice === "rock" && com_choice==="scissor"){
             message.innerText="player win the match";
             data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
             player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "paper" && com_choice==="rock"){
        message.innerText="player win the match";
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "scissor" && com_choice==="paper"){
        message.innerText="player win the match";
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        player.innerText=parseInt(player.innerText)+1
      }
      else{
        message.innerText=`player lose the match`;
        data.innerText= `player :${player_choice}\ncomputer:${com_choice}\n`;
        computer.innerText=parseInt(computer.innerText)+1
      }
}

boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
            let  player_choice=box.getAttribute("id");
            Game(player_choice)
        })
    }
)














// boxes.forEach((box) =>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked")
//     })
=======
const player =document.getElementById("pl-score");
const computer=document.getElementById("com-score");
let boxes =document.querySelectorAll(".box");
let message =document.getElementById("msg");
let data =document.getElementById("data");

 let com = function comgen(){
   let option = ["paper","scissor","rock"]
   indx=Math.floor (Math.random()*3);
   return option[indx]
}

function Game(player_choice){
      let com_choice = com();
      if(player_choice === com_choice){
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        message.innerText="match is draw";
      }
      else if(player_choice === "rock" && com_choice==="scissor"){
             message.innerText="player win the match";
             data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
             player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "paper" && com_choice==="rock"){
        message.innerText="player win the match";
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "scissor" && com_choice==="paper"){
        message.innerText="player win the match";
        data.innerText= `player:${player_choice} \ncomputer:${com_choice}\n`;
        player.innerText=parseInt(player.innerText)+1
      }
      else{
        message.innerText=`player lose the match`;
        data.innerText= `player :${player_choice}\ncomputer:${com_choice}\n`;
        computer.innerText=parseInt(computer.innerText)+1
      }
}

boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
            let  player_choice=box.getAttribute("id");
            Game(player_choice)
        })
    }
)














// boxes.forEach((box) =>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked")
//     })
>>>>>>> 2df6027080154382e76fb1539fa6a4deb912955d:rock paper sisor game/game.js
// })