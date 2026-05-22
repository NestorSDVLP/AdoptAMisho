import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const useCatsStore = defineStore('cats', () => {

    const cats = ref([])

    const getCats = async () => {

        const response = await fetch('/data/cats/cats.json')

        const data = await response.json()

        cats.value = data

    }
    const adoptCat = (id) => {

        const cat = cats.value.find(c => c.id === id)

        if (!cat) return

        if (cat.adopted) return

        cat.adopted = true

        console.log('Adoptado:', id)

    }

    const adoptedCount = computed(() => {

        return cats.value.filter(c => c.adopted).length

    })

    return {
        cats,
        getCats,
        adoptCat,
        adoptedCount
    }

})