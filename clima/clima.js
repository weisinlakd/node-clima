const axios = require('axios');



const getClima = async(lat, lon) => {


    let resp = await axios.get(`htpps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=61d9bd9f0f2d3ed5abb5581d74c463fc&units=metric`)

   return resp.data.main.temp;
}

module.exports = {
    getClima
}