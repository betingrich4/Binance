// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000, trend: 'up' },
    { name: 'Ethereum (ETH)', price: 2000, trend: 'down' },
    { name: 'Binance Coin (BNB)', price: 250, trend: 'up' },
    { name: 'Ripple (XRP)', price: 0.5, trend: 'up' },
    { name: 'Cardano (ADA)', price: 0.35, trend: 'down' },
    { name: 'Solana (SOL)', price: 15, trend: 'up' },
    { name: 'Polkadot (DOT)', price: 6, trend: 'down' },
    { name: 'Dogecoin (DOGE)', price: 0.07, trend: 'up' },
    { name: 'Litecoin (LTC)', price: 90, trend: 'up' },
    { name: 'Chainlink (LINK)', price: 7.5, trend: 'down' },
    { name: 'Stellar (XLM)', price: 0.12, trend: 'up' },
    { name: 'Uniswap (UNI)', price: 6.5, trend: 'down' },
    { name: 'Avalanche (AVAX)', price: 20, trend: 'up' },
    { name: 'Ethereum Classic (ETC)', price: 18, trend: 'down' },
    { name: 'VeChain (VET)', price: 0.02, trend: 'up' }
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

        const trendIcon = document.createElement('span');
        trendIcon.classList.add('trend-icon');
        trendIcon.innerHTML = market.trend === 'up' ? '&#8593;' : '&#8595;';
        trendIcon.style.color = market.trend === 'up' ? 'green' : 'red';

        marketItem.appendChild(marketName);
        marketItem.appendChild(marketPrice);
        marketItem.appendChild(trendIcon);
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
