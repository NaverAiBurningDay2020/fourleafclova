import React, { Component } from "react";
import styled from "styled-components";

import axios from 'axios'

class StartCanvas extends Component {
  constructor(props){
    super(props)
    this.state = {
      positions: []
    };
    
    this.handleImageFiles = this.handleImageFiles.bind(this)
    this.reset = this.reset.bind(this)
    this.mouseClickOnCanvas = this.mouseClickOnCanvas.bind(this)
    this.mousePos = this.mousePos.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.checkFirstImage = this.checkFirstImage.bind(this)
  }

  checkFirstImage = e => {
    console.log("첫화면 찍으세요")
    axios({
      method: 'post',
      url: 'http://localhost:8000/web/getValue/',
      data: {
        url: 'https://www.youtube.com/watch?v=jzNdJ5Iq3ps',
        data: this.state.positions
      }
    }).then(res => {
      console.log(res)
    })
  }

  buttonClick = e => {
    console.log(this.state.positions)
  }
  
  handleImageFiles = e => {
    var url = window.URL.createObjectURL(e.target.files[0]);
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var img = new Image();
    img.onload = function() {
      cvs.width = img.width;
      cvs.height = img.height;
      console.log(cvs.width);
      console.log(cvs.height);
      ctx.drawImage(img, 0, 0);
    };
    
    img.src = url;
  };

  reset = () => {
    console.log("reset");
    this.setState({ positions: [] });
  };

  mouseClickOnCanvas = e => {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var res = document.getElementById("results");
    var rect = cvs.getBoundingClientRect();
    var x = parseInt(e.clientX - rect.left);
    var y = parseInt(e.clientY - rect.top);
    var p = ctx.getImageData(x, y, 1, 1).data;

    const clickdata = this.state.positions;
    //왜 이벤트가 하나 증발하지?
    console.log(clickdata)
    console.log('click')
    if (clickdata.length < 4) {
      const newdata = clickdata.concat({x:x, y:y})
      console.log(newdata)
      this.setState({
        positions: newdata})
    } else {
      console.log("더 이상 입력불가");
    }
  };

  mousePos = e => {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var res = document.getElementById("results");
    var rect = cvs.getBoundingClientRect();
    var x = parseInt(e.clientX - rect.left);
    var y = parseInt(e.clientY - rect.top);
    var p = ctx.getImageData(x, y, 1, 1).data;
    res.innerHTML = 
    '<p> X:' + x + 'Y:' + y + '</p>'
    return { x, y };
  };
  render() {
    return (
      <StartCanvasLayout>
        <div>
          <h1>첫화면</h1>
          <input placeholder="유튜브 영상 주소를 입력하세요"></input>
          <button onClick={this.checkFirstImage}>첫 화면 체크</button>
          <button onClick={this.buttonClick}>마지막체크</button>
          <button onClick={this.reset}>초기화</button>
          <input type="file" onChange={this.handleImageFiles}></input>
          <p>이미지에서 네 점을 잡아주세요</p>
          
          <div id="results">
            Move mouse over image to show mouse location and pixel value and
            alpha
          </div>

          <Canvas
            id="canvas"
            style={{ margin: "12px" }}
            onClick={this.mouseClickOnCanvas}
            onMouseMove={this.mousePos}
            src="https://img.youtube.com/vi/2K6qgycICUs/0.jpg"
          ></Canvas>
          
        </div>
      </StartCanvasLayout>
    );
  }
}

const StartCanvasLayout = styled.div`
  margin-top: 3vh;
  margin-bottom: 5vh;
  /* margin-left: 15%;
  margin-right: 15%; */
  /* border-style: solid; */
  background-color: white;
  /* color: white;
    align-items: flex-end; */
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    margin: 0;
  }
`;

const PostContentImage = styled.img`
  /* 구분을 위한 스타일임 수정필요 */
  width: 100%;
  max-height: 90%;

  :hover {
    opacity: 0.5;
    box-shadow: 0 0 2px 1px rgba(0, 300, 186, 0.5);
  }
`;

const Canvas = styled.canvas`
  border-style: solid;
  border-width : 2px;
  border-color : black;
`

export default StartCanvas;
