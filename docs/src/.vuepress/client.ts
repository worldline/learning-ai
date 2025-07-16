import { defineClientConfig } from 'vuepress/client'
import VueMermaidString from 'vue-mermaid-string'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('Mermaid', VueMermaidString)
    },
    setup() { },
    rootComponents: [],
})