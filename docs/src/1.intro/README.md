# Introduction

::: warning
 LLMs and Multimodal LLMs are constantly evolving, and new applications for developer training are emerging all the time.
:::

::: tip Prerequisites
- **Shell Command Line Skills:** The AI should include support for providing guidance on using shell commands, navigating file systems, and executing command-line operations across different operating systems.
- **Understanding of HTTP and API:** Proficiency in HTTP protocol, RESTful API concepts, and web service integration is crucial for the AI to provide support on API design, consumption, and troubleshooting common API-related issues.
- **Basic Cloud Knowledge:** Understanding of cloud computing principles, including basic concepts of cloud infrastructure, services, and deployment models, will enable the AI to offer guidance on cloud-based development, deployment, and best practices.
 - **If you have not, request Worldline librechat access:** send a mail at  [Generative AI Taskforce email](mailto:GenAITaskforce@worldline.com). There is a dedicated sharepoint for basic general assistant quick start at Worldline : [LibreChat Worldline guides](https://worldline365.sharepoint.com/:u:/r/sites/GenerativeAIQA/SitePages/LibreChat-guides.aspx?csf=1&web=1&e=evKJpU)
:::


## A bit of History

AI's history has been marked by periods of progress and setbacks. Computing power, data availability, and algorithmic advancements have played crucial roles in AI's evolution. AI is no longer limited to expert systems but encompasses a wide range of techniques and applications.

* **1950:** Alan Turing proposes the "Turing Test" to assess machine intelligence.

During the turing test, the human questioner asks a series of questions to both respondents. After the specified time, the questioner tries to decide which terminal is operated by the human respondent and which terminal is operated by the computer.

![turing](../assets/images/turing_test.png)

* **1956:** Dartmouth Conference establishes the field of "Artificial Intelligence".
* **1959:** Arthur Samuel develops a checkers-playing program that learns and improves over time.
* **1960s:** Research focused on logic-based reasoning and early expert systems.
* **1972:** The first expert system, DENDRAL, is developed for identifying organic molecules.
* **1980s-1990s:** Development of new techniques like machine learning and neural networks.
* **1997:** Deep Blue, a chess-playing computer, defeats Garry Kasparov, the world chess champion.
  ![gasparov](../assets/images/gasparov.jpg)
* **1990s-2000s:**  Advances in computing power, data availability, and algorithms as fuel for AI progress.
* **2010s:**  Deep learning revolutionizes AI with breakthroughs in image recognition, speech recognition, and natural language processing.
* **2011:** Watson, an IBM supercomputer, wins Jeopardy! against human champions.
  ![jeopardy](../assets/images/jeopardy.jpg)
* **2016:** AlphaGo, a program developed by Google DeepMind, defeats Go champion Lee Sedol.
  ![alphago](../assets/images/alphago.png)
* **2022:** First release of ChatGPT : AI continues to evolve rapidly, with advancements in areas like autonomous vehicles, robotics, and personalized medicine.

## Generative AI ?

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1123216320?h=3c7c9a0dec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Introduction to Generative AI"></iframe></div>

#### Machine Learning (ML)
Machine Learning is a subset of AI that focuses on training algorithms to learn from data and make predictions or decisions without explicit programming. ML powers many AI applications, including image recognition, natural language processing, and predictive analytics.

#### Deep Learning (DL)
Deep Learning is a type of ML that uses artificial neural networks with multiple layers to learn complex patterns from data.DL has revolutionized fields like computer vision, speech recognition, and machine translation.

#### Neural Network
A computational model inspired by the structure of the human brain, consisting of interconnected nodes (neurons) organized in layers.Neural networks are the core building blocks of deep learning models.

Let's have a look to a visual model of a neural network of few nodes [here](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.22372&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false).

#### Natural Language Processing (NLP)
Natural Language Processing is a branch of Artificial Intelligence (AI) that focuses on enabling computers to understand, interpret, and generate human language. It implies :

- Text Analysis
- Language Understanding
- Text Generation
- Translation
- Speech Recognition: Powers voice assistants and speech-to-text technologies

#### Large Language Model (LLM)
Large Language Models are a powerful type of AI model trained on massive datasets of text and code. LLMs can understand, generate, and manipulate language.
Example: ChatGPT, Claude, Gemini, Llama, Mistral, etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iR2O2GPbB0E" title="What are Large Language Models (LLMs)? by Google for developpers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*What are Large Language Models (LLMs)? by Google for developpers*

#### Multi-Modal LLM (MMLLM) , or Visual LLM (VLLM)
Multi-Modal Large Language Model is an advanced LLM that can process and generate both text and other data formats like images, audio, or video.
Ex: GPT-4o, Gemini, Claude (text + image understanding and generation)

#### LLM Specializations

Modern LLMs are optimized for specific use cases. Choosing the right model for the right task is key to building effective AI applications.

| Use case | Examples |
|----------|----------|
| **Reasoning** | o3 (OpenAI), Gemini 2.5 Flash (Google), Claude Sonnet 4.6 (Anthropic), DeepSeek-R1 |
| **Agentic** | Gemini 2.5 Pro (Google), Claude Opus 4.8 (Anthropic), Kimi K2 (Moonshot) |
| **Coding** | Claude Fable 5 (Anthropic), Qwen2.5-Coder (Alibaba), GPT-4o (OpenAI) |
| **Open Weights** | Llama 4 (Meta), Qwen3 (Alibaba), Mistral Large (Mistral), Gemma 3 (Google) |
| **Multimodal** | GPT-4o (OpenAI), Gemini 2.5 Flash (Google), Veo 3 · Sora (video generation) |

## Key Concepts

#### Transformers

Transformers are a type of neural network architecture that have revolutionized the field of NLP. They are based on the idea of self-attention, which allows the model to focus on different parts of the input sequence when making predictions. This makes them particularly effective for tasks like machine translation and text summarization.

You can have a look to a visual model of a transformer [here](https://jalammar.github.io/illustrated-transformer/).


#### Foundation Models & Pre-training
* **Language Models are Unsupervised Multitask Learners** by Radford et al. (2019): This paper introduced the GPT-2 architecture, which is the foundation of most 
modern LLMs.  

Learners are the core component of LLMs. They are trained on large amounts of text data to learn patterns and relationships between words, phrases, and sentences. 
Their ability to understand and generate human-like text makes them a powerful tool for a wide range of applications, from language translation 
to creative writing and even generating coherent stories.

#### **Retrieval Augmented Generation (RAG)**
RAG (Retrieval Augmented Generation) is a powerful technique in the field of Natural Language Processing (NLP) that combines the best of both worlds: information retrieval and language generation.

* The system first retrieves relevant information from a vast knowledge base (often a database or a set of documents) based on the user's query or prompt.
* This retrieved information is then used to augment the language model's input, providing it with more context and specific facts.
* Finally, the language model uses this augmented input to generate a more comprehensive and informative response, leveraging both its knowledge base and its language generation capabilities.

#### **Prompt**

A specific set of instructions or questions given to an LLM to guide its response. Well-crafted prompts are crucial for getting accurate and relevant output from LLMs.
Ex :  "Write a Python function to check if a string is a palindrome."

#### **Token**

The smallest unit of text processed by an LLM.  Tokens can be words, parts of words, punctuation marks, or special characters. LLMs process text by analyzing sequences of tokens, making it important to understand how they are broken down.
Ex : The sentence "I love programming" would be split into the following tokens: "I", "love", "programming".

#### **Temperature**
A parameter that controls the randomness or creativity of the generated text. Adjust temperature based on the desired level of creativity or accuracy in the LLM's output.

* A higher temperature generates more randomness and unpredictability in the output.
* A lower temperature generates more predictable and coherent output.

#### **Embeddings**
Embeddings are numerical representations of words, phrases, or entire documents in a continuous vector space. They capture semantic relationships between different pieces of text, allowing LLMs to understand context and meaning more effectively. Embeddings are dense vector representations that encode semantic meaning, allowing similarity comparisons between pieces of text.

#### **Vector Database**
A vector database is a specialized database designed to store and retrieve high-dimensional vectors efficiently. It is particularly useful for applications involving similarity search, such as image recognition, recommendation systems, and natural language processing.

You can have a look to a 3D model of a vector database [here](https://projector.tensorflow.org).

## The market

### Gen AI Market Layers

<Mermaid :value="`
graph TB
    subgraph APP[Application Layer]
        cpy[Copywriting
Jasper, copy.ai...]
        cod[Coding
Copilot, Tabnine...]
        dev[Dev Tools
Warp, Replit...]
        chat[Chat and Comms
ChatGPT, Claude...]
        biz[Business Ops
Notion, Casetext...]
        cpy --- cod --- dev --- chat --- biz
    end
    style cod fill:#fff0f0,stroke:#e63229,stroke-width:3px,color:#000
    style dev fill:#fff0f0,stroke:#e63229,stroke-width:3px,color:#000
    subgraph INFRA[Infrastructure Layer]
        mc[Model Creation
OpenAI, Anthropic...]
        hw[Hardware
NVIDIA, Cerebras...]
        ft[Fine Tuning
HuggingFace, AWS...]
        inf[Inference
OpenAI, Replicate...]
        mc --- hw --- ft --- inf
    end
    APP --> INFRA
`" />

### Top 50 Generative AI Web Products (January 2026)

*Source: [a16z — Top 100 Gen AI Apps](https://a16z.com/100-gen-ai-apps-6/), Similarweb data, January 2026 — ranked by unique monthly visits.*

| Rank | Application | Link |
|------|-------------|------|
| 1 | ChatGPT | [Link](https://chat.openai.com/) |
| 2 | Gemini | [Link](https://gemini.google.com/) |
| 3 | Canva | [Link](https://www.canva.com/) |
| 4 | DeepSeek | [Link](https://www.deepseek.com/) |
| 5 | Grok | [Link](https://grok.x.ai/) |
| 6 | Claude | [Link](https://claude.ai/) |
| 7 | Character.ai | [Link](https://character.ai/) |
| 8 | Perplexity | [Link](https://www.perplexity.ai/) |
| 9 | Notion | [Link](https://www.notion.so/) |
| 10 | Google AI Studio | [Link](https://aistudio.google.com/) |
| 11 | Freepik | [Link](https://www.freepik.com/) |
| 12 | Doubao | [Link](https://www.doubao.com/) |
| 13 | JanitorAI | [Link](https://www.janitorai.com/) |
| 14 | Quark | [Link](https://quark.sm.cn/) |
| 15 | Suno | [Link](https://suno.com/) |
| 16 | Remove.bg | [Link](https://www.remove.bg/) |
| 17 | CapCut | [Link](https://www.capcut.com/) |
| 18 | Grammarly | [Link](https://www.grammarly.com/) |
| 19 | SpicyChat.AI | [Link](https://spicychat.ai/) |
| 20 | QuillBot | [Link](https://quillbot.com/) |
| 21 | Lovable | [Link](https://lovable.dev/) |
| 22 | PolyBuzz | [Link](https://www.polybuzz.ai/) |
| 23 | ourdream.ai | [Link](https://ourdream.ai/) |
| 24 | Kimi | [Link](https://kimi.ai/) |
| 25 | Google Labs | [Link](https://labs.google/) |
| 26 | Qwen | [Link](https://qwenlm.github.io/) |
| 27 | TurboScribe | [Link](https://turboscribe.ai/) |
| 28 | Gamma | [Link](https://gamma.app/) |
| 29 | ElevenLabs | [Link](https://elevenlabs.io/) |
| 30 | NotebookLM | [Link](https://notebooklm.google.com/) |
| 31 | Arena | [Link](https://lmarena.ai/) |
| 32 | SeaArt.AI | [Link](https://www.seaart.ai/) |
| 33 | Hugging Face | [Link](https://huggingface.co/) |
| 34 | Crushon AI | [Link](https://crushon.ai/) |
| 35 | Meta AI | [Link](https://ai.meta.com/) |
| 36 | candy.ai | [Link](https://candy.ai/) |
| 37 | Photoroom | [Link](https://www.photoroom.com/) |
| 38 | Pixelcut | [Link](https://www.pixelcut.ai/) |
| 39 | Adot | [Link](https://www.adot.ai/) |
| 40 | Higgsfield | [Link](https://higgsfield.ai/) |
| 41 | Cursor | [Link](https://www.cursor.com/) |
| 42 | CivitAI | [Link](https://civitai.com/) |
| 43 | Midjourney | [Link](https://www.midjourney.com/) |
| 44 | Manus | [Link](https://manus.im/) |
| 45 | KlingAI | [Link](https://klingai.com/) |
| 46 | VEED | [Link](https://www.veed.io/) |
| 47 | Genspark | [Link](https://www.genspark.ai/) |
| 48 | GigaChat | [Link](https://gigachat.ru/) |
| 49 | Poe | [Link](https://poe.com/) |
| 50 | cutout.pro | [Link](https://www.cutout.pro/) |



### The Evolution of AI Coding Tools

AI assistance in software development has evolved through distinct stages — each giving the model more autonomy and capability:

<Mermaid :value="`
graph LR
    A[Single LLM Features] --> B[Workflows]
    B --> C[Agents]
    C --> D[The Future]
`" />

| Stage | What it means | Concrete technologies |
|-------|--------------|----------------------|
| **Single-LLM Features** | Discrete tasks: summarization, classification, code completion | REST API, SDK, prompt templates |
| **Workflows** | LLMs orchestrated by code — chains of steps defined by the developer | LangChain, LangGraph, custom scripts, CLAUDE.md |
| **Agents** | LLMs deciding their own trajectories — planning, tool use, self-correction | MCP servers, tool/function calling, ReAct pattern |
| **The Future** | Increasing agency, capability and flexibility — models as autonomous collaborators | Skills, Hooks, multi-agent orchestration |

*Source: Anthropic — On the Frontier of Agentic Coding*

## 🧪 Exercises

- [Complete this crossword with the vocabulary you learned](https://ladigitale.dev/digiquiz/q/693973108b765)
- [Quiz : Test your knowledge !](https://ladigitale.dev/digiquiz/q/6939788db23d8)

## 📖 Further readings

* [Generative AI Taskforce mailing-list](mailto:GenAITaskforce@worldline.com)
* [GRS mailing-list](mailto:dl-wl-cto-grs-ai@worldline.com)
* [Top 100 GenAI](https://a16z.com/100-gen-ai-apps-6/)
