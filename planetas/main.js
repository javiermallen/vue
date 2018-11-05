Vue.component( 'mostrarplanetas',{
    props: [
        'planeta',
        'visitado'
    ],
    template: "#planeta"


});

new Vue({
    el: '#app',
    data: {
        planetas: [
            {
                nombre: 'Mercurio',
                visitas: 0
            },
            {
                nombre: 'Venús',
                visitas: 0
            },
            {
                nombre: 'Tierra',
                visitas: 0
            },
            {
                nombre: 'Marte',
                visitas: 1
            },
            {
                nombre: 'Jupiter',
                visitas: 3
            },
            {
                nombre: 'Saturno',
                visitas: 0
            },
            {
                nombre: 'Urano',
                visitas: 0
            },
            {
                nombre: 'Plutón',
                visitas: 0
            }
        ]
    }
})
