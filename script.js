// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000 },
    { name: 'Ethereum (ETH)', price: 2000 },
    { name: 'Binance Coin (BNB)', price: 250 },
    { name: 'Ripple (XRP)', price: 0.5 },
    { name: 'Cardano (ADA)', price: 1.5 },
    { name: 'Solana (SOL)', price: 22 },
    { name: 'Polkadot (DOT)', price: 5.5 },
    { name: 'Litecoin (LTC)', price: 150 },
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

        marketItem.appendChild(marketName);
        marketItem.appendChild(marketPrice);
        marketGrid.appendChild(marketItem);
    });
}

// Simulate price changes every few seconds
function simulatePriceUpdates() {
    marketData.forEach(market => {
        // Randomly adjust the price by +/- 1%
        const priceChange = market.price * (Math.random() * 0.02 - 0.01);
        market.price = parseFloat((market.price + priceChange).toFixed(2));
    });
    loadMarkets();
}

// Set up interval for simulated price updates
setInterval(simulatePriceUpdates, 3000); // Update every 3 seconds

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadMarkets();
});
