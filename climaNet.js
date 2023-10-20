var req = new XMLHttpRequest(); //Variável usada para a requisição a API 
const KEY = 'f550da5380fbb0fdeb540ba91608c28d';//Chave para acessar a API

//Variáveis onde se coleta as divs do html que serão manipuladas aqui
var buttonn = document.querySelector("#buttonn");
var weatherInfoContainer = document.getElementById('weather-info-container');
var cityName = document.getElementById('city-name');
var temp = document.getElementById('temp');
var tempMax = document.getElementById('temp-max');
var tempMin = document.getElementById('temp-min');
var kelvinButton = document.getElementById('kelvin-button');
var celsiusButton = document.getElementById('celsius-button');
var description = document.getElementById('description');
var weatherIcon = document.getElementById('weather-icon');
var sunrise = document.getElementById('sunrise');
var sunset = document.getElementById('sunset');
var windSpeed = document.getElementById('wind-speed');
var temperatureInKelvin = false;

// Função que detecta quando se preciona a tecla Enter no campo de busca
document.getElementById("name").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});

//Função que só será acionada se o usuário clicar no botão procurar 
buttonn.onclick = function () {
    searchWeather()
}

/*
    Função responsável por realizar a busca dos dados da cidade na API
    e faz todas as alterações necessárias nas divs do html
    */
function searchWeather(){
    var cidade = document.getElementById("name").value;
    
    
    req.onload = function () {
        if (req.status === 200) {
            let resp = req.responseText;
            let city_json = JSON.parse(resp);

            // Mostrar a div com informações
            weatherInfoContainer.style.display = 'block';

            // Preencher os elementos com os dados da cidade
            cityName.textContent = cidade;
            var tempValue = city_json.main.temp;

            // Chama a função que definir a cor de fundo com base na temperatura
            setBackgroundColorBasedOnTemperature(tempValue);

            temp.textContent = `${tempValue}°C`;
            tempMax.textContent = `Máxima: ${city_json.main.temp_max}°C`;
            tempMin.textContent = `Mínima: ${city_json.main.temp_min}°C`;
            description.textContent = 'Condição Climática: ' + city_json.weather[0].description;
            weatherIcon.src = `https://openweathermap.org/img/wn/${city_json.weather[0].icon}.png`;
            sunrise.textContent = timestampToHours(city_json.sys.sunrise) + " h";
            sunset.textContent = timestampToHours(city_json.sys.sunset) + " h";
            windSpeed.textContent = city_json.wind.speed + ' m/s';

            // Botão para alternar entre Celsius e Kelvin
            celsiusButton.addEventListener('click', function () {
                temperatureInKelvin = false;
                temp.textContent = `${tempValue}°C`;
                tempMax.textContent = `Máxima: ${city_json.main.temp_max}°C`;
                tempMin.textContent = `Mínima: ${city_json.main.temp_min}°C`;
            });
            kelvinButton.addEventListener('click', function () {
                temperatureInKelvin = true;
                temp.textContent = `${convertToKelvin(tempValue)}K`;
                tempMax.textContent = `Máxima: ${convertToKelvin(city_json.main.temp_max)}K`;
                tempMin.textContent = `Mínima: ${convertToKelvin(city_json.main.temp_min)}K`;
            });
        } else {
            // Ocultar a div com informações se a cidade não for encontrada
            weatherInfoContainer.style.display = 'none';
        }
    };

    req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&lang=pt_br&units=metric&appid=' + KEY);
    req.send();
}

function timestampToHours(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

//Função responsável por converter temperatura de Celsius para Kelvin
function convertToKelvin(celsius) {
    return (celsius + 273.15).toFixed(2);
}

/*
    Função responsável por calcular a cor que deve ser exibida através do valor da temperatura da 
    cidade fornecida pelo usuário
*/
function setBackgroundColorBasedOnTemperature(temperature) {
    const minTemperature = -10; // Temperatura mínima (azul)
    const maxTemperature = 40; // Temperatura máxima (vermelho)
    const minHue = 240; // Cor do azul (em graus)
    const maxHue = 0; // Cor do vermelho (em graus)
    
    const temperatureRange = maxTemperature - minTemperature;
    const hueRange = maxHue - minHue;
    const normalizedTemperature = (temperature - minTemperature) / temperatureRange;
    const hue = minHue + normalizedTemperature * hueRange;
    
    const backgroundColor = `hsl(${hue}, 100%, 50%)`;
    document.body.style.backgroundColor = backgroundColor;
}
