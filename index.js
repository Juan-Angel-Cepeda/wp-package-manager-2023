const log4js = require('log4js');

let logger = log4js.getLogger();
logger.level = "debug";

logger.info("La applicacion se ejecutó correctamente");
logger.warn("Cuidad falta un archivo de configuracion");
logger.error("NO se enocntro la funcion email");
logger.fatal("Ya trono esta madre");

function suma(x,y){
    return x+y
}

module.exports = suma;


