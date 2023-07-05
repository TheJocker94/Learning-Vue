<template>
    <div v-if="error">{{error}}</div>
    <div class="post" v-if="post">
        <h3>{{post.title}}</h3>
        <p class="pre">{{post.body}}</p>
    </div>
    <div v-else></div>
</template>

<script >
import getPost from '@/composable/getPost';
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id);
        load();
        return {
            post,
            error
        };
    }
}
</script>

<style scoped>
    .post {
        margin: 0 auto;
        max-width: 1200px;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
</style>
