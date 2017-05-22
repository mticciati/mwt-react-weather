var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a835c6f9ae3a530a8fd5def379085663&units=imperial';

module.exports = {

  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.messate) {
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function(err) {
      throw new Error(err);
    });
  }

}