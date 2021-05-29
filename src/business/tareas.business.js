const TareasService = require('../services/tareas.service')

exports.prellenado = (req, res) => {
    var respuesta = {
        code: 0,
        message: 'Se consultó correctamente.',
        response: {
            descripcion: 'tarea: ',
            duracion: 0,
            inicio: new Date().getTime(),
            fin: 0,
            tiempo: '',
            tiempoRegistrado: '',
            estatus: 'Pendiente'
        }
    }
    res.json(respuesta);
}


exports.consulta = (req, res) => {
    var respuesta = {
        code: 0,
        message: "Se consultó correctamente.",
        response: TareasService.getAll()
    }
    res.json(respuesta);
}

exports.consultaPorId = (req, res) => {
    var respuesta = {
        code: 0,
        message: "Se consultó correctamente.",
        response: TareasService.getOne(req.params.id)
    }
    res.json(respuesta);
}

exports.crear = (req, res) => {
    var crearTarea = TareasService.create(req.body);
    var respuesta = {
        code: 0,
        message: "Se creó la tarea correctamente.",
        response: null
    }
    if (crearTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "Error al crear la tarea";
    }
    res.json(respuesta);
}

exports.actualizar = (req, res) => {
    var actualizarTarea = TareasService.update(req.params.id, req.body);
    var respuesta = {
        code: 0,
        message: "Se actualizó la tarea correctamente.",
        response: null
    }
    if (actualizarTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "No éxiste el ID.";
    }
    res.json(respuesta);
}

exports.eliminar = (req, res) => {
    var eliminarTarea = TareasService.delete(req.params.id);
    var respuesta = {
        code: 0,
        message: "Se eliminó la tarea correctamente.",
        response: null
    }
    if (eliminarTarea.code != 0) {
        respuesta.code = 1;
        respuesta.message = "No éxiste el ID.";
    }
    res.json(respuesta);
}
