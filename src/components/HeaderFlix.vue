<template lang="">
    <header>
        <div class="logo">
            <!--credits to Emanuela Pau-->
            <img src="/img/boolflix_logo.png" alt="Boolflix's logo">
        </div>
        <nav class="navbar">
            <ul class="d-flex">
                <li>
                    Home
                </li>
                <li>
                    TV Shows
                </li>
                <li>
                    Movies
                </li>
                <li>
                    New & Popular
                </li>
                <li>
                    My List
                </li>
                <li>
                    Browse by Languages
                </li>
            </ul>
        </nav>

        <div>

        </div>
    </header>
</template>


<script>
export default {
    name :'HeaderFlix',
    data() {
        return {
            
        }
    },
    components:{
        
    }
}
</script>
<style lang="scss" scoped>
    header{
        height: 100px;
        display: flex;
        color: white;
    }

    div.logo{
        height: 100%;
    }

    nav{
        display: flex;
        height: 100%;
        width: 45%;
    }

    nav ul{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

    }
</style>