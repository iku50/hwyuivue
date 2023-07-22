<template>
  <div>
    <div class="warning">闭眼警告</div>
    <div class="topContent">
      <div class="row">
        <div class="col-md-2">
          <div class="cinema">
            摄像头：{{ cameraStatus }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WarningBox',
  data () {
    return {
      cameraStatus: '在线'
    }
  },
  methods: {
    handleButtonClick () {
      // 在这里处理按钮点击事件
      console.log('按钮被点击了！')
    }
  }
}
</script>

<style>
/* 可以在这里添加组件的样式 */
.cinema {
  height: 100%;
  line-height: 80px;
  font-size: 18px;
  text-indent: 20px;
  font-weight: bold;
}

.waringBox {
  position: fixed;
  top: 160px;
  left: 50%;
  opacity: 1;
  transform: translateX(-50%);
  z-index: 999;
  background: #d2d2d2;
  width: 1000px;
  height: 600px;
  border-radius: 8px;
}

.warning {
  z-index: 999;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 160px;
  position: absolute;
  top: 35%;
  right: 0;
  left: 0;
  margin: 21px auto;
  padding: 20px;
  overflow: hidden;
  border-top: 6px dashed rgba(255, 153, 0, 1);
  border-right: 0 dashed rgba(255, 153, 0, 1);
  border-bottom: 6px dashed rgba(255, 153, 0, 1);
  border-left: 0 dashed rgba(255, 153, 0, 1);
  font: normal 24px/1 Arial Black, Gadget, sans-serif;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  background: #e74c3c;
  -webkit-box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
  -webkit-transition: border 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
  -moz-transition: border 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
  -o-transition: border 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
  transition: border 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
  -webkit-transform: rotateX(1.05deg) rotateY(1.1459155902616465deg);
  transform: rotateX(1.05deg) rotateY(1.1459155902616465deg);
}

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}</style>
