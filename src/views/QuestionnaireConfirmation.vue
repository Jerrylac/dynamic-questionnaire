<template>
    <div class="main1">
        <div class="dataTime">
            <span>{{this.quizBox.startData}}~{{this.quizBox.endDate}}</span>
        </div>
        <div class="titleText">
            <h1>{{this.quizBox.name}}</h1>
            <p>{{this.quizBox.defineComponent}}</p>
        </div>
        <div class="textInp">
            <div class="name">
                <span>姓名:</span>
                <input type="text" name="" id="">
            </div>
            <div class="pan">
                <span>手機:</span>
                <input type="text" name="" id="">
            </div>
            <div class="mail">
                <span>E-mail:</span>
                <input type="text" name="" id="">
            </div>
            <div class="age">
                <span>年齡:</span>
                <input type="text" name="" id="">
            </div>
        </div>
        <div class="question" v-for="item in this.question">
            <span>1.問題 使用v-for</span>
            <div class="answer">
                <input type="radio" name="" id="">
                <span>我的回答</span>
            </div>
            <div class="answer1">
                <input type="radio" name="" id="">
                <span>我的回答</span>
            </div>
            
        </div>
        <div class="btnBox">
            <button type="button" class="del" @click="goHomeView()">儲存</button>
            <button type="button" @click="goConfirmationPage()">儲存並發布</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            question:this.questionArr,
            // arr:[],
            // //問題名稱
            // title:"",
            // //選項樣式
            // type:"",
            // //是否必填
            // necessary:false,
            // //選項內容
            // options:[],

        }
    },
    methods:{
        goHomeView(){
            this.$router.push('/about')
            window.alert("儲存成功")
        },
        goConfirmationPage(){
            this.$router.push('/about')
            window.alert("已發布")
        }

    },
    mounted(){
        // this.arr.push(this.question)
        // console.log(this.arr);
    },
    inject:[
    "quizBox",
    ],
    props:[
        "questionArr",
    ]
}
</script>
<style scoped lang="scss">
    .main1{
        margin-top: 3vmin;
        background-color: white;
        overflow-y: scroll;
        overflow-x: hidden;
        .dataTime{
            width: 100%;
            padding-top: 2vmin;
            padding-left: 120vmin;
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
            width: 40vmin;
            margin-top: 5vmin;
            margin-left: 10vmin;
            padding-left: 100vmin;
            button{
                width: 15vmin;
                height: 5vmin;
                border-radius: 1vmin;
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
    .main1::-webkit-scrollbar{
        width: 10px;
      }
      .main1::-webkit-scrollbar-track {
        background: #3b73b8;
        border-radius: 10px;
      }
      .main1::-webkit-scrollbar-thumb {
        background: #aec3d7;
        border-radius: 10px;
      }
      .main1::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
</style>