const fs = require('fs');
const carDealerships = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    getBranches: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        carDealerships.forEach(element => {
            res.write(`- ${element.sucursal} \n`);
            res.write(`\t - Direccion: ${element.direccion} \n`);
            res.write(`\t - Telefono: ${element.telefono} \n\n`);
        });
        res.end();       
    },
    getBranch: (req,res) => {
        let branch = carDealerships.find(carDealership => carDealership.sucursal.toLowerCase() == req.params.sucursal.toLowerCase() );
        //console.log(branch)
        res.set({'content-type':'text/plain;charset=utf-8'});

        if (branch === undefined) {
            res.write(`La sucursal ${req.params.sucursal.toUpperCase()} no existe`);
        } else {
            res.write(`${branch.sucursal} \n`);
            res.write(`\t - Direccion: ${branch.direccion} \n`);
            res.write(`\t - Telefono: ${branch.telefono} \n\n`);
            res.write('\t Nuestros autos:\n\n');
            branch.autos.forEach(element => {
                res.write(`\t\t Marca: ${element.marca} \n`);
                res.write(`\t\t Modelo: ${element.modelo} \n`);
                res.write(`\t\t Año: ${element.anio} \n`);
                res.write(`\t\t Color: ${element.color} \n\n`);
            });            
        }
        res.end()
    }
}