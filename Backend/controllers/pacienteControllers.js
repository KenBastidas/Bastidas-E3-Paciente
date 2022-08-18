const Paciente = require("../models/paciente");

exports.crearPaciente = async (req, res) => {
    try {
        let paciente;
        // Creamos nuestra paciente
        paciente = new Paciente(req.body);
        await paciente.save();
        res.send(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPaciente = async (req, res) => {
    try {
        const { name,porcentajedeazucar, porcentajedegrasamayor, porcentajedeoxigeno,riesgo } = req.body;
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente) {
            res.status(404).json({ msg: 'No existe la paciente' })
        }
        paciente.name=name;
        paciente.porcentajedeazucar=porcentajedeazucar;
        paciente.porcentajedegrasamayor=porcentajedegrasamayor;
        paciente.porcentajedeoxigeno=porcentajedeoxigeno;
        paciente.riesgo=riesgo;
        paciente = await Paciente.findOneAndUpdate({ _id: req.params.id },paciente, { new: true} )
        res.json(paciente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
/////////////////////

/////////////////////////


exports.obtenerPaciente = async (req, res) => {
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente) {
            res.status(404).json({ msg: 'No existe la paciente' })
        }
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPaciente = async (req, res) => {
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente) {
            res.status(404).json({ msg: 'No existe la paciente'})
        }      
        await Paciente.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'paciente eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}