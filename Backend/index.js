//declarando constantes express y mongoose
const express = require('express');
const mongoose =require('mongoose');
const cors=require('cors');
//configurar express ap || set up express app
const app = express();
//connect to mongo db
mongoose.connect('mongodb://localhost:27017/LaboratorioPretigioso')
//
app.use(cors());
//Indicar el fromato json para el archivo
app.use(express.json());
//Indicando ruta de la api y ruta acerca de routes y el llamado de metodos en Paciente
app.use('/api/pacientes', require('./routes/Paciente'));
//puerto
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})