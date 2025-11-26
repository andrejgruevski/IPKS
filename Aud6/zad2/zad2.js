function isprati(){
    var author = document.getElementById("author").value;
    var project = document.getElementById("project").value;
    var price = document.getElementById("price").value;

    if (!author || !project || !price) {
        alert("Enter valid project details")
        return;
    }

    var table = document.getElementById("table");

    table.innerHTML += `<tr>
        <td>${author}</td>
        <td>${project}</td>
        <td>${price}</td>
        <td><button id="remove" onclick="remove(this)">remove</button></td>
    </tr>`
    var total = document.getElementById("totalCost");
    var current = parseInt(total.innerHTML);
    var priceNum= parseInt(price);
    total.innerHTML = current + priceNum;

}
function remove(ref){


    let redica = ref.parentNode.parentNode;
    var price = parseInt(redica.children[2].innerHTML)
    var total = document.getElementById("totalCost");
    var current = parseInt(total.innerHTML);
    total.innerHTML = current - price;
    redica.parentNode.removeChild(redica);

}