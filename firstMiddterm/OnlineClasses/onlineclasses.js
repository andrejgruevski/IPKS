function addData(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var username = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var role = document.getElementById("role").value;
    var users ={
        fullname: fullname,
        email: email,
        age: age,
        username: username,
        password: pw,
        role: role,
    }
    if (!fullname || !email || !pw || !age || !role || !username) {
        alert("Please enter valid data format!");
        return;
    }
    if (pw.length<10){
        alert("Password must be at least 10 charactesrs");
        return;
    }
    if (users.age < 18 && users.role === "teacher"){
        alert("Teacher must be older than 18y")
        return;
    }
    var table = document.getElementById("users");
    var counter = document.getElementById("counter").innerHTML;
    if (users.role === "teacher"){
        counter= parseInt(counter)+1;
        document.getElementById("counter").innerHTML = counter;
        console.log(counter);
        table.innerHTML += `
        <tr style="background-color: lightgreen">
        <td>${fullname}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${role}</td>
        <td><button onclick="hire(this)">Hire</button></td>
        </tr>
    `
    }else{
        table.innerHTML += `  
        <tr style="background-color: lightblue">
        <td>${fullname}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${role}</td>
        </tr>
    `
    }
}
function hire(ref){
    let redica = ref.parentNode.parentNode;
    redica.style.background = "grey"
    ref.remove();
    var counter = document.getElementById("counter").innerHTML;
    counter= parseInt(counter)-1;
    document.getElementById("counter").innerHTML = counter;
}