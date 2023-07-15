// global variables, what needs to be storedand referenced in multiple functions
var APIKey = "87bbc880ff5124eed3d8d3e18228705b";
var cityInput = document.getElementById('cityInput')
var searchBtn = document.getElementById('searchBtn')
var currentWeathCont = document.getElementById('currentWeatherInfo')
var forecastCont = document.getElementById('forecastInfo')
var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth()+1).padStart(2, "0");
var day = String(date.getDate()).padStart(2, "0");
var todaysDate = `${month}/${day}/${year}`;
console.log(todaysDate)

function handleUserInput() {
    // capture the value the user types in to the input element
    var cityNombre = cityInput.value
    weather(cityNombre)
    forecast(cityNombre)
}

function weather(x) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + x + "&units=imperial&appid=87bbc880ff5124eed3d8d3e18228705b")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // parse through the data and create the appropriate elements and append them to the container
            console.log(data);
            displayCurrentWeather(data);
            // console.log("City Name: ", cityName,", Outside Temp: ",cityTemp,", Humidity: ",cityHumid,", Wind Speed: ",cityWind);
        })
}
function displayCurrentWeather (data) {
    var cityName = data.name
    var cityTemp = data.main.temp
    var cityHumid = data.main.humidity
    var cityWind = data.wind.speed
    var h3El = document.getElementById("cityName");
    var pTemp = document.getElementById("temperature")
    var pHumid = document.getElementById("humidity")
    var pWind = document.getElementById("windSpeed")
    h3El.textContent = cityName + " " + todaysDate;
    pTemp.textContent = "Temperature: " + cityTemp + "F"
    pHumid.textContent = "Humidity: " + cityHumid
    pWind.textContent = "Wind Speeds: " + cityWind
    


}


function forecast(x) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&units=imperial&appid=87bbc880ff5124eed3d8d3e18228705b")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // console.log(data)
            displayForecastData(data);
        })

}
function displayForecastData (x) {
    for (var i = 1; i<=5; i++) {

        var forecastArray = x.list[i * 7 - 1]
        var foreDate = forecastArray.dt_txt
        var foreTemp = forecastArray.main.temp
        var foreHumid = forecastArray.main.humidity
        var foreWind = forecastArray.wind.speed
        document.getElementById("date" + i).textContent = foreDate;
        document.getElementById("temp" +i).textContent = "Temperature: " + foreTemp;
        document.getElementById("humid" +i).textContent = "Humidity: " + foreHumid;
        document.getElementById("wind" +i).textContent = "Wind Speed: " + foreWind;
        
    console.log(forecastArray)
    debugger;
    // var allDayBlocks = document.querySelectorAll(".dayBlock")
    //     var pEl = document.createElement("p")
    //     var pElT = pEl.textContent = "Temperature: " + forecastArray.main.temp
    //     var pElH = pEl.textContent = "Humidity: " + forecastArray.main.humidity
    //     var pElW = pEl.textContent = "WindSpeeds: " + forecastArray.wind.speed



    }
}



searchBtn.addEventListener('click', handleUserInput)

// addEventListener searchbutton
    //button needs to save input
    //take input and insert to fetch link below
// fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=87bbc880ff5124eed3d8d3e18228705b")
//     .then(function(res){
//         return res.json()
//     })
//srch()

//$(function (){

    // when the user adds a city to the input we need to run an eventlistener that will capture the value and run the fetch


// functions

    // check local storage / recent searches
        // retieve setItems
        // display items to list

    // search button / event listener -- each API can be own function
        // function search (city var)
            // call in function that saves recent searches to display (if any)
            // take in input

        // function cityDataRetrieval (coords var)
            // fetch request coords with an API
                // .then convert to JSON format
                // .then recieve and "parse" thru data of latitude and longitude coords
                // call weatherInfo

        // function weatherInfo (city input var)
            // use coords from first fetch to fetch weather data from API
                // convert to JSON format
                // retrieve temp. wind, and humidity, and 5 day forecast to display from object
            // call displayData func

        // function displayData (all weatherInfo var)
            //
            // append to page
    // set local Storage
        // update/call recent searches function

//eventListeners

// eventListeners searchButton for ("click", function(){
    //var for search output
    //call for search (city var)
// })
// eventListeners for recent searches ("click", function(event){
    //console.log(event.target)
    // create a var for the history value (text on button) [always target the value of the history]
    // call for search function
// })
//})