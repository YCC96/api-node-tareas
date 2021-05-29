const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const urlDBJson = 'db.json';

function consultaDB(){
    let rawdata = fs.readFileSync(urlDBJson);
    return JSON.parse(rawdata);
}

function actualizaDB(data){
    fs.writeFileSync(urlDBJson, JSON.stringify(data));
}

exports.getAll = () => {
    return consultaDB().tareas;
}

exports.getOne = (id) => {
    let tareas = consultaDB().tareas;
    return tareas.filter( item => {
        return (item.id == id)
    });
}

exports.create = (nuevaTarea) => {
    let bd = consultaDB();
    let tareas = bd.tareas;
    let newItem = {
        id: uuidv4(),
        ...nuevaTarea
    }
    tareas.push(newItem);
    bd.tareas = tareas;
    actualizaDB(bd);
    return {code:0};
}

exports.update = (id, data) => {
    let bd = consultaDB();
    let tareas = bd.tareas;

    var idBuscar = tareas.map((item) => { return item.id; }).indexOf(id);

    var respuesta = {
        code: 0
    };

    if (idBuscar == -1) {
        respuesta.code = 1;
    } else {
        data.id = id;
        tareas[idBuscar] = data;
        bd.tareas = tareas;
        actualizaDB(bd);
    }
    return respuesta;
}

exports.delete = (id) => {
    let bd = consultaDB();
    let tareas = bd.tareas;
    
    var idBuscar = tareas.map((item) => { return item.id; }).indexOf(id);
    
    var respuesta = {
        code: 0
    };
    
    if (idBuscar == -1) {
        respuesta.code = 1;
    } else {
        tareas.splice(idBuscar, 1);
        bd.tareas = tareas;
        actualizaDB(bd);
    }
    return respuesta;
}