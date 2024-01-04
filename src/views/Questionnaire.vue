<template>
<div class="questionMain">
    <div class="questionTop">
            <div class="feedback" @click="getquestion()">
                <span>問卷回饋</span>
            </div>
            <div class="statistics" @click="getTopic()">
                <span>問卷統計</span>
            </div>
    </div>
    <div class="questionBottom" v-if="!questionBottom">
        <h5>問卷名 : {{ this.test.name }}</h5>
        <table>
            <thead>
                <td>編號</td>
                <td>姓名</td>
                <td>填寫時間</td>
                <td>觀看回復</td>
            </thead>
            <tbody v-for="(writer,index) in this.writerList">
                <tr>
                <td>{{index+1}}</td>
                <td>{{writer.name}}</td>
                <td>{{writer.writeDadeTime}}</td>
                <td><button type="button" class="btn" @click="writeAnswer(index)" data-bs-toggle="modal" data-bs-target="#CheckModal">查看</button></td>
                <!-- {{ item1.questionStr }} -->
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
  <div class="modal fade" id="CheckModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3" >
            <table>
            <thead>
                <td class="qtest">編號</td>
                <td>題目</td>
                <td>回答</td>
                
            </thead>
            <tbody>
                <tr v-for="item in this.answerArr">
                <td>{{ item.qNum }}</td>
                <td>{{ item.question }}</td>
                <td>{{ item.optionList[0] }}</td>
                <!-- {{ item1.questionStr }} -->
                </tr>
            </tbody>
        </table>
          </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
      </div>
    </div>
  </div>
</div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            test:this.questionTextArr,
            questionBottom:false,
            writerList:"",
            Answer:"",
            question:"",
            answerArr:[]
        }
    },
    props:[
        "questionTextArr",
    ],
    methods:{
        writeAnswer(index){
            this.question=JSON.parse(this.test.questionStr);
            this.answerArr=[]
            // console.log(this.question);
            this.question.forEach((question,questionIndex)=>{
                console.log(question);
                this.writerList.forEach((writer,writerIndex) => {
                if(index!=writerIndex){
                    return
                }
                this.Answer=JSON.parse(writer.answer)
                // console.log(.qNum);
                this.Answer.forEach(answer=>{
                    if(questionIndex+1==answer.qNum){
                        this.answerArr.push({qNum:answer.qNum,question:question.title,optionList:answer.optionList})
                    // console.log(answer);
                }
                })
               
            });
            
        })
        console.log(this.answerArr);
        }
    },
    mounted(){
        // console.log(this.test);
        
        axios({
            url:'http://localhost:8080/write/findbyquizNum',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
                quizNum:this.test.num,
            },
            data:{

            },
          }).then(res=>{
            
            
            this.writerList=res.data.writerList
            this.writerList.forEach(item=>{
                let dayTime=new Date(item.writeDadeTime)
                item.writeDadeTime=dayTime.getFullYear()+"年"+(dayTime.getMonth()+1)+"月"+dayTime.getDate()+"日"+" "+dayTime.getHours()+":"+dayTime.getMinutes()+":"+dayTime.getSeconds()
                console.log();
            })
            // console.log(this.writerList);
            })
            
    }
}
</script>
<style scoped lang="scss">
    .questionMain{
        padding: 5vmin;
        margin-left: 20vmin;
        margin-top: 5vmin;
        .questionTop{
            width: 150vmin;
            padding-top: 1vmin;
            background-color: white;
            border-bottom: 1px solid black;
            height: 7vmin;
            display: flex;
            .feedback{
                margin-left: 2vmin;
                margin-right: 2vmin;
                font-size: 4vmin;
                cursor: pointer;
                &:hover{
                    span{
                    color: #FF9800;
                    }
                }
            }
            .statistics{
                height: 100%;
                font-size: 4vmin;
                cursor: pointer;
                &:hover{
                    span{
                    color: #FF9800;
                    }
                }
            }
            
        }
        .questionBottom{
            width: 150vmin;
            padding-top: 10vmin;
            padding-bottom: 10vmin;
            background-color: white;
            border-bottom: 1px solid black;
        }
        
        table{
            margin-left: 25vmin;
            width: 100vmin;
            height: 5vmin;
            thead{
                background-color: antiquewhite;
                border: 1px solid black;
                td{
                        border: 1px solid black;
                    }
            }
            tbody{
                tr{
                    border: 1px solid black;
                    td{
                        border: 1px solid black;
                    }
                }
            }
        }
        .modal{
            table{
                width: 50vmin;
                margin-left:9vmin;
                .qtest{
                    width: 5vmin;
                }
            }
        }
    }
</style>