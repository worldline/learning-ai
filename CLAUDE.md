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
- **Custom components**: `docs/src/.vuepress/client.ts` registers global Vue components
- **Global styles**: `docs/src/.vuepress/styles/index.scss`
- **Static assets**: `docs/src/assets/` and `docs/src/.vuepress/public/`

### Content structure

The course has two sidebar groups, each with numbered section directories (each containing a `README.md`), plus standalone pages:

**Module 1 — Mastering LLMs in the SDLC**

| Path | Topic |
|------|-------|
| `1.intro/` | Introduction to Generative AI |
| `2.prompt/` | Prompting techniques in the SDLC |
| `3.client/` | Online/offline LLM clients & RAG |
| `4.assistant/` | Code assistants in IDEs |
| `agentic-cli.md` | Agentic CLIs (Claude Code, Copilot CLI, Gemini CLI) |

**Module 2 — Building Intelligent Apps**

| Path | Topic |
|------|-------|
| `5.services/` | LLM API calls, structured outputs, RAG pipelines |
| `6.agentic/` | LangChain agents, MCP, agentic architectures |
| `7.node/` | Node-based tools (N8N) |
| `8.cloud/` | Cloud tools (Vertex AI, Google Colab) |

**Standalone**

| Path | Topic |
|------|-------|
| `instructor/` | Instructor-led session notes and agenda |

### Custom Vue components

Two components are registered globally via `docs/src/.vuepress/client.ts` and can be used in any Markdown page:

- `<Mermaid>` — wraps `vue-mermaid-string` for Mermaid diagrams (source: `.vuepress/components/MermaidDiagram.vue`)
- `<RestLlmTester>` — interactive REST tester for LLM API exercises (source: `5.services/RestLlmTester.vue`)

### Key plugins

- `vuepress-plugin-md-enhance` — enables Kotlin playground (`kotlinPlayground: true`)
- `@vuepress/plugin-pwa` — service worker / offline support
- `@vuepress/plugin-search` — client-side full-text search

### Adding/modifying content

Each section's content is entirely in its `README.md`. The sidebar order is controlled by the `sidebar` array in `config.ts` — add new sections there when creating new directories. Standalone `.md` files at `docs/src/` root must also be added to the sidebar manually.
