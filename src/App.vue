<template>
  <div class="root-container">
    <hello></hello>

    <div ref="videoWrapper" v-if="isShowVideo">

    </div>

    <button @click="play">播放视频</button>
    <button @click="changeProgress">快进</button>
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    data () {
      return {
        name: 'App',
        video: null,
        isShowVideo: false
      }
    },

    created () {
      console.log('app.vue created');
    },

    mounted () {
      console.log('app.vue mounted');
    },

    methods: {
      play () {
        this.isShowVideo = true;

        this.$nextTick(() => {
          const video = this.createVideoElement();
          this.registEventForVideo(video);
          this.insertVideoElement(video);
          video.play();
          this.video = video;
        });
      },

      createVideoElement () {
        const video = document.createElement('video');
        const videoAttrMap = {
          "x5-video-player-type": "h5",
          "x5-playsinline": true,
          "playsinline": true,
          "webkit-playsinline": true,
          "x-webkit-airplay": true,
          "controlslist": "nodownload",
          "src": "https://healthdata-healthcare.qschou.com/toolbox/master/video/2019/03/e213d22601f.mp4",
          "poster": "https://healthdata-healthcare.qschou.com/toolbox/master/picture/2019/03/e213d34ce61.jpg"
        };
        const keys = Object.keys(videoAttrMap);

        keys.forEach(key => {
          video.setAttribute(key, videoAttrMap[key]);
        });

        video.style.cssText = 'object-fit: fill; width: 100%; height: 180px;';

        return video;
      },

      insertVideoElement (video) {
        this.$refs.videoWrapper.appendChild(video);
      },

      registEventForVideo (video) {
        video.addEventListener('play', e => {
          console.log('play');
        }, false);

        video.addEventListener('canplay', e => {
          console.log('canplay');
        }, false);

        video.addEventListener('pause', e => {
          console.log('pause');
        }, false);

        video.addEventListener('ended', e => {
          console.log('ended');
        });

        video.addEventListener('click', e => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      },

      changeProgress () {
        this.video.currentTime = 30;
      }
    }
  }
</script>
