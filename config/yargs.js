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

console.log(argv.direccion);

module.exports = {
    argv
}