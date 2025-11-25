// Креирајте веб страница која иницијално има само едно копче.
// При hover на копчето, истото се преместува на друга страна на екранот.
// Дополнителни при секое преместување на копчето, се менува бојата и
// големината на истото
function hover(){
    let btn = document.getElementById('btn');
    btn.style.transform += "scale(1.2)";
    btn.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    btn.style.top = Math.floor(Math.random()*60) + "%";
    btn.style.left = Math.floor(Math.random()*60) + "%";
}

