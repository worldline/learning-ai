import { defineClientConfig } from 'vuepress/client'
import MermaidDiagram from './components/MermaidDiagram.vue'
import RestLlmTester from '../5.services/RestLlmTester.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('Mermaid', MermaidDiagram)
        app.component('RestLlmTester', RestLlmTester)
    },
    setup() { },
    rootComponents: [],
})