let input = "124,Jane,Doe,28,42,55,37,49;125,Emily,Johnson,40,32,17,34,29;"

let runners = input.split(";");

let avg1 = Infinity
let bestRunner = "";

for (let i = 0; i < runners.length; i++) {
    let line = runners[i];


    let parts = line.split(",");
    let code = parts[0];
    let name = parts[1];
    let surname = parts[2];

    let total = 0;
    let counter = 0;

    for (let j = 3; j < parts.length; j++) {
        total += parseInt(parts[j]);
        counter++;
    }
    let avg = total / counter;
    if (avg < avg1) {
        avg1 = avg;
        bestRunner = name + " "+ surname;
    }
}
console.log("najdobar trkach " + bestRunner);