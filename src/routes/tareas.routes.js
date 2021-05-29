module.exports = app => {
    const TareasBusiness = require('../business/tareas.business');
    const base = '/tareas/';
    app.get(base + 'pre-llenado', TareasBusiness.prellenado);
    app.get(base + 'consulta', TareasBusiness.consulta);
    app.get(base + 'consulta-por-id/:id', TareasBusiness.consultaPorId);
    app.post(base + 'crear', TareasBusiness.crear);
    app.put(base + 'actualizar/:id', TareasBusiness.actualizar);
    app.delete(base + 'eliminar/:id', TareasBusiness.eliminar);
}