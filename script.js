// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000 },
    { name: 'Ethereum (ETH)', price: 2000 },
    { name: 'Binance Coin (BNB)', price: 250 },
    { name: 'Ripple (XRP)', price: 0.5 },
    { name: 'Cardano (ADA)', price: 1.5 },
    { name: 'Solana (SOL)', price: 22 },
    { name: 'Polkadot (DOT)', price: 5.5 },
// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000, change: 0.5 }, // Positive change
    { name: 'Ethereum (ETH)', price: 2000, change: -1.2 }, // Negative change
    { name: 'Binance Coin (BNB)', price: 250, change: 2.3 }, // Positive change
    { name: 'Ripple (XRP)', price: 0.5, change: -0.1 } // Negative change
];

// Elements
const marketGrid = document.getElementById('market-grid');

// Load markets with dummy data
function loadMarkets() {
    marketGrid.innerHTML = ''; // Clear previous data
    marketData.forEach(market => {
        const marketItem = document.createElement('div');
        marketItem.classList.add('market-item');

        const marketName = document.createElement('h3');
        marketName.textContent = market.name;

        const marketPrice = document.createElement('p');
        marketPrice.classList.add('price');
        marketPrice.textContent = `$${market.price.toLocaleString()}`;

        // Create change indicator
        const changeIndicator = document.createElement('span');
        changeIndicator.classList.add('change-indicator');
        changeIndicator.textContent = `${market.change.toFixed(2)}%`;
        changeIndicator.style.color = market.change > 0 ? 'green' : 'red'; // Green if positive, red if negative

        // Append elements
        marketItem.appendChild(marketName);
        marketItem.appendChild(marketPrice);
        marketItem.appendChild(changeIndicator);
        marketGrid.appendChild(marketItem);
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadMarkets();
});
