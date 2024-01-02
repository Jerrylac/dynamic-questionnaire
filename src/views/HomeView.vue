<template>
  <div class="main">
    <div class="top">
      <div class="nameInp">
        <span>問卷名稱:</span>
        <input type="text" v-model="this.name"  name="" id="">
        <!-- v-model="this.search.name" -->
      </div>
      <div class="timeInp">
        <span>開始時間:</span>
        <input type="date" name="" id="" v-model="this.startData">
        <span>結束時間:</span>
        <input type="date" name="" id="" v-model="this.endData">
        <button type="button"  @click="getdata()">搜尋</button>
      </div>
    </div>
    <div class="bottom">
  <table>
  <thead>
    <td>編號</td>
    <td>名稱</td>
    <td>狀態</td>
    <td>開始時間</td>
    <td>結束時間</td>
    <td>結果</td>
  </thead>
  <tbody v-for="(item) in frontDesk">
    <tr v-for="(item1,index) in item">
      <td>{{index+1}}</td>
      <td><button type="button" @click="questionData(index)" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ item1.name }}</button></td>
      <td>{{ item1.published }}</td>
      <td>{{ item1.startDate }}</td>
      <td>{{ item1.endDate }}</td>
      <td>前往</td>
    </tr>
  </tbody>
</table>
    </div>

  </div>
   <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{this.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" >
        <div class="mb-3">
            <label for="recipient-name" class="col-form-label">姓名:</label>
            <input type="text" v-model="this.questionName" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">手機:</label>
            <input type="number" v-model="this.questionPhone" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">郵件:</label>
            <input type="email" v-model="this.questionEmail" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">年齡:</label>
            <input type="number" v-model="this.questionAge" class="form-control" id="recipient-name">
          </div>
        <form class="" v-for="(item,index) in this.question">
          <div class="mb-3 question">
            <label for="recipient-name" class="col-form-label">{{index+1}}.</label>
            <label for="recipient-name" class="col-form-label" v-if="item.necessary==true">{{item.title}}(必填):</label>
            <label for="recipient-name" class="col-form-label" v-if="item.necessary==false">{{item.title}}:</label>
            <!-- <input type="text" v-model="item.options" class="form-control" id="recipient-name"> -->
          </div>
          <div class="mb-3" v-for="(opt,optIndex) in this.options">
            <div class="test" v-for="item1 in opt">
              <input type="radio" class="SingleChoice"  name="SingleChoice"  id="" v-if="item.type=='單選題'&&index==optIndex">
              <input type="checkbox" class="Check" name="Check" id="" v-if="item.type=='復選題'&&index==optIndex">
              <textarea class="form-control message" name="message" id="message-text" v-if="item.type=='短述題'&&index==optIndex"></textarea>
              <span v-if="index==optIndex">{{ item1 }}</span>
            </div>
            <!-- <span>{{ optIndex }}</span> -->
            
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="write()">確認</button>
        <!-- <button type="button" class="btn btn-primary" @click="writeTest2 ()">12確認</button> -->
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
      userInfo:{
        account:"",
        password:""
      },
      search:{
        name:"",
        description:"",
        stardate:"",
        enddate:"",
        questionList:[{
          num:"",
          title:"",
          type:"",
          necessary:false,
          options:""
        }],
        
      },
      frontDesk:[],
      name:"",
      startData:"",
      endDate:"",
      
      // optionsAnswer:[],

      questionNum:"",
      question:"",
      questionName:"",
      questionPhone:"",
      questionEmail:"",
      questionAge:"",
      questionAnswerSingleChoice:"",
      questionAnswerCheck:"",
      questionAnswerMessage:"",

      Answer:[],
      AnswerRadio:"",

      title:"",
      arr:[],
      options:[],

      type:"",
      necessary:"",


      testans:"",

      puion:[]
    }
  },
  mounted() {
    axios({
            url:'http://localhost:8080/quiz/search',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              quiz_name:"",
              start_data:"",
              end_data:"",
              is_longin:false,
            //   Object.values(this.question).map(question => question)
              is_published:true
            },
          }).then(res=>{
            this.frontDesk.push(res.data.quizList)
            
            // console.log(this.frontDesk)
            
            
          })
    let test=[{"qNum":1,"optionList":["BBB"]},{"qNum":2,"optionList":["^____^"]}]
    this.testans=JSON.stringify(test)
    console.log(this.testans);
    // console.log(test);



  },
  methods:{
        goQuestionnaireContent(){
            this.$router.push('/QuestionnaireContent')
        },
        loginUser(){
          axios({
            url:'http://localhost:8080/api/login',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              account: this.userInfo.account,
              password: this.userInfo.password
            },
          }).then(res=>console.log(res))
        },
        test(index){
          this.frontDesk.forEach(item=>{
            console.log(index=1);
            console.log(item);
          })
        },
        getdata(){  
          axios({
              url:'http://localhost:8080/quiz/search',
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              data:{
                quiz_name:this.name,
                start_data:this.startData,
                end_data:this.endDate,
                is_longin:false,
              //   Object.values(this.question).map(question => question)
                is_published:true
              },
            }).then(res=>{
              if(this.frontDesk.length!=0){
                this.frontDesk.length=0
                this.frontDesk.push(res.data.quizList)
                this.name=""
                this.startData=""
                this.endDate=""
                console.log(res.data)
                return
              }


              // console.log(this.search);
              })
        },
        questionData(index){
          if(this.options.length!=0){
            this.options.length=0
          }
          this.frontDesk.forEach(frontDesk=>{
            frontDesk.forEach((item,itemIndex)=>{
              if(itemIndex!=index){
                return
              }
              // let opt=item.options.split(',')
              this.title=item.name
              this.questionNum=item.num
              // this.arr.push(opt)
              if(this.question!=""){
                  this.question=""
                }
              this.question=JSON.parse(item.questionStr)
              this.question.forEach(item=>{
                this.options.push(item.options.split(','))
                // console.log(this.options);
              })
              // console.log(this.questionNum);
            })
          })
        },
        write(){
          const question=document.querySelectorAll(".question")
          const test=document.querySelectorAll(".SingleChoice")
          const test1=document.querySelectorAll(".Check")
          const test2=document.querySelectorAll(".message")
          this.Answer=[]
          this.question.forEach(item=>{
            this.options.forEach(opt=>{
              if(item.options!=opt){
                return
              }
              item.options=opt
            })
            console.log(item);
          })

          test.forEach((test,testIndex)=>{
            if(test.checked){
              this.question.forEach((question,questionIndex)=>{
                console.log();
                if(question.type=="單選題"){
                  const optValues  = Object.values(question.options);
                  this.Answer.push({ qNum: questionIndex+1, optionList: [optValues[testIndex]] });
                }
                
              })
            }
            
          })
          test1.forEach((test1,test1Index)=>{
            if(test1.checked){
              this.question.forEach((question,questionIndex)=>{
                if(question.type=="復選題"){
                  const optValues  = Object.values(question.options);
                  this.Answer.push({ qNum: questionIndex+1, optionList: [optValues[test1Index]] });
                }
              })
            }
          })
          console.log(this.Answer);
          axios({
            url:'http://localhost:8080/write/write',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              quizNum:this.questionNum,
              name:this.questionName,
              phone:this.questionPhone,
              email:this.questionEmail,
              age:this.questionAge,
              answer:JSON.stringify(this.Answer),
            },
          }).then(res=>{
            console.log(res.data);
            window.alert("感謝您的填寫")
            
            // console.log(this.frontDesk)
            
            
          })
        },
        writeTest(){
          
          const question=document.querySelectorAll(".question")
          const test=document.querySelectorAll(".SingleChoice")
          const test1=document.querySelectorAll(".Check")
          const test2=document.querySelectorAll(".message")
          this.Answer=[]
          //單選
          test.forEach((test,testIndex)=>{
            if (test.checked){
              this.question.forEach(question=>{
                const test=question.options.split(',')
                test.forEach((item,index)=>{
                  if(testIndex==index){
                    console.log(question.title);
                  }
                  console.log(index)
                })
              })
              const optValues  = Object.values(this.options[0]);
              this.Answer.push({ question: 123, options: optValues[testIndex] });
              // console.log(testIndex);
            }
          })
          console.log(this.Answer);
          //複選
          test1.forEach((test1,test1Index)=>{
            if (test1.checked){
              // console.log(test1Index);
            }
          })
          //選項
           this.options.forEach((opt,optIndex)=>[
            
            opt.forEach((op,opIndex)=>{
              // console.log(opIndex);
            }),
            // console.log(optIndex)
           ])
          //問題
          this.question.forEach((question,questionIndex)=>{
            // console.log(questionIndex);
          })
        },
        writeTest1(){
          const test=document.querySelectorAll(".SingleChoice")
          const test1=document.querySelectorAll(".Check")
          const test2=document.querySelectorAll(".message")
          const obj={}
          for(const key in test){
            if(Object.prototype.hasOwnProperty.call(test,key)){
              obj[key]=test[key]
            }
          }
          for(const key in test1){
            if(Object.prototype.hasOwnProperty.call(test1,key)){
              if (obj[key] !== undefined) {
                if (Array.isArray(obj[key])){
                  obj[key].push(test1[key]);
                }else{
                  obj[key] = [obj[key], test1[key]];
                }
              }else{
                obj[key] = test1[key];
              }
            }
          }
          console.log(obj);
        },
        writeTest2(){
          const question=document.querySelectorAll(".question")
          const test=document.querySelectorAll(".SingleChoice")
          const test1=document.querySelectorAll(".Check")
          const test2=document.querySelectorAll(".message")
          this.Answer=[]
          this.question.forEach(item=>{
            this.options.forEach(opt=>{
              if(item.options!=opt){
                return
              }
              item.options=opt
            })
            console.log(item);
          })

          test.forEach((test,testIndex)=>{
            if(test.checked){
              this.question.forEach((question,questionIndex)=>{
                console.log();
                if(question.type=="單選題"){
                  const optValues  = Object.values(question.options);
                  this.Answer.push({ qNum: questionIndex+1, optionList: [optValues[testIndex]] });
                }
                
              })
            }
            
          })
          test1.forEach((test1,test1Index)=>{
            if(test1.checked){
              this.question.forEach((question,questionIndex)=>{
                if(question.type=="復選題"){
                  const optValues  = Object.values(question.options);
                  this.Answer.push({ qNum: questionIndex+1, optionList: [optValues[test1Index]] });
                }
              })
            }
          })
          console.log(JSON.stringify(this.Answer));
        }

    },
    
}
</script>
<style scoped lang="scss">
  .main{
    width: 200vmin;
    height: 80vmin;
    margin-top: 50px;
    margin-left: 3%;
    // margin-bottom: 50vmin;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: white;
    .top{
      width: 90%;
      height: 20vmin;
      margin-left: 5%;
      border: 1px solid black;
      background-color: white;
      .nameInp{
        width: 100%;
        height: 40%;
        padding-top: 2vmin;
        // background-color:aquamarine;
        span{
          font-size: 20px;
          margin-left: 5vmin;
          margin-right: 10px;
        }
        input{
          width: 90vmin;
          height: 30px;
          font-size: 20px;
        }
      }
      .timeInp{
        width: 94.5%;
        height: 40%;
        padding-top: 20px;
        padding-left: 5vmin;
        // background-color: aqua;
        span{
          font-size: 20px;
        }
        input{
          width: 60vmin;
          height: 30px;
          margin-left: 2vmin;
          margin-right: 2vmin;
          font-size: 20px;
        }
        button{
          width: 10vmin;
          height: 4vmin;
          border-radius: 10px;
          color: white;
          background-color: #AE445A;
          cursor: pointer;
        }
        button:hover{
          color: #E3651D;
        }
        
      }
    }
    .bottom{
      margin-top: 20px;
      margin-left: 10vmin;
      table{
        width: 180vmin;
        border: 1px solid black;
        thead{
          margin: 0px;
          height: 5vmin;
          background-color: beige;
          text-align: center;
          border: 1px solid black;
        }
        .chLink{
          cursor: pointer;
          color: blue;
          text-decoration: underline;
        }
      }
    }
    td{
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
  }
</style>