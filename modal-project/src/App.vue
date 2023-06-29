<template>
  <h1>{{title}}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <p>Useless text</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="dark" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">Sign up now, dark</a>
        <a href="#">more dark info</a>
      </template>
      <h1>Sono scuro</h1>
      <p>Madonna devi avere paura</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open modal(alt)</button>
  <button @click.shift="toggleModal2">Open modal(shift)</button>
</template>

<!-- Props are used to pass template data -->
<!-- data used to pass data, int, string, arrays, bool -->
<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      title: 'Welcome',
      header: 'Sign up',
      text: 'Example test puppatelo',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ccc;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
