# Instructor Led Sessions

## Information

| **Title** | AI for Tech: Use LLMs to Help You Code and Create Intelligent Applications |
|---|---|
| **Format** | Full-day instructor-led session (9:00 – 17:00) |
| **Audience** | Worldline engineers |
| **Register** | [Register for an upcoming session](https://performancemanager.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fworldline%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dWL%5fFR%5fGENERATIVEAGENTICAI%26componentTypeID%3dSCHE%26revisionDate%3d1759743900000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=Worldline) |

## Delivered Sessions

| Date | Attendees |
|------|-----------|
| February 13, 2026 | 7 |
| July 2, 2026 | 14 |

---

## Syllabus

This course is designed for developers aiming to harness the capabilities of generative artificial intelligence in their software development processes and their application services. It provides a comprehensive overview of generative AI, covering its significance, foundational concepts, and practical applications.

The training will explore prompting frameworks to enhance the application lifecycle, engage with essential AI tools and plugins, and learn to utilize code assistants within integrated development environments (IDEs) for generating code and complete websites.

It also addresses the management of API calls to large language models (LLMs), the use of context-aware frameworks, and the deployment of AI solutions using cloud provider tools such as Google Cloud's Vertex AI and Colab notebooks.

By the end of the course, participants will be equipped with the knowledge and skills necessary to effectively integrate generative AI into their development workflows, fostering innovation and efficiency.

---

::: warning Disclaimer
Generative AI is evolving fast and this content will for sure evolve a lot during coming months.

**Dense content — it's normal.**

This course is **not**:
- A Machine Learning techniques course
- A course to become an expert at using LLMs

This course **is**:
- Getting an overview of what is possible with LLMs on 2 domains:
  - Helping you on the software development lifecycle
  - Creating intelligent applications
:::

---

## Schedule

Overview of AI for tech people — SDLC in the morning, intelligent applications in the afternoon.

| Time | Duration | Type | Session |
|------|----------|------|---------|
| 09:00 | 30min | 📊 Slides | Welcome + GenAI landscape — history, market overview, use cases in the SDLC; key concepts: LLM, tokens, context window, temperature, embeddings, hallucination, RAG, agents |
| 09:30 | 15min | 📊 Slides | Prompting techniques — zero-shot, few-shot, chain of thought, role prompting |
| 09:45 | 30min | 🧪 Practical | **Online LLM clients for developers** — LibreChat: interface tour, presets, RAG plugin; attendees use it as a daily dev tool — generate unit tests, write PR descriptions, explain legacy code |
| 10:15 | 15min | 🎮 Demo | Offline LLM clients — LM Studio: loading a local model, running inference without internet |
| **10:30** | **15min** | ☕ | *Coffee break* |
| 10:45 | 45min | 🧪 Practical | **Code assistants** — GitHub Copilot: inline completion on a given snippet, Copilot Chat for refactoring and test generation |
| 11:30 | 60min | 🎮 Demo | Agentic CLIs — Claude Code live: project init, CLAUDE.md, `/ship` skill, full-stack app generation, ntfy.sh MCP integration |
| **12:30** | **60min** | 🍽️ | *Lunch* |
| 13:30 | 25min | 📊 Slides | Building intelligent apps — REST API, LangChain, RAG pipeline, embeddings |
| 13:55 | 90min | 🧪 Practical | **Exercise 01 — REST API** : call Mistral API with `requests`, enforce JSON structured output, parse and display the result |
| **15:25** | **15min** | ☕ | *Coffee break* |
| 15:40 | 30min | 📊 Slides | Agentic AI — LangChain agents, multi-agent orchestration, MCP protocol |
| 16:10 | 35min | 🧪 Practical | **Exercise 08 — LangChain Agent** : define tools with `@tool`, build an agent with `create_agent()`, add `VerboseCallbackHandler`, observe autonomous tool selection |
| 16:45 | 15min | 📊 Slides | Wrap-up — what to explore next (RAG, embeddings, MCP servers, LangGraph) |
| **17:00** | | 🏁 | *End* |

---

## Prerequisites

Complete these steps **before** attending any session. Exercises will not work without them.

### 1. Google account + Colab access
All practical exercises run in [Google Colab](https://colab.research.google.com). A Google account is required.

### 2. Mistral API key
Exercises 01–09 call the Mistral API.

1. Create or log in to your account at [v2.auth.mistral.ai/login](https://v2.auth.mistral.ai/login)
2. Go directly to [API Keys](https://console.mistral.ai/home?profile_dialog=api-keys) → **Create new key**
3. Copy the key — you will only see it once
4. In every Colab notebook, open the **Secrets** panel (🔑 icon in the left sidebar) and add:

| Secret name | Value |
|-------------|-------|
| `API_KEY` | your Mistral API key |

### 3. LibreChat access
Access to the Worldline internal LibreChat instance — request access via your team lead if needed.

### 4. GitHub Copilot *(optional — live demos will be shown)*
If you want to follow along hands-on, request access via the [Worldline Copilot access form](https://forms.office.com/Pages/ResponsePage.aspx?id=z96p_ZLorEOdnxpJP5-Y0K5xnl-BonNAq9hbLN29E4dUODlERzZKMlhYNEZKVFc0VU5HWEExWlQzTy4u) — credentials will be provided, no GitHub account creation needed. Then install the **GitHub Copilot** extension in VS Code or JetBrains and log in with the provided credentials.

### 5. Claude Code *(optional — live demos will be shown)*
If you want to follow along hands-on:

1. **Request IDM access** — submit a request in IDM for the role `GCP-GRS_AI_CC-PRODUCTION-AI-USER`. This grants access to Worldline's Vertex AI GCP project that Claude Code connects to.
2. **Install Claude Code** — once access is approved, install via the Worldline installer: [claude-code-installer](https://claude-code-installer-13699a.gitlab-pages.kazan.myworldline.com/)
