<template>
  <div class="mainBox">
    <div class="left" v-if="left">
      <div class="question" @click="getquestion()">
        <span>問卷</span>
      </div>
      <div class="topic" @click="getTopic()">
        <span>題目</span>
      </div>
    </div>
    <div class="right">
      <div class="main" v-if="!this.test">
        <div class="name">
          <span>問卷名稱:</span>
          <input type="text" v-model="this.querstionArr.name" name="" id="" />
        </div>
        <div class="illustrate">
          <p>問卷說明<span class="text">(限200字)</span>:</p>
          <input
            type="text"
            v-model="this.querstionArr.defineComponent"
            class="illustrateInp"
            name=""
            id=""
          />
        </div>
        <div class="time">
          <span>開始時間:</span>
          <input
            type="date"
            v-model="this.querstionArr.startData"
            name=""
            id=""
          />
        </div>
        <div class="time">
          <span>結束時間:</span>
          <input
            type="date"
            v-model="this.querstionArr.endDate"
            name=""
            id=""
          />
        </div>
        <div class="btnBox">
          <button type="button" @click="goAbout()">取消</button>
          <button type="button" @click="goTopic()">下一步</button>
        </div>
      </div>
      <Topic @orange="gettest" @question="getleft" v-if="this.test" />
    </div>
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Topic from "./Topic.vue";
export default {
  data() {
    return {
      test: false,
      querstionArr: {
        name: "",
        description: "",
        startData: "",
        endDate: "",
      },
      left: true,
    };
  },
  provide() {
    return {
      quizBox:this.querstionArr
    };
  },
  methods: {
    goTopic() {
      this.test=!this.test
    },
    getquestion() {
      this.test = false;
    },
    getTopic() {
      this.test = true;
    },
    // gettest(xxx) {
    //   this.test = xxx;
    // },
    getleft(xxx) {
      this.left = xxx;
    },
  },
  components: {
    RouterView,
    Topic,
  },
};
</script>
<style scoped lang="scss">
.mainBox {
  // display: flex;
  padding: 5vmin;
  margin-left: 20vmin;
  // padding-left: 20vmin;
  .left {
    width: 150vmin;
    padding-top: 1vmin;
    background-color: white;
    border-bottom: 1px solid black;
    height: 7vmin;
    display: flex;
    .question {
      margin-left: 2vmin;
      margin-right: 2vmin;
      font-size: 4vmin;
      cursor: pointer;
    }
    .topic {
      font-size: 4vmin;
      cursor: pointer;
    }
  }
  .right {
    width: 150vmin;
    margin-left: 0vmin;
    background-color: black;
    .main {
      width: 150vmin;
      height: 60vmin;
      padding-top: 1vmin;
      padding-left: 5vmin;
      background-color: #fff;
      border: 1px solid black;
      .illustrateInp {
        margin-left: 19vmin;
        // height: 15vmin;
        size: 30;
      }
      span {
        font-size: 4vmin;
      }
      p {
        font-size: 4vmin;
        .text {
          font-size: 2vmin;
        }
      }
      input {
        font-size: 3vmin;
        margin-left: 2vmin;
      }
      .name {
        margin-bottom: 1vmin;
      }
      .illustrate {
        margin-bottom: 1vmin;
      }
      .time {
        margin-bottom: 1vmin;
      }
      button {
        width: 10vmin;
        height: 4vmin;
        margin-right: 1vmin;
        border-radius: 10px;
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }

      .btnBox {
        margin-top: 15vmin;
        margin-left: auto;
        width: 60vmin;
        // background-color: black;
        // margin-left: 1vmin;
      }
    }
  }
}
</style>
