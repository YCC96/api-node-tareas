const ProyectosService = require('../services/proyectos.service')

exports.consulta = (req, res) => {
    var respuesta = {
        code: 0,
        message: "Se consultó correctamente.",
        response: ProyectosService.getAll()
    }
    res.json(respuesta);
}

exports.consultaPorId = (req, res) => {
    var respuesta = {
        code: 0,
        message: "Se consultó correctamente.",
        response: ProyectosService.getOne(req.params.id)
    }
    res.json(respuesta);
}

exports.crear = (req, res) => {
    var crearTarea = ProyectosService.create(req.body);
    var respuesta = {
        code: 0,
        message: "Se creó correctamente.",
        response: null
    }
    if (crearTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "Error al crear";
    }
    res.json(respuesta);
}

exports.actualizar = (req, res) => {
    var actualizarTarea = ProyectosService.update(req.params.id, req.body);
    var respuesta = {
        code: 0,
        message: "Se actualizó correctamente.",
        response: null
    }
    if (actualizarTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "No éxiste el ID.";
    }
    res.json(respuesta);
}

exports.eliminar = (req, res) => {
    var eliminarTarea = ProyectosService.delete(req.params.id);
    var respuesta = {
        code: 0,
        message: "Se eliminó correctamente.",
        response: null
    }
    if (eliminarTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "No éxiste el ID.";
    }
    res.json(respuesta);
}
