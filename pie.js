console.log("test");

document.addEventListener("DOMContentLoaded", showPieChart);

let sliceA = { size:550, color:'blue' };
let sliceB = { size:220, color:'green' };
let sliceC = { size:930, color:'red' };

function showPieChart() {
    console.log("pie-chart on load");

    let values = [sliceA.size, sliceB.size, sliceC.size];
    
    const total = values.reduce((acc, val) => acc + val, 0);

    let startAngle = 0;

    //values of pie chart

    const canvas = document.getElementById('pie-chart');
    const ctx = canvas.getContext('2d');

    //calculate angles

    values.forEach((value, index) => {
        const angle = (value / total) * Math.PI * 2;

        //draw slice
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
            canvas.width /2,
            canvas.height / 2,
            canvas.width / 2,
            startAngle,
            startAngle + angle
        );
        ctx.closePath();

        switch (index) {
            case 0:
                ctx.fillStyle = sliceA.color;
                break;
            case 1:
                ctx.fillStyle = sliceB.color;
                break;
            case 2:
                ctx.fillStyle = sliceC.color;
                break;
            default:
                break;
        }

        // ctx.fillStyle = index === 0 ? sliceA.color : sliceB.color;
        ctx.fill();

        startAngle += angle;
    });
    //show legend
    const legend = document.getElementById('pie-chart-legend');

    legend.innerHTML = `
    <div class="legend-item">
    <div class="legend-color" style="background-color:${sliceA.color}"></div>
    <div class="legend-label">Total Expenses: $${sliceA.size} - ${((sliceA.size / total) * 100).toFixed(2)} %</div>
    </div>

    <div class="legend-item">
    <div class="legend-color" style="background-color:${sliceB.color}"></div>
    <div class="legend-label">Total invested: $${sliceB.size} - ${((sliceB.size / total) * 100).toFixed(2)} %</div>
    </div>

    <div class="legend-item">
    <div class="legend-color" style="background-color:${sliceC.color}"></div>
    <div class="legend-label">Total Income: $${sliceC.size} - ${((sliceC.size / total) * 100).toFixed(2)} %</div>
    </div>
    `;
}

function addAmount(slice, amount){
    slice.size += amount;
    showPieChart();
}

// addAmount(sliceB, 200)