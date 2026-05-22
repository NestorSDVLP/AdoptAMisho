<template>

    <div :id="`cardCat-${id}`" class="card-cat card">
        <img :src="catsThumb" class="card-img-top" :alt="catsName">
        <div class="card-body">
            <h4 class="card-title">{{ catsName }}</h4>
            <p class="card-text"><strong>Edad:</strong> {{ catsAge }}</p>
            <p class="card-text">{{ catsDescription }}</p>
            <button type="button" class="btn-adopt btn btn-primary" @click="adoptCat">
                {{ adopted ? 'Adoptado' : 'Adoptar' }}
            </button>
        </div>
    </div>

</template>

<script setup>

    const emit = defineEmits(['adopt'])

    const adoptCat = () => {
        emit('adopt', props.id)
    }

    const props = defineProps({
        id: Number,
        catsThumb: String,
        catsName: String,
        catsAge: String,
        catsDescription: String,
        adopted: Boolean
    })

</script>