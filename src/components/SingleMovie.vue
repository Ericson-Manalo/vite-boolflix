<template>
    <div>
        <h1>
            Title: 
            {{ infos.title }}
        </h1>

        <p>
            Original title:
            {{ infos.original_title }}
        </p>
        <p>
            Original language:
            {{ infos.original_language }}
        </p>
        <p>
            {{ infos.vote_average }}
        </p>
        <hr>
    </div>

</template>


<script>
export default {
    name :'SingleMovie',
    data() {
        return {
            
        }
    },

    props:{
        infos : Object
    },
    
    components:{
        
    },

    methods:{

    },

    created(){
    }
}
</script>
<style lang="scss">

</style>