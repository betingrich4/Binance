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
const ctx = document.getElementById('candlestickChart').getContext('2d');

let candlestickData = {
    labels: [],
    datasets: [{
        label: 'Market Trend',
        data: [],
        backgroundColor: 'rgba(76, 175, 80, 0.5)', // Green color for bullish
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
    }],
};

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

// Generate random candlestick data
function generateRandomCandleData() {
    const open = Math.random() * 100 + 100; // Random open price
    const close = open + (Math.random() * 10 - 5); // Random close price within a range
    const high = Math.max(open, close) + Math.random() * 5; // Highest price
    const low = Math.min(open, close) - Math.random() * 5; // Lowest price
    return { t: Date.now(), o: open, h: high, l: low, c: close };
}

// Update chart data
function updateCandlestickChart() {
    const newCandle = generateRandomCandleData();
    
    // Add new data point
    candlestickData.labels.push(new Date(newCandle.t).toLocaleTimeString());
    candlestickData.datasets[0].data.push(newCandle);
    
    // Remove old data points if there are more than 20
    if (candlestickData.labels.length > 20) {
        candlestickData.labels.shift();
        candlestickData.datasets[0].data.shift();
    }

    if (window.candlestickChart) {
        window.candlestickChart.update(); // Update chart
    } else {
        // Initialize chart
        window.candlestickChart = new Chart(ctx, {
            type: 'candlestick',
            data: candlestickData,
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        beginAtZero: false
                    }
                },
            }
        });
    }
}

// Simulate price changes every few seconds
setInterval(() => {
    loadMarkets(); // Update market items
    updateCandlestickChart(); // Update candlestick chart
}, 3000); // Update every 3 seconds

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadMarkets();
});
