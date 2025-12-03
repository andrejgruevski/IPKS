function najdi() {

    var owner = document.getElementById("ownername").value;
    var date = document.getElementById("date").value;
    var img = document.getElementById("image").value;
    var gender = document.getElementById("gender").value;


    var cards = document.getElementById("cards");
    if (gender === "Male") {
        cards.innerHTML += "<div class='card' style='border: 2px solid blue'><p>Owner: " + owner + "</p><p>Last seen: " + date + "</p><img src=" + img + "><div><button onclick='found(this)'>pet found</button><button onclick='izbrishi(this)'>delete</button></div></div>"

    } else {
        cards.innerHTML += "<div class='card' style='border: 2px solid pink'><p>Owner: " + owner + "</p><p>Last seen: " + date + "</p><img src=" + img + "><div><button onclick='found(this)'>pet found</button><button onclick='izbrishi(this)'>delete</button></div></div>"

    }
}

let counter = 0;

function found(kopche) {

    let card = kopche.parentNode;
    card.parentNode.style.background = "green"
    card.children[0].disabled = true;
    card.children[1].disabled = true;
    counter++;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
}

function izbrishi(kopche) {

    kopche.closest(".card").remove();

}