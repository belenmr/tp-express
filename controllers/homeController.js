const fs = require('fs');
const carDealerships = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        //res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Bienvenidos \n\n\n');
        res.write('Nuestras sucursales: \n\n');
        carDealerships.forEach(element => {
            res.write(`- ${element.sucursal} \n\n`);
        });
        res.end();
    }
}