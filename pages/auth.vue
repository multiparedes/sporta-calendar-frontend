<script setup lang="ts">
const loading = ref(false)

function onsubmit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div>
    <Vueform :columns="6" :loading="loading" :endpoint="false" :display-errors="false" @submit="onsubmit">
      <InputFieldElement name="username" placeholder="Introduce tu nombre de usuario" type="text" rules="required"
        icon="fluent:person-24-filled" />

      <InputFieldElement name="password" placeholder="test" type="password" rules="required"
        icon="fluent:password-24-filled" />

      <Button :loading="loading">
        Submit
      </Button>
    </Vueform>
  </div>
</template>
