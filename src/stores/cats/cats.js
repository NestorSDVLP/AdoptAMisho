const cats = ref([])

const getCats = async () => {

    const response = await fetch('/data/cats/cats.json')

    const data = await response.json()

    cats.value = data

}
const adoptCat = (id) => {

    console.log('Adoptado:', id)

}