
function makeBubble(){
var clutter="";
for(var i=1;i<=126;i++){
    var rn= Math.floor(Math.random()*10);
clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

var score =0;
var Hitrn=0;
var timer=60;



function getNewHit(){
    Hitrn=Math.floor(Math.random()*10);
    if(Hitrn>9){
        getNewHit();
    }else{
         document.querySelector("#hitval").textContent=Hitrn;
    }
   
}


function IncreaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednum=Number(dets.target.textContent);
    if(clickednum===Hitrn){
        IncreaseScore();
        makeBubble();
        getNewHit();
    }
});

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `
                <div class="game-over">
                    <h1>Game Over</h1>
                    <p>Your final score is: <strong>${score}</strong></p>
                    <button id="restartBtn">Restart Game</button>
                </div>
            `;

            document.querySelector("#restartBtn").addEventListener("click", function () {
                score = 0;
                timer = 60;
                document.querySelector("#scoreval").textContent = score;
                document.querySelector("#timerval").textContent = timer;
                makeBubble();
                getNewHit();
                runTimer();
            });
        }
    }, 1000);
}


runTimer();
makeBubble();
getNewHit();