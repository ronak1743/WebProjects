let gameseq=[];
let userseq=[];
let butns=["yellow","red","purple","green"];
let start=false;
let level=0;
let heighest=0;

let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(start==false){
        console.log("gamestarted");
        start=true;

        levelup();
    }
});

function levelup(){
    userseq=[];
    heighest=Math.max(heighest,level);
    level++;
    document.querySelector("h3").innerHTML="Heighest :"+heighest;
    h2.innerText="Level "+level;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=butns[randIdx];
    let randbtn=document.querySelector("."+randColor);
    gameseq.push(randColor);
    btnflash(randbtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(idx){
    // let idx=level-1;

    if(userseq[idx]==gameseq[idx]){
        console.log("right");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML="GameOver! Your score was <b>"+level+"</b><br>press any key to start";
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        resate();
    }

    
}
function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
     
    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function resate(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}