import React, { useState } from "react";
import styled from "styled-components";

const StartCanvas = () => {
  const [positions, setPositions] = useState([]);

  const handleImageFiles = (e) => {
        var url = window.URL.createObjectURL(e.target.files[0]);
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext("2d");
        var img = new Image();
        img.onload = function() {
          cvs.width = img.width;
          cvs.height = img.height;
          console.log(cvs.width)
          console.log(cvs.height)
          ctx.drawImage(img, 0, 0);
        };
        img.src = url;
      }

  const reset = () => {
    console.log('reset')
    setPositions([]);
  };

  const mouseClickOnCanvas = e => {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var res = document.getElementById("results");
    var rect = cvs.getBoundingClientRect();
    var x = parseInt(e.clientX - rect.left);
    var y = parseInt(e.clientY - rect.top);
    var p = ctx.getImageData(x, y, 1, 1).data;
    
    if (positions.length < 4) {
      setPositions(positions.concat({x:x,y:y}))
    } else {
      console.log("더 이상 입력불가");
    }
    console.log(positions);
  };

  const mousePos = e => {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var res = document.getElementById("results");
    var rect = cvs.getBoundingClientRect();
    var x = parseInt(e.clientX - rect.left);
    var y = parseInt(e.clientY - rect.top);
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
  };

  return (
    <StartCanvasLayout>
      <div>
        <h1>첫화면- 이벤트처리</h1>
        <h1>첫화면</h1>
        <input type="file" onChange={handleImageFiles}></input>
        <p>이미지에서 bound position을 잡아주세요</p>
        <div id="results" >Move mouse over image to show mouse location and pixel value and alpha</div>

        <canvas
          id="canvas"
          style={{ margin: "12px" }}
          onMouseMove={mousePos}
          onClick={mouseClickOnCanvas}
        ></canvas>
        <button onClick={reset}>초기화</button>
        <div class="footer" id="results">
          마우스를 올려서 네 점을 선택해주세요.
        </div>
      </div>
    </StartCanvasLayout>
  );
};

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

export default StartCanvas;
