import { defineClientConfig } from 'vuepress/client'
import MermaidDiagram from './components/MermaidDiagram.vue'
import RestLlmTester from '../5.services/RestLlmTester.vue'
import PasswordGate from './components/PasswordGate.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('Mermaid', MermaidDiagram)
        app.component('RestLlmTester', RestLlmTester)
        app.component('PasswordGate', PasswordGate)
    },
    setup() { },
    rootComponents: [],
})