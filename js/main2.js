//Creamos una instancia de Vue
//Con esto hacemos una especie de proxy a vm y nos permite modificar valores desde fuera por ejemplo desde la consola
const vm = new Vue ({
//new Vue ({
    el: 'main',
    data: {
        //conectado: true,
        conectado: false,
        edad: 44,
    },

});