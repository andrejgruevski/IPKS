
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
}
function visualizeBadges(){
    document.getElementById("badgesContainer").innerHTML = '';
    filteredCryptoData.forEach(element => {
        let badgeEl = document.createElement("img");
        badgeEl.src = element.image;
        badgeEl.className = "badge";

        document.getElementById("badgesContainer").appendChild(badgeEl);
    })

    anime.animate('.badge',{
        opacity: 1,
        bottom: 0,
        delay: anime.stagger(50),
        duration: 1000
    })
}
fetchData()

