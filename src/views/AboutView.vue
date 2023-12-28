<template>
  <div class="main">
    <div class="top">
      <div class="nameInp">
        <span>問卷名稱:</span>
        <input type="text" v-model="this.name" name="" id="">
      </div>
      <div class="timeInp">
        <span>開始時間:</span>
        <input type="date" v-model="this.startData" name="" id="">
        <span>結束時間</span>
        <input type="date" v-model="this.endDate" name="" id="">
        <button type="button"  @click="getdata()">搜尋</button>
      </div>
    </div>
    <div class="ioc">
      
      <i class="fa-solid fa-plus" @click="goAddNewInformation()"></i>
    </div>
    <div class="bottom">
  <table>
  <thead>
    <td></td>
    <td>編號</td>
    <td>名稱</td>
    <td>狀態</td>
    <td>開始時間</td>
    <td>結束時間</td>
    <td>結果</td>
  </thead>
  <tbody v-for="item in this.search">
    <tr  v-for="(item1,index) in item">
      <td><i class="fa-solid fa-trash"></i></td>
      <td>{{index+1}}</td>
      <td><button type="button" @click="upData(index)" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ item1.name }}</button></td>
      <td>{{item1.published}}</td>
      <td>{{ item1.startDate }}</td>
      <td>{{ item1.endDate }}</td>
      <td>123</td>
      <!-- {{ item1.questionStr }} -->
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
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">問卷名稱:</label>
            <input type="text" v-model="this.upName" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">問卷說明:</label>
            <textarea v-model="this.upDescription" class="form-control" id="message-text"></textarea>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">開始時間:</label>
            <input type="date" v-model="this.upStartData" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">結束時間:</label>
            <input type="date" v-model="this.upEndDate" class="form-control" id="recipient-name">
          </div>
          <div class="queiont" v-for="(item,index) in upquestionList">
            <div class="num">第{{ index+1 }}題</div>
            <div class="mb-3">
            <label for="recipient-name" class="col-form-label">問題名稱:</label>
            <input type="text" v-model="item.title" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <select v-model="item.type" name="" id="">
                <option value="">請選擇</option>
                <option value="單選題">單選題</option>
                <option value="復選題">復選題</option>
                <option value="短述題">短述題</option>
            </select>
            <input type="checkbox" class="chBox" name="necessary" value="true" v-model="item.necessary" id="">
            <span>必填</span>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">選項(有多筆問題請以 , 分隔):</label>
            <textarea v-model="item.options" class="form-control" id="message-text"></textarea>
          </div>
          <hr>
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
import axios from 'axios';

export default {
  data(){
    return{
      search:[],
      name:"",
      startData:"",
      endDate:"",
      upName:"",
      upStartData:"",
      upEndDate:"",
      upDescription:"",
      upquestionList:"",
    }
  },
  methods:{
    goAddNewInformation(){
            this.$router.push('/AddNewInformation')
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
              is_longin:true,
            //   Object.values(this.question).map(question => question)
              is_published:false
            },
          }).then(res=>{
            if(this.search.length!=0){
              this.search.length=0
              this.search.push(res.data.quizList)
              this.name=""
              this.startData=""
              this.endDate=""
              console.log(res.data)
              return
            }
            
            
            // console.log(this.search);
            })
    },
    upData(index){
      this.search.forEach(search=>{
        search.forEach((item,itemIndex)=>{
          if(itemIndex!=index){
            return
          }
          let test=item.questionStr
          this.upName=item.name
          this.upDescription=item.description
          this.upStartData=item.startDate
          this.upEndDate=item.endDate
          if(this.upquestionList!=""){
            this.upquestionList=""
          }
          this.upquestionList=JSON.parse(test)
          console.log(this.upquestionList);
          // console.log(this.upquestionList);
          // console.log(item.questionStr);
        })
      })
    }

  },
  mounted(){
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
              is_longin:true,
            //   Object.values(this.question).map(question => question)
              is_published:false
            },
          }).then(res=>{
            // console.log(res.data.quizList)
            this.search.push(res.data.quizList)
            console.log(this.search);
            })
            console.log(this.search);
  }
}
</script>
<style scoped lang="scss">
  .main{
    width: 200vmin;
    height: 90vmin;
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
          margin-left: 10vmin;
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
        padding-left: 10vmin;
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
        tbody{
        }
      }
    }
    .ioc{
      width: 90%;
      margin-left: 5%;
      margin-top: 2vmin;
      
      .fa-plus{
        font-size: 5vmin;
        cursor: pointer;
      }
    }
    .fa-trash{
        font-size: 4vmin;
        margin-right: 1vmin;
        cursor: pointer;
      }
  }
</style>