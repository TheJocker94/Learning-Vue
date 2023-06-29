<template>
    <div class="result">
        <p>Reaction time : {{ score }} ms</p>
    </div>
</template>

<script>

export default {
    props: ['score'],
}
</script>

<style>
    .result{
        width: 400px;
        border-radius: 20px;
        background-color: #af9f0f;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>