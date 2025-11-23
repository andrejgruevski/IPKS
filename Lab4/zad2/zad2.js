function show(){
    let items = document.getElementById('items').value
    let type = document.getElementById('type').value

    if (!items){
        alert("Пополни ги сите полиња")
        return;
    }
    let splitItems = items.split(',');

    let container = document.getElementById('container');

    container.innerHTML = "";
    for (let item of splitItems) {
        container.innerHTML += `
            <input type="${type}"/> ${item}
        `
    }
}
