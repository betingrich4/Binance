// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000 },
    { name: 'Ethereum (ETH)', price: 2000 },
    { name: 'Binance Coin (BNB)', price: 250 },
    { name: 'Ripple (XRP)', price: 0.5 },
    { name: 'Litecoin (LTC)', price: 100 },
    { name: 'Cardano (ADA)', price: 0.45 },
    { name: 'Polkadot (DOT)', price: 6.5 },
    { name: 'Chainlink (LINK)', price: 25 },
    { name: 'Dogecoin (DOGE)', price: 0.06 },
    { name: 'Uniswap (UNI)', price: 20 },
];

// Sample data for market trends (simulated data)
const trendData = [
    { name: 'Bitcoin (BTC)', trend: 'up' },
    { name: 'Ethereum (ETH)', trend: 'down' },
    { name: 'Binance Coin (BNB)', trend: 'up' },
    { name: 'Ripple (XRP)', trend: 'down' },
    { name: 'Litecoin (LTC)', trend: 'up' },
];

// Elements
const exchangeRateGrid = document.getElementById('exchange-rate-grid');
const trendGrid = document.getElementById('trend-grid');
const loginModal = document.getElementById('login-modal');
const openLoginBtn = document.getElementById('login-button');
const closeLoginBtn = document.getElementById('close-login-modal');

// Load exchange rates
function loadExchangeRates() {
    exchangeRateGrid.innerHTML = ''; // Clear previous data
    marketData.forEach(market => {
        const rateItem = document.createElement('div');
        rateItem.classList.add('market-item');

        const marketName = document.createElement('h3');
        marketName.textContent = market.name;

        const marketPrice = document.createElement('p');
        marketPrice.classList.add('price');
        marketPrice.textContent = `$${market.price.toLocaleString()}`;

        rateItem.appendChild(marketName);
        rateItem.appendChild(marketPrice);
        exchangeRateGrid.appendChild(rateItem);
    });
}

// Load market trends
function loadMarketTrends() {
    trendGrid.innerHTML = ''; // Clear previous data
    trendData.forEach(trend => {
        const trendItem = document.createElement('div');
        trendItem.classList.add('market-item');

        const trendName = document.createElement('h3');
        trendName.textContent = trend.name;

        const trendDirection = document.createElement('p');
        trendDirection.classList.add('trend');
        trendDirection.textContent = `Trend: ${trend.trend === 'up' ? '📈' : '📉'}`;

        trendItem.appendChild(trendName);
        trendItem.appendChild(trendDirection);
        trendGrid.appendChild(trendItem);
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadExchangeRates();
    loadMarketTrends();
});
