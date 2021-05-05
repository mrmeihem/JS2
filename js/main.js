const products = [
    { id: 1, title: 'Notebook', price: 2000, picture: 'https://picsum.photos/300?random=1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Mouse', price: 20, picture: 'https://picsum.photos/300?random=2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Keyboard', price: 200, picture: 'https://picsum.photos/300?random=3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Gamepad', price: 50, picture: 'https://picsum.photos/300?random=4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    {}
    ,
    {}
];
//Функция для формирования верстки каждого товара
const renderProduct = (id = 'default', title = 'default', price = '100', picture = 'https://picsum.photos/300?random=5&grayscale&blur=10', description = 'Product description') => {
    let priceRu = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
    return `<div class="product-item">
                <h3>${title}</h3>
                <p><img src="${picture}"></p> 
                <p>id: ${id}</p>
                <p>${description}</p>
                <p>${priceRu}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
// Функция собирает массив из продуктов
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.id, item.title, item.price, item.picture, item.description));
    // map создает массив, а innerHTML принимает строку. Происходит неявное приведение типа, что и дает "лишнюю" запятую между элмементами массива.
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);