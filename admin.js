var ctx = document.getElementById('lineChart').getContext('2d');

// Sample monthly data
var allData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Earnings in $',
        data: [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
        backgroundColor: 'rgba(85, 85, 85, 1)',
        borderColor: 'rgba(41, 155, 99)',
        borderWidth: 1
    }]
};

// Daily earnings based on expenses and incomes
var dailyEarnings = [
    100, 120, 150, 100, 200, 170, 180,
    190, 210, 220, 230, 240, 250, 260,
    270, 280, 290, 300, 310, 320, 330,
    340, 350, 360, 370, 380, 390, 400,
    410, 420, 430
];

// const totalEarnings = dailyEarnings.reduce((total, dailyEarning) => total + dailyEarning, 0);
// allData.datasets[0].data.push(totalEarnings);
// allData.datasets[0].data.shift();
// Add the total earnings to the data array
// filteredData = [...earningsForTheMonth, totalEarnings]; // Append total earnings to the data array

var myChart = new Chart(ctx, {
    type: 'line',
    data: allData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const currentEarnings = tooltipItem.raw;
                        const previousEarnings = getPreviousEarnings(tooltipItem.label);
                        const difference = currentEarnings - previousEarnings;
                        return [
                            `Earnings: $${currentEarnings}`,
                            `Difference: $${difference >= 0 ? '+' : ''}${difference}`
                        ];
                    }
                }
            }
        }
    }
});

// Function to filter data based on time frame
function filterData(timeFrame) {
    let filteredLabels = [];
    let filteredData = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    switch (timeFrame) {
        case 'last_12_months':
            // this gets the last 12 months by index and adds 12 so that it doesnt go below 0 which one be invalid and the modulus 12 enforces it to be under 12
            for (let i = 0; i < 12; i++) {
                const monthIndex = (currentMonth - i + 12) % 12;
                filteredLabels.unshift(allData.labels[monthIndex]);
                filteredData.unshift(allData.datasets[0].data[monthIndex]);
            }
            break;
            // this gets the last 6 months by index and adds 12 so that it doesnt go below 0 which one be invalid and the modulus 12 enforces it to be under 12
        case 'last_6_months':
            for (let i = 0; i < 6; i++) {
                const monthIndex = (currentMonth - i + 12) % 12;
                filteredLabels.unshift(allData.labels[monthIndex]);
                filteredData.unshift(allData.datasets[0].data[monthIndex]);
            }
            break;
        case 'last_1_month':
            //uses new Date() to get the exact month based on the year to find out how many days are in each month and then uses a mapping function to display daily balances off of the index of the filtered data
            const year = currentDate.getFullYear();
            const month = [];
            month.push(allData.labels[currentMonth]);
            const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();
            filteredLabels = Array.from({ length: daysInMonth }, (_, index) => `${month} ${index + 1}`);
            filteredData = dailyEarnings.slice(0, daysInMonth);
            break;  
    }

    // Update the chart with filtered data
    myChart.data.labels = filteredLabels;
    myChart.data.datasets[0].data = filteredData;
    myChart.update();
}

// Function to get previous earnings based on the current label
function getPreviousEarnings(currentLabel) {
    const index = allData.labels.indexOf(currentLabel);
    if (index > 0) {
        return allData.datasets[0].data[index - 1]; // Return previous earnings
    }
    return 0; // Return 0 if no previous earnings
}

// Example usage
filterData('last_12_months'); // Call this to filter by last 12 months



// var ctx = document.getElementById('lineChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//             label: 'Earnings in $',
//             data: [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
//             backgroundColor: [
//                 'rgba(85, 85, 85, 1)'
//             ],
//             borderColor: [
//                 'rgba(41, 155, 99)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });

// function updateChart(newEarnings, newMonth) {
//     myChart.data.labels.shift();
//     myChart.data.datasets[0].data.shift();

//     myChart.data.labels.push(newMonth);
//     myChart.data.datasets[0].data.push(newEarnings);

//     myChart.update();
// }

// updateChart(3100, 'Jan');


// const Utils = {
//     CHART_COLORS: {
//     red: 'rgb(255, 99, 132)',
//     blue: 'rgb(54, 162, 235)',
//     },
//     transparentize: function(color, opacity) {
//     const alpha = opacity || 0.5;
//     return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
//     }
// };

// const actions = [
//     {
//     name: 'Update Chart',
//     handler(chart) {
//         chart.update();
//     }
//     }
// ];

// const DATA_COUNT = 12;

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septermber', 'October', 'November', 'December'];

// const data = {
//     labels: labels,
//     datasets: [
//     {
//         label: 'Income',
//         data: [3000, 3200, 2500, 4000, 3700, 4500, 4200, 4800, 4600, 5000, 5300, 4900],
//         borderColor: Utils.CHART_COLORS.red,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//         yAxisID: 'y',
//     },
//     {
//         label: 'Expenses',
//         data: [2000, 1800, 2200, 2700, 2600, 2400, 2300, 2900, 3100, 3400, 3000, 2800],
//         borderColor: Utils.CHART_COLORS.blue,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//         yAxisID: 'y1',
//     }
//     ]
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {
//     responsive: true,
//     interaction: {
//         mode: 'index',
//         intersect: false,
//     },
//     stacked: false,
//     plugins: {
//         title: {
//         display: true,
//         text: 'Income vs Expenses Over Time'
//         }
//     },
//     scales: {
//         y: {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         },
//         y1: {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         grid: {
//             drawOnChartArea: false,
//         },
//         },
//     }
//     },
// };

// window.onload = function() {
//     var ctx = document.getElementById('myChart').getContext('2d');
//     new Chart(ctx, config);
// };