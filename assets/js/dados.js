var array = ['brazil', 'russia', 'us', 'italy', 'india', 'United Kingdom', 'Argentina', 'Mexico'];
var countries = [];

for ($x = 0; $x < 8; $x++) {
    $.ajax({
        data: "",
        type: "GET",
        url: "https://covid19-brazil-api.now.sh/api/report/v1/" + array[$x],
        async: false,
        success: function(json) {
            countries[$x] = json.data;
        }
    });
}

var ctx = document.getElementById('c-confirmed');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [countries[0].country, countries[1].country, countries[2].country, countries[3].country, countries[4].country, countries[5].country, countries[6].country, countries[7].country],
        datasets: [{
            label: 'Casos por país',
            data: [countries[0].confirmed, countries[1].confirmed, countries[2].confirmed, countries[3].confirmed, countries[4].confirmed, countries[5].confirmed, countries[6].confirmed, countries[7].confirmed],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(10, 91, 169, 0.2)',
                'rgba(138, 26, 26, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(10, 91, 169, 1)',
                'rgba(138, 26, 26, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx1 = document.getElementById('c-deaths');
var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [countries[0].country, countries[1].country, countries[2].country, countries[3].country, countries[4].country, countries[5].country, countries[6].country, countries[7].country],
        datasets: [{
            label: 'Mortes por país',
            data: [countries[0].deaths, countries[1].deaths, countries[2].deaths, countries[3].deaths, countries[4].deaths, countries[5].deaths, countries[6].deaths, countries[7].deaths],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(10, 91, 169, 0.2)',
                'rgba(138, 26, 26, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(10, 91, 169, 1)',
                'rgba(138, 26, 26, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var uffs = ['sp', 'rj', 'ba', 'mg', 'ce', 'go', 'sc', 'rs'];
var uf = [];
for ($x = 0; $x < 8; $x++) {
    $.ajax({
        data: "",
        type: "GET",
        url: "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/" + uffs[$x],
        async: false,
        success: function(json) {
            uf[$x] = json;
        }
    });
}

var ctx2 = document.getElementById('u-confirmed');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [uf[0].uf, uf[1].uf, uf[2].uf, uf[3].uf, uf[4].uf, uf[5].uf, uf[6].uf, uf[7].uf],
        datasets: [{
            label: 'Casos por país',
            data: [uf[0].cases, uf[1].cases, uf[2].cases, uf[3].cases, uf[4].cases, uf[5].cases, uf[6].cases, uf[7].cases],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(10, 91, 169, 0.2)',
                'rgba(138, 26, 26, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(10, 91, 169, 1)',
                'rgba(138, 26, 26, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx3 = document.getElementById('u-deaths');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [uf[0].uf, uf[1].uf, uf[2].uf, uf[3].uf, uf[4].uf, uf[5].uf, uf[6].uf, uf[7].uf],
        datasets: [{
            label: 'Mortes por país',
            data: [uf[0].deaths, uf[1].deaths, uf[2].deaths, uf[3].deaths, uf[4].deaths, uf[5].deaths, uf[6].deaths, uf[7].deaths],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(10, 91, 169, 0.2)',
                'rgba(138, 26, 26, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(10, 91, 169, 1)',
                'rgba(138, 26, 26, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});