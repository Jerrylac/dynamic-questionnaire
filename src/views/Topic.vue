<template>
    <div class="main">
        <div class="top">
            <span>問題:</span>
            <input type="text" name="" id="">
            <select name="" id="">
                <option value="">單選題</option>
                <option value="">復選題</option>
                <option value="">短述題</option>
            </select>
            <input type="checkbox" name="" id="">
            <span>必填</span>
        </div>
        <div class="op">
            <span>選項:</span>
            <span>(多個答案請以;分隔)</span>
        </div>
        <div class="op2">
            <input type="text" name="" id="">
            <button type="button">加入</button>
        </div>
        <i class="fa-solid fa-trash"></i>
        <div class="tab">
            <table>
                <thead>
                    <td></td>
                    <td>編號</td>
                    <td>內容</td>
                    <td>問題種類</td>
                    <td>必填</td>
                    <td>編輯</td>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號1</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號2</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號3</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號4</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號5</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號6</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號7</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>編號8</td>
                        <td>123</td>
                        <td>123</td>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>123</td>
                    </tr>
                </tbody>
            </table>
            <div class="btnBox">
                <button type="button" @click="goQuestionnaire()">上一步</button>
                <button type="button" @click="goQuestionnaireContent()" >送出</button>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    methods:{
        goQuestionnaire(){
            this.$router.push('/AddNewInformation/Questionnaire')
        },
        goQuestionnaireContent(){
            this.$router.push('/QuestionnaireConfirmation')
        }
    }
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
</style>