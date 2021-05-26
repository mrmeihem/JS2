// const API in main.js

class Cart {
    constructor(container = '.cart', cartLayer = '.cart_background', closeCart = '.cart_close') {
        // куда цепляемся
        this.container = container;
        this.cartLayer = cartLayer;
        this.closeCart = closeCart;
        // что в корзине
        this.cartTotal;
        this.cartItemsTotal;
        this.cartGoods = [];
        // заполняем из запроса наш объект
        this._getCartProducts()
            .then(data => {
                this.cartTotal = data.amount;
                // console.log(this.cartTotal);
                this.cartItemsTotal = data.countGoods
                // console.log(this.cartItemsTotal);
                this.cartGoods = data.contents;
                // console.log(this.cartGoods);
                this.render()
            });
    }
    // запрашиваем сервер
    _getCartProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    updateCartProducts() {
        // метод, который апдейтит список на сервере
    }

    render() {
        const cartBlock = document.querySelector(this.container);
        const cartVisible = document.querySelector(this.cartLayer);
        this.cartGoods.forEach(product => {
            const productObj = new CartItem(product);
            cartBlock.insertAdjacentHTML('beforeend', productObj.render());
        });
        cartVisible.style.display = 'block';
    }
}

// Класс для рендера одного(!) продукта
class CartItem {
    constructor(product, img = 'http://placehold.it/100x75') {
        this.name = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="cart_product" data-id="${this.id}">
                    <div class="cart_product_image">
                        <img src="${this.img}" alt="${this.name} pic">
                    </div>
                    <div class="cart_product_description">
                        <h2>${this.name}</h2>
                        <p>ID: ${this.id}</p>
                    </div>
                    <div class="cart_product_quantity">
                        <a href="#">-</a>
                        ${this.quantity}
                        <a href="#">+</a>
                    </div>
                    <div class="cart_remove">
                        <a href="#">Удалить</a>
                    </div>
                </div>`
    }
}

const openCart = document.querySelector('.btn-cart');
openCart.addEventListener('click', function () {
    console.log('click')
    let newcart = new Cart;
});



