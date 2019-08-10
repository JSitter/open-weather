export function getWeather(cityName, countryCode, apiKey){
    console.log("Hello weather ")
    let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+","+countryCode+"&appid="+apiKey
    fetch(apiUrl).then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
    })
}