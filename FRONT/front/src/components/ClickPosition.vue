<template>
  <div class="hello">
    <p>
      Open image:
      <input type="file" id="inputImage" v-on:change="handleImageFiles" />
    </p>
    <p>이미지에서 bound position을 잡아주세요</p>
    <button v-on:click="reset">초기화</button>
    <canvas id="canvas" style="margin:12px;" v-on:mousemove="mousePos" v-on:click="mouseClick"></canvas>

    <div
      class="footer"
      id="results"
    >Move mouse over image to show mouse location and pixel value and alpha</div>
  </div>
</template>

<script>
export default {
  name: "ClickPosition",
  props: {
    msg: String
  },
  data: function(){
    return {
      positions:[]
      }
  },
  methods: {
    handleImageFiles(e) {
      var url = window.URL.createObjectURL(e.target.files[0]);
      var cvs = document.getElementById("canvas");
      var ctx = cvs.getContext("2d");
      var img = new Image();
      img.onload = function() {
        cvs.width = img.width;
        cvs.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
      img.src = url;
    },
    mousePos(evt) {
      var cvs = document.getElementById("canvas");
      var ctx = cvs.getContext("2d");
      var res = document.getElementById("results");
      var rect = cvs.getBoundingClientRect();
      var x = parseInt(evt.clientX - rect.left);
      var y = parseInt(evt.clientY - rect.top);
      var p = ctx.getImageData(x, y, 1, 1).data;
      res.innerHTML =
        '<table style="width:100%;table-layout:fixed"><td>X: ' +
        x +
        "</td><td>Y: " +
        y +
        "</td><td>Red: " +
        p[0] +
        "</td><td>Green: " +
        p[1] +
        "</td><td>Blue: " +
        p[2] +
        "</td><td>Alpha: " +
        p[3] +
        "</td></table>";
      return { x, y };
    },
    mouseClick(evt) {
      var cvs = document.getElementById("canvas");
      var ctx = cvs.getContext("2d");
      var res = document.getElementById("results");
      var rect = cvs.getBoundingClientRect();
      var x = parseInt(evt.clientX - rect.left);
      var y = parseInt(evt.clientY - rect.top);
      var p = ctx.getImageData(x, y, 1, 1).data;
      console.log(x);
      console.log(y);
      if(this.positions.length < 4){
        this.positions.push((x,y))
      }
      else{
        console.log("더 이상 입력불가")
      }
      console.log(this.positions)
    },
    reset(){
      this.positions = []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.footer {
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background: #0072bb;
  color: #fff;
}
</style>
