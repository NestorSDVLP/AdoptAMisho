<template>

    <section id="viewStore" class="container">
        <h1>Gatitos</h1>

        <div class="row g-4">

            <div v-for="cat in cats" :key="cat.id" class="col-lg-4">
                <CardCat
                    :id="cat.id"
                    :catsName="cat.name"
                    :catsAge="cat.age"
                    :catsDescription="cat.description"
                    :catsThumb="cat.thumb"
                />
            </div>

        </div>

    </section>

</template>

<script setup>

    import { ref, onMounted } from 'vue'

    import CardCat from '@/components/CardCat.vue'

    const cats = ref([])

    const getCats = async () => {

        const response = await fetch('/data/cats/cats.json')

        const data = await response.json()

        cats.value = data

    }

    onMounted(() => {

        getCats()

    })

</script>