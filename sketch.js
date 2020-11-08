let weather;

let api='http://api.openweathermap.org/data/2.5/weather?q=';

let apiKey ='&appid=6901bd613a4d9be26e4e9b07dbe68760';
let units = '&units=metric';

let input;   
function setup(){
  createCanvas(700,500);
  
  let button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');
}
  
  function weatherAsk(){
    let url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
  

}

function gotData(data){
  // println(data);
  weather = data;
}

function draw() {
  background(0);
  if(weather){
    ellipse(150,150, weather.main.temp, weather.main.temp);
    ellipse(350, 150, weather.main.humidity, weather.main.humidity);
  }
}