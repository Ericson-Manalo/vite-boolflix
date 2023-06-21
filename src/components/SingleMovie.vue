<template>
    <div>
        <h1>
            Title: 
            {{ infos.title }}
        </h1>
        <hr>
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
    created(){
    }
}
</script>
<style lang="scss">

</style>