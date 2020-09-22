var prouductss = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass',
];
var rounds = 0;
const firstImgEl = document.getElementById('first-image');
const secondImgEl = document.getElementById('second-image');
const thirdImgEl = document.getElementById('third-image');
const imagesSection = document.getElementById('images-section');
var previousImages = [];


function Product(prouducts,) {
    this.prouducts = prouducts;
    this.path = `img/${this.prouducts}.jpg`;
    this.votes = 0;
    this.show = 0;
    Product.all.push(this);
}
Product.all = [];
for (let i = 0; i < prouductss.length; i++) {
    new Product(prouductss[i], [i])
}
console.log(Product.all);

function render() {
    var firstRandom = randomNumber(0, Product.all.length - 1);
    var secondRandom = randomNumber(0, Product.all.length - 1);
    var thirdRandom = randomNumber(0, Product.all.length - 1);

    while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || previousImages.includes(firstRandom) || previousImages.includes(secondRandom) || previousImages.includes(thirdRandom)) {
        firstRandom = randomNumber(0, Product.all.length - 1);
        secondRandom = randomNumber(0, Product.all.length - 1);
        thirdRandom = randomNumber(0, Product.all.length - 1);
    }
    previousImages[0] = firstRandom;
    previousImages[1] = secondRandom;
    previousImages[2] = thirdRandom;


    firstImgEl.src = Product.all[firstRandom].path;
    firstImgEl.alt = Product.all[firstRandom].prouducts;
    secondImgEl.src = Product.all[secondRandom].path;
    secondImgEl.alt = Product.all[secondRandom].prouducts;
    thirdImgEl.src = Product.all[thirdRandom].path;
    thirdImgEl.alt = Product.all[thirdRandom].prouducts;


    Product.all[firstRandom].show++;
    Product.all[secondRandom].show++;
    Product.all[thirdRandom].show++;

    rounds++;
    if (rounds === 25) {
        imagesSection.removeEventListener('click', clickHandler);

        addechart();
    }

}
render();


function clickHandler(event) {
    for (var i = 0; i < Product.all.length; i++) {
        if (event.target.alt === Product.all[i].prouducts) {
            Product.all[i].votes++;
            console.log(Product.all[i].votes)
        }
    }
    render();


}
imagesSection.addEventListener('click', clickHandler);



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addechart() {
    var ctx = document.getElementById('myChart');
    var prouductss = [];
    var votes = [];
    var views = [];
    for (var i = 0; i < Product.all.length; i++) {
        prouductss.push(Product.all[i].prouducts);
        votes.push(Product.all[i].votes);
        views.push(Product.all[i].show);
    }
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prouductss,
            datasets: [
                {
                    label: 'Votes',
                    data: votes,
                    backgroundColor: [
                        'rgb(224, 255, 255)',
                        'rgb(224, 255, 255)',
                        'rgb(224, 255, 255)',
                        'rgb(224, 255, 255)',
                        'rgb(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',
                        'rgba(224, 255, 255)',


                    ],


                    borderWidth: 1,

                }, {
                    label: 'views',
                    data: views,
                    backgroundColor: [
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                        'rgb(23, 83, 83)',
                    ],




                    borderWidth: 2,
                    barThickness: 'flex'
                }]


        },

        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });
}