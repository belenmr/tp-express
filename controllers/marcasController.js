const fs = require('fs');
const cars = [];
JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')).forEach(branch => {
    branch.autos.forEach(car => {
        cars.push(car);
    });
});

module.exports = {
    getBrands: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Nuestras marcas: \n\n')

        let uniqueBrands = [];
        let brands = [];
        
        cars.forEach(car => {
            brands.push(car.marca);
        });

        brands.forEach(brand =>{
            if(uniqueBrands.indexOf(brand) == -1 ){
                (uniqueBrands.push(brand))
            }
        })

        uniqueBrands.forEach(element => {
            res.write(`\t - ${element} \n`);
        });
        res.end();
    },
    getBrand: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});

        let carsForBrand = cars.filter(car => car.marca.toLowerCase() == req.params.marca.toLowerCase() );
        //console.log(carsForBrand.length);
        if (carsForBrand.length > 0) {
            res.write(`Total de autos: ${carsForBrand.length} \n\n`);
            carsForBrand.forEach(car => {
                res.write(`- Marca: ${car.marca} \n`);
                res.write(`- Modelo: ${car.modelo} \n`);
                res.write(`- Año: ${car.anio} \n\n\n`);
            });
        } else {
            res.write(`No se encontro la marca ${req.params.marca.toUpperCase()}`);
        }        
        
        res.end();
    }
}