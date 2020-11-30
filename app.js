const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const branchesRouter = require('./routes/sucursales');
const brandsRouter = require('./routes/marcas');
//const carsRouter = require('./routes/autos');



app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/', homeRouter);
app.use('/sucursales', branchesRouter);
app.use('/marcas', brandsRouter);
//app.use('/autos', carsRouter);

app.get('*', (req, res) => {
	res.status(404).send('Error 404  <br> Page not found');
});