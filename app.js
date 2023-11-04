const xValues = ["Q1", "Q2", "Q3", "Q4"];

new Chart("myChartOne", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [100, 30, 100, 30],
            borderColor: 'rgb(134, 200, 188)',
            backgroundColor: 'rgba(134, 200, 188, 0.1)',
            fill: true,
        }]
    },
    options: {
        legend: { display: false },
        layout: {
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 110,
                    min: 0,
                    stepSize: 30
                }
            }]
        }
    }
});

new Chart("myChartTwo", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [30, 90, 90, 30],
            borderColor: 'rgb(134, 200, 188)',
            backgroundColor: 'rgba(134, 200, 188, 0.1)',
            fill: true,
        }]
    },
    options: {
        legend: { display: false },
        layout: {
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 110,
                    min: 0,
                    stepSize: 30
                }
            }]
        }
    }
});
