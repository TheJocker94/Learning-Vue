const app = Vue.createApp({
    // data, functions
    data() {
        return{
            url : 'https://www.google.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/1.jpg', isFav: true},
            ],
            libbro :"The libbro",
            author :"Gino Lool",
            age:    45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents(e, data){
            console.log(e.type);
            if(data){
                console.log(data);
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleFav(e){
            e.isFav = !e.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')