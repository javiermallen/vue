new Vue({
    el: '#app',
    data: {
        color: {
            value:'#c2c2c2'
        }
    },
    methods: {
        colorSeleccionado (){
            console.log( color.value )
        }
    }

})
