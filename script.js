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
    { name: 'Stellar (XLM)', price: 0.1 },
    { name: 'Bitcoin Cash (BCH)', price: 150 },
    { name: 'Solana (SOL)', price: 20 },
    { name: 'Avalanche (AVAX)', price: 12 },
    { name: 'Tezos (XTZ)', price: 1.5 },
];

// Elements
const marketGrid = document.getElementById('market-grid');
const loginModal = document.getElementById('login-modal');
const openLoginBtn = document.getElementById('login-button');
const closeLoginBtn = document.getElementById('close-login-modal');

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

// Open login modal
openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close login modal
closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadMarkets();
});
