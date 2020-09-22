var names = [
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
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass',
];
var rounds= 0;
const firstImgEl = document.getElementById('first-image');
const secondImgEl = document.getElementById('second-image');
const thirdImgEl = document.getElementById('third-image');
const imagesSection = document.getElementById('images-section');


function Product(name,){
    this.name = name;
    this.path = `img/${this.name}.jpg`;
    this.votes =0;
    this.display =0;
    Product.all.push(this);
}
Product.all = [];
for (let i=0;i<names.length;i++){
    new Product(names[i],)
}
console.log(Product.all);

function render(){
    var firstRandom =randomNumber(0,Product.all.length -1);
    var secondRandom =randomNumber(0,Product.all.length-1);
    var thirdRandom =randomNumber(0,Product.all.length -1);

    
    if (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom) {
        firstRandom = Math.floor(Math.random() * Product.all.length);
        secondRandom = Math.floor(Math.random() * Product.all.length);
        thirdRandom = Math.floor(Math.random() * Product.all.length);
    }
   
   


    firstImgEl.src = Product.all[firstRandom].path;
    firstImgEl.alt = Product.all[firstRandom].name;
    secondImgEl.src = Product.all[secondRandom].path;
    secondImgEl.alt = Product.all[secondRandom].name;
    thirdImgEl.src = Product.all[thirdRandom].path;
    thirdImgEl.alt = Product.all[thirdRandom].path;

    Product.all[firstRandom].display++;
    Product.all[secondRandom].display++;
    Product.all[thirdRandom].display++;
  

    rounds++;
    if (rounds === 25) {
        firstImgEl.removeEventListener('click', clickHandler);
        secondImgEl.removeEventListener('click', clickHandler);
        thirdImgEl.removeEventListener('click', clickHandler);
        results();
    }

}
render();


function clickHandler(event){
    for (var i = 0; i < Product.all.length; i++) {
        if (event.target.alt === Product.all[i].name){
            Product.all[i].votes++;
            console.log(Product.all[i].votes)
        }
    }
    render();


}

firstImgEl.addEventListener('click', clickHandler);
secondImgEl.addEventListener('click', clickHandler);
thirdImgEl.addEventListener('click', clickHandler);

function results() {
    var names = [];
  for (var i = 0; i < Product.all.length; i++) {
    names.push(Product.all[i].name);
  }

  var votes = [];
  for (var j = 0; j < Product.all.length; j++) {
    votes.push(Product.all[j].votes);
  }

  var views = [];
  for (var f = 0; f < Product.all.length; f++) {
    views.push(Product.all[f].display);
  }

  var answer=document.getElementById('answer')
      for (t=0;t<Product.all.length;t++){
       var pelm=document.createElement('p');
       console.log(pelm);
       answer.appendChild(pelm);
        pelm.innerText =names[t]+'  had  '+votes[t]+'  votes and was shown  '+views[t]+'  times.';
    
    }
    

}

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+ min;
}