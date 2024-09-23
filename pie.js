document.addEventListener("DOMContentLoaded", showPieChart);

// Defining the slices with sizes and colors
let sliceA = { size: 400, color: 'limegreen', label: 'Home & Utilities' };
let sliceB = { size: 150, color: 'green', label: 'Transportation' };
let sliceC = { size: 250, color: 'darkgreen', label: 'Groceries' };
let sliceD = { size: 180, color: 'darkolivegreen', label: 'Health' };
let sliceE = { size: 220, color: 'yellow', label: 'Restaurants & Dining' };
let sliceF = { size: 300, color: 'orange', label: 'Shopping & Entertainment' };
let sliceG = { size: 120, color: 'chocolate', label: 'Cash, Checks & Misc' };

function showPieChart() {
    console.log("pie-chart on load");

    let slices = [sliceA, sliceB, sliceC, sliceD, sliceE, sliceF, sliceG];
    
    const total = slices.reduce((acc, slice) => acc + slice.size, 0); //this gets all the sizes total amount
    let startAngle = 0;

    const canvas = document.getElementById('pie-chart');
    const ctx = canvas.getContext('2d');

    // Loop through slices and draw each one
    slices.forEach((slice) => {
        const angle = (slice.size / total) * Math.PI * 2;

        // Draw the slice
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);//moves cursor to center since its a pie
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
            startAngle,
            startAngle + angle
        );
        ctx.closePath();
        ctx.fillStyle = slice.color;
        ctx.fill();

        startAngle += angle;
    });

    //map function to make divs to dynamically render each slices color and stats
    const legend = document.getElementById('pie-chart-legend');
    legend.innerHTML = slices.map(slice => `
        <div class="legend-item">
            <div class="legend-color" style="background-color:${slice.color}"></div>
            <div class="legend-label">${slice.label}: $${slice.size} - ${((slice.size / total) * 100).toFixed(2)}%</div>
        </div>
    `).join('');
}
//function to add amount THIS IS FOR TESTING
function addAmount(slice, amount) {
    slice.size += amount;
    showPieChart();
}

// Example of adding an amount
// addAmount(sliceC, 1000);
