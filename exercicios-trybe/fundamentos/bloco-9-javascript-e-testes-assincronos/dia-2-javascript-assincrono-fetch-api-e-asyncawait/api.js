const coinList = document.getElementById('cripto-list');

const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCriptos = async () => {
    const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    return coins;
}

const showCoins = async () => {
    const arrayCoins = await fetchCriptos();

    arrayCoins.filter((coin, index) => index < 10).forEach(
        (coin) => {
        const li = document.createElement('li');
        const price = Number(coin.priceUsd);
        
        li.innerText = `${coin.name} (${coin.symbol}): US$${price.toFixed(2)}`;

        coinList.appendChild(li);
    });
}


window.onload = () => showCoins(); 
