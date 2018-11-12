Vue.component ('carga-historias',{
    props: ['historia'],
    template: '#representa-historias',
    methods: {
        subirVotos( historia ) {
            historia.upvotes ++;
            this.$http.patch( 'http://localhost:3000/api/stories/'+ historia.id , historia )
        },
        eliminarHistoria( historia ) {
            let index = vm.historias.indexOf( historia );
            //console.log( index )
            vm.historias.splice( index, 1 )
            this.$http.delete( 'http://localhost:3000/api/stories/'+ historia.id , historia )
        },
        editarHistoria( historia ) {
            historia.editing = true
        },
        actualizarHistoria( historia ) {
            this.$http.patch( 'http://localhost:3000/api/stories/'+ historia.id , historia )
            historia.editing = false
        },
        guardarHistoria( historia ) {
            this.$http.post( 'http://localhost:3000/api/stories/', historia).then( response => {
                historia.editing = false
                historia.id = response.data.id
                //Vue.set(historia, 'id', response.data.id);
            })
        }
    }
    
})


var vm = new Vue ({
    el: '#app',
    data: {
        historias: []
    },
    mounted: function () {
        this.actualizarHistorias()
    }, 
    methods: {
        nuevaHistoria (){
            let nueva = {
                plot: '',
                writer: '',
                upvotes: 0,
                editing: true
                }
            this.historias.push( nueva )
            console.log (nueva)
        },
        actualizarHistorias (){
            // GET /someUrl
            this.$http.get('http://localhost:3000/api/stories').then( response => {
                // success callback
                //console.log( response );
                var historiaPreparada = response.data.map( historia => {
                    historia.editing = false;
                    return historia
                })
                vm.historias = historiaPreparada
            }, response => {
                console.log( 'Ha habido un fallo al llamar a la base de datos' )
            });
        }
    }
})