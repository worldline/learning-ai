# Agentic AI for services

Agentic AI refers to artificial intelligence systems that can act autonomously to achieve specific goals. These systems are designed to make decisions, learn from their environment, and adapt their behavior over time. Agentic AI can be used in a variety of applications. There is a lot of architectures and frameworks to build agentic AI systems, this section focuses providing an introduction to core architecture concepts for agentic platforms such as Langchain Agents and Model Context Protocol (MCP).

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1127901756?h=c9645fee64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GenAI4Devs - Module 6 | MCP - Episode 1"></iframe></div>

## Defining Agentic AI

### [`Langchain Agents`](https://docs.langchain.com/oss/python/langchain/agents)

Langchain Agents are a powerful tool for building complex workflows on top of LLMs. They enable you to define a set of actions and rules that the LLM can follow to achieve a specific goal. Agents can be used to automate tasks, manage workflows, and provide personalized assistance to users. 

### Model Context Protocol (MCP)

The Model Context Protocol (MCP) is a framework for managing and deploying AI models. It standardizes like a swagger for AI models, providing a common interface for interacting with models across different platforms and environments. 

MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:

* A growing list of pre-built integrations that your LLM can directly plug into
* The flexibility to switch between LLM providers and vendors
* Best practices for securing your data within your infrastructure

MCP allows developers to define the context in which a model operates, including its inputs, outputs, and metadata. It also enable multiple AI to interact with each other, allowing for more complex and collaborative AI applications.

in an MCP server, you can define:
- **Models**: The AI models that the server can use.
- **Tools**: The functions that the server can use to interact with the models.
- **Actions**: The actions that the server can take based on the models and tools.

More information can be found on the [MCP website](https://modelcontextprotocol.io/introduction).
MCP stores are available on the [MCP store](https://mcpstore.co/).

`MCP client` libraries are available in various languages, including Python, Kotlin, and JavaScript. These libraries provide a simple and consistent way to interact with MCP servers and models. LLMs clients can also be used to connect to MCP servers, allowing you to use LLMs in your applications without having to manage the underlying infrastructure.

##  MCP client (LM Studio)

::: warning TODO
:::

## MCP Server (Kotlin MCP SDK)

::: warning TODO
:::

## DEMO


## 🧪 Exercises
####  Exercise 1 - use an MCP client with LM Studio

Use LM Studio to connect to your MCP server and try to create a git project with your prompt.

Have a look at the [MCP store](https://mcpstore.co/) to find some MCP models to use.

####  Exercise 2 - create an MCP server with Kotlin MCP SDK

Use Kotlin MCP SDK to :

- create a simple MCP server based on the kotlin-mcp-sdk github available [here](https://github.com/modelcontextprotocol/kotlin-sdk)
- add a tool to the server that retrieve quiz questions and answers from this [endpoint](https://raw.githubusercontent.com/worldline/learning-kotlin-multiplatform/main/quiz.json)
- add your mcp server to LM Studio
- use the tool in LM Studio to simulate a quiz that add explainations to the answers and final scoring.

::: details Solution
[Quiz MCP server on github](https://github.com/worldline/learning-kotlin-multiplatform-src/tree/with-mcp-server)
:::

## 📖 Further readings

* [MCP framework](https://modelcontextprotocol.io/introduction)
