function addItems() {
    var name = document.getElementById("fullname").value;
    var item = document.getElementById("item").value;
    var itemCode = document.getElementById("code").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var select = document.getElementById("select").value;

    if (!name || !itemCode || !item || !desc || !price) {
        alert("Please enter valid data format!");
        return;
    }
    if (price <= 0){
        alert("Price must be greater than 0");
        return;
    }

    let kataloshki = itemCode.replace(/[0-9!]/g, "");

    var tableNever = document.getElementById("never-used");
    var used = document.getElementById("used");
    if (select === 'Used') {
        console.log(select)
        used.innerHTML +=
            ` 
        <tr>
         <td>${name}</td>
        <td>${item}</td>
        <td>${(price *= 1.1).toFixed(1)}</td>
        <td>${itemCode}</td>
        <td>${kataloshki}</td>
        <td><button onclick="sold(this)">SOLD</button></td>
        </tr>
        `
    } else {
        console.log(select)

        tableNever.innerHTML +=
            ` 
        <tr>
        <td>${name}</td>
        <td>${item}</td>
        <td>${(price *= 1.1).toFixed(1)}</td>
        <td>${itemCode}</td>
        <td>${kataloshki}</td>
        <td><button onclick="sold(this)">SOLD</button></td>
        </tr>
        `
    }

}
function sold(kopche) {
    var redica = kopche.parentNode.parentNode;
    redica.style.background = "yellow";
    kopche.remove();

}