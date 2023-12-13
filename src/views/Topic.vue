<template>
    <div class="main">
        <div class="top">
            <span>問題:</span>
            <input type="text" name="" id="">
            <select name="" id="">
                <option value="">單選題</option>
                <option value="">復選題</option>
            </select>
            <input type="checkbox" name="" id="">
            <span>必填</span>
        </div>
        <div class="op">
            <span>選項</span>
            <span>(多個答案請以;分隔)</span>
        </div>
        <div class="op2">
            <input type="text" name="" id="">
            <button type="button">加入</button>
        </div>
        <i class="fa-solid fa-trash"></i>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .main{
        width: 150vmin;
        height: 50vmin;
        padding-top: 10vmin;
        background-color: #fff;
    }
</style>