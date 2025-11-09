const person1 = {
    firstName: "Andrej",
    lastName: "Gruevski",
    age: 22,
    isEmployed: false,
    sayHello: function (){
        console.log("Hello, im student at FINKI")
    },

}
const person2 = {
    firstName: "Darko",
    lastName: "Stojanovski",
    age: 22,
    isEmployed: true,
    sayHello:  () => {
        console.log("Hello, im football player at")
    }
}

// Напишете JavaScript програма која ќе ги прикаже сите атрибути
// на даден објект
for (let key in person1 ) {
    console.log(person1[key]);
}
let keys = Object.keys(person2);
keys.forEach(key =>console.log(person2[key]));


