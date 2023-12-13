<template>
    <div class="main">
        <div class="name">
            <span>問卷名稱:</span>
            <input type="text" value="青春洋溢高中生人氣投票戰" name="" id="">
        </div>
        <div class="illustrate">
            <span>問卷說明:</span>
            <input type="text" name="" id="">
        </div>
        <div class="time">
            <span>開始時間:</span>
            <input type="date" name="" id="">
        </div>
        <div class="time">
            <span>結束時間:</span>
            <input type="date" name="" id="">
        </div>
        <div class="btnBox">
            <button type="button">取消</button>
            <button type="button">下一步</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .main{
        width: 150vmin;
        height: 60vmin;
        padding-top: 10vmin;
        background-color: #fff;
        border: 1px solid black;
        span{
            font-size: 4vmin;
        }
        input{
            font-size: 3vmin;
            margin-left: 2vmin;
        }
        .name{
            margin-bottom: 1vmin;
        }
        .illustrate{
            margin-bottom: 1vmin;
        }
        .time{
            margin-bottom: 1vmin;
        }
        button{
            width: 10vmin;
            height: 4vmin;
            margin-right: 1vmin;
            border-radius: 10px;
            &:hover{
                cursor: pointer;
                opacity: 0.5;
            }
        }
        
        .btnBox{
            margin-top: 25vmin;
            width: 60vmin;
            // background-color: black;
            // margin-left: 1vmin;
        }
    }
</style>