Vue.component('search-form', {
   data() {
      return {
         userSearch: ''
      }
   },
   template: `
                <form class="search-form" action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input class="search-field" type="text" placeholder="Search" v-model="userSearch">
                    <button class="search-button" type="submit">
                        <img src="img/search.svg" alt="Search">
                    </button>
                </form>
            `
});