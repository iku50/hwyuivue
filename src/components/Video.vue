<template>
    <div class="videoArea">
      <div class="row sexContent">
        <div class="font">性别：{{ gender }}</div>
      </div>
      <video ref="videoPlayer" :src="videoSource" controls class="videop"></video>
      <div class="controls">
        <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
        <span>{{ currentTime }} / {{ duration }}</span>
      </div>
      <div class="row timeArea">
        <div class="font">时间：{{ time }}</div>
        <div class="font">帧率：{{ frameRate }}</div>
      </div>
      <div class="row cloudnet">
        <div class="font">云端协同：{{ cloud }}</div>
        <div class="font">网络连接：{{ network }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Video',
  // props: {
  //   videoSource: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data () {
    return {
      gender: '男',
      videoSource: 'https://vd2.bdstatic.com/mda-pfp96m2yseyyy72m/sc/cae_h264/1687588470804335450/mda-pfp96m2yseyyy72m.mp4?v_from_s=hkapp-haokan-hbe&auth_key=1687941708-0-0-65189e65ad6585758032b03163405166&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0708397312&vid=17661395042687548780&abtest=110930_1&klogid=0708397312',
      time: '2023-06-08 12:23',
      frameRate: '143vp',
      isPlaying: false,
      currentTime: '0:00',
      duration: '0:00',
      cloud: '在线',
      network: '正常'
    }
  },
  methods: {
    togglePlay () {
      const video = this.$refs.videoPlayer
      if (this.isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      this.isPlaying = !this.isPlaying
    },
    updateTime () {
      const video = this.$refs.videoPlayer
      const minutes = Math.floor(video.currentTime / 60)
      const seconds = Math.floor(video.currentTime % 60)
      this.currentTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  mounted () {
    const video = this.$refs.videoPlayer
    video.addEventListener('timeupdate', this.updateTime)
    video.addEventListener('loadedmetadata', () => {
      const minutes = Math.floor(video.duration / 60)
      const seconds = Math.floor(video.duration % 60)
      this.duration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    })
  },
  beforeDestroy () {
    const video = this.$refs.videoPlayer
    video.removeEventListener('timeupdate', this.updateTime)
  }
}
</script>

<style>
/* 可以在这里添加组件的样式 */
.videoArea {
  width: 100%;
  height: 100%;
  position: relative;
}

.sexContent {
  width: 100%;
  position: relative;
  top: 20px;
  left: 20px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  z-index: 999;
  text-align: left;
  text-indent: 20px;
}

.cloudnet {
  position: fixed;
  width: 99%;
  top: 85px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

.timeArea {
  position: fixed;
  width: 100%;
  top: 55px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.font {
  font-size: 18px;
  font-weight: bold;
}

.videop {
  width: 72%;
  height: 72%;
  position: relative;
}
</style>
