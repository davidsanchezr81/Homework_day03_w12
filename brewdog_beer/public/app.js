document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json';
  
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
  makeRequest(url, requestComplete);
});
});

const makeRequest = function (url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function (){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString)
  populateList(beers);
}

const populateList = function (beers) {
  const ul = document.querySelector('#beer-list')

  beers.forEach((beer) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    li.textContent = beer.name;
    img.src = beer.image_url;
    ul.appendChild(li);
    ul.appendChild(img);
    console.log(beers)
  });
}
