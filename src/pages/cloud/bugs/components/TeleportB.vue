<template>
  <div>
    <h2>这里是TeleportB</h2>
    <Teleport v-if="targetExists" to="#dynamic-target" key="TeleportB--0">
      <div class="modal-overlay">
        <div class="modal-content">这里是TeleportB 内容</div>
      </div>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const targetExists = ref(false)
onMounted(() => {
  let container = document.getElementById('dynamic-target')
  if (!container) {
    container = document.createElement('div')
    container.id = 'dynamic-target'
    document.body.appendChild(container)
  }
  targetExists.value = true
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
