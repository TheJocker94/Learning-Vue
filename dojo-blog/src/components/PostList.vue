
<template>
    <div class="pos-list">
        <div v-for="post in posts" key="post">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script >
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from '@/components/SinglePost.vue';
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => console.log('mounted'))
        onUnmounted(() => console.log('unmounted'))
        onUpdated(() => console.log('updated'))
    }
}
</script>

<style scoped>
    
</style>
