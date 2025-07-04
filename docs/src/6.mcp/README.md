# Agentic AI with MCP

## Defining Agentic AI

### Agents

Langchain Agents are a powerful tool for building complex workflows on top of LLMs. They enable you to define a set of actions and rules that the LLM can follow to achieve a specific goal. Agents can be used to automate tasks, manage workflows, and provide personalized assistance to users. 
Ag
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


## Create a server (Kotlin MCP SDK)


## Use a MCP client (LM Studio)

## 🧪 Exercises
####  Exercise 1 - use an MCP server with LM Studio

Use LM Studio to connect to your MCP server and try to create a git project with your prompt.

Have a look at the [MCP store](https://mcpstore.co/) to find some MCP models to use.

####  Exercise 2 - use an MCP server with Kotlin MCP SDK

Use Kotlin MCP SDK to :

- create a simple MCP server based on the kotlin-mcp-sdk github available [here](https://github.com/modelcontextprotocol/kotlin-sdk)
- add a tool to the server that retrieve quiz questions and answers from this [endpoint](https://raw.githubusercontent.com/worldline/learning-kotlin-multiplatform/main/quiz.json)
- add your mcp server to LM Studio
- use the tool in LM Studio to simulate a quiz that add explainations to the answers and final scoring.

## 📖 Further readings

* [MCP framework](https://modelcontextprotocol.io/introduction)
