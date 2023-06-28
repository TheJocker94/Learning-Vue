const app = Vue.createApp({
    // data, functions
    data() {
        return{
            showBooks: true,
            libbro :"The libbro",
            author :"Gino Lool",
            age:    45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

console.log("ARRIVO QUA");

app.mount('#app')