<template>
    <div>
        <div class="headerShow">
            <div class="box">
                <RouterLink to="/AddNewInformation/Questionnaire" class="link1">問卷</RouterLink>
            </div>
            <!-- <br> -->
            <div class="box">
                <RouterLink to="/AddNewInformation/Topic" class="link1">題目</RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        RouterLink
    }
}
</script>
<style scoped lang="scss">
    .headerShow{
        margin-top: 0.9vmin;
        display: flex;
        
    }
    a.router-link-exact-active{
        font-size: 4vmin;
        font-weight: bold;
        padding: 1vmin;
        background-color:aquamarine;
        border-top-left-radius: 2vmin;   
        border-top-right-radius: 4vmin;   
    }
</style>