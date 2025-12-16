const weatherData = [
    {
        city: "Skopje",
        week: [
            { day: "Mon", temp: 22, condition: "Sunny" },
            { day: "Tue", temp: 24, condition: "Sunny" },
            { day: "Wed", temp: 21, condition: "Cloudy" },
            { day: "Thu", temp: 20, condition: "Rainy" },
            { day: "Fri", temp: 23, condition: "Sunny" },
            { day: "Sat", temp: 25, condition: "Sunny" },
            { day: "Sun", temp: 24, condition: "Cloudy" }
        ]
    },
    {
        city: "London",
        week: [
            { day: "Mon", temp: 15, condition: "Cloudy" },
            { day: "Tue", temp: 14, condition: "Rainy" },
            { day: "Wed", temp: 13, condition: "Rainy" },
            { day: "Thu", temp: 16, condition: "Cloudy" },
            { day: "Fri", temp: 17, condition: "Sunny" },
            { day: "Sat", temp: 18, condition: "Sunny" },
            { day: "Sun", temp: 16, condition: "Cloudy" }
        ]
    },
    {
        city: "Rome",
        week: [
            { day: "Mon", temp: 26, condition: "Sunny" },
            { day: "Tue", temp: 27, condition: "Sunny" },
            { day: "Wed", temp: 28, condition: "Sunny" },
            { day: "Thu", temp: 26, condition: "Cloudy" },
            { day: "Fri", temp: 25, condition: "Cloudy" },
            { day: "Sat", temp: 29, condition: "Sunny" },
            { day: "Sun", temp: 28, condition: "Sunny" }
        ]
    }
];
function  visualizeData(city){
    let filterData = weatherData;

    if (city){
        filterData = weatherData.filter((ct => ct.city === city))
    }
    let traces = [];
    for (let i=0; i < filterData.length; i++){
        traces.push({
            x: filterData[i].week.map(ct => ct.day),
            y: filterData[i].week.map(ct => ct.temp),
            mode: "markers+lines",
            name: filterData[i].city
        })
    }
    Plotly.newPlot("scatter", traces,{
        title: "Daily Temperature (ALL Cities)",
        xaxis: {title: "Day"},
        yaxis: {title: "Temperature"},
    })

    if (city){
        let cond = {};

        filterData[0].week.forEach(d => {
            cond[d.condition] = (cond[d.condition] || 0) + 1;
        });

        Plotly.newPlot("pie",[{
            type: "pie",
            labels: Object.keys(cond),
            values: Object.values(cond)
        }],{
            title: "Weather conditions in " + city
        })
    }else{
        document.getElementById("pie").innerHTML = "";
    }
}
visualizeData()
