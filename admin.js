// // Initial chart setup
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


const Utils = {
    CHART_COLORS: {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)',
    },
    transparentize: function(color, opacity) {
    const alpha = opacity || 0.5;
    return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
    }
};

// const actions = [
//     {
//     name: 'Update Chart',
//     handler(chart) {
//         chart.update();
//     }
//     }
// ];

const DATA_COUNT = 12;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septermber', 'October', 'November', 'December'];

const data = {
    labels: labels,
    datasets: [
    {
        label: 'Income',
        data: [3000, 3200, 2500, 4000, 3700, 4500, 4200, 4800, 4600, 5000, 5300, 4900],
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        yAxisID: 'y',
    },
    {
        label: 'Expenses',
        data: [2000, 1800, 2200, 2700, 2600, 2400, 2300, 2900, 3100, 3400, 3000, 2800],
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        yAxisID: 'y1',
    }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
        display: true,
        text: 'Income vs Expenses Over Time'
        }
    },
    scales: {
        y: {
        type: 'linear',
        display: true,
        position: 'left',
        },
        y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
            drawOnChartArea: false,
        },
        },
    }
    },
};

window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
};