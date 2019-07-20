
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv


// lugar.getLugarLatLong(argv.direccion)
//     .then( console.log)
//     .catch()


// clima.getClima(-31.400000, -64.190002)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        let infoLugar = await lugar.getLugarLatLong(direccion);

        let temperaturaLugar = await clima.getClima(infoLugar.lat, infoLugar.long);

        return console.log(`La temperatura de ${infoLugar.lugar} es de ${temperaturaLugar} C°`)
    } catch (e) {
        return console.log(`No se encontro información sobre ${direccion}`)
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);