let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#para");
let newturn=document.querySelector("#undo");

let turn0= true;
let lastBox=null;
let lastValue="";
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
       if(turn0==true){
        box.innerText="O";
        lastValue="0";
        turn0=false;
       }
       else{
        box.innerText="X";
        lastValue="X";
        turn0=true;
       }
       box.disabled=true;
       lastBox=box;
       checkWinner();
    });
});
const disableBoxes=()=>{
   for(let box of boxes){
    box.disabled=true;
   } 
}
const enableBoxes=()=>{
   for(let box of boxes){
    box.disabled=false;
    box.innerText="";
   } 
}
const resetGame=()=>{
turn0=true;
enableBoxes();
msgContainer.classList.add("hide");
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation!, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
for(let pattern of winPatterns){
    
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }
}
};
newturn.addEventListener("click",()=>{
    if(lastBox!==null){
        lastBox.innerText="";
        lastBox.disabled=false;
        turn0=!turn0;
        lastBox=null;
    }
});
newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
