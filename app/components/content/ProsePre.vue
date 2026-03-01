<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
}>()

const isCopied = ref(false)

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    
    isCopied.value = true

    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <pre class="relative mockup-code overflow-x-hidden flex flex-col" :code="code">
    <label class="absolute right-2 top-2 swap btn btn-soft btn-square btn-primary btn-sm">
      <input 
        type="checkbox" 
        :checked="isCopied" 
        @change="handleCopy" 
      />   
      <Icon name="lucide:check" class="swap-on text-success copy-icon" size="18" />
      <Icon name="lucide:copy" class="swap-off copy-icon" size="18" />
    </label>
    <div class="w-full overflow-x-auto pt-8 flex flex-col bg-transparent">
      <slot></slot>
    </div>
  </pre>
</template>

<style scoped>
@import "tailwindcss";

:deep(.shiki span.copy-icon),
:deep(span.copy-icon),
:deep(.iconify) {
  background: none !important; 
  background-color: currentColor !important;
}

:slotted(code) {
  @apply w-max bg-transparent border-0 flex flex-col;
}

pre::before {
  @apply -mx-5! absolute;
}
</style>