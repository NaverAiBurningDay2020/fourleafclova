<template>
    <div>
        <video controls>
            <source src="../media/test.mp4" type="video/mp4">
            <source src="../media/test.webm" type="video/webm">
        </video>

        <!-- <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe> -->

        <canvas></canvas>
        <footer>
            <small>&copy; copyright 2006, Blender Foundation / Netherlands Media Art Institute / <a href="http://www.elephantsdream.org">www.elephantsdream.org</a></small>
        </footer>
        <button id="snap" @click="snap()">Take screenshot</button>
    </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
    name: "YoonjaeTestPage",
    mounted() {
        var video = document.querySelector('video');
        // var iframe = document.querySelector('iframe');
        
        var canvas = document.querySelector('canvas');
        
        var w, h, ratio;

        if(video){
            video.addEventListener('loadedmetadata', function() {
                ratio = video.videoWidth / video.videoHeight;
                w = video.videoWidth - 100;
                h = parseInt(w / ratio, 10);
                canvas.width = w;
                canvas.height = h;			
            }, false);
        }
        // if(iframe){
        //     iframe.addEventListener('loadedmetadata', function() {
        //         ratio = iframe.videoWidth / iframe.videoHeight;
        //         w = iframe.videoWidth - 100;
        //         h = parseInt(w / ratio, 10);
        //         canvas.width = w;
        //         canvas.height = h;
        //     }, false);
        // }
    },
    methods: {
        snap() {
            var video = document.querySelector('video');
            // var iframe = document.querySelector('iframe');

            var canvas = document.querySelector('canvas');

            if(canvas){
                var context = canvas.getContext('2d');
            }

            var w, h, ratio;

            ratio = video.videoWidth / video.videoHeight;
            w = video.videoWidth - 100;
            // ratio = iframe.videoWidth / iframe.videoHeight;
            // w = iframe.videoWidth - 100;

            h = parseInt(w / ratio, 10);

            context.fillRect(0, 0, w, h);

            context.drawImage(video, 0, 0, w, h);
            // context.drawImage(iframe, 0, 0, w, h);
        }
    }
};

</script>

<style>
    article, aside, figure, figcaption, footer, header, hgroup, menu, nav, section { display:block; }
    video, canvas {
        border:1px solid #000;
    }
    button {
        margin-top:10px;
    }
    footer { 
        font-size:11px;
        color:#aaa; 
        margin-top:10px;
    }
    small { 
        color:#aaa; 
        font-size:11px;
        display:block;
    }
    a { 
        color:#aaa;
        text-decoration:none;
    }
</style>