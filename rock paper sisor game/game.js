const player =document.getElementById("pl-score");
const computer=document.getElementById("com-score");
let boxes =document.querySelectorAll(".box");
let message =document.getElementById("msg");

 let com = function comgen(){
   let option = ["rock"," paper","scissor"]
   indx=Math.floor (Math.random()*3);
   return option[indx]
}

function Game(player_choice){
      console.log("player choose:",player_choice);
      console.log("computer choose",com());
      if(player_choice === com()){
        message.innerText="match is draw"
      }
      else if(player_choice === "rock" && com()==="scissor"){
             message.innerText="player win the match";
             player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "paper" && com()==="rock"){
        message.innerText="player win the match";
        player.innerText=parseInt(player.innerText)+1
      }
      else if(player_choice === "scissor" && com()==="paper"){
        message.innerText="player win the match"
        player.innetText=parsenInt(player.innerText)+1
      }
      else{
        message.innerText="player lose the match";
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
// })