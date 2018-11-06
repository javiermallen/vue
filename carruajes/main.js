Vue.component('carruaje',{
    template: '#carruajes',
    props: ['item']



});

new Vue({
    el: '#app',
    data: {
        carruaje: [
            {
                id: 1,
                nombre: 'Olimpus',
                caballos: 3
            },
            {
                id: 2,
                nombre: 'Nexus',
                caballos: 4
            },           
            {
                id: 3,
                nombre: 'Dimitrus',
                caballos: 2
            },
            {
                id: 4,
                nombre: 'Zeus',
                caballos: 1
            },
        ]
    },
    methods: {

    },
    computed: {

    }


})
