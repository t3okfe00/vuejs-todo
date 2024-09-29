<template>
  <button :class="buttonClasses" :disabled="isDisabled" @click="$emit('click')">
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

// Define the props for the button component
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium', // Default size
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

// Computed class for the button based on size
const buttonClasses = computed(() => {
  return {
    button: true,
    'button--very-small': props.size === 'very-small',
    'button--small': props.size === 'small',
    'button--medium': props.size === 'medium',
    'button--large': props.size === 'large'
  }
})
</script>

<style scoped>
button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background-color: var(--color-primary-green); /* Primary button color */
  color: var(--color-background); /* Text color */
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

button:hover {
  opacity: 0.8;
  transition: opacity 0.4s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15); /* More pronounced shadow on hover */
}

button:focus {
  outline: 2px solid var(--color-border-hover); /* Focus outline */
  outline-offset: 2px;
}

button:active {
  transform: translateY(2px); /* Slight button press effect */
}

button:disabled {
  background-color: var(--color-border); /* Muted color for disabled button */
  cursor: not-allowed;
  opacity: 0.6;
}

/* Size variations */
.button--very-small {
  padding: 3px 6px;
  font-size: 0.8rem; /* Smaller font size */
}
.button--small {
  padding: 8px 16px;
  font-size: 0.875rem; /* Smaller font size */
}

.button--large {
  padding: 16px 32px;
  font-size: 1.125rem; /* Larger font size */
}
</style>
