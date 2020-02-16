console.log('HELLOS')
//create canvas
const canvas = document.createElement('canvas');
canvas.id = 'canvasBg';
document.body.appendChild(canvas); 
canvas.style.position="absolute";
canvas.style.zIndex = "999999999";
canvas.style.left="0";
canvas.style.top="0";

//canvas bg
const canvasBg = document.getElementById('canvasBg');

//flash light mousemove 
const light = {
        posX: 0,
        posY: 0,
        radius: 30
    };

//canvas full width+height
canvasBg.width = window.outerWidth;
canvasBg.height =  document.getElementsByTagName('body')[0].scrollHeight;

//mouse follow
canvasBg.addEventListener('mousemove', function (evt) {
    lightPosition(evt);
    flash();
}, false);

window.addEventListener('resize', function () {
    flash();
}, false);

let lightPosition= function (evt) {
    //track mouse Position
    //credit: stack overflow
    let rect = canvasBg.getBoundingClientRect();
    light.posX = evt.clientX - rect.left;
    light.posY = evt.clientY - rect.top;
}

let flash = function () {
    let ctx = canvasBg.getContext('2d');

    ctx.save();
    ctx.clearRect(0, 0, canvasBg.width, canvasBg.height);
    //canvas Color
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvasBg.width, canvasBg.height);

    //Canvas 2D API that applies masking
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(light.posX, light.posY, light.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(255, 255, 255, 1)';
    ctx.fill();
    ctx.restore();
}



document.addEventListener("keydown",function(event){
    console.log(event.which);
});


// document.onkeypress = function(evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 68) {
//         alert("Esc was pressed");
//     }
// };
// ar oldcanv = document.getElementById('canvas');
// document.removeChild(oldcanv)