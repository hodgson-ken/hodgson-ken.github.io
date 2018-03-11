//yahoo key
/*var requestURL = 'https:/api.wunderground.com/api/27cc369995e8b45d/conditions/forecast/q/MN/Franklin.json';*/
//gmail key
//var requestURL = 'https:/api.wunderground.com/api/d3496b97cfe94a82/conditions/forecast/q/MN/Franklin.json';
var requestWeather = new XMLHttpRequest();
requestWeather.open('Get', 'https://api.wunderground.com/api/d3496b97cfe94a82/conditions/forecast/q/MN/Franklin.json', true);
requestWeather.send();

requestWeather.onload = function () {
    var franklinWeather = JSON.parse(requestWeather.responseText);
    //console.log(franklinWeather);
    document.getElementById('high').innerHTML = franklinWeather.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = franklinWeather.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('precipitation').innerHTML = parseInt(franklinWeather.current_observation.precip_today_in);
    document.getElementById('wind-speed').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('condition').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('current').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('condition-text').innerHTML = franklinWeather.forecast.txt_forecast.forecastday["0"].fcttext;
    
    var strHttp = franklinWeather.current_observation.icon_url;
    var replaceHttp = strHttps.replace("http", "https");
    document.getElementById('current-weather-icon').innerHTML = replaceHttp;
    
    //get temp (t)
    var t = parseInt(document.getElementById("current").innerHTML);

    //get wind speed (s)
    var s = parseInt(document.getElementById("wind-speed").innerHTML);

    //calculate wind chill using given formula
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

    //update id (chill) in page with value of (f)
    document.getElementById("chill").innerHTML = f.toFixed(0);

}
