const zones = [
    "Europe/Skopje",
    "America/New_York",
    "Asia/Tokyo"
];

zones.forEach(zone => loadClock(zone));

function loadClock(zone) {
    const url = `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`;

    fetch(url)
        .then(res => res.json())
        .then(data => createClock(data))
        .catch(err => console.error(err));
}

function createClock(data) {
    const container = document.createElement("div");
    container.className = "clock-container";

    container.innerHTML = `
        <div class="clock">
            <div class="hand hour"></div>
            <div class="hand minute"></div>
            <div class="hand second"></div>
        </div>
        <div class="info">
            <p><strong>${data.timeZone}</strong></p>
            <p>Date: ${data.date}</p>
            <p>Day: ${data.dayOfWeek}</p>
        </div>
    `;

    document.getElementById("clocks").appendChild(container);

    const hourHand = container.querySelector(".hour");
    const minuteHand = container.querySelector(".minute");
    const secondHand = container.querySelector(".second");


    let time = new Date(data.dateTime);

    function tick() {
        const seconds = time.getSeconds();
        const minutes = time.getMinutes();
        const hours = time.getHours();


        secondHand.style.transform =
            `translateX(-50%) rotate(${seconds * 6}deg)`;


        minuteHand.style.transform =
            `translateX(-50%) rotate(${minutes * 6}deg)`;


        hourHand.style.transform =
            `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;


        time.setSeconds(time.getSeconds() + 1);
    }

    tick();
    setInterval(tick, 1000);
}
