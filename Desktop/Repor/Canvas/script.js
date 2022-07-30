let myCanvas = document.getElementById("my-canvas");
let input = document.getElementById('msgbtn');

const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;


let pen = myCanvas.getContext("2d");

// function draw(doDai){
    // set stroke color
   
// }

// let chieuDaiRang = [50, 100, 160, 165, 170]
// let i = 0;
const FPS = 100;
let doDai=160;
let direction=1;
let startFrameTime = Date.now();
function gameLoop() {
  pen.clearRect(0, 0, WIDTH, HEIGHT);
  let currentFrameTime = Date.now();
  let deltaTime = currentFrameTime - startFrameTime;

  let actualFPS = 1000 / deltaTime;
  pen.textStyle = "20px Arial";
  pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 30);
  
  // draw a ball
  
    // if(!chieuDaiRang[i]) {
    //     i=0;
    // }
    // draw(chieuDaiRang[i])
    // i++;
    
  startFrameTime = currentFrameTime;
  pen.strokeStyle = "blue";

  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2);
  pen.fillStyle="orange";
  pen.fill();
  pen.stroke();
  pen.closePath();
  // pen.beginPath();
  // pen.strokeStyle = "red";

  // pen.moveTo(WIDTH / 2 - 200, HEIGHT / 2);
  // pen.lineTo(WIDTH / 2 + 200, HEIGHT / 2);
  // pen.stroke();

  // pen.beginPath();
  // pen.fillStyle = "blue";
  // pen.fillRect(WIDTH / 2 - 100, HEIGHT / 2 - 100, 200, Math.PI,Math.PI*2);

  pen.beginPath(); //miệng
  pen.strokeStyle = "black";

  pen.arc(WIDTH /2, HEIGHT / 2+50, 100, Math.PI*2, Math.PI );
  pen.stroke();
pen.closePath();
  pen.beginPath();//mắt phải
  pen.fillStyle="blue";
  pen.arc(WIDTH /2+100, HEIGHT /2-60, 30, 0, Math.PI*2 );
  pen.fill();
  pen.stroke();

  pen.beginPath();//mắt trái
  pen.fillStyle="red"
  pen.arc(WIDTH /2-100, HEIGHT /2-60, 30, 0, Math.PI*2 );
  pen.fill();
  pen.stroke();

  pen.beginPath();//miệng
  pen.strokeStyle = "black";

  pen.moveTo(WIDTH / 2 - 100, HEIGHT / 2+50);
  pen.lineTo(WIDTH / 2 + 100, HEIGHT / 2+50);
  pen.stroke();

  pen.beginPath();//mũi
  pen.arc(WIDTH /2-5, HEIGHT /2-10, 30, 0, Math.PI*2 );
  pen.stroke();
  pen.fillStyle="black"
  pen.fill();

  pen.beginPath();//răng 
  pen.moveTo(WIDTH/2+50,HEIGHT/2+50);
  pen.lineTo(WIDTH/2+100, HEIGHT/2+50);
  pen.lineTo(WIDTH/2+75, HEIGHT/2+doDai );  
  pen.stroke();
  pen.fillStyle="black"
  pen.fill();

  pen.beginPath();//răng 
  pen.moveTo(WIDTH/2-50,HEIGHT/2+50);
  pen.lineTo(WIDTH/2-100, HEIGHT/2+50);
  pen.lineTo(WIDTH/2-75, HEIGHT/2+doDai );   
  pen.stroke();
  pen.fillStyle="black"
  pen.fill();

  if(doDai>160)
  {
    direction=-1;
  }
  if(doDai<50)
  {
    direction=1;
  }
  doDai+=direction*0.25;
}
//input.onclick = gameLoop()
setInterval(gameLoop, 1000 / FPS);
