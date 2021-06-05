Vue.component('product', {
    props: ['product', 'img'],
    template: `
                <div>
                    <a href="#">
                        <div class="product_img">
                            <div class="product_overlay">
                                <div class="button" @click="$root.$refs.cart.addProduct(product)">
                                    Add to Cart
                                </div>
                            </div>
                            <img :src="img" alt="Product picture">
                        </div>
                    </a>
                    <div class="product_description">
                        <h3>{{product.product_name}}</h3>
                        <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                            Ellery teams up with Moda Operandi.</p>
                        <em>{{product.price}}</em>
                    </div>
                </div>
            `
})