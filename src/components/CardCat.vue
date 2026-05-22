<template>

    <div :id="id" class="card-cat card">
        <img :src="catsThumb" class="card-img-top" :alt="catsName">
        <div class="card-body">
            <h4 class="card-title">{{ catsName }}</h4>
            <p class="card-text"><strong>Edad:</strong> {{ catsAge }}</p>
            <p class="card-text">{{ catsDescription }}</p>
            <button type="button" class="btn-adopt btn btn-primary">Adoptar</button>
        </div>
    </div>

</template>

<script setup>

    defineProps({
        id: Number,
        catsName: String,
        catsAge: Number,
        catsDescription: String,
        catsThumb: String
    })

</script>