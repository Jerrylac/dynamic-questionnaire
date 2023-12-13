<template>
    <div class="main">
        <div class="left">
            <HeaderAdd/>
        </div>
        <div class="right">
            <RouterView/>
        </div>
    </div>
    
</template>
<script >
import { RouterLink,RouterView } from 'vue-router';
import HeaderAdd from '../components/HeaderAdd.vue'
export default{
    components:{
        RouterView,
        HeaderAdd
    }
}

</script>
<style scoped lang="scss">
    .main{
        // display: flex;
        padding: 5vmin;
        margin-left: 20vmin;
        // padding-left: 20vmin;
        .left{
            width: 160vmin;
            padding-top: 1vmin;
            background-color:white;
            height: 7vmin;
        }
        .right{
            width: 150vmin;
            margin-left: 0vmin;
            background-color: black;
            .main{
                margin-left: 0px;
            }
        }
    }
</style>