<template>
  <div id="app"> 
    <ClickPosition/>
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
import ClickPosition from "../src/components/ClickPosition"

export default {
  name: "App",
  components: {
    LazyYoutubeVideo, 
    ClickPosition,
  },
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/embed/Zmifj9aZm7I",
          previewImageSize: "maxresdefault"
        },
        {
          url: "https://www.youtube.com/embed/BvBd51vqSGU",
          previewImageSize: "hqdefault"
        },
        {
          url: "https://www.youtube.com/embed/dz_8EkP761E",
          previewImageSize: "sddefault",
          aspectRatio: "1:1"
        },
        {
          url: "https://www.youtube.com/embed/K99_dxqH6MY",
          previewImageSize: "mqdefault"
        }
      ]
    };
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