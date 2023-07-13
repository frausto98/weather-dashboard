// global variables, what needs to be storedand referenced in multiple functions
var APIKey = "87bbc880ff5124eed3d8d3e18228705b";
var cityInput = x.val()
    // request URLS with specific variable name
    // store api keys
    // element selectors

//eventlistener for searchbutton, submit/click, func srch()
    //button needs to save input
    //take input and insert to fetch link below

//srch()
    //
$(function (){

    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

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
})