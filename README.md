# AI for Tech | Training material

A training course for developers on generative and agentic AI — from LLM fundamentals and prompting to building intelligent services with LangChain, llama-index, and MCP.

**Live site:** [worldline.github.io/learning-ai](https://worldline.github.io/learning-ai)

# Summary

## Module 1: Mastering LLMs in the SDLC

### a. Introduction
Key concepts and terminology — History — Market overview — Use cases in software development

### b. Prompting in the app lifecycle
Prompting techniques — Ideation, architecture, refactoring and test generation with LLMs

### c. Online/Offline LLM clients
LibreChat, LM Studio — Presets, RAG, plugins, offline model configuration

### d. Code Assistants in IDEs
GitHub Copilot — Spec Driven Development (Bolt, V0, GitHub Spark)

### e. Agentic CLIs
Claude Code, GitHub Copilot CLI, Gemini CLI — AGENTS.md standard — Skills — MCP client

## Module 2: Building Intelligent Apps

### a. GenAI for services
LLM REST API — LangChain (prompt templates, chaining, tool calling) — llama-index RAG — Embeddings — 7 Colab exercises (01–07)

### b. Agentic AI for services
LangChain agents — Multi-agent orchestration — MCP servers with FastMCP — 3 Colab exercises (08–10)

### c. Node-based tools
N8N — Visual agentic orchestration — No-code AI workflows

### d. Cloud tools
Vertex AI — Google Colab — Cloud AI APIs (Text-to-Speech, Translation, etc.)

## About

![avatar](docs/src/assets/images/logo_worldline.png)

**We design payments technology that powers the growth of millions of businesses around the world. Engineering the next frontiers in payments technology**

- European leader in payment and secured transactions. Over 50bn transactions/year
- 7000+ engineers in over 40 countries

### Contributors

Ibrahim Gharbi · Sylvain Pollet Villard · Yassine Benabbas · Raphaël Semeteys

### Sponsors

Yacine Kessaci · Liyun He Guelton · Fanilo Andrianasolo · Vijayanand Premnath · Vincent Caquelard · Mat Goodger · Effan Mutembo · Cyril Cauchois · Martin Boulanger · Julien Carme

### Follow our Tech team

- [blog.worldline.tech](http://blog.worldline.tech)
- [@WorldlineTech](https://twitter.com/worldlinetech)

## Run locally

```bash
cd docs
npm install
npm run dev     # http://localhost:3000
npm run build   # static output → docs/src/.vuepress/dist
```

Deployed automatically to GitHub Pages on push to `main` via `.github/workflows/vuepress-deploy.yml`.
