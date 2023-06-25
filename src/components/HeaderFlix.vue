<template lang="">
    <header>
        <div class="logo">
            <!--credits to Emanuela Pau-->
            <img src="/img/boolflix_logo.png" alt="Boolflix's logo">
        </div>
        <nav class="navbar">
            <ul class="settings">
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
            <ul class="list-icon">
                <li>
                    <i class="fa-solid fa-bell"></i>
                </li>
                <li>
                    <i class="fa-solid fa-user"></i>
                </li>
                <li>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
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
        margin-right: 2rem;
        width: 15%;
    }

    nav{
        display: flex;
        height: 100%;
        width: 75%;
        justify-content: space-between
    }

    nav ul.settings{
        display: flex;
        align-items: center;
        width: 70%;
        justify-content: space-between;
    }

    nav ul.list-icon{
        display: flex;
        align-items: center;
        width: 10%;
        justify-content: space-between;
    }
</style>