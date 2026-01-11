const data = {
    game: {
        players: [
            {"name": "Luigi", "nickname": "eypfk2^", "amount": "93", "sign": "1"},
            {"name": "Bambs", "nickname": "k@me%k", "amount": "210", "sign": "3"},
            {"name": "Mayru", "nickname": "mr4Plw2", "amount": "15", "sign": "4"},
            {"name": "Ansur", "nickname": "ppe@#5j$", "amount": "120", "sign": "1"},
            {"name": "Ruris", "nickname": "ma8!e", "amount": "10", "sign": "2"},
            {"name": "Rimis", "nickname": "lp4eb!", "amount": "50", "sign": "3"},
            {"name": "Dusek", "nickname": "o3setr", "amount": "100", "sign": "1"},
            {"name": "Kilis", "nickname": "jwosi3^", "amount": "20", "sign": "3"},
            {"name": "Miker", "nickname": "sl4ea^", "amount": "55", "sign": "2"}
        ]
    }
}
let winners = [0, 0, 0, 0];
let totalAmounts = [0, 0, 0, 0];
let counter = 0;

const container = document.getElementById("players");

data.game.players.forEach(player => {
    if (player.nickname.includes('@') || player.nickname.includes('5')) return;

    const card = document.createElement("div");
    card.className = "card sign" + player.sign;
    card.innerHTML = `
    <p>${player.name}</p>
    <p>Amount: ${player.amount}</p>
    <p>Type: ${player.sign}</p>
    <p class="plus"></p>
    `;
    container.appendChild(card);
    totalAmounts[player.sign - 1] += parseInt(player.amount);
});

function startGame() {
    counter = 0;
    document.getElementById("symbolImg").style.display = "inline";
    spin()
}

function spin() {
    if (counter == 10) {
        let win = Math.floor(Math.random() * 4) + 1;
        document.getElementById("winnerText").innerHTML = "Winner symbol: " + win;
        winners[win - 1]++;

        document.querySelectorAll(".sign" + win).forEach(c => {
            c.querySelector(".plus").innerHTML += "+";
        });
        return;
    }
    counter++;
    let rand = Math.floor(Math.random() * 4) + 1;
    document.getElementById("symbolImg").src = rand + ".jpg";
    setTimeout(spin, 200);
}

function showStats() {
    winners.forEach((w, i) => {
        if (w === 0) {
            document.querySelectorAll(".sign" + (i + 1)).forEach(c => c.remove());
        }
    });

    Plotly.newPlot("chart1", [{
        x: ["Type1", "Type2", "Type3", "Type4",],
        y: totalAmounts,
        type: "bar"
    }]);

    Plotly.newPlot("chart2", [{
        x: ["Type1", "Type2", "Type3", "Type4",],
        y: winners,
        type: "bar"
    }]);
}
let flagStats = false;
function toggleStats() {
    const stats = document.getElementById("stats");
    const btn = event.target;

    if (!flagStats) {
        showStats();
        stats.style.display = "block";
        btn.innerText = "Hide Stats";
    }else{
        stats.style.display = "none";
        btn.innerText = "Show Stats";
    }
    flagStats = !flagStats;
}