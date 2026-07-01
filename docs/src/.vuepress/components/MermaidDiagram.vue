<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import mermaid from 'mermaid'

const props = defineProps({ value: String })
const route = useRoute()
const container = ref(null)

mermaid.initialize({ startOnLoad: false, theme: 'default' })

async function render() {
  await nextTick()
  if (!container.value) return
  const uid = 'mermaid-' + Math.random().toString(36).slice(2)
  try {
    const { svg } = await mermaid.render(uid, props.value)
    container.value.innerHTML = svg
  } catch (e) {
    container.value.textContent = String(e)
  }
}

onMounted(render)
watch(() => route.path, render)
</script>

<template>
  <div ref="container" />
</template>
