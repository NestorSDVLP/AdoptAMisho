<template>

    <div :id="id" class="card-cat card">
        <img :src="catsThumb" class="card-img-top" :alt="catsName">
        <div class="card-body">
            <h5 class="card-title">{{ catsName }}</h5>
            <p class="card-text">{{ catsDescription }}</p>
            <button type="button" class="btn-adopt btn btn-primary">Adoptar</button>
        </div>
    </div>

</template>

<script setup>

    defineProps({
        id: Number,
        catsName: String,
        catsDescription: String,
        catsThumb: String
    })

</script>