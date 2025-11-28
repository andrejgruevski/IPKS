let n = 0;
function procesiraj(){
    var name = document.getElementById("fullname").value;
    var amount = document.getElementById("amount").value;
    var code = document.getElementById("code").value;
    var comb = document.getElementById("comb").value;
    var bonus = document.getElementById("bonus").value;

    if (!name || !amount || !code || !comb){
        alert("Please enter all fields")
        return;
    }
    if (code.indexOf('%') !== -1 || code.indexOf('!')!==-1){
        alert("Please enter valid code")
        return;
    }
    for (let i =0; i<10; i++){
        if (code.indexOf(i) !== -1){
            alert("Code should not contain numbers")
            return;
        }
    }
    let combination = comb.split(',')
    let topchina = ""
    for (let i =0; i<combination.length; i++){
        topchina += "<span class='topche'>"+combination[i]+"</span>"
    }
    n++;
    var cards = document.getElementById("cards")
    cards.innerHTML += "<div class='kartichka'><p>Name: "+name+"</p><p>Code: "+code+"</p><p>Combination: "+topchina+"</p><p>Initial amount:<span class='cost'>"+amount+"</span></p></div>"


}
function getNumbers(){
    if (n<5){
        return;
    }
    let borjchina =[]
    for (let i =0; i<7; i++){
        let broj = parseInt(Math.random()*31)+1;
        let flag = 1;
        for (let j =0;j<i;j++){
            if (borjchina[i] === broj){
                i--;
                flag = 0;
                break;
            }
        }
        if (flag === 1){
            borjchina[i] = broj;
        }
    }
    let topchina = "";
    for (let i =0; i<borjchina.length; i++){
        topchina += "<span class='topche'>"+borjchina[i]+"</span>"
    }
    var numbers = document.getElementById("numbers")
    numbers.innerHTML += topchina;

    let kartichki = document.getElementsByClassName("kartichka")
    for (let i =0; i<kartichki.length; i++){
        let iTopche = kartichki[i].getElementsByClassName("topche")
        let matched = 0;
        for (let j =0; j<7; j++){
            if (borjchina.indexOf(parseInt(iTopche[j].innerHTML))!==-1){
                matched++;
            }
        }

        if (matched <= 3){
            kartichki[i].style.backgroundColor = "lightyellow";
        }else if (matched <=5){
            kartichki[i].style.backgroundColor = "lightblue";
        }else {
            kartichki[i].style.backgroundColor = "lightgreen";
        }

        kartichki[i].innerHTML += "<button onclick='getPaid(this)'>Get paid</button>"
    }

}
function getPaid(paid){
    let card = paid.parentNode;
    card.parentNode.removeChild(card);
}