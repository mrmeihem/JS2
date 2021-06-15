export Vue.component( 'cart', {
    data() {
        return {
            showCart: false,
            cartItems: [],
        }
    },
    methods: {
        addProduct( product ) {
            let find = this.cartItems.find( el => el.id_product === product.id_product );
            if ( find ) {
                this.$parent.putJson( `/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: 1 } )
                    .then( data => {
                        if ( data.result ) {
                            find.quantity++;
                        }
                    } )
            } else {
                let prod = Object.assign( { quantity: 1 }, product );
                this.$parent.postJson( `api/cart/${ product.id_product }/${ product.product_name }`, prod )
                    .then( data => {
                        if ( data.result ) {
                            this.cartItems.push( prod );
                        }
                    } )
            }
        },
        remove( product ) {
            if ( product.quantity > 1 ) {
                this.$parent.putJson( `/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: -1 } )
                    .then( data => {
                        if ( data.result ) {
                            product.quantity--;
                        }
                    } )
            } else {
                this.$parent.delJson( `/api/cart/${ product.id_product }/${ product.product_name }`, product )
                    .then( data => {
                        if ( data.result ) {
                            this.cartItems.splice( this.cartItems.indexOf( product ), 1 );
                        } else {
                            console.log( 'error' );
                        }
                    } )
            }
        },
    },
    mounted() {
        this.$parent.getJson( `/api/cart` )
            .then( data => {
                for ( let el of data.contents ) {
                    this.cartItems.push( el )
                }
            } );
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
                                <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.imgCart" :cart-item="item" @remove="remove" @add-product="addProduct">
                                </cart-item>
                                <hr>
                                <h3><b>Grand Total:</b> {{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }}</h3>
                            </div>  
                        </div>
                    </div>
                </div>
            `
} );