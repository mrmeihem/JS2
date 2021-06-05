Vue.component( 'cart-item', {
    props: [ 'cartItem', 'img' ],
    template: `
                <div class="cart-item">
                    <img class="cartImg" :src="img" alt="Some img">
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
} )