<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <ul class="nav nav-pills nav-fill">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/" active-class="active" exact>Inicio</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link" to="/admin" active-class="active">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/carrito" active-class="active">Carrito</router-link>
                  </li>
        </ul>       
      </div>

      <hr>
      <div class="row">
        <div class="col-12">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
