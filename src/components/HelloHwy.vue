<template>
  <div :background-image="imgSrc">
  <div position="fixed">
    <h2>{{ msg }}</h2>
    <div class="waringBox">
      <WarningBox></WarningBox>
      <Video></Video>
    </div>
    <SideBar></SideBar>
  </div>
</div>
</template>

<script>
import Video from './Video.vue'
import WarningBox from './WarningBox.vue'
import Button from './Button.vue'
import SideBar from './Sidebar.vue'

export default {
  name: 'HelloHwy',
  components: {
    Video,
    WarningBox,
    Button,
    SideBar
  },
  data () {
    return {
      msg: '华为云人工智能疲劳驾驶检测',
      imgSrc: require('../assets/true.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.image-container {
  /* 设置背景图片 */
  /* 设置背景尺寸和平铺方式 */
  background-size: cover; /* 可选值: cover, contain, 或指定宽度和高度 */
  background-repeat: no-repeat; /* 可选值: repeat, repeat-x, repeat-y, no-repeat */
  background-position: center center; /* 可选值: 使用X和Y坐标控制图片位置，如 "center center" 或 "top left" */
  /* 设置容器的尺寸 */
  width: 400px;
  height: 300px;
}
</style>
