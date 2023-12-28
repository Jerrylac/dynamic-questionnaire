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
        <div class="question" v-for="(item, index) in this.arr">
            <span>{{ index+1 }}.{{ item.title }}</span>
            <div class="answer" v-for="opt in item.options">
                <input type="radio" name="SingleChoice" id="" v-if="item.type=='單選題'">
                <input type="checkbox" name="Check" id="" v-if="item.type=='復選題'">
                <textarea class="form-control" id="message-text" v-if="item.type=='短述題'"></textarea>
                <span >{{ opt }}<br></span>
            </div>
            
        </div>
        <div class="btnBox">
            <button type="button" class="del" @click="goHomeView()">儲存</button>
            <button type="button" class="del" @click="goConfirmationPage()">儲存並發布</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            question:this.questionArr,
            arr:[],
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
            axios({
            url:'http://localhost:8080/quiz/create',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              name:this.quizBox.name,
              description:this.quizBox.defineComponent,
              start_data:this.quizBox.startData,
              end_data:this.quizBox.endDate,
              question_list:this.question,
            //   Object.values(this.question).map(question => question)
              is_published:false
            },
          }).then(res=>{
            console.log(res.data)
            window.alert("儲存成功")
            this.$router.push('/about')
            }).catch (error => {
    if (error.response) {
        // 這裡可以取得伺服器回應的詳細信息
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    console.error('Error:', error);
});
            
        },
        goConfirmationPage(){
            axios({
            url:'http://localhost:8080/quiz/create',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            data:{
              name:this.quizBox.name,
              description:this.quizBox.defineComponent,
              start_data:this.quizBox.startData,
              end_data:this.quizBox.endDate,
              question_list:this.question,
            //   Object.values(this.question).map(question => question)
              is_published:true
            },
          }).then(res=>{
            console.log(res.data)
            window.alert("儲存並發送成功")
            this.$router.push('/about')
            }).catch (error => {
    if (error.response) {
        // 這裡可以取得伺服器回應的詳細信息
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    console.error('Error:', error);
});
            
        }

    },
    mounted(){
        this.questionArr.forEach(element => {
            
            let opt= element.options.split(',')
            this.arr.push({title:element.title,type:element.type,necessary:element.necessary,options:opt})
        });
        console.log(this.arr);
        // console.log(this.questionArr);
        // this.arr.push(this.question)
        // console.log(typeof (this.arr));
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
        padding-bottom: 2vmin;
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
            margin-left: 100vmin;
            // display: flex;
            button{
                width: 15vmin;
                height: 5vmin;
                border-radius: 1vmin;
                margin-left: 3vmin;
                cursor: pointer;
            }
            .del{
                background-color: aliceblue;
                &:hover{
                background-color: rgb(198, 202, 207);
            }
            }
        }
        textarea{
            width: 50vmin;
        }
    }
  
</style>