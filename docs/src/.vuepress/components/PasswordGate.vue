<template>
  <div v-if="unlocked">
    <slot />
  </div>
  <div v-else class="password-gate">
    <p>🔒 This page is password protected.</p>
    <form @submit.prevent="check">
      <input v-model="input" type="password" placeholder="Password" autofocus />
      <button type="submit">Unlock</button>
    </form>
    <p v-if="error" class="password-gate-error">Incorrect password.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'wl-instructor-page-unlocked'
const EXPECTED_HASH = '158a323a7ba44870f23d96f1516dd70aa48e9a72db4ebb026b0a89e212a208ab'

const unlocked = ref(false)
const input = ref('')
const error = ref(false)

async function sha256(text) {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function check() {
  const hash = await sha256(input.value)
  if (hash === EXPECTED_HASH) {
    unlocked.value = true
    error.value = false
    sessionStorage.setItem(STORAGE_KEY, '1')
  } else {
    error.value = true
  }
}

onMounted(() => {
  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    unlocked.value = true
  }
})
</script>

<style scoped>
.password-gate {
  max-width: 22rem;
  margin: 4rem auto;
  text-align: center;
}

.password-gate form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.password-gate input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-border, #ccc);
  border-radius: 4px;
}

.password-gate button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 4px;
  background: var(--c-brand, #3eaf7c);
  color: #fff;
  cursor: pointer;
}

.password-gate-error {
  color: #e04141;
  margin-top: 0.5rem;
}
</style>
