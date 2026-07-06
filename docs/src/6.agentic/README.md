# Agentic AI for services

Agentic AI refers to artificial intelligence systems that can act autonomously to achieve specific goals. These systems are designed to make decisions, learn from their environment, and adapt their behavior over time. Agentic AI can be used in a variety of applications. There is a lot of architectures and frameworks to build agentic AI systems, this section focuses providing an introduction to core architecture concepts for agentic platforms such as LangChain Agents and Model Context Protocol (MCP).

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1206069470?h=8043ac1d6a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GenAI4Devs - Agentic AI"></iframe></div>

## Defining Agentic AI

### [`LangChain Agents`](https://docs.langchain.com/oss/python/langchain/agents)

LangChain Agents are a powerful tool for building complex workflows on top of LLMs. They enable you to define a set of actions and rules that the LLM can follow to achieve a specific goal. Agents can be used to automate tasks, manage workflows, and provide personalized assistance to users. 

It's a higher level abstraction on top of context aware frameworks for making easier the creation of agentic AI systems. LangChain Agents can be used to create agents that can interact with users, access external data sources, and perform complex tasks with complex workflows.

#### Example of LangChain Agent
```python
from langchain_mistralai.chat_models import ChatMistralAI
from langchain_core.callbacks import StdOutCallbackHandler
from langchain.agents import create_agent

@tool
def addition(a: int, b: int) -> int:
    """Returns the sum of two numbers."""
    return a + b
    
llm = ChatMistralAI(model="mistral-7b-instruct-v0.1", temperature=0)

# Create the agent with the LLM tools
agent = create_agent(
    llm=llm,
    tools=[addition],
)

# StdOutCallbackHandler to see the intermediate steps on the console
callback = StdOutCallbackHandler()
result = agent.invoke(
    "What is the sum of 123 and 456?",
    callbacks=[callback],
)
```

### 🧪 Exercises

#### Exercise 08 — LangChain Agent

Create a command-line agent application that leverages a single intelligent agent to handle multiple tools. The agent will autonomously decide which tools to use based on user queries, demonstrating the agentic capabilities of LangChain. This exercise introduces tool calling automation with a mono-agent system, laying the foundation for future multi-agent architectures.

##### Output

```bash
User Query: What's the weather in Paris and what is 42 + 8?

============================================================
RÉSULTAT FINAL
============================================================
The weather in Paris is Sunny, 72°F, Light breeze. The result of 42 + 8 is 50.

============================================================
HISTORIQUE COMPLET DE LA CONVERSATION
============================================================

--- Message 0 ---
Rôle: user
Contenu: What's the weather in Paris and what is 42 + 8?
Outils appelés: ['get_weather', 'calculator']

--- Message 1 ---
Rôle: assistant
Contenu: The weather in Paris is Sunny, 72°F, Light breeze. The result of 42 + 8 is 50.
```

::: warning How to start ?
[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1-2zi0PMJv-tCa2Ea8HqPyTLAnPngHSKB?#copy=true)
:::

::: tip Solution
  ::: details here
    [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1ZpluTsNwuoFwlKYxRnGIoriMBN86LShU?usp=sharing)
  :::
:::

### Introduction to Multi-agent systems

Multi-agent systems involve multiple intelligent agents that can interact, collaborate, and coordinate to achieve complex goals. Each agent in the system may have specialized capabilities or knowledge, allowing them to handle specific tasks more effectively. Multi-agent systems are particularly useful for scenarios that require distributed problem-solving, resource management, or complex decision-making.

Here is an example architecture of a multi-agent system where the Deep Agent acts as the generalist orchestrator, delegating to tools and a specialist agent:

<Mermaid :value="`
graph TD
    A[Deep Agent
Generalist Orchestrator
claude-opus-4-8]
    A --> B[Search Tool]
    A --> C[Calculator Tool]
    A --> D[Specialist Agent
Short Reasoning LLM]
    D --> E[Post to ntfy.sh]
    D --> F[Read from ntfy.sh]
    style A fill:#e8f4fd,stroke:#1a73e8,stroke-width:3px,color:#000
`" />

Architecturing multi-agent systems requires careful consideration of agent roles, communication protocols, and task delegation strategies. Agents must be designed to effectively share information and coordinate their actions to achieve the overall system objectives. Some useful patterns for multi-agent systems include:
- **Orchestration**: A central agent (generalist) coordinates the activities of multiple specialist agents, delegating tasks based on their expertise.
- **Collaboration**: Agents work together to solve problems, sharing information and resources to achieve common goals.
- **Competition**: Agents compete for resources or tasks, which can drive innovation and efficiency in certain scenarios.

LangChain provides pattern resources to build multi-agent systems, including tools for agent communication, task delegation, and workflow management here : [Langchain Multi-Agent Patterns](https://docs.langchain.com/oss/python/langchain/multi-agent) and here : [LangChain Agent Workflows](https://docs.langchain.com/oss/python/langgraph/workflows-agents).

Also find architecture concrete usecase examples in the galileo mastering agents handbook : [here](https://galileo.ai/mastering-agents-ebook).

**[LangGraph](https://langchain-ai.github.io/langgraph/)** is the recommended framework for implementing these patterns in production. Built on top of LangChain, it models multi-agent workflows as directed graphs where nodes are agents or tools and edges represent state transitions — making cyclic workflows, human-in-the-loop checkpoints, and persistent state straightforward to express.


#### [Deep Agents](https://docs.langchain.com/oss/python/deepagents/overview)

Deep Agents are a class of agentic systems designed for complex, long-horizon tasks that require sustained reasoning over many steps. Unlike simple agents that react to a single prompt, Deep Agents autonomously plan, decompose goals into sub-tasks, maintain state across multiple tool calls, and self-correct when intermediate results are unexpected. They are typically backed by the most capable reasoning models and are suited for tasks such as research, codebase exploration, or multi-step data analysis.

##### Example

```python
from langchain_mistralai.chat_models import ChatMistralAI
from langchain.agents import create_agent
from langchain.tools import tool
from deepagents import create_deep_agent, CompiledSubAgent

model = ChatMistralAI(model="mistral-small")

@tool(name_or_callable="calculator_tool", description="Useful for math questions.")
def calculator(expression: str) -> str:
    return f"Result of {expression} = {eval(expression)}"

@tool(name_or_callable="notify_tool", description="Send a notification with the given message.")
def notify(message: str) -> str:
    print(f"[Notification] {message}")
    return f"Notification sent: '{message}'"

# Specialist agent handles notifications only
specialist = create_agent(
    model,
    tools=[notify],
    system_prompt="You are a notification specialist. Only send notifications using notify_tool."
)

subagent = CompiledSubAgent(
    name="Notification agent",
    description="Sends notifications on behalf of the generalist agent",
    runnable=specialist
)

# Generalist deep agent orchestrates tools and delegates to the specialist
generalist = create_deep_agent(
    model=model,
    tools=[calculator],
    system_prompt="You are a helpful assistant. Delegate notifications to the specialist agent.",
    subagents=[subagent]
)

result = generalist.invoke({"messages": [{"role": "user", "content": "Calculate 42 + 58 and notify me of the result."}]})
print(result["messages"][-1].content)
```

### 🧪 Exercises

#### Exercise 09 — Multi-Agent System

Create a multi-agent application that demonstrates agent orchestration and delegation. Build a specialist [ntfy.sh](https://ntfy.sh) notification agent, and a generalist agent that orchestrates multiple tools and delegates notification tasks to the specialist. This exercise showcases how to structure complex applications with multiple agents working together through tool wrapping and hierarchical delegation.

##### Output

```bash
======================================================================
RÉSULTAT FINAL
======================================================================
I've posted the announcement to ntfy.sh, calculated 50 + 50 = 100, and posted the result.

👀 View notifications at: https://ntfy.sh/ai-for-tech-yourname
======================================================================
```

::: warning How to start ?
Before opening the notebook, add one Colab secret:
- `NTFY_TOPIC` — a unique topic name, e.g. `ai-for-tech-yourname` (no account needed)

You can subscribe to your topic at `https://ntfy.sh/<your-topic>` in any browser to see notifications arrive in real time.

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1UGJLxN6ugswrxz-CQSRf8OWn8p9bC8Yp?#copy=true)
:::

::: tip Solution
  ::: details here
    [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1-IVtCnQ8UO1dcIUHb7iwUd8KqgDDkAzy?usp=sharing)
  :::
:::

## Model Context Protocol (MCP)

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1194518343?h=80341d6282&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GenAI4Devs - MCP"></iframe></div>

The Model Context Protocol (MCP) is an open standard that defines how LLMs connect to external tools, data sources, and services. Think of it as what REST/OpenAPI is to web services — but for LLM integrations: a common interface that any LLM client can use to discover and call capabilities exposed by any MCP server.

MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:

* A growing list of pre-built integrations that your LLM can directly plug into
* The flexibility to switch between LLM providers and vendors
* Best practices for securing your data within your infrastructure

In an MCP server, you can expose:
- **Tools**: Callable functions the LLM can invoke (e.g. search, calculate, send message).
- **Resources**: Data sources the LLM can read (e.g. files, database records, API responses).
- **Prompts**: Reusable prompt templates the client can surface to the user.

More information can be found on the [MCP website](https://modelcontextprotocol.io/introduction).
MCP stores are available on the [MCP store](https://mcpstore.co/).


::: tip MCP client and server
`MCP client` libraries are available in various languages, including Python, Kotlin, and JavaScript. These libraries provide a simple and consistent way to interact with MCP servers and models. LLMs clients can also be used to connect to MCP servers, allowing you to use LLMs in your applications without having to manage the underlying infrastructure.
:::

<Mermaid :value="`
graph TD
    J[LLM client or server] --> A[MCP Client]
    A[MCP Client] --> B[MCP Server 1]
    A --> C[MCP Server 2]
    B --> D[Model 1]
    B --> E[Model 2]
    C --> F[Tool 1]
    C --> G[Model 4]
    B --> H[Tool 1]
    C --> I[Tool 2]
`" />



### MCP Server (Fast MCP)

An MCP server is a server that implements the MCP protocol. It provides a way to manage and deploy AI models, tools, and actions.

It is basically a socket server that listens for incoming requests from MCP clients and responds with the appropriate model outputs or tool results.

there are actually 2 ways to exchange data with an MCP server:
- via stdin/stdout streams (for direct LLMs integration) : this is the most common way to interact with MCP servers, as it allows LLMs to communicate directly with the server without the need for additional network protocols. The MCP client sends requests to the server via stdin, and the server responds via stdout.
- via SSE (Server-Sent Events) endpoints (mostly for web clients integration) : SSE is a unidirectional communication protocol, meaning that data flows from the server to the client only. This makes it well-suited for scenarios where the server needs to push updates to the client, such as in real-time applications or live data feeds. This method allows web clients to receive real-time updates from the MCP server. The server sends events to the client over a persistent HTTP connection, allowing for efficient communication and data transfer.

It can be built using various frameworks and languages. One popular framework for building MCP servers is the Fast MCP framework, which is built on top of FastAPI.

1. Install the Fast MCP framework using pip:
```bash
pip install fast-mcp
```
2. Create a new MCP server using the Fast MCP framework:
```python
from fastmcp import FastMCP

mcp = FastMCP("my-server")

@mcp.tool()
def greet(name: str) -> str:
    """A simple tool that returns a greeting message."""
    return f"Hello, {name}!"

@mcp.resource("data://config")
def get_config() -> str:
    """Exposes static configuration data as a resource."""
    return '{"version": "1.0", "env": "production"}'

@mcp.prompt()
def my_prompt(topic: str) -> str:
    """A reusable prompt template."""
    return f"Explain {topic} in simple terms."

mcp.run(transport="http", host="0.0.0.0", port=8001)
```
::: tip Google Colab MCP server access with Ngrok
To expose your MCP server running in Google Colab to the internet, you can use Ngrok. Ngrok creates a secure tunnel to your local server, allowing external access via a public URL.
``` python
ngrok.set_auth_token(userdata.get('ngrok'))
public_url = ngrok.connect(8001)
```

:::



### 🧪 Exercises

#### Exercise 10 — MCP Server

Create a Model Context Protocol (MCP) server using FastMCP that exposes quiz data through a standardized interface. The server will load quiz questions from a remote source and make them accessible via an HTTP endpoint. This exercise demonstrates how to build MCP servers that can be integrated with LLM applications as data providers, laying the foundation for future exercises combining MCP servers with agents.

##### Output

```bash
✓ Quiz loaded: 50 questions
✓ MCP server started (Colab mode)
✓ Accédez au MCP serveur via: https://abc123def456.localhost.run/mcp
```

::: warning How to start ?
No account or API key needed — the notebook uses [localhost.run](https://localhost.run) to expose the server publicly over SSH.

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1UIQOSzZAQOOdTLkvxbD70o0netwJTM9n?#copy=true)
:::

::: tip Solution
  ::: details here
    [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/13MWgn8uW2c3PXLNg5teC8PX7pvhVuX1f?usp=sharing)
  :::
:::

###  MCP client (with claude desktop)

Claude Desktop is a powerful tool that allows you to connect to MCP servers and interact with AI models. It provides a user-friendly interface for managing models, tools, and actions, making it easy to build and deploy AI applications.

To use tools from an MCP server in Claude desktop, you need to connect to the MCP server by providing the server URL and your API key. Once connected, you can access the models and tools available on the server and use them in your conversations with Claude.

The path to connect to an MCP server in Claude desktop is as follows:
1. Open or create the config file `/Users/<username>/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
2. Add the MCP server URL and API key in the "mcp_servers" section
```json
{
  "mcpServers": {
    "quiz": {
      "command": "/Users/<username>/homebrew/bin/npx",
      "args": [
        "mcp-remote",
        "https://XXXXXXXXXXX.ngrok-free.app/mcp"
      ],
       "env": {
        "PATH": "/Users/<username>/homebrew/bin/:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
      }
    }
  }
}
```

### 🧪 Exercises
#### Using MCP Server Tools in Claude Desktop
Connect Claude desktop to the MCP server you created in the previous exercise and use the quiz tool to fetch quiz questions. This exercise demonstrates how to integrate MCP server tools into Claude desktop, allowing you to leverage external data sources in your conversations.


## 📖 Further readings

* [MCP framework](https://modelcontextprotocol.io/introduction)
* [Kotlin mcp sdk](https://github.com/modelcontextprotocol/kotlin-sdk)
* [Kotlin implementation](https://github.com/worldline/learning-kotlin-multiplatform-src/tree/with-mcp-server)
