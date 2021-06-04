Vue.component('products', {
    data(){
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div class="products">
            <product 
            v-for="product of filtered" 
            :key="product.id_product"
            :product="product"
            :img="product.imgProduct"></product>
        </div>`
});
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