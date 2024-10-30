const ctxHome = document.getElementById('homePriceChart').getContext('2d');

let homePriceChart = new Chart(ctxHome, {
    type: 'line',
    data: {
        labels: [], // X-axis labels
        datasets: [{
            label: 'Latest Price Trend',
            data: [], // Y-axis data points
            backgroundColor: 'rgba(243, 186, 47, 0.2)',
            borderColor: 'rgba(243, 186, 47, 1)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                    color: '#eaeaea',
                },
                grid: {
                    color: '#555'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (USD)',
                    color: '#eaeaea',
                },
                grid: {
                    color: '#555'
                }
            }
        }
    }
});

// Function to populate the homepage trend chart
function populateHomeTrendChart() {
    const numDataPoints = 7; // Number of data points for the last week
    const newLabels = [];
    const newData = [];

    // Generate random data for the last week
    for (let i = 0; i < numDataPoints; i++) {
        newLabels.push(`Day ${i + 1}`);
        newData.push(Math.random() * 100 + 50); // Random prices between 50 and 150
    }

    // Update the chart data
    homePriceChart.data.labels = newLabels;
    homePriceChart.data.datasets[0].data = newData;
    homePriceChart.update();
}

// Initial data population for the homepage chart
populateHomeTrendChart();
