
let cryptoData = [];
let filteredCryptoData = [];
async function fetchData(){
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

 let response = await fetch(url);
    let data = await response.json();
    cryptoData = data;
    console.log(data)
    filterData(data)
}

function filterData(){
    let sortAtrribute = document.getElementById("sortSelect").value;
    let sortedData = cryptoData.sort((a,b)=> b[sortAtrribute] - a[sortAtrribute]);
    filteredCryptoData = sortedData.slice(0,30);
    console.log(filteredCryptoData);

    visualizeBadges()
    visualizePlots()
}
function visualizeBadges(){
    document.getElementById("badgesContainer").innerHTML = '';
    filteredCryptoData.forEach(element => {
        let badgeEl = document.createElement("img");
        badgeEl.src = element.image;
        badgeEl.className = "badge";
        badgeEl.onclick = compareBadges
        badgeEl.alt = element.name;
        document.getElementById("badgesContainer").appendChild(badgeEl);
    })

    anime.animate('.badge',{
        opacity: 1,
        bottom: 0,
        delay: anime.stagger(100),
        duration: 2000
    })
}
function visualizePlots(){
    var traces = {
        x: filteredCryptoData.map(element => element.name),
        y: filteredCryptoData.map((element => element.current_price)),
        type: 'scatter'
    };

    var data = [traces];
    Plotly.newPlot('line-chart',data);

    var data = [
        {
            x: filteredCryptoData.map(element => element.name),
            y: filteredCryptoData.map(element => element.price_change_percentage_24h),
            type: 'bar'
        }
    ]
    Plotly.newPlot('bar-chart',data);
}

let firstObject = null;
let secondObject = null;
function compareBadges(){
    let clickedName = this.alt;
    let clickedData = filteredCryptoData.filter(element => element.name === clickedName)[0];

    if (!firstObject){
        firstObject = clickedData;
        createCards(clickedData)
        anime.animate('.badge',{
            keyframes: [
                {scale: 1.2, duration: 700},
                {scale: 1, duration: 700},
                {scale: 1.2, duration: 700},
                {scale: 1, duration: 700},
                {scale: 1.2, duration: 700},
                {scale: 1, duration: 700},
                {scale: 1.2, duration: 700},
                {scale: 1, duration: 700},
            ]
        })
    } else if (!secondObject){
        secondObject = clickedData;
        createCards(clickedData)
        let removeCardsBtn = document.createElement("button");
        removeCardsBtn.innerHTML = 'Remove Cards'
        removeCardsBtn.onclick = removeCards

        let compareCardsBtn = document.createElement("button");
        compareCardsBtn.innerHTML = 'Compare Cards'
        compareCardsBtn.onclick = compareCards
        document.getElementById('cards-container').appendChild(removeCardsBtn)
        document.getElementById('cards-container').appendChild(compareCardsBtn)
    }
}
function removeCards(){
    let cards = document.getElementsByClassName('card')
    anime.createTimeline()
        .add(cards[0],{
            right: 200,
            opacity: 0,
            duration: 600
        })
        .add(cards[1],{
            left: 200,
            opacity: 0,
            duration: 600
        })
    setTimeout(() => {
        document.getElementById('cards-container').innerHTML = '';
        firstObject = null
        secondObject = null
    },1200)
}
function createCards(cryptoData){
    let cardEl = document.createElement("div");
    cardEl.className = "card";

    let cardTitle = document.createElement("p");
    cardTitle.innerHTML = cryptoData.symbol;

    let currentPrice = document.createElement('p');
    currentPrice.innerHTML = cryptoData.current_price;

    let cardMarketCap = document.createElement("p");
    cardMarketCap.innerHTML = cryptoData.market_cap;

    let cardTotalVolume = document.createElement("p");
    cardTotalVolume.innerHTML = cryptoData.total_volume



    cardEl.appendChild(cardTitle);
    cardEl.appendChild(cardMarketCap);
    cardEl.appendChild(currentPrice);
    cardEl.appendChild(cardTotalVolume);

    document.getElementById('cards-container').appendChild(cardEl);
}
function compareCards(){
    if (!firstObject || !secondObject)  return;

    const priceDiff = ((secondObject.current_price - firstObject.current_price) / firstObject.current_price) * 100;
    const marketCapDiff = ((secondObject.market_cap - firstObject.market_cap) / firstObject.market_cap) * 100;

    const comparisonCard = document.createElement("div");
    comparisonCard.className = "card";
    comparisonCard.style.background = 'f9f9f9'

    alert(`Comparisson Result ${firstObject.name} -> ${secondObject.name} 
    Price difference: ${priceDiff.toFixed(2)}%
    Market cap difference: ${marketCapDiff.toFixed(2)}%`)
}
fetchData()

