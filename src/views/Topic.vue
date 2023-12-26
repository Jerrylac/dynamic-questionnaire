<template>
    <div class="main" v-if="!boxBo">
        <div class="top">
            <span>問題:</span>
            <input type="text" v-model="this.title" name="" id="">
            <select v-model="this.type" name="" id="">
                <option value="">請選擇</option>
                <option value="單選題">單選題</option>
                <option value="復選題">復選題</option>
                <option value="短述題">短述題</option>
            </select>
            <input type="checkbox" name="necessary" value="true" v-model="this.necessary" id="">
            <span>必填</span>
        </div>
        <div class="op">
            <span>選項:</span>
            <span>(多個答案請以 , 分隔)</span>
        </div>
        <div class="op2">
            <input type="text" name="" id="" v-model="this.options">
            <button type="button" @click="join()">加入</button>
        </div>
        <i class="fa-solid fa-trash"></i>
        <div class="tab">
            <table>
                <thead>
                    <td></td>
                    <td>編號</td>
                    <td>問題</td>
                    <td>問題種類</td>
                    <td>必填</td>
                    <td>編輯</td>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in this.question">
                        <td><input type="checkbox" name="" id=""></td>
                        <td>{{ index+1 }}</td>
                        <td>{{item.title}}</td>
                        <td>{{ item.type }}</td>
                        <td><input type="checkbox" v-model="item.necessary" name="" id="" disabled></td>
                        <td>{{ item.options }}</td>
                    </tr>
                    
                </tbody>
            </table>
            <div class="btnBox">
                <button type="button" @click="goQuestionnaire()">上一步</button>
                <button type="button" @click="goQuestionnaireContent()" >送出</button>
            </div>
        </div>
    </div>
    <div class="box" v-if="boxBo">
        <QuestionnaireConfirmation :questionArr="this.question"/>
    </div>  
</template>
<script>
import QuestionnaireConfirmation from './QuestionnaireConfirmation.vue'
export default {

    data(){
        return{
            cancel:false,
            boxBo:false,
            left1:false,
            //問題名稱
            title:"",
            //選項樣式
            type:"",
            //是否必填
            necessary:false,
            //選項內容
            options:"",
            question:[]
        }
    },
    mounted(){
        // console.log(this.necessary);
    },
    methods:{
        goQuestionnaire(){
            this.$emit("orange",this.cancel)
            // this.$router.push('/AddNewInformation/Questionnaire')
        },
        goQuestionnaireContent(){
            this.boxBo=true
            this.$emit("question",this.left1)
            // this.$router.push('/QuestionnaireConfirmation')
        },
        join(){
            if(this.title==""||this.type==""){
                window.alert("請填寫問題或者題型")
                this.title=""
                this.type=""
                return
            }
            const opt =this.options.split(',')
            this.question.push({title:this.title,type:this.type,necessary:this.necessary,options:opt})
            this.title=""
            this.type=""
            this.necessary=false
            this.options=""
            // console.log(this.question);
        }
    },
    components:{
        QuestionnaireConfirmation
    },
    
}
</script>
<style scoped lang="scss">
    .main{
        width: 150vmin;
        height: 60vmin;
        background-color: #fff;
        .top{
            margin-bottom: 1vmin;
            span{
                font-size: 3vmin;
            }
            select{
                font-size: 3vmin;
            }
            input{
                font-size: 3vmin;
                margin-left: 1vmin;
                margin-right: 1vmin;
            }
        }
        .op{
            margin-bottom: 1vmin;
            span{
                margin-right: 1vmin;
                font-size: 3vmin;
            }
        }
        .op2{
            margin-bottom: 1vmin;
            input{
                margin-right: 1vmin;
                font-size: 3vmin;
            }
            button{
                // font-size: 3vmin;
                width: 10vmin;
                height: 4vmin;
                border-radius: 5px;
                cursor: pointer;
                &:hover{
                    background-color: black;
                    opacity: 0.4;
                    color: white;
                }
            }
        }
        .fa-trash{
        font-size: 5vmin;
        margin-right: 1vmin;
        cursor: pointer;
        }
        .tab{
            margin-top: 1vmin;
            table{
                width: 146vmin;
                thead{
                    background-color: aquamarine;
                }
            }
            .btnBox{
                margin-top: 2vmin;
                button{
                    width: 10vmin;
                    height: 4vmin;
                    margin-right: 1vmin;
                    border-radius: 5px;
                    cursor: pointer;
                    &:hover{
                    background-color: black;
                    opacity: 0.4;
                    color: white;
                }
                }
                margin-left: 128vmin;
            }
        }
    }
    .box{
        background-color: #fff;
    }
</style>