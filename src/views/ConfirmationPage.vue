<template>
    <div class="main">
        <div class="dataTime">
            <span>2023/12/6~2024/2/2</span>
        </div>
        <div class="titleText">
            <h1>青春洋溢高中生人氣投票戰</h1>
            <p>西過卜竹每道夕洋。何綠頁結四定羽麼但請飯：帽幸蝴急歡胡念占在步乾乞立收犬浪，哪很麼肉果毛尾皮要雨叫牙哪几立，法冰個貝邊內怎歡方兄；斗洋告但後已跑荷放高抄多申未會！國了誰習後但。 米二米每彩羊已乞得河有去已種米。遠意喜只多斤工外。到羊刀南，這位姐由立燈四枝各刃出樹他喝汁，面七戶冬服頁好包朵正：打息用書己國現、重里具雞邊送身。</p>
        </div>
        <div class="textInp">
            <div class="name">
                <span>姓名:</span>
                <span>123</span>
            </div>
            <div class="pan">
                <span>手機:</span>
                <span>123</span>
            </div>
            <div class="mail">
                <span>E-mail:</span>
                <span>123</span>
            </div>
            <div class="age">
                <span>年齡:</span>
                <span>123</span>
            </div>
        </div>
        <div class="question">
            <span>1.問題 使用v-for</span>
            <div class="answer">
                <!-- <span>123</span> -->
                <span class="text">我的回答</span>
            </div>
            <div class="answer1">
                <!-- <span>123</span> -->
                <span class="text">我的回答</span>
            </div>
            
        </div>
        <div class="btnBox">
            <button type="button" class="del" @click="goQuestionnaireContent()">修改</button>
            <button type="button" @click="goHomeView()">送出</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goQuestionnaireContent(){
            this.$router.push('/QuestionnaireContent')
        },
        goHomeView(){
            window.alert("以傳送")
            this.$router.push('/')
        }

    }
}
</script>
<style scoped lang="scss">
    .main{
        width: 80%;
        height: 140vmin;
        margin-left: 25vmin;
        margin-top: 3vmin;
        background-color: white;
        .dataTime{
            width: 100%;
            padding-top: 2vmin;
            padding-left: 150vmin;
        }
        .titleText{
            width: 150vmin;
            margin-left: 10vmin;
            margin-top: 1vmin;
            h1{
                text-align: center;
                margin-bottom: 5vmin;
            }
        }
        .textInp{
            width: 150vmin;
            margin-top: 5vmin;
            margin-left: 10vmin;
            span{
                font-size: 3vmin;
            }
            input{
                width: 120vmin;
                height: 4vmin;
            }
            .name{
                margin-bottom: 2vmin;
                input{
                    margin-left: 5vmin;
                }
            }
            .pan{
                margin-bottom: 2vmin;
                input{
                    margin-left: 5vmin;
                }
            }
            .mail{
                margin-bottom: 2vmin;
                input{
                    margin-left: 3vmin;
                }
            }
            .age{
                input{
                    margin-left: 5vmin;
                }
            }
        }
        .question{
            width: 150vmin;
            margin-top: 5vmin;
            margin-left: 10vmin;
            .text{
                margin-left: 2vmin;
            }
            span{
                font-size: 3vmin;
            }
            .answer{
                margin-top: 2vmin;
            }
            .answer1{
                margin-top: 0.4vmin;
            }
        }
        .btnBox{
            width: 30vmin;
            margin-top: 5vmin;
            margin-left: 10vmin;
            padding-left: 120vmin;
            button{
                width: 10vmin;
                height: 5vmin;
                margin-left: 3vmin;
                cursor: pointer;
            }
            .del{
                background-color: aliceblue;
            }
            .del:hover{
                background-color: rgb(198, 202, 207);
            }
        }
    }
</style>