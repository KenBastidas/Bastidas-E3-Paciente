const mongoose = require('mongoose');
//
const PacienteSchema = mongoose.Schema({
            "name" : String,
            "porcentajedeazucar": Number,
            "porcentajedegrasamayor": Number,
            "porcentajedeoxigeno": Number,
            "riesgo": String
});
//
module.exports = mongoose.model('Paciente', PacienteSchema);