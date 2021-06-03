// Не стал добивать меню по подпунктам, сделал вставку в секцию man, главное - принцип понял
const linkListSection = document.getElementById('menu');

const menu = [
    { link: '#', name: 'Shirts'},
    { link: '#Section_2', name: 'Trousers'},
    { link: '#', name: 'Shorts'}
];
const renderMenu = (link, name) => `<li><a href="${link}">${name}</a></li>`;

const renderLinkList = (list) => {
    const linkList = list.map(item => renderMenu(item.link, item.name));
    document.querySelector('.menu').innerHTML = linkList.join('');
}
renderLinkList(menu);
// Конец секции меню

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },


    },
    mounted(){


    }

});

