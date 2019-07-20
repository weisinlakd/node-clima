const axios = require('axios');


const getLugarLatLong = async(direccion) => {

    let parseURL = encodeURI(direccion);
  
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${parseURL}`,
        
        headers: {"X-RapidAPI-Key": '57758a9654msh5f5ce7c867ee48dp148148jsn910937944f61'}
    });

    const resp = await instance.get();

    if ( resp.data.Results.length === 0) {
        throw new Error (`No hay resultados para ${direccion}`)
    }
            
    const data = resp.data.Results[0];
    
    const lugar = data.name;
    const long = data.lon;
    const lat = data.lat;


    return {
        lugar,
        lat,
        long
        
    }

}


module.exports = {
    getLugarLatLong
};