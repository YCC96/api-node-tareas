const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const urlDBJson = 'dbGestionProyectos.json';

function consultaDB(){
    let rawdata = fs.readFileSync(urlDBJson);
    return JSON.parse(rawdata);
}

function actualizaDB(data){
    fs.writeFileSync(urlDBJson, JSON.stringify(data));
}

exports.getAll = () => {
    return consultaDB().proyectos;
}

exports.getOne = (uid) => {
    let proyectos = consultaDB().proyectos;
    return proyectos.filter( item => {
        return (item.uid == uid)
    });
}

exports.create = (nuevoProyecto) => {
    let bd = consultaDB();
    let proyectos = bd.proyectos;
    let newItem = {
        uid: uuidv4(),
        ...nuevoProyecto
    }
    proyectos.push(newItem);
    bd.proyectos = proyectos;
    actualizaDB(bd);
    return {code:0};
}

exports.update = (uid, data) => {
    let bd = consultaDB();
    let proyectos = bd.proyectos;

    var idBuscar = proyectos.map((item) => { return item.uid; }).indexOf(uid);

    var respuesta = {
        code: 0
    };

    if (idBuscar == -1) {
        respuesta.code = 1;
    } else {
        data.uid = uid;
        proyectos[idBuscar] = data;
        bd.proyectos = proyectos;
        actualizaDB(bd);
    }
    return respuesta;
}

exports.delete = (uid) => {
    let bd = consultaDB();
    let proyectos = bd.proyectos;
    
    var idBuscar = proyectos.map((item) => { return item.uid; }).indexOf(uid);
    
    var respuesta = {
        code: 0
    };
    
    if (idBuscar == -1) {
        respuesta.code = 1;
    } else {
        proyectos.splice(idBuscar, 1);
        bd.proyectos = proyectos;
        actualizaDB(bd);
    }
    return respuesta;
}