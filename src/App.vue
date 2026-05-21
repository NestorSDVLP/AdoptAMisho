<template>

  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Refugio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/refugio">Refugio</router-link>
              </li>
              <li class="nav-item">
                <span class="badge text-bg-primary">{{ totalMishos }}</span>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <router-view />
  </main>

  <!--<div class="fab-camita">
    <span>{{ totalMishos }}</span>
  </div>-->

</template>

<script setup>

  import { ref } from 'vue'

  /*
  
  Este es nuestro "Estado Centralizado" por ahora. 
  Usamos 'ref' para que Vue sepa que si este número cambia, 
  tiene que actualizar el Header y el FAB al mismo tiempo automáticamente.

  */
  const totalMishos = ref(0)

</script>

<style scoped></style>