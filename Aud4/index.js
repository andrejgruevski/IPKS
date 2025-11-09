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

// Задача 1
// Напишете JavaScript програма која ќе ги прикаже сите атрибути
// на даден објект
for (let key in person1 ) {
    console.log(person1[key]);
}
let keys = Object.keys(person2);
keys.forEach(key =>console.log(person2[key]));

// Задача 2
// Напишете JavaScript програма која ќе гo избрише атрибутот
// rollno од следниот објект
let student = {
    name: "Viktor",
    sclass: "PIT",
    rollno: "12"
}
console.log(student);
delete student.rollno;
console.log(student);


// Задача 3
// Напишете JavaScript програма која во конзола ќе ги испечати
// податоците за следните објекти (книга, автор и статус)
let library =[
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The final Book of The Hunger Games",
        readingStatus: false
    }
]
for (let i =0; i<library.length; i++) {
    console.log("Book: " + (i + 1) + ":");
    console.log(("Author: " + library[i].author));
    console.log(("Title: " + library[i].title));
    console.log(("Reading Status: " + library[i].author));
    console.log(("----------------------"));
}

// Задача 4
// Напишете JavaScript функција која ќе трансформира објект во
// листа од `[key,value]` парови
function objectToList(obj){
    return Object.entries(obj);
}
let colors = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
console.log(objectToList(colors));