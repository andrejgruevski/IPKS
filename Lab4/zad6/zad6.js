// Направете веб страница каде што иницијално ќе имате текстуално поле и копче.
// Ваша задача е да при секој нов внес на карактер да го прикажете останатиот број на карактери
// кои корисникот смее да внесе.
// Доколку корисникот внесе повеќе од 30 карактери, копчето треба да се оневозможи
let text = document.getElementById("textarea");
let counter = document.getElementById("counter");
let btn = document.getElementById("btn");

let maxLength = 30;

text.addEventListener("input", function () {
    let currentLength = text.value.length;
    let remaining = maxLength - currentLength;

    if (remaining >= 0){
        counter.textContent = remaining;
    }else{
        counter.textContent = "";
    }

    btn.disabled = currentLength > maxLength;
})
