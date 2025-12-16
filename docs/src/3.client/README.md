# Online/Offline LLMs clients 

This section is dedicated to the usage of Generative AI models through different clients. We will explore both online and offline clients that allow you to interact with LLMs for various use cases. A client is a Graphical User Interface (GUI) that allows users to interact with LLMs without the need for coding. Clients provide a user-friendly interface for users to input prompts, configure settings, and view responses from the models. It can also provide additional features such as prompt management, conversation history, and integration with other tools and services.

A client can be :
- Web-based : ChatGPT, Bard, Claude, Gemini
- Self-hosted : Librechat self-hosted instance
- Desktop app : Claude desktop,
- IDE plugin : ChatGPT for VS code 
- Mobile application : copilot for mobile, le chat ai mobile app

Creators of LLMs often provide official clients for their models, but there are also third-party clients available that support multiple LLMs and offer additional features.


## Online (Librechat)

![librechat_interface](../assets/images/librechat_interface.png)

LibreChat is a free, open source AI chat platform. This Web UI offers vast customization, supporting numerous AI providers, services, and integrations. Serves all AI Conversations in one place with a familiar interface, innovative enhancements, for as many users as you need.

The full librechat documentation is available [here](https://www.librechat.ai/docs)

Let's discover how to use LibreChat to create efficient and effective conversations with AI for developers.

### History

Prompts history allows users to save and load prompts for their conversations and easily access them later. Reusing prompts can save time and effort, especially when working with multiple conversations and keep track of the context and details of a conversation.

Remember to : 
- switch to a new conversation when a new topic is started
- take an older conversation when you want to continue a previous topic

### Bookmarks
 
 Keep the conversation organized by bookmarking them. You can easily find the conversations you want to access later with bookmarks. A bookmark is a group of conversations grouped with a tag name
 
### Custom Instructions

Custom instructions allow users to set specific guidelines for the AI to follow during conversations. This feature helps tailor the AI's responses to better suit the user's needs and preferences.

### Memories

Memories allow users to save important information or context from previous conversations to be used in future interactions. This feature helps maintain continuity and relevance in conversations by providing the AI with relevant background information.

### Prompts

The prompts feature allows users to save and load predefined prompts to use it during their conversations.
You can use a prompt with the /[`prompt command`]. A prompt can have parameters, which are replaced with values when the prompt is used.

**Exemple**

- On the right side menu, go to the `💬 Prompts` tab.
- Click on the `+ add a new prompt`.
- name your prompt : `explain`
- on Text tab, you can write your prompt :

```
Explain the following {{language:Java|Kotlin|Javascript}} snippet of code:
{{code}}
```

![preformatted_prompts_config](../assets/images/prompt.png)

- Now you can use the `/explain` command to get the explanation of the code snippet.

![preformatted_prompts_usage](../assets/images/demo_prompt.gif)

### Agent Builder

Librechat Agent Builder allows users to create custom AI agents that can perform specific tasks or functions. Users can define the agent's behavior, capabilities, and interactions with users. This feature enables users to build specialized AI assistants tailored to their needs. The agent can be shared on a marketplace for other users to use it.

### Models

#### Default model 

By default, LibreChat uses the OpenAI GPT- nano model to generate responses. This model is a smaller version of the GPT-3 model, which is designed to be more efficient and faster while still providing high-quality responses and also be cost effective.

#### Worldline Agent

The Worldline Agent is a custom AI agent built using LibreChat's Agent Builder. It is designed to assist users with tasks related to Worldline's services and products. The Worldline Agent can provide information, answer questions, and perform specific actions based on user requests.

#### Reasoning model for code/creativity

For tasks that require reasoning, such as code generation or creative writing, it is recommended to use a more powerful model like Claude Haiku. These models are better suited for complex tasks that require a deeper understanding of context and logic.

#### Long context model

For tasks that require a long context, such as document summarization or long conversations, it is recommended to use a model that supports long context, like Gemini Pro. These models can handle larger amounts of text and maintain context over longer interactions.


#### Translation model

For translation tasks, it is recommended to use specialized translation model

#### Azure OpenAI

Azure OpenAI provides access to OpenAI's powerful language models through Microsoft's Azure cloud platform. It allows developers to integrate advanced AI capabilities into their applications, such as natural language understanding, text generation, and more.

#### Google Gemini

Gemini is a large language model (LLM) developed by Google. It's designed to be a multimodal AI, meaning it can work with and understand different types of information, including text, code, audio, and images. Google positions Gemini as a highly capable model for a range of tasks, from answering questions and generating creative content to problem-solving and more complex reasoning. There are different versions of Gemini, optimized for different tasks and scales.

#### Anthropic Claude

Claude is an Artificial Intelligence, trained by Anthropic. Claude can process large amounts of information, brainstorm ideas, generate text and code, help you understand subjects, coach you through difficult situations, help simplify your busywork so you can focus on what matters most, and so much more.

### Assistants 

#### Creating Assistants

The Assistants API enables the creation of AI assistants, offering functionalities like code interpreter, knowledge retrieval of files, and function execution. The Assistants API allows you to build AI assistants within your own applications for specific needs. An Assistant has instructions and can leverage models, tools, and files to respond to user queries. The Assistants API currently supports three types of tools: Code Interpreter, File Search, and Function calling.

![assistant](../assets/images/assistant.png)


#### Marketplace

The Marketplace is a collection of pre-built AI assistants that users can browse, install, and use within LibreChat. These assistants are designed to perform specific tasks or provide specialized knowledge in various domains. Users can explore the marketplace to find assistants that suit their needs and enhance their interactions with AI.

You can access the marketplace from the top left side menu by clicking on the `Marketplace` icon.

::: tip Image generation assistants
There are image generation assistants available in the marketplace that use models such as DALL-E
:::

### Tools

Tools section provide standalone tools that can be used to enhance your conversations with LLMs. These tools can be used to add additional knowledge and functionalities to your conversations.

The plugins endpoint opens the door to prompting LLMs in new ways other than traditional input/output prompting.

::: warning
Every additional plugin selected will increase your token usage as there are detailed instructions the LLM needs for each one
For best use, be selective with plugins per message and narrow your requests as much as possible
:::

#### Web search

Retrieve data from internet and use it to generate a response.

#### File search

Upload files to the conversation and use them to generate a response.


#### Artifacts

Add complementary knowledge to your conversations with Artifacts such as visual preview of html pages.


### MCP servers

MCP section provide remote tools to add complementary knowledge and functionalities to your LLM conversations. On librechat a list of MCP servers is available to connect to your conversations provided by your organization or third parties such as slack, chart, confluence, jira 

### Tools mixing

You can mix too to create more complex prompts. For example, you can retrieve data from internet with the Browser tool and use the chart tool to create a graph based on the retrieved data.

![tool_mixing](../assets/images/tool_mixing.png)


### RAG

RAG is possible with LibreChat. You can use RAG to create a conversation with the AI.
To can add files to the conversation, you go to the file tab and select the file you want to add. Then the file will be added to the file manager and you can use it in the prompt.

The file can be an png, a video, a text file, or a PDF file.

### 🧪 Exercises

#### 1. Prompt creation

Select one prompt engineering technique and make a prompt in librechat that can be called with the `/[prompt_name]` command.

#### 2. Plugins mixing

Use the Browse and Chart tool to create a prompt that generates a chart from data retrieved from worldline website
https://worldline.com/en/home/top-navigation/about-worldline/who-we-are 

#### 3. Make your own assistant

Choose your favorite topic ( cooking, travel, sports, etc.) and create an assistant that can answer questions about it. You can share documents, files and instructions to configure your custom assistant and use it.


## Offline (LM Studio)  

::: warning Disclamer
Be careful with offline prompting models downloaded from the internet. They can contain malicious code. And also the size of the model can be very large from few Gb to few Tb. 
:::

### Definitions

If you don't want to use the online AI providers, you can use offline prompting. This technique involves using a local LLM to generate responses to prompts. It is useful for developers who want to use a local LLM for offline prompting or for those who want to experiment with different LLMs without relying on online providers.

LM Studio is a tool that allows developers to experiment with different LLMs without relying on online providers. It provides a user-friendly interface for selecting and configuring LLMs, as well as a chat interface for interacting with the LLMs. It also includes features for fine-tuning and deploying LLMs. This technique is useful for developers who want to experiment with different LLMs.

### Installation

![lmstudio_installation](../assets/images/lmstudio.png)

For installation, you can follow the instructions [here](https://lmstudio.ai/docs/)

### Model configuration

You can configure the model you want to use in the settings tab. You can select the model you want to use and configure it according to your needs.

`Context Length`: The context length is the number of tokens that will be used as context for the model. This is important because it determines how much information the model can use to generate a response. A longer context length will allow the model to generate more detailed and relevant responses, but it may also increase the computational cost of the model.

`GPU Offload`: This option allows you to offload the model to a GPU if available. This can significantly speed up the generation process, especially for longer prompts or complex models.

`CPU Threads`: This option allows you to specify the number of CPU threads to use for the model. This can be useful for controlling the computational resources used by the model.

`Evaluation batch size`: This option allows you to specify the batch size for evaluation. This is important for evaluating the performance of the model and can affect the speed and accuracy of the generation process.

[`RoPE Frequency base`]( 
https://www.hopsworks.ai/dictionary/rope-scaling): The Rotary Position Embeddings is a technique used to improve the performance of transformer-based models. This is important for controlling the output length of the model and can affect the quality of the generated responses.

`Keep model in memory`: This option allows you to keep the model in memory after the generation process is complete. This can be useful for generating multiple responses or for using the model for offline prompting.

`Try mmap()` for faster loading: This option allows you to try using mmap() for faster loading of the model. This can be useful for loading large models or for generating responses quickly.

`Seed`: This option allows you to specify a seed for the model. This can be useful for controlling the randomness of the generated responses.

`Flash Attention`: This option allows you to enable flash attention for the model. This can be useful for generating more detailed and accurate responses, but it may also increase the computational cost of the model.


### enable APIs

You can use the APIs to generate responses from the models. To enable the API server with LM Studio, you need to set the `API Server` option to `ON` in the settings tab. You can then use the API endpoints to generate responses from the models.


```bash
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] Success! HTTP server listening on port 1234
2024-11-15 18:45:22  [INFO]
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] Supported endpoints:
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] ->	GET  http://localhost:1234/v1/models
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] ->	POST http://localhost:1234/v1/chat/completions
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] ->	POST http://localhost:1234/v1/completions
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] ->	POST http://localhost:1234/v1/embeddings
2024-11-15 18:45:22  [INFO]
2024-11-15 18:45:22  [INFO] [LM STUDIO SERVER] Logs are saved into /Users/ibrahim/.cache/lm-studio/server-logs
2024-11-15 18:45:22  [INFO] Server started.
2024-11-15 18:45:22  [INFO] Just-in-time model loading active.
```

You can use the endpoints to generate responses from the models. The endpoints are as follows:

- `GET /v1/models`: This endpoint returns a list of the available models.
- `POST /v1/chat/completions`: This endpoint generates responses from the models using the chat format.Chat format is used for tasks such as chatbots, conversational AI, and language learning.
- `POST /v1/completions`: This endpoint generates responses from the models using the completion format. Completion format is used for tasks such as question answering, summarization, and text generation.
- `POST /v1/embeddings`: This endpoint generates embeddings from the models. Embeddings are used for tasks such as sentiment analysis, text classification, and language translation.



### 🧪 Exercises

1. Install LM Studio and configure the model you want to use.
2. Enable the API server and test the endpoints using curl or Postman.


## 📖 Further readings

- [LibreChat Worldline guides](https://worldline365.sharepoint.com/:u:/r/sites/GenerativeAIQA/SitePages/LibreChat-guides.aspx?csf=1&web=1&e=evKJpU)
- [LibreChat worldline instance](https://librechat.worldline-solutions.com/)
- [LibreChat official website](https://www.librechat.ai/)
- [LibreChat GitHub repository](https://github.com/danny-avila/LibreChat)
- [Gemini Prompting guide](https://workspace.google.com/resources/ai/writing-effective-prompts/)
- [Azure search](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search)
- [Google programmable search engine](https://programmablesearchengine.google.com/about/)
- [Claude AI](https://www.anthropic.com/)
- [OpenAI Assistant feature](https://platform.openai.com/docs/assistants/overview)
