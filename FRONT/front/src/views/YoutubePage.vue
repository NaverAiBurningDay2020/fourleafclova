<template>
  <div id="app">
    <h1 class="h1">vue-lazy-youtube-video</h1>
    <p>
      Initially this component loads only a thumbnail of the video, but after being clicked it inserts
      <code>&lt;iframe&gt;&lt;/iframe&gt;</code> with
      <code>autoplay</code> attribute and appropriate
      <code>src</code> attribute. Thus we significantly
      decrease the page load size, serving the video to user when it's realy
      necessary.
    </p>
    <div class="videos">
      <ul class="videos__list">
        <li v-for="(video, index) in videos" :key="index" class="videos__item">
          <LazyYoutubeVideo
            :src="video.url"
            :preview-image-size="video.previewImageSize"
            :aspect-ratio="video.aspectRatio"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";
import html2canvas from 'html2canvas';

export default {
  name: "YoutubePage",
  components: {
    LazyYoutubeVideo
  },
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/embed/Zmifj9aZm7I",
          previewImageSize: "sddefault",
          aspectRatio: "2:1"
        },
        {
          url: "https://www.youtube.com/embed/BvBd51vqSGU",
          previewImageSize: "hqdefault",
          aspectRatio: "1:1"
        },
        {
          url: "https://www.youtube.com/embed/dz_8EkP761E",
          previewImageSize: "mqdefault",
          aspectRatio: "1:1"
        },
        {
          url: "https://www.youtube.com/embed/K99_dxqH6MY",
          previewImageSize: "mqdefault",
          aspectRatio: "1:1"
        }
        // {
        //   url: "https://www.youtube.com/embed/BvBd51vqSGU",
        //   previewImageSize: "hqdefault"
        // },
      ]
    };
  },
  methods: {
    // Takes a snapshot of the video
		snap() {
      // Define the size of the rectangle that will be filled (basically the entire element)
      var video = document.querySelector('iframe');
		  var canvas = document.querySelector('canvas');
      var context = canvas.getContext('2d');
      
			context.fillRect(0, 0, w, h);
			// Grab the image from the video
			context.drawImage(video, 0, 0, w, h);
		}
  }
};

</script>



<style>
#app {
    font-family: sans-serif;
}
 .h1 {
    text-align: center;
    color: #34495e;
}
 p {
    text-align: center;
}
 .videos__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
}
 .videos__item {
    width: calc(50% - 10px);
}
 .videos__item:nth-child(n + 3) {
    margin-top: 20px;
}
 
</style>