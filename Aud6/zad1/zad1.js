

function process(){

    var name = document.getElementById("ime").value
    var surname = document.getElementById("prezime").value
    var email = document.getElementById("email").value


    if (!name || !surname || !email){
        alert("Popolni gi site polinja")
        return;
    }

    let str = "Sir "+name+" " + surname + "are you sure to process your data?"

    if (confirm(str)){
        document.getElementById("input").value="Podatocite se uspeshno prateni"
    }else{
        alert("Podatocite ne se isprateni")
    }
}
