// Sample data for markets (simulated real-time data)
const marketData = [
    { name: 'Bitcoin (BTC)', price: 34000 },
    { name: 'Ethereum (ETH)', price: 2000 },
    { name: 'Binance Coin (BNB)', price: 250 },
    { name: 'Ripple (XRP)', price: 0.5 }
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

// Function to handle buying cryptocurrency
function buyCrypto(crypto) {
    alert(`You have selected to buy ${crypto}.`);
    // Here, you can add functionality to process the purchase
}

// Function to handle selling cryptocurrency
function sellCrypto(crypto) {
    alert(`You have selected to sell ${crypto}.`);
    // Here, you can add functionality to process the sale
}

// Function to handle P2P trading
function p2pTrade(crypto) {
    alert(`You have selected to trade ${crypto} in P2P.`);
    // Here, you can add functionality for P2P transactions
}

// Add event listeners for buttons in buy.html
document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".card button");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cryptoName = this.parentElement.querySelector("h3").innerText;
            buyCrypto(cryptoName);
        });
    });

    // Add event listeners for buttons in sell.html
    const sellButtons = document.querySelectorAll(".card button");
    sellButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cryptoName = this.parentElement.querySelector("h3").innerText;
            sellCrypto(cryptoName);
        });
    });

    // Add event listeners for buttons in p2p.html
    const tradeButtons = document.querySelectorAll(".card button");
    tradeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cryptoName = this.parentElement.querySelector("h3").innerText;
            p2pTrade(cryptoName);
        });
    });

    // Add event listeners for login and signup buttons in login.html
    const loginButton = document.querySelector("#login-button");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            loginModal.style.display = 'block';
        });
    }

    const signupButton = document.querySelector("#signup-button");
    if (signupButton) {
        signupButton.addEventListener("click", () => {
            alert("Signup functionality not yet implemented.");
        });
    }

    // Add event listener for wallet button
    const walletButton = document.querySelector("#wallet-button");
    if (walletButton) {
        walletButton.addEventListener("click", () => {
            alert("Wallet functionality not yet implemented.");
        });
    }

    // Add event listener for support button
    const supportButton = document.querySelector("#support-button");
    if (supportButton) {
        supportButton.addEventListener("click", () => {
            alert("Support functionality not yet implemented.");
        });
    });

    // Initial load
    loadMarkets();
});

// Set up interval for simulated price updates
setInterval(simulatePriceUpdates, 3000); // Update every 3 seconds
