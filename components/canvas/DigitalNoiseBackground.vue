<template>
  <canvas ref="matrixCanvas" class="matrix-canvas"></canvas>
</template>

<script lang="ts" setup>
import {ref, onMounted} from "vue";

const matrixCanvas = ref(null);

const initMatrixEffect = () => {
  const canvas = matrixCanvas.value;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(0).map(() => ({
    y: 0,
    length: Math.floor(Math.random() * 10) + 5 // Випадкова висота краплі від 5 до 15 точок
  }));

  const draw = () => {
    ctx.fillStyle = "rgba(3, 3, 3, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drops.forEach((drop, index) => {
      const dropWidth = Math.floor(Math.random() * 5) + 1; // Ширина краплі (від 1 до 5 колонок)
      const halfWidth = Math.floor(dropWidth / 2);
      for (let colOffset = -halfWidth; colOffset <= halfWidth; colOffset++) {
        const colIndex = index + colOffset;
        if (colIndex < 0 || colIndex >= columns) continue;

        const intensity = 1 - Math.abs(colOffset) / dropWidth; // Інтенсивність світіння
        ctx.fillStyle = `rgba(74, 43, 11, ${intensity})`;
        const fontSize = 14 + Math.random() * 8; // Розмір точки (від 14 до 22)
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drop.length; i++) {
          const x = colIndex * 20;
          const y = drop.y + i * 20;
          ctx.fillText("•", x, y);
        }
      }

      drop.y += 10; // Швидкість падіння краплі
      if (drop.y > canvas.height && Math.random() > 0.975) {
        drop.y = 0;
        drop.length = Math.floor(Math.random() * 10) + 5; // Нова випадкова висота краплі
      }
    });

    requestAnimationFrame(draw);
  };

  draw();
};

onMounted(() => {
  initMatrixEffect();
});
</script>

<style scoped>
.matrix-canvas {
  background: rgba(0, 0, 0, 1);
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
