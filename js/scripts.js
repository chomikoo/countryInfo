// scripts.js
// AJAX

var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = $('#countries');

$('#search').click(searchCountries);

$(document).keypress(function(e) {
    if(e.which == 13) {
        searchCountries();
    }
});

function searchCountries() {
    var countryName = $('#country-name').val();
    
if (!countryName.length) countryName = 'Poland';
    
$.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
        });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
    var flag = 'http://www.geognos.com/api/en/countries/flag/' + item.alpha2Code;
    var km = '<sup>2</sup>';
   $('<div class="descCountry">').appendTo(countriesList)
        .append($('<h3>').text(item.name))
        .append($('<img class="flagImg" src='       +   flag + '.png >'))
        .append($('<p>').text('Capital: '     + ' ' +   item.capital))
        .append($('<p>').text('Land area :  ' + ' ' +   (item.area / 1000) + ' km').after(km)
        .append($('<p>').text('Population:  ' + ' ' +   (item.population / 1000000) + ' mln'))
        .append($('<p>').text('Language:    ' + ' ' +   item.languages))
        .append($('<p>').text('Continent:   ' + ' ' +   item.region))
        .append($('<p>').text('Native name:'  + ' ' +   item.nativeName))
        .append($('<p>').text('Borders:  '    + ' ' +   item.borders))
        .append($('<a>').text("More informations here!").attr('href', 'https://en.wikipedia.org/wiki/' + item.name )))

     });
}