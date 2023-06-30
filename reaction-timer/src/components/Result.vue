<template>
    <div class="result" :style="{ backgroundColor: color }">
        <p>Reaction time : {{ score }} ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>

<script>

export default {
    props: ['score'],
    data(){
        return {
            rank: null,
            color: null
        }
    },
    mounted(){
        if (this.score < 150){
            this.rank = 'You\'re a cheater'
            this.color = 'red'
        }
        else if (this.score < 250){
            this.rank = 'You\'re a Ninja'
            this.color = 'green'
        }
        else if(this.score < 400){
            this.rank = 'You\'re not slow'
            this.color = 'orange'
        }else{
            this.rank = 'You\'re TOO SLOW'
            this.color = 'red'
        }
    }
}
</script>

<style>
    .result{
        width: 400px;
        border-radius: 20px;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
    .rank{
        font-size: 1.4em;
        color: aliceblue;
        font-weight: bold;
    }
</style>