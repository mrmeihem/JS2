Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    item.imgPath = `img/${item.id_product}.jpg`;
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                item.imgPath = `img/${item.id_product}.jpg`;
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        remove(item){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
    },
    template: `
    <div class="cart_main">
        <a href="#" @click="showCart = !showCart">
            <img src="img/cart.svg" alt="Cart">
            <div class="count">{{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }}</div>
        </a>
        <div class="cart_arrow" v-show="showCart">
        </div>
        <div class="cart_popup" v-show="showCart">
            <h2 v-if=" cartItems.length === 0">Корзина пуста</h2>
            <div v-else>
                <div class="cart-block">      
                    <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.imgPath" :cart-item="item" @remove="remove" @add-product="addProduct">
                    </cart-item>
                    <hr>
                    <h3><b>Grand Total:</b> {{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }}</h3>
                </div>  
            </div>
        </div>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="cart-item">
        <img class="cartImg" :src="cartItem.img_product" alt="Some img">
        <div class="product-desc">
            <h2>{{ cartItem.product_name }}</h2>
            <p><b>Price:</b> {{ cartItem.price }}</p>
            <div class="changeQuantity">
                <button class="del-btn btnInCart" @click="$emit('remove', cartItem)"> - </button>
                <p>&#160;{{ cartItem.quantity }}&#160; item(s)&#160; </p>
                <button class="btnInCart" @click="$emit('add-product', cartItem)"> + </button>
            </div>          
            <p><b>Total:</b> {{ cartItem.price * cartItem.quantity }}</p>
        </div>
    </div>
    `
})