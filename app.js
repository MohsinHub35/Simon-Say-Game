let gamseq=[];
let userseq=[];
let start=false;

let level=0;

let btns=["yellow","red","blue","grey"];
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(start==false){

        console.log("game started");
        start=true;
        levelUp();

    }

   
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);


}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);


}


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gamseq.push(randColor);
    console.log(gamseq);
    gameflash(randbtn);

}
function checkAns(idx){
    // console.log(" curr Level: ",level);
    // let idx=level-1;
    if(userseq[idx] === gamseq[idx]){
        if(userseq.length==gamseq.length){
            setTimeout(levelUp,1000);
        }
         // console.log("same value");
    }
    else {
        h2.innerHTML=`Game over!.Your Score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";

        },150);
        reset();
        
    }
}    


function btnPress(){
   
    let btn=this;
    console.log(this);
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
     start=false;
     gamseq=[];
    userseq=[];
    

     level=0;
}
