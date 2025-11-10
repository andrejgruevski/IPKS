let teams = {};

while (true) {
    let input = prompt("Vnesi ime i kod na klubot (ime:kod)");
    if (input === "@") break;

    let line = input.split(":");
    let name = line[0]; // ime na klubot
    let code = line[1]; // kod na klubot

    teams[code] = {
        name: name,
        goals: []
    }
}

while (true) {
    let input = prompt("Vnesi rezultat (kod1:kod2;timGolovi1:timGolovi2")
    if (input === "@") break;

    let line = input.split(";"); // 1:2 ; 0:4

    let codeParts = line[0].split(":"); // 1:2
    let goalsParts = line[1].split(":"); // 0:4

    let [code1, code2] = codeParts; // 1 i 2
    let [g1, g2] = goalsParts.map((s => parseInt(s))) // 0 i 4


    teams[code1].goals.push(g1);
    teams[code2].goals.push(g2);

}

let total = 0;
let codes = Object.keys(teams).sort((a, b) => Number(a) - Number(b));

codes.forEach(code => {
    let team = teams[code];
    let goalsArray = team.goals;
    let goalsText = "[" + goalsArray.join(", ") + "]";

    let sum = goalsArray.reduce((acc, g) => acc + g, 0);
    total += sum;

    console.log(`${code} ${team.name} ${goalsText}`);
})
console.log(total);
