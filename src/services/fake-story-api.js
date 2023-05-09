

const FakeStoryAPI = {
    async fetchAllProducts() {
        let products;
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => products = json)
        // console.log(products)
        return products
    },
    async fetchSingleProduct(id) {
        let product;
        await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => product = json)
        return product
    }
}

export { FakeStoryAPI }

