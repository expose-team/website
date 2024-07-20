<template>
  <div class="flex macbook">
    <div class="display"></div>
    <div class="flex kbd">
      <div class="grill"></div>
      <div class="flex keys">
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] one">
          <li class="w-[36px]">esc</li>
          <li>F1</li>
          <li>F2</li>
          <li>F3</li>
          <li>F4</li>
          <li>F5</li>
          <li>F6</li>
          <li>F7</li>
          <li>F8</li>
          <li>F9</li>
          <li>F10</li>
          <li>F11</li>
          <li>F12</li>
          <li class="quit">⎋</li>
        </ul>
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] rest">
          <li>~</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li>
          <li>-</li>
          <li>=</li>
          <li class="w-[36px]">delete</li>
        </ul>
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] rest">
          <li class="w-[36px]">tab</li>
          <li>Q</li>
          <li>W</li>
          <li>E</li>
          <li>R</li>
          <li>T</li>
          <li>Y</li>
          <li>U</li>
          <li>I</li>
          <li>O</li>
          <li>P</li>
          <li>[</li>
          <li>]</li>
          <li>\</li>
        </ul>
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] rest">
          <li class="!w-[45px]">caps lock</li>
          <li>A</li>
          <li>S</li>
          <li>D</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>;</li>
          <li>'</li>
          <li class="!w-[45px]">return</li>
        </ul>
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] rest">
          <li class="!w-[55px]">shift</li>
          <li>Z</li>
          <li>X</li>
          <li>C</li>
          <li>V</li>
          <li>B</li>
          <li>N</li>
          <li>M</li>
          <li>,</li>
          <li>.</li>
          <li>/</li>
          <li class="!w-[55px]">shift</li>
        </ul>
        <ul class="flex justify-between pt-[7px] pr-[5px] pl-[5px] last">
          <li>fn</li>
          <li>cntrl</li>
          <li>opt</li>
          <li class="!w-[28px]">cmd</li>
          <li class="!w-[140px]"></li>
          <li class="!w-[28px]">cmd</li>
          <li>opt</li>
          <li>◀</li>
          <li class="!w-[18px]"></li>
          <li>►</li>
        </ul>
      </div>
      <div class="grill"></div>
    </div>
  </div>
</template>

<style scoped>
.macbook {
  flex-direction: column;
  font-family: sans-serif;
  width: 100%;
  height: 700px;
  justify-content: center;
  align-items: center;
  perspective: 1600px;
}

.display {
  box-shadow: 0 0 0 2px #0f172a, 0 0 0 2px #0f172a;
  transform-style: preserve-3d;
  transform: rotatex(-45deg);
  width: 496px;
  height: 300px;
  background: no-repeat bottom url("/hero-background.webp");
  background-size: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-sizing: border-box;
  border-top: 20px solid black;
  border-left: 10px solid black;
  border-right: 10px solid black;
  border-bottom: 12px solid black;
  position: relative;
}

.display:before {
  position: absolute;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  content: "";
  bottom: -48px;
  left: -12px;
  width: 500px;
  height: 36px;
  background: #111;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left: 2px solid #0f172a;
  border-right: 2px solid #0f172a;
  border-bottom: 2px solid #0f172a;
}

.display:after {
  position: absolute;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  content: "Macbook Pro";
  font-size: 14px;
  color: #555;
  bottom: -34px;
  left: 42%;
}

.kbd {
  flex-direction: row;
  z-index: 1;
  padding: 30px 5px 0em 5px;
  margin-top: -18px;
  width: 460px;
  height: 325px;
  background: #666;
  border-radius: 16px;
  position: relative;
  justify-content: center;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5) inset;
}

.kbd:before,
.kbd:after {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  content: "";
}

.kbd::before {
  top: 0;
  width: 340px;
  height: 9px;
  background: #222;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7) inset;
}

.kbd::after {
  bottom: 10px;
  border-radius: 6px;
  border: 1px solid #555;
  width: 200px;
  height: 110px;
  background: #616161;
}

.grill {
  margin-top: 6px;
  width: 22px;
  height: 158px;
  background: radial-gradient(#555 26%, transparent 0);
  background-size: 3px 3px;
}

.keys {
  flex-direction: column;
  margin: 0 5px 0 5px;
  width: 400px;
  height: 168px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.3) inset;
  border-radius: 3px;
}

ul > li {
  display: flex;
  color: white;
  background: #111;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 1);
}

.one *,
.rest *,
.last * {
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.one * {
  height: 10px;
  width: 22px;
  font-size: 5px;
}

.rest * {
  height: 22px;
  width: 22px;
  font-size: 7px;
}

.last * {
  height: 22px;
  width: 22px;
  font-size: 5px;
}
</style>
