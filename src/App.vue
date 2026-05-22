<template>

  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <h2>Refugio</h2>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav align-items-center ms-auto me-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item ms-3">
              <router-link class="nav-link" to="/refugio">Gatitos</router-link>
            </li>
            <li class="nav-item ms-3">
              <div class="d-flex align-items-center">
                <img src="@/media/images/cat_face.svg" class="me-1">
                <span class="badge text-bg-primary rounded-pill">{{ catsCount }}</span>
              </div>
            </li>              
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <router-view />
  </main>

  <div class="fab-cats">
    <img src="@/media/images/cat_face.svg" class="icon">
    <span class="badge text-bg-primary rounded-pill">{{ catsCount }}</span>
  </div>

</template>

<script setup>

  import { ref } from 'vue'

  const catsCount = ref(0)

</script>

<style scoped></style>