<template>
  <div>
    <h2>这里是TeleportA</h2>
    <Teleport to="body" key="TeleportA--0">
      <div class="modal-overlay">
        <div class="modal-content">这里是TeleportA 内容</div>
        <button @click="handleClose">close</button>
      </div>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
const handleClose = () => {
  emit('handleClose')
  console.log('handleClose')
}

const emit = defineEmits(['handleClose'])

defineExpose({
  handleClose
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
