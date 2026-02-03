# Agentic AI for services

Agentic AI refers to artificial intelligence systems that can act autonomously to achieve specific goals. These systems are designed to make decisions, learn from their environment, and adapt their behavior over time. Agentic AI can be used in a variety of applications. There is a lot of architectures and frameworks to build agentic AI systems, this section focuses providing an introduction to core architecture concepts for agentic platforms such as Langchain Agents and Model Context Protocol (MCP).

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1127901756?h=c9645fee64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GenAI4Devs - Module 6 | MCP - Episode 1"></iframe></div>

## Defining Agentic AI

### [`Langchain Agents`](https://docs.langchain.com/oss/python/langchain/agents)

Langchain Agents are a powerful tool for building complex workflows on top of LLMs. They enable you to define a set of actions and rules that the LLM can follow to achieve a specific goal. Agents can be used to automate tasks, manage workflows, and provide personalized assistance to users. 

It's a higer level abstraction on top of context aware frameworks for making easier the creation of agentic AI systems. Langchain Agents can be used to create agents that can interact with users, access external data sources, and perform complex tasks with complex workflows.

#### Example of Langchain Agent
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

### 🧪 Exercise

#### Building a Single Agent with Multiple Tools using LangChain Agentic Features

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

- Open the following [Google Colab notebook](#) and complete the exercise there.
- Set up your Mistral API key using `userdata.get('API_KEY')` in Google Colab.
- Define three tools using the `@tool` decorator from LangChain:
  - `search(query: str)` - Returns search results for a given query
  - `get_weather(location: str)` - Returns weather information for a specific location
  - `calculator(expression: str)` - Evaluates a mathematical expression and returns the result
- Create a `ChatMistralAI` instance with the model `"mistral-small"`.
- Use the [`create_agent`](https://python.langchain.com/docs/how_to/agent_executor/) function from LangChain to build a single agent that:
  - Accepts the model and the list of tools (search, get_weather, calculator)
  - Includes a system prompt instructing the agent to be helpful and use tools when necessary
- Configure a `StdOutCallbackHandler` to stream the agent's reasoning process and tool invocations.
- Invoke the agent with a user query that requires multiple tool calls (e.g., asking for weather AND a calculation simultaneously).
- Extract and display:
  - The final result from the agent's last message
  - The complete conversation history including all messages and the specific tools called at each step

:::

::: tip Solution
  ::: details here
    [Google Colab notebook](https://colab.research.google.com/drive/1ZpluTsNwuoFwlKYxRnGIoriMBN86LShU?usp=sharing)
  :::
:::


### Introduction to Multi-agent systems

Multi-agent systems involve multiple intelligent agents that can interact, collaborate, and coordinate to achieve complex goals. Each agent in the system may have specialized capabilities or knowledge, allowing them to handle specific tasks more effectively. Multi-agent systems are particularly useful for scenarios that require distributed problem-solving, resource management, or complex decision-making.

Here is an example architecture of a multi-agent system with a generalist agent delegating tasks to a specialist agent:

<Mermaid :value="`
graph TD
    B[Generalist Agent -> Long Reasonning LLM]
    B --> C[Tool 1: Search]
    B --> D[Tool 2: Calculator]
    B --> E[Discord Specialist Agent -> Short Reasonning LLM]
    E --> F[Tool 3: Post Message on Discord]
    E --> G[Tool 4: Read Messages from Discord]
`" />

Architecturing multi-agent systems requires careful consideration of agent roles, communication protocols, and task delegation strategies. Agents must be designed to effectively share information and coordinate their actions to achieve the overall system objectives. Some useful patterns for multi-agent systems include:
- **Orchestration**: A central agent (generalist) coordinates the activities of multiple specialist agents, delegating tasks based on their expertise.
- **Collaboration**: Agents work together to solve problems, sharing information and resources to achieve common goals.
- **Competition**: Agents compete for resources or tasks, which can drive innovation and efficiency in certain scenarios.

Langchain provides pattens ressources to build multi-agent systems, including tools for agent communication, task delegation, and workflow management here : [Langchain Multi-Agent Patterns](https://docs.langchain.com/oss/python/langchain/multi-agent) and here : [Langchain Agent Workflows](https://docs.langchain.com/oss/python/langgraph/workflows-agents).

Also find architecture concrete usecase examples in the galileo mastering agents handbook : [here](https://galileo.ai/mastering-agents-ebook).


### 🧪 Exercise

#### Building a Multi-Agent System with Agent Orchestration using LangChain

Create a multi-agent application that demonstrates agent orchestration and delegation. Build a specialist Discord agent responsible for Discord operations (reading and posting messages), and a generalist agent that orchestrates multiple tools and delegates Discord-related tasks to the specialist agent. This exercise showcases how to structure complex applications with multiple agents working together through tool wrapping and hierarchical delegation.

##### Output

```bash
Requête : Calcul + Post sur discord
======================================================================

RÉSULTAT FINAL
======================================================================
The calculation 50 + 50 equals 100. I've posted this result to the Discord channel successfully.

======================================================================
HISTORIQUE COMPLET DE LA CONVERSATION
======================================================================

--- Message 0 ---
Rôle: user
Contenu: Post that on discord that you will Calculate 50 + 50 (without indicating the result before tool calling), calculate with dedicated tool and post the result to the discord channel

--- Message 1 ---
Rôle: assistant
Contenu: I'll help you calculate 50 + 50 and post the result to Discord.
Outils appelés: ['calculator', 'discord_agent']

--- Message 2 ---
Rôle: tool
Contenu: Result of 50 + 50: 100

--- Message 3 ---
Rôle: assistant
Contenu: The calculation 50 + 50 equals 100. I've posted this result to the Discord channel successfully.
```

::: warning How to start ?
- Open the following [Google Colab notebook](#) and complete the exercise there.
- Set up your Mistral API key using `userdata.get('API_KEY')` in Google Colab.
- Set up Discord credentials:
  - Create a Discord bot on the [Discord Developer Portal](https://discord.com/developers/applications)
  - Get your bot token from the Bot section
  - Get your Discord channel ID from the channel you want to work with
  - Store these as secrets in Google Colab (`DISCORD_BOT_TOKEN` and `DISCORD_CHANNEL_ID`)
- Define all required tools using the `@tool` decorator from LangChain:
  - `search(query: str)` - Searches for information
  - `calculator(expression: str)` - Evaluates mathematical expressions
  - `get_discord_channel_messages(limit: int)` - Fetches recent messages from a Discord channel
  - `post_discord_message(content: str)` - Posts a message to a Discord channel
- Create a **specialist Discord agent** using `create_agent` that:
  - Has access to Discord-specific tools (get_discord_channel_messages and post_discord_message)
  - Includes a system prompt defining its role as a Discord specialist
- Create a **wrapper tool** `discord_agent(task: str)` that:
  - Invokes the Discord specialist agent internally
  - Wraps the agent's response as a tool that can be called by other agents
  - This enables the generalist agent to delegate Discord tasks
- Create a **generalist orchestrator agent** using `create_agent` that:
  - Has access to: search, calculator, and the discord_agent wrapper tool
  - Routes tasks to the appropriate tool/agent
  - Synthesizes results from multiple sources
  - Includes a system prompt defining its orchestration role
- Invoke the generalist agent with a complex query that requires:
  - Using the calculator tool
  - Delegating to the discord_agent for posting results
:::

::: tip Solution
  ::: details here
    [Google Colab notebook](https://colab.research.google.com/drive/1-IVtCnQ8UO1dcIUHb7iwUd8KqgDDkAzy?usp=sharing)
  :::
:::

## Model Context Protocol (MCP)

The Model Context Protocol (MCP) is a framework for managing and deploying AI models. It standardizes like a swagger for AI models, providing a common interface for interacting with models across different platforms and environments. 

Here is a diagram illustrating the interest of MCP

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

It is basicaly a socket server that listens for incoming requests from MCP clients and responds with the appropriate model outputs or tool results.

there is actully 2 ways to exchange data with an MCP server:
- via stdin/stdout streams (for direct LLMs integration) : this is the most common way to interact with MCP servers, as it allows LLMs to communicate directly with the server without the need for additional network protocols. The MCP client sends requests to the server via stdin, and the server responds via stdout.
- via SSE (Server-Sent Events) endpoints (mostly for web clients integration) : SSE is a unidirectional communication protocol, meaning that data flows from the server to the client only. This makes it well-suited for scenarios where the server needs to push updates to the client, such as in real-time applications or live data feeds. This method allows web clients to receive real-time updates from the MCP server. The server sends events to the client over a persistent HTTP connection, allowing for efficient communication and data transfer.

It can be built using various frameworks and languages. One popular framework for building MCP servers is the Fast MCP framework, which is built on top of FastAPI.

1. Install the Fast MCP framework using pip:
```bashpip install 
fast-mcp
```
2. Create a new MCP server using the Fast MCP framework:
```python
from fast_mcp import FastMCP
...

@mcp.tool()
def my_tool(param1: str) -> str:
    """A simple tool that returns a greeting message."""
    return f"Hello, {param1}!"
...
@mcp.model()
def my_model(input_text: str) -> str:
    """A simple model that echoes the input text."""
    return input_text
...
@mcp.action()
def my_action(input_text: str) -> str:
    """A simple action that uses the model and tool."""
    model_output = my_model(input_text)
    tool_output = my_tool(model_output)
    return tool_output  
...
mcp = FastMCP()
...
mcp.run_async(transport="http", host="0.0.0.0", port=8001)
```
::: tip Google Colab MCP server access with Ngrok
To expose your MCP server running in Google Colab to the internet, you can use Ngrok. Ngrok creates a secure tunnel to your local server, allowing external access via a public URL.
``` python
ngrok.set_auth_token(userdata.get('ngrok'))
public_url = ngrok.connect(8001)
```

:::



### 🧪 Exercise

#### Building an MCP Server with FastMCP for Quiz Data Exposure

Create a Model Context Protocol (MCP) server using FastMCP that exposes quiz data through a standardized interface. The server will load quiz questions from a remote source and make them accessible via an HTTP endpoint. This exercise demonstrates how to build MCP servers that can be integrated with LLM applications as data providers, laying the foundation for future exercises combining MCP servers with agents.

##### Output

```bash
✓ Quiz chargé: 50 questions
✓ Serveur MCP avec FastMCP démarré (mode Colab)
✓ Accédez au MCP serveur via: https://abcd-1234-efgh-5678.ngrok.io/mcp/
```

::: warning How to start ?

- Open the following [Google Colab notebook](#) and complete the exercise there.
- Install and import required dependencies:
  - `pyngrok` - For tunneling local servers to the public internet
  - `fastmcp` - For building Model Context Protocol servers
  - `nest_asyncio` - For handling async operations in Colab
- Set up ngrok authentication in Google Colab:
  - Create an ngrok account at [ngrok.com](https://ngrok.com)
  - Get your authentication token from your account dashboard
  - Store it as a secret in Google Colab (`ngrok`)
- Create an asynchronous function `load_quiz()` that:
  - Fetches quiz data from a remote URL (e.g., [Kotlin Multiplatform Learning Quiz](https://github.com/worldline/learning-kotlin-multiplatform/raw/main/quiz.json))
  - Stores the data in a global variable
  - Handles errors gracefully with try/except
- Initialize a FastMCP server instance with `FastMCP("quiz-mcp-server")`.
- Define an MCP tool using the `@mcp.tool()` decorator:
  - `get_quiz()` - Returns the complete quiz data as a JSON string
- Create an async `main()` function that:
  - Calls `load_quiz()` to fetch the quiz data
  - Starts the MCP server using `await mcp.run_async()` with HTTP transport
  - Listens on `0.0.0.0:8001`
- Apply `nest_asyncio.apply()` to enable nested async operations in Colab.
- Start the server using `asyncio.create_task(main())`.
- Use ngrok to expose the local server:
  - Set the ngrok authentication token
  - Connect ngrok to port 8001
  - Display the public URL for external access
- Test the server by checking:
  - Local accessibility: `http://localhost:8001/mcp/`
  - Remote accessibility: via the ngrok public URL
:::

::: tip Solution
  ::: details here
    [Google Colab notebook](https://colab.research.google.com/drive/13MWgn8uW2c3PXLNg5teC8PX7pvhVuX1f?usp=sharing)
  :::
:::

###  MCP client (with claude desktop)

LM Studio is a powerful tool that allows you to connect to MCP servers and interact with AI models. It provides a user-friendly interface for managing models, tools, and actions, making it easy to build and deploy AI applications.

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

### 🧪 Exercise
#### Using MCP Server Tools in Claude Desktop
Connect Claude desktop to the MCP server you created in the previous exercise and use the quiz tool to fetch quiz questions. This exercise demonstrates how to integrate MCP server tools into Claude desktop, allowing you to leverage external data sources in your conversations.


## 📖 Further readings

* [MCP framework](https://modelcontextprotocol.io/introduction)
* [Kotlin mcp sdk](https://github.com/modelcontextprotocol/kotlin-sdk)
* [Kotlin implementation](https://github.com/worldline/learning-kotlin-multiplatform-src/tree/with-mcp-server)
