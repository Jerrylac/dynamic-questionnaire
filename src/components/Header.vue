<template>
    <div>
        <div class="headerShow">
            <RouterLink to="/" class="link">前端</RouterLink>
            <RouterLink to="/about" class="link">後端</RouterLink>
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
<style lang="">
    
</style>