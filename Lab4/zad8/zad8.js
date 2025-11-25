let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let playground = document.getElementById("playground");
let totalFires =20;
let collected = 0;
document.addEventListener("keydown", function (e) {
    let step = 15;

    let top = p1.offsetTop;
    let left = p1.offsetLeft;

    let WIDTH = playground.clientWidth;
    let HEIGHT = playground.clientHeight;

    let playerW = p1.clientWidth;
    let playerH = p1.clientHeight;


    switch (e.key) {

        case "ArrowUp":
            if (top - step >= 0) {
                p1.style.top = (top - step) + "px";
            }
            break;

        case "ArrowDown":
            if (top + playerH + step <= HEIGHT) {
                p1.style.top = (top + step) + "px";
            }
            break;

        case "ArrowLeft":
            if (left - step >= 0) {
                p1.style.left = (left - step) + "px";
            }
            break;

        case "ArrowRight":
            if (left + playerW + step <= WIDTH) {
                p1.style.left = (left + step) + "px";
            }
            break;
    }
})
function spawnFire(){
    for (let i =0; i<totalFires; i++){
        let f = document.createElement("div");
        f.classList.add("fire");
        let x = Math.random() * (playground.clientWidth - 10);
        let y = Math.random() * (playground.clientHeight - 10);

        f.style.left = x + "px";
        f.style.top = y + "px";

        playground.appendChild(f);

        animateFire(f);
    }
}

function animateFire(fire){
    let dir = Math.random() < 0.5 ? 1 : -1;
    let speed = 1 + Math.random() * 2;

    function move(){
        let left = fire.offsetLeft;
        let newLeft = left + dir * speed;

        if (newLeft <=0 || newLeft >= playground.clientWidth-10) {
            dir *= -1;
        }
        fire.style.left = newLeft + "px";
        if (collisionCheck(fire,p1)){
            fire.remove();
            collected++;

            if (collected === totalFires){
                alert("You WIN!")
            }
            return;
        }
        requestAnimationFrame(move);
    }
    move();
}
function collisionCheck(a,b){
    let ar = a.getBoundingClientRect();
    let br = b.getBoundingClientRect();
    return !(ar.right < br.left || ar.left > br.right || ar.bottom < br.top || ar.top > br.bottom);
}
spawnFire();
