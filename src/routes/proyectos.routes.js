module.exports = app => {
    const ProyectosBusiness = require('../business/proyectos.business');
    const base = '/proyectos/';
    app.get(base + 'consulta', ProyectosBusiness.consulta);
    app.get(base + 'consulta-por-id/:id', ProyectosBusiness.consultaPorId);
    app.post(base + 'crear', ProyectosBusiness.crear);
    app.put(base + 'actualizar/:id', ProyectosBusiness.actualizar);
    app.delete(base + 'eliminar/:id', ProyectosBusiness.eliminar);
}