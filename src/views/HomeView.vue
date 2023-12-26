<template>
  <div class="main">
    <div class="top">
      <div class="nameInp">
        <span>問卷名稱:</span>
        <input type="text"  name="" id="">
        <!-- v-model="this.search.name" -->
      </div>
      <div class="timeInp">
        <span>開始時間:</span>
        <input type="date" name="" id="" v-model="this.search.stardate">
        <span>結束時間:</span>
        <input type="date" name="" id="" v-model="this.search.enddate">
        <button type="button" @click="">搜尋</button>
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
  <tbody>
    <tr>
      <td>編號1</td>
      <td class="chLink" @click="goQuestionnaireContent()">一個名稱</td>
      <td><input type="text" v-model="userInfo.account" name="" id=""></td>
      <td><input type="text" v-model="userInfo.password" name="" id=""></td>
      <td>123</td>
      <td class="chLink" @click="loginUser()">前往</td>
    </tr>
    <tr>
      <td>編號2</td>
      <td><input type="text" v-model="this.search.name" name="" id=""></td>
      <td><input type="text" v-model="this.search.description" name="" id=""></td>
      <td><input type="date" v-model="this.search.stardate" name="" id=""></td>
      <td><input type="date" v-model="this.search.enddate" name="" id=""></td>
      <td class="chLink" @click="test()">123</td>
    </tr>
    <tr>
      <td>編號3</td>
      <td><input type="text" v-model="this.search.questionList" name="" id=""></td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號4</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號5</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號6</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號7</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號8</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號9</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號10</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
  </tbody>
</table>
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
        }]
      }
    }
  },
  mounted() {
    // this.test();
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
        test(){
          axios({
            url:'http://localhost:8080/quiz/create',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              name:this.search.name,
              description:this.search.description,
              start_data:this.search.stardate,
              end_data:this.search.enddate,
              question_list:this.search.questionList
            },
          }).then(res=>console.log(res))
        }
    },
    
}
</script>
<style scoped lang="scss">
  .main{
    width: 200vmin;
    height: 70vmin;
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
        .chLink{
          cursor: pointer;
          color: blue;
          text-decoration: underline;
        }
      }
    }
  }
</style>