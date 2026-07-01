# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `docs/` directory:

```bash
cd docs
npm install        # install dependencies
npm run dev        # dev server at http://localhost:8081 (VuePress dev with debug)
npm run build      # build static site → docs/src/.vuepress/dist
```

No test suite exists. Build output is deployed to GitHub Pages (`gh-pages` branch) automatically on push to `main` via `.github/workflows/vuepress-deploy.yml`.

## Architecture

This is a **VuePress 2** documentation site — a training course on Generative AI for developers.

- **Content root**: `docs/src/` — all Markdown pages live here
- **VuePress config**: `docs/src/.vuepress/config.ts` — sidebar, plugins, theme, base URL (`/learning-ai/`)
- **Static assets**: `docs/src/assets/` and `docs/src/.vuepress/public/`

### Content structure

The course has two modules, each a numbered directory containing a `README.md`:

| Dir | Topic |
|-----|-------|
| `1.intro/` | Introduction to Generative AI |
| `2.prompt/` | Prompting techniques in the SDLC |
| `3.client/` | Online/offline LLM clients & RAG |
| `4.assistant/` | Code assistants in IDEs |
| `5.services/` | LLM API calls, structured outputs, RAG pipelines |
| `6.agentic/` | LangChain agents, MCP, agentic architectures |
| `7.node/` | Node-based tools (N8N) |
| `8.cloud/` | Cloud tools (Vertex AI, Google Colab) |

### Key plugins

- `vuepress-plugin-md-enhance` — enables Kotlin playground (`kotlinPlayground: true`)
- `@vuepress/plugin-pwa` — service worker / offline support
- `@vuepress/plugin-seo` — canonical hostname `https://worldline.github.io/learning-ai`
- `vue-mermaid-string` — Mermaid diagram support in Markdown

### Adding/modifying content

Each section's content is entirely in its `README.md`. The sidebar order is controlled by the `sidebar` array in `config.ts` — add new sections there when creating new directories.
