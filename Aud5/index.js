
// Задача 1
// Напишете ја функцијата style() која ќе го смени фонтот,
// големината и бојата на текст на параграфот
function funkcija(){
   let text = document.getElementById("text");
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.fontFamily = "monospace";
    text.style.color = "white"

    let p = document.getElementsByTagName("p")[0];
    p.style.background = "black";
}

//Задача 2
// Напишете ја функцијата getAttributes () која во конзола ќе ги
// испечати href, hreflang, rel, target, и type атрибутите на линкот

function atributes() {
    let h = document.getElementById("finkash").href;
    console.log("Linkot e: " + h);
    let r = document.getElementById("finkash").rel;
    console.log("Relot e: " + r);
}

//Задача 3
// Напишете ја функцијата isPrime() која е ќе провери дали
// случајно генерираниот број n (од 1 до 100) е прост број.
function isPrime(n){
    if (n === 1){
        return false;
    }else if (n === 2){
        return true;
    }else{
        for (let x = 2; x<n; x++){
            if (n % 2 === 0){
                return false;
            }
        }
        return true;
    }
}

//Задача 4
// Напишете програма во JavaScript која ќе поставува зелена боја
// на болдираниот текст кога покажувачот е над линкот.
function changeColor(){
    let word = document.getElementsByTagName("strong")
    for (let i = 0; i < word.length; i++){
        word[i].style.color = "green"
    }
}
function returntoNormal(){
    let word = document.getElementsByTagName("strong")
    for (let i = 0; i < word.length; i++){
        word[i].style.color = "black"
    }
}

// Задача 5
// Напишете ја функцијата getOptions() која ќе ги изброи и
// испечати сите елементи од листата
function getOptions(){
    let opts = document.getElementById("select");
    let text = ""
    for (let i = 0; i < opts.length; i++) {
        text = text + "\n" + opts.options[i].text;
    }
    alert(text)
}

//Задача 6
// Направете веб страница која ќе пресметува волумен на сфера
// за даден радиус.
function volume(){
    let volume;
    let radius = document.getElementById("radius").value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius,3);
    volume = volume.toFixed(2);
    document.getElementById("volume").value = volume;
    return false;
}
window.onload = function() {
    document.getElementById("form").onsubmit = volume;
}
