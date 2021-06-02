Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: []
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `
                <div>
                    <a href="#">
                        <div class="product_img">
                            <div class="product_overlay">
                                <div class="button" @click="$emit('add-product', product)">
                                    Add to Cart
                                </div>
                            </div>
                            <img :src="product.img_product" alt="Product picture">
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