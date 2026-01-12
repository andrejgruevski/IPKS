let planetsData = [];
let filteredPlanets = [];

function fetchData() {

    fetch("bodies.json")
        .then(response => response.json())
        .then(data => {
            planetsData = data.bodies;
            console.log(planetsData);
            filterData()

        })
}

function filterData() {
    filteredPlanets = planetsData
        .sort((a, b) => a.meanRadius - b.meanRadius);
    visualizePlanets()
    visualizePlots()
    console.log(filteredPlanets);
}

function visualizePlanets() {
    document.getElementById("planetsContainer").innerHTML = '';
    filteredPlanets.forEach(element => {
        let planeta = document.createElement("div")
        planeta.className = 'planets'
        planeta.innerHTML = element.name;
        planeta.onclick = () => visualizePlanet(element);
        planeta.alt = element.name;
        if (element.name === 'Jupiter') {
            planeta.style.background = "#e59524"
        } else if (element.name === 'Saturn') {
            planeta.style.background = "#fcce8a"
        } else if (element.name === 'Uranus') {
            planeta.style.background = "#3dc2d6"
        } else if (element.name === 'Neptune') {
            planeta.style.background = "#4c81b0"
        } else if (element.name === 'Earth') {
            planeta.style.background = "#65b6c6"
        } else if (element.name === 'Venus') {
            planeta.style.background = "#fb8a78"
        } else if (element.name === 'Mars') {
            planeta.style.background = "#c95542"
        } else if (element.name === 'Mercury') {
            planeta.style.background = "#c8c2a9"
        }
        document.getElementById("planetsContainer").appendChild(planeta);
    })
    anime.animate('.planets', {
        opacity: 1,
        right: 0,
        scale: [0, 1],
        easing: "easeOutExpo",
        delay: anime.stagger(50),
        duration: 1000,

    })
}
function visualizePlots(){

    var barTrace = {
        x: filteredPlanets.map(element => element.name ),
        y: filteredPlanets.map(element => element.moons.length),
        type: 'bar'
    }
    Plotly.newPlot('bar-chart', [barTrace])

    var lineTrace = {
        x: filteredPlanets.map(element => element.name),
        y: filteredPlanets.map(element => element.gravity),
        type: 'scatter',

    }
    Plotly.newPlot('line-chart',[lineTrace]);
}
function visualizePlanet(planetsData){
    let card = document.createElement('div');
    card.className = 'card';

    let gravity = document.createElement('p')
    gravity.innerHTML = "Gravity: "+planetsData.gravity+" m/s^2"
    let escaoeVelocity = document.createElement('p')
    escaoeVelocity.innerHTML = "Escape Velocity: "+planetsData.escape+" m/s"
    let mass = document.createElement('p')
    mass.innerHTML = "Mass: "+planetsData.mass+" kg"
    let density = document.createElement('p')
    gravity.innerHTML = "Density: "+planetsData.density+" g/cm"
    let sideralOrbit = document.createElement('p')
    sideralOrbit.innerHTML = "Orbital period: "+planetsData.sideralOrbit+" days"

    card.appendChild(gravity)
    card.appendChild(escaoeVelocity)
    card.appendChild(mass)
    card.appendChild(density)
    card.appendChild(sideralOrbit)

    document.getElementById('cardCont').appendChild(card);

}
fetchData()