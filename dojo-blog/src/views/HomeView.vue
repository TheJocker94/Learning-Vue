<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>
      <p v-if="!error">Loading posts ...</p>
    </div>
  </div>
</template>
<!-- <input type="text" v-model="search">
  <p>Search term {{search}}</p>
  <div v-for="name in matchingNames" :key="name">{{name}} </div>
  <button @click="handleClick">stop watching</button> -->
  <!-- Last lesson -->
  <!-- //not reactive values, so when they change, the view will not update
    //data () values are reactive, so when they change, the view will update
    //this.name = "Mario" will not work
    // When you use ref() you get a reactive object
    // You have to use .value to access the value and it has to be a const
    // We only use .value inside the setup() function
    // We can also import reactive and use it instead of ref
    // the difference is that reactive is used for objects and ref is used for primitive values
    // and reactive does not retain its reactivity when you destructure it
    // just use ref for everything, its better 
    // watchEffect is a function that will run whenever any reactive value inside of it changes
    // usually used to get data from database
    // to stop the watcher, you have to assign it to a variable and then call the variable
  -->
  <script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue';
import getPosts from '@/composable/getPosts.js';

export default {
    name: "Home",
    components: { PostList },
    setup() {
      const { posts, error, load} = getPosts();
      load();
        return {
            posts,
            error
            
        };
    }
}
</script>
