<template>
  <div class="sidebar" :class="{ 'expanded': isExpanded }">
    <div class="toggle-button" @click="toggleSidebar">
      <span v-if="isExpanded">收起</span>
      <span v-else>展开</span>
    </div>
    <span v-if="isExpanded"></span>
    <span v-else>
    <div class="sidebar-content">
      <Button label="按钮一"></Button>
      <Button label="按钮二"></Button>
      <Button label="按钮三"></Button>
      <Button label="按钮四"></Button>
    </div>
    </span>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'SideBar',
  components: {
    Button
  },
  data () {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleSidebar () {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style>
.sidebar {
  /* 侧边栏样式 */
  width: 250px;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  transition: transform 0.3s ease;
}

.sidebar.expanded {
  /* 侧边栏展开时的样式 */
  transform: translateX(0);
}

.sidebar-content {
  /* 侧边栏内容样式 */
  padding: 20px;
}

.toggle-button {
  /* 展开/收起按钮样式 */
  cursor: pointer;
  padding: 10px;
}

/* 这里放置用于展示侧边栏收起/展开状态的图标的样式 */
</style>
