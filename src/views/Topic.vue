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
                        <td><i @click="deleteData(index)" class="fa-solid fa-trash"></i></td>
                        <td>{{ index+1 }}</td>
                        <td>{{item.title}}</td>
                        <td>{{ item.type }}</td>
                        <td><input type="checkbox" v-model="item.necessary" name="" id="" disabled></td>
                        <td><button type="button" @click="getindex(index)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">編輯</button>
                        </td>
                        <!-- {{ item.options }} -->
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


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">問題名稱:</label>
            <input type="text" v-model="this.reviseTitle" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <select v-model="this.reviseType" name="" id="">
                <option value="">請選擇</option>
                <option value="單選題">單選題</option>
                <option value="復選題">復選題</option>
                <option value="短述題">短述題</option>
            </select>
            <input type="checkbox" class="chBox" name="necessary" value="true" v-model="this.reviseNecessary" id="">
            <span>必填</span>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">選項:</label>
            <textarea v-model="this.reviseOptions" class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="reviseData()">確認修改</button>
      </div>
    </div>
  </div>
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
            question:[],

            reviseNum:"",
            //問題名稱
            reviseTitle:"",
            //選項樣式
            reviseType:"",
            //是否必填
            reviseNecessary:false,
            //選項內容
            reviseOptions:"",

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
            if(this.question.length==0){
                window.alert("問題不能為空")
                return
            }
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
            // const opt =this.options.split(',')
            this.question.push({title:this.title,type:this.type,necessary:this.necessary,options:this.options})
            this.title=""
            this.type=""
            this.necessary=false
            this.options=""
            // console.log(this.question);
        },
        getindex(index){
            this.question.forEach((item,index1)=>{
                if(index1!=index){
                    return
                }
                this.reviseNum=index
                this.reviseTitle=item.title
                this.reviseType=item.type
                this.reviseNecessary=item.necessary
                this.reviseOptions=item.options 
                console.log(this.reviseNum);
            })
        },
        reviseData(){
            // console.log(this.question);
            this.question.forEach((item,index)=>{
                if(this.reviseNum!=index){
                    return
                }
                item.title=this.reviseTitle
                item.type=this.reviseType
                item.necessary=this.reviseNecessary
                item.options=this.reviseOptions 
            })
        },
        deleteData(index){
            const btnDelete=window.confirm("確定要刪除嗎?")
            if(btnDelete){
                this.question.splice(index,1)
                console.log(this.question);
            }
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
        padding-top: 2vmin;
        padding-left: 2vmin;
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
        font-size: 3vmin;
        margin-left: 1vmin;
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
                margin-left: 120vmin;
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
                
            }
        }
    }
    .chBox{
        margin-left: 1vmin;
    }
    .box{
        background-color: #fff;
    }
</style>