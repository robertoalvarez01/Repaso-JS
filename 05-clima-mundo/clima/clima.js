const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2113fefd9fa5570b772a17d91f562d4c&units=metric`)
    return resp.data.main.temp;
};

module.exports = {
    getClima
}