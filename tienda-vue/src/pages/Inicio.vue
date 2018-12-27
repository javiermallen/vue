<template>
  <div>
    <div class="titulo">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inicio',
    data () {
      return {
        msg: 'Bienvenido a nuestra Vue.js App'
      }
    }
  }
</script>