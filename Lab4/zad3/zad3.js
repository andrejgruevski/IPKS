function changeBall(){

    let ball = document.getElementById("eclipse");
    ball.style.background = "pink";
    ball.style.transform = "scale(1.2)";
}
function returnBall(){
    let ball = document.getElementById("eclipse");
    ball.style.background = "red";
    ball.style.transform = "scale(1)";

}
function onBounce(){
    let ball = document.getElementById("eclipse");
    ball.style.top = Math.floor(Math.random() * 60) + "%";
    ball.style.left = Math.floor(Math.random() * 60) + "%"
    ball.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
}