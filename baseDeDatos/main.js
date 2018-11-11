Vue.component ('carga-historias',{
    props: ['historia'],
    template: '#representa-historias',
    methods: {
        subirVotos ( historia ) {
            historia.upvotes ++;
            this.$http.patch('http://localhost:3000/api/stories/'+ historia.id , historia)
        }
    }
    
})


var vm = new Vue ({
    el: '#app',
    data: {
        historias: []
    },
    mounted: function () {
        // GET /someUrl
        this.$http.get('http://localhost:3000/api/stories').then( response => {
            // success callback
            //console.log( response );
            vm.historias = response.data
        }, response => {
            console.log( 'Ha habido un fallo al llamar a la base de datos' )
        });
          
    }

})