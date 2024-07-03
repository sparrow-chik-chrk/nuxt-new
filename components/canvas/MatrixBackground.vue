<script lang="ts" setup>
const matrixCanvas = ref(null);
const fallSpeed = ref(1); // Значення швидкості падіння

const initMatrixEffect = () => {
  const canvas: any = matrixCanvas.value;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 16);
  const letters = new Array(columns).fill("");

  const fontSize = 16;
  const speed = 8;

  const draw = () => {
    ctx.fillStyle = "rgba(3,3,3,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#F48A1F";
    ctx.font = fontSize + "px arial";

    letters.forEach((y_pos, index) => {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      const x_pos = index * fontSize;
      ctx.fillText(text, x_pos, y_pos);

      letters[index] = (y_pos > canvas.height && Math.random() > 0.975) ? 0 : y_pos + speed
    });
    requestAnimationFrame(draw);
  };

  draw();
};

onMounted(() => {
  initMatrixEffect();
})
</script>

<template>
  <canvas ref="matrixCanvas" class="matrix-canvas"></canvas>
</template>

<style scoped>
.matrix-canvas {
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
