<template>
  <!-- 1. El Header Fijo que tiene el menú y el consumidor del estado -->
  <header class="main-header">
    <div class="logo">
      ?? Refugio Michis
    </div>
    <nav class="nav-links">
      <!-- Estos componentes son de Vue Router, reemplazan a las etiquetas <a> -->
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Nosotros</router-link>
    </nav>
    <div class="contador-header">
      ?? Camita: <span>{{ totalGatitos }}</span>
    </div>
  </header>

  <!-- 2. El lugar donde Vue Router va a renderizar Home o About -->
  <main class="content-wrapper">
    <router-view />
  </main>

  <!-- 3. El Botón Flotante (FAB) que también escucha cuántos gatitos van -->
  <div class="fab-camita">
    ??? <span>{{ totalGatitos }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Este es nuestro "Estado Centralizado" por ahora. 
// Usamos 'ref' para que Vue sepa que si este número cambia, 
// tiene que actualizar el Header y el FAB al mismo tiempo automáticamente.
const totalGatitos = ref(0)
</script>

<style scoped>
/* Tu CSS puro y duro para que quede impecable */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
.nav-links a {
  margin-right: 15px;
  color: #42b983;
  text-decoration: none;
}
.fab-camita {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #42b983;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-size: 1.5rem;
}
</style>