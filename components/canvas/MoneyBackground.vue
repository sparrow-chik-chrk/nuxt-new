<script lang="ts" setup>
const moneyCanvas = ref(null);
const coinImageSrc = "bitcoin.png";

const initEffect = () => {
  const canvas: any = moneyCanvas.value;
  const ctx = canvas.getContext("2d");
  const coinImage = new Image();
  coinImage.src = coinImageSrc;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 30);
  const coins = new Array(columns).fill(0).map(() => Math.random() * canvas.height - canvas.height);


  let coinSizes = new Array(columns).fill(0).map(() => Math.random() * (90 - 30) + 30); // Розміри монет


  const draw = () => {

    ctx.fillStyle = "rgba(3, 3, 3, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    coins.forEach((y_pos, index) => {
      let coinSize = coinSizes[index];
      const x_pos = index * 30; // Мінімальний розмір монети
      if (y_pos > canvas.height) {
        coins[index] = -coinSize - Math.random() * 100;
        coinSizes[index] = Math.random() * (90 - 30) + 30;
      } else {
        coins[index] = y_pos + coinSize / 20; // Швидкість падіння монети
      }

      ctx.drawImage(coinImage, x_pos, y_pos, coinSize, coinSize);
    });
    requestAnimationFrame(draw); // Викликає draw для плавної анімації
  };

  coinImage.onload = () => {
    draw();
  };
};

onMounted(() => {
  initEffect();
})
</script>

<template>
  <canvas ref="moneyCanvas" class="canvas"></canvas>
</template>

<style scoped>
.canvas {
  background: rgba(3, 3, 3, 1);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}


</style>