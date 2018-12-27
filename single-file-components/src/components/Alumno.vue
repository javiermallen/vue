<template>
    <div>
        <div v-if="persona">
            <h1>{{ datosPersona.nombre }}</h1>
            <br>
            <img :src="datosPersona.foto" alt="">
            <h2>{{ datosPersona.email }}</h2>
        </div>
        <div v-else>
            <img src="https://media.tenor.com/images/d7395086d84d174728d8001d8bd0f563/tenor.gif" alt="">
        </div>
    </div>


</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            persona: null
        }
    },
    mounted() {
        axios.get('https://randomuser.me/api/').then( respuesta => {
            // Respuesta en caso de exito
            //console.log( respuesta );
           this.persona = respuesta.data.results[ 0 ]
        })
        .catch( function (error) {
            // Respuesta en caso de exito
            console.log( 'Ha habido un error al conectarse a la base de datos' );
        })
    },
    computed: {
        datosPersona () {
            return {
                nombre: this.persona.name.first + ' ' + this.persona.name.last,
                foto: this.persona.picture.thumbnail,
                email: this.persona.email
            }
        }
    }
}
</script>

    


</script>

<style>

</style>
