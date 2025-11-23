function add(){
    let data = [];
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let indeks = document.getElementById("indeks").value;
    let subject = document.getElementById("subject").value;
    let grade = document.getElementById("grade").value;

    if (!(name && surname && indeks && subject)){
        alert("Пополнете ги сите полиња");
        return;
    }

    let newData = {
        name: name,
        surname: surname,
        indeks: indeks,
        subject: subject,
        grade: grade,
    }
    let table = document.getElementById("table");

    table.innerHTML += `
        <tr>
        <td>${newData.name}</td>
        <td>${newData.surname}</td>
        <td>${newData.indeks}</td>
        <td>${newData.subject}</td>
        <td>${newData.grade}</td>
        </tr>
    `
    data = [...data, newData];
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("indeks").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("grade").value = "5 (пет)";

}