function najavi(){
    let name = document.getElementById("fullname").value;
    let oznaka = document.getElementById("oznaka").value;
    let koordinati = document.getElementById("koordinati").value;
    let radius = document.getElementById("radius").value;
    let visina = document.getElementById("visina").value;
    let tip = document.getElementById("tip").value;

    if (!name || !oznaka || !koordinati || !radius || !visina) {
        alert("Мора да се пополнети сите вредности!")
        return;
    }
    if (radius > 500){
        alert("Максимален радиус е 500 метри!")
        return;
    }
    if (visina > 150){
        alert("Максимална висина е 150 метри!")
        return;
    }
    let format = /^Z3-UNR-\d{4}$/;
    if (!format.test(oznaka)){
        alert("Ознаката мора да биди во формат Z3-UNR-четири бројки")
        return;
    }


    var list = document.getElementById("list");
    var border = (tip === "Едрилица") ? "kartichkaEdrilica" : "";

    list.innerHTML += `
        <li>
        <div class="kartichki" ${border}>
        <strong>${name}, ${oznaka}</strong><br>
        Радиус: ${radius}, ${visina}<br><br>
        ${tip}<br><br>
        <button onclick="potvrdi(this)">потврди</button>
        <button onclick="otkazhi(this)">откажи</button>
        </div>
        </li>
    `
}
function potvrdi(ref){

    var kopche = ref.parentNode;
    kopche.style.background = "lightgreen"
}
function otkazhi(ref){

    let li = ref.parentNode.parentNode;
    li.remove();
}