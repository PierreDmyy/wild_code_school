//POST MY CITY
const sayCity = () => {
    const output = document.getElementById("output");
    const icone = document.getElementById("icone");

    function initializeAutocomplete(user_input_autocomplete_address) {
        var element = document.getElementById(user_input_autocomplete_address.value);
        if (element) {
            var autocomplete = new google.maps.places.Autocomplete(element, { types: ['geocode'] });
            google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
        }
    }
    const citySearch = {
        city: document.getElementById("user_input_autocomplete_address").value
    };
    output.innerHTML = `${user_input_autocomplete_address.value}`;
};
function activatePlacesSearch() {
    var input = document.getElementById('user_input_autocomplete_address');
    var autocomplete = new google.maps.places.Autocomplete(input);
}
const button = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", sayCity);

//API : 6ab12fbef32b802705e6b48b74eabd7c
//LINK : http://api.openweathermap.org/data/2.5/weather?q=

const city = `${user_input_autocomplete_address.value}`;
const apiKey = "&APPID=6ab12fbef32b802705e6b48b74eabd7c";


const callMyLink = () => {
    const url =
        `http://api.openweathermap.org/data/2.5/weather?q=` + user_input_autocomplete_address.value + "&units=metric" + apiKey;



    fetch(url)
        .then(reponse => {
            return reponse.json();

        })

        .then(city => {
            var iconCode = city.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

            icone.innerHTML = `<img src=${iconUrl} </img>`
            output.innerHTML = `${user_input_autocomplete_address.value} <br><br> ${city.main.temp}C° <br> vent: ${city.wind.speed} km/h`;


        });

    if (typeof user_input_autocomplete_address !== 'undefined') {
        const output = document.getElementById("output");
        output.innerHTML = `La ville "${user_input_autocomplete_address.value}" n'existe pas...`
    }

};

document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", callMyLink);

  //Add touch "enter" with "submit" 
  // api_google:  AIzaSyA0hFIQxIFxotAq0A58DSNhVxmtQ4YjYF8 