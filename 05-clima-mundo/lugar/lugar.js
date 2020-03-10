const axios = require('axios');

const getLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedURL,
        headers: { 'x-rapidapi-key': '111c347a02msh432466748078a44p1e7708jsn0884f9c04e7c' }
    });

    let resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados desde la api para esa direccion');
    }

    const data = resp.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        lugar,
        lat,
        lng
    }

};

module.exports = {
    getLatLng
}