## API para la gestión de tareas
========================

Proyecto publicado en Heroku
========================
- https://api-node-tareas.herokuapp.com

Documentación
========================
- https://documenter.getpostman.com/view/15903490/TzXzDcXE

Ejecutar el proyecto
========================

Requerimientos:
- Tener instalado Docker

Con NPM:
```
cd api-node-tareas
npm install
npm start
```

con docker ambiente local:
```
cd api-node-tareas
docker-compose up --build
```

con docker ambiente prod:
```
cd api-node-tareas
docker-compose -f docker-compose.prod.yml up --build
```