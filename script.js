const apiKey = '6ba9d4d0eb2654004a2e4a1ae8bd07ad';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=italy';

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=` + apiKey);
    var data = await response.json();

    console.log(data);
}

checkWeather();
