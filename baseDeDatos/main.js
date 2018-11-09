Vue.component ('carga-historias',{
    props: ['historia'],
    template: '#representa-historias'
    
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
            console.log( response )
        }, response => {
            console.log( response )
        });
          
    }

})