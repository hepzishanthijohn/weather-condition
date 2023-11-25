
const apikey = "19a8470a463433487b03f8f82158f8e9";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";



async function checkWeather(){
    const response=await fetch(weatherApiUrl+document.getElementById("cityInput").value+`&appid=${apikey}&units=metric`);
    var data= await response.json();


    
    console.log(data)

        document.querySelector(".city").innerHTML=data.name;
        document.getElementById("temperatureValue").innerHTML="TEMPERATURE: "+Math.round(data.main.temp)+"°C";
        document.getElementById("windValue").innerHTML="WIND SPEED: "+data.wind.speed+" Km/h";
        document.getElementById("humidityValue").innerHTML="HUMIDITY: "+data.main.humidity+" %";
        document.getElementById("pressureValue").innerHTML="PRESSURE: "+data.main.pressure;
        document.getElementById("weatherValue").innerHTML="WEATHER: "+data.weather[0].description;
        document.getElementById("imageItem").innerHTML=`<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">`;
        
}

function getWeather(){
    checkWeather()
}
 
