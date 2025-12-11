import { defineClientConfig } from 'vuepress/client'
import VueMermaidString from 'vue-mermaid-string'
import RestLlmTester from '../5.services/RestLlmTester.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('Mermaid', VueMermaidString)
        app.component('RestLlmTester', RestLlmTester)
    },
    setup() { },
    rootComponents: [],
})