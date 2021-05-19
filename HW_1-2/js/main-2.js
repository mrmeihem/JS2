class Product {
    constructor(id, name, price, description, images) {
        this.id = id
        this.name = name;
        this.price = price;
        this.description = description;
        // images will be an array
        this.images = images;
        // quantity of this item in stock
        this.stock = stock;
    }

    toCart() {
        // put an item in cart
        // arr.push({item})
    }

    renderProductPage() {
        // renders the product page
    }
}

class Cart {
    constructor(arrayOfObj) {
        // receives array of objs Product
    }

    calcTotalPrice() {
        // calculates total price of items
        // named it this way instead of GoodsList
        let totalPrice = 0;
        arrayOfObj.forEach(item => totalPrice += item.price);
        return totalPrice;
    }

    removeItem() {
        // removes an item from the cart
    }

    changeItemsQuantity() {
        // changes the quantity of an item
    }

    toCheckOut() {
        // proceed to checkout procedure
    }
}