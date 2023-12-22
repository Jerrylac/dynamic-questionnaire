<template>
  <div class="main">
    <div class="top">
      <div class="nameInp">
        <span>問卷名稱:</span>
        <input type="text" value="青春洋溢高中生人氣投票戰" name="" id="">
      </div>
      <div class="timeInp">
        <span>統計時間:</span>
        <input type="date" name="" id="">
        <span>到</span>
        <input type="date" name="" id="">
        <button type="button">搜尋</button>
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
      <td><input type="text" v-model="userInfo.accout" name="" id=""></td>
      <td><input type="text" v-model="userInfo.password" name="" id=""></td>
      <td>123</td>
      <td class="chLink" @click="test()">前往</td>
    </tr>
    <tr>
      <td>編號2</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
    </tr>
    <tr>
      <td>編號3</td>
      <td>123</td>
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


export default {
  data(){
    return{
      userInfo:{
        accout:"",
        password:""
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
        test(){
          const apiUrl=('https://localhost:8080/api/login');
          axios.post(apiUrl,
          {
            account:this.userInfo.accout,
            password:this.userInfo.password
          }
          ).then(res=>{
            console.log("登入成功");
          })
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