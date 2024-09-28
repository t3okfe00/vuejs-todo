<script setup lang="ts">
import { ref } from 'vue'
const shouldDisplayForm = ref(false)
</script>
<template>
  <form>
    <heading>
      <h3 v-if="shouldDisplayForm">Create new ToDo</h3>
    </heading>
  </form>
</template>
