function pw(){
    let current = ""
    let p = document.getElementById("password").value;

    document.getElementById("weak").className = "ind"
    document.getElementById("medium").className = "ind"
    document.getElementById("strong").className = "ind"

    if (p.length <=4){
        document.getElementById("weak").classList.add("active")
        current = "weak";
        return;
    }
    let hasUpp = /[A-Z]/.test(p)
    let hasDigit = /\d/.test(p)

    if (p.length <=7 && (hasUpp || hasDigit)){
        document.getElementById("medium").classList.add("mediumActive")
        current = "medium";
        return;
    }

    let hasSymbol = /[^a-zA-Z0-9]/.test(p)
    if (p.length > 7 && (hasUpp || hasDigit) && hasSymbol){
        document.getElementById("strong").classList.add("strongActive")
        current = "strong";
        return;
    }
}