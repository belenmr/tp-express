const fs = require('fs');
const cars = [];
JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')).forEach(branch => {
    branch.autos.forEach(car => {
        cars.push(car);
    });
});

module.exports = {
    getCars: (req,res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});

        cars.forEach(car => {
            res.write(`- Marca: ${car.marca} \n`);
            res.write(`- Modelo: ${car.modelo} \n`);
            res.write(`- Año: ${car.anio} \n`);
            res.write(`- Color: ${car.color} \n\n\n`);
        });
        res.end();
    },
    getCarsForBrandAndData: (req,res) => {
        let data = req.params.dato;
        //console.log(isNaN(data));
        let carsForBrand = cars.filter(car => car.marca.toLowerCase() == req.params.marca.toLowerCase() );

        res.set({'content-type':'text/plain;charset=utf-8'});

        if (data == undefined) {
            carsForBrand.forEach(car => {
                res.write(`- Marca: ${car.marca} \n`);
                res.write(`- Modelo: ${car.modelo} \n`);
                res.write(`- Año: ${car.anio} \n`);
                res.write(`- Color: ${car.color} \n\n\n`);
            });
        } else if (isNaN(data)){
            let carsForColour = carsForBrand.filter(car => car.color == data.toLowerCase() );
            
            carsForColour.forEach(car => {
                res.write(`- Marca: ${car.marca} \n`);
                res.write(`- Modelo: ${car.modelo} \n`);
                res.write(`- Año: ${car.anio} \n`);
                res.write(`- Color: ${car.color} \n\n\n`);
            });
        } else {
            let carsForYear = carsForBrand.filter(car => car.anio == Number(data) );
            
            carsForYear.forEach(car => {
                res.write(`- Marca: ${car.marca} \n`);
                res.write(`- Modelo: ${car.modelo} \n`);
                res.write(`- Año: ${car.anio} \n`);
                res.write(`- Color: ${car.color} \n\n\n`);
            });
        }
        
        res.end();
    }
}