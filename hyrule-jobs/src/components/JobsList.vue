<template>
    <div class="job-list">
        <p>Ordered by {{order}}</p>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2> {{job.title}} in {{job.location}}</h2>
                <div class="salary">
                    <img src="../assets/rupee.svg" alt="">
                    <p>{{job.salary}} rupees</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti eligendi hic a eos dolorem facilis voluptatum blanditiis illo minima suscipit voluptate et ducimus, beatae iure rem alias. Quia, magni.</p>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script lang="ts">
    import{ computed, defineComponent, PropType} from 'vue'
    import Job from '@/types/Jobs'
    import OrderType from '@/types/OrderType'
    export default defineComponent({
        props: { jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderType>
        }
     },
     setup(props) {
         // in order to sort the jobs, we need to make a copy of the array
         // otherwise we would be mutating the original array
         // in Vue, we can use the spread operator to make a copy of an array
         // and then we can use the sort method to sort the array
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1
        })
    })
            return {orderedJobs}
     }
           
    })
</script>

<style scoped>
    .job-list {
        max-width: 960px;
        margin: 40px auto;
    }
    .job-list ul {
        padding: 0;
    }
    .job-list li {
        list-style-type: none;
        background: white;
        border-radius: 4px;
        padding: 16px;
        margin: 16px 0;
    }
    .job-list h2 {
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    .salary {
        display: flex;
    }
    .salary img {
        width: 30px;
    }
    .salary p {
        color: chartreuse;
        font-weight: bold;
        margin: 10px 4px;
    }
    .list-move {
        transition: all 1s;
    }

</style>