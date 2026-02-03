# Agentic AI node-based 

Node based genAI tools allow users to create and manage AI workflows using a visual interface that represents different components as nodes. These nodes can be connected to define the flow of data and operations, making it easier for users to build complex AI applications without extensive coding knowledge.

It is still for developers an option to consider, as it allows rapid prototyping and testing of AI workflows, enabling developers to focus on higher-level design and logic rather than low-level implementation details.

## N8N

![N8N screenshot](./images/n8n.png)

[N8N](https://n8n.io/) is an open-source workflow automation tool that enables you to connect various applications and services to automate tasks and processes. It provides a visual interface where you can create workflows by dragging and dropping nodes that represent different actions or triggers.

#### Key Features of N8N
- **Visual Workflow Builder**: N8N offers a user-friendly visual interface that allows you to create complex workflows without writing code. You can easily connect different nodes to define the flow of data and actions.
- **Extensive Integrations**: N8N supports a wide range of integrations with popular applications and services, including databases, APIs, cloud services, and more. This allows you to automate tasks across different platforms seamlessly.
- **Custom Nodes**: You can create custom nodes using JavaScript, allowing you to extend N8N's functionality to meet your specific needs.
- **Self-Hosting**: N8N can be self-hosted, giving you full control over your data and workflows. This is particularly important for organizations with strict data privacy requirements. It's also a one command installation with node js :
``` node
npx n8n
```

- **Open Source**: N8N is open-source software, which means you can contribute to its development, customize it, and use it without licensing fees.

::: tip Specialized node based genAI tools
More specic node-based genAI tools like comfyUI do the same for image generation workflows.
:::

## Agentic architecture 

Agentic architectures involve the use of multiple specialized agents that work together to achieve complex tasks. Each agent is designed to perform specific functions, and they communicate and collaborate to accomplish the overall goal.

With node-based tools, you can create workflows that involve multiple agents, each responsible for a specific aspect of the task. For example, in a content generation workflow, you might have one agent for text generation, another for image creation, and a third for data analysis. These agents can be represented as nodes in the workflow, allowing you to visualize and manage their interactions.

### 🧪 Exercise

Create a simple workflow using N8N that involves multiple agents working together to achieve a specific task. 
We want to search on the web the soccer results of the last weekend, summarize it with a long reasonning LLM, and send to discord channel the markdown formatted summary with a specialized LLM.

Multiple nodes will be needed and there is multiple ways to achieve this.
Remember that each node will require configuration, including API keys for the services you will use.
You can use Gemini Pro as reasonning LLM and Mistral AI for specialized agents.

![N8N soccer workflow](./images/n8n2.png)

::: details solution proposal
```json
{
  "name": "My workflow",
  "nodes": [
    {
      "parameters": {},
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.3,
      "position": [
        -800,
        128
      ],
      "id": "d54bd816-e561-456d-9e51-de94018c7c0a",
      "name": "Simple Memory"
    },
    {
      "parameters": {
        "descriptionType": "manual",
        "toolDescription": "A tool that can Send a message in Discord by providing a message",
        "authentication": "oAuth2",
        "resource": "message",
        "guildId": {
          "__rl": true,
          "value": "1415339620526456854",
          "mode": "id"
        },
        "channelId": {
          "__rl": true,
          "value": "1415339621151146027",
          "mode": "list",
          "cachedResultName": "général",
          "cachedResultUrl": "https://discord.com/channels/1415339620526456854/1415339621151146027"
        },
        "content": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Message', `the content of the message to be sent to the discord channel`, 'string') }}",
        "options": {}
      },
      "type": "n8n-nodes-base.discordTool",
      "typeVersion": 2,
      "position": [
        272,
        -208
      ],
      "id": "50c904e7-56f2-466b-b65f-99d36863dcfb",
      "name": "Send a message in Discord",
      "webhookId": "faa040ae-a9ef-44f0-8aba-40b6cf85b047",
      "credentials": {
        "discordOAuth2Api": {
          "id": "D8HCk3nkxyu0a0Q7",
          "name": "Discord account"
        }
      }
    },
    {
      "parameters": {
        "toolDescription": "AI Agent that can take a discord tool to send a message to a discord channel",
        "text": "={{ $('When chat message received').item.json.chatInput }}",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.agentTool",
      "typeVersion": 2.2,
      "position": [
        -624,
        -80
      ],
      "id": "b82a0cb2-73cd-44cc-9f39-7237a126bc47",
      "name": "Specialized agent (Discord)"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1,
      "position": [
        80,
        -48
      ],
      "id": "d179bb14-6d09-4e76-8958-92d9d5a4df4a",
      "name": "Google Gemini Chat Model1",
      "credentials": {
        "googlePalmApi": {
          "id": "BBUQm5XBDdXPDBV0",
          "name": "Google Gemini(PaLM) Api account"
        }
      }
    },
    {
      "parameters": {
        "authentication": "oAuth2",
        "resource": "message",
        "guildId": {
          "__rl": true,
          "value": "1415339620526456854",
          "mode": "id"
        },
        "channelId": {
          "__rl": true,
          "value": "1415339621151146027",
          "mode": "list",
          "cachedResultName": "général",
          "cachedResultUrl": "https://discord.com/channels/1415339620526456854/1415339621151146027"
        },
        "content": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Message', ``, 'string') }}",
        "options": {}
      },
      "type": "n8n-nodes-base.discordTool",
      "typeVersion": 2,
      "position": [
        -480,
        80
      ],
      "id": "bc1334cc-99f4-4d49-8965-b75cf696108e",
      "name": "Discord Tool (SendMessage)",
      "webhookId": "1b09957d-2e44-4847-b44e-e847fd32d718",
      "credentials": {
        "discordOAuth2Api": {
          "id": "D8HCk3nkxyu0a0Q7",
          "name": "Discord account"
        }
      }
    },
    {
      "parameters": {
        "toolDescription": "Makes an HTTP request and returns the response data in markdown format",
        "url": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequestTool",
      "typeVersion": 4.2,
      "position": [
        -736,
        0
      ],
      "id": "a743dd3c-917e-4f6b-b77e-3cfc43ed1cec",
      "name": "Web Tool"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.chatInput }}",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 2.2,
      "position": [
        -848,
        -368
      ],
      "id": "fb5cc223-5fbe-4b77-9239-4951c1661053",
      "name": "AI Agent1"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1,
      "position": [
        -880,
        0
      ],
      "id": "7ce81145-243d-418c-b023-c0adcd8ee054",
      "name": "Google Gemini Chat Model2",
      "credentials": {
        "googlePalmApi": {
          "id": "BBUQm5XBDdXPDBV0",
          "name": "Google Gemini(PaLM) Api account"
        }
      }
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.3,
      "position": [
        -1072,
        -368
      ],
      "id": "65726ec4-961b-4831-abc2-c3f868068de6",
      "name": "When chat message received",
      "webhookId": "cca1dc75-7d65-497c-9306-72568cc6e358"
    },
    {
      "parameters": {
        "model": "mistral-large-latest",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
      "typeVersion": 1,
      "position": [
        -624,
        96
      ],
      "id": "0af0793a-cdbc-4e19-91d8-4f6810058f5d",
      "name": "Mistral AI",
      "credentials": {
        "mistralCloudApi": {
          "id": "9b5FpoRi3lT9uokC",
          "name": "Mistral Cloud account"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Specialized agent (Discord)": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Discord Tool (SendMessage)": {
      "ai_tool": [
        [
          {
            "node": "Specialized agent (Discord)",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Web Tool": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Google Gemini Chat Model2": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent1": {
      "main": [
        []
      ]
    },
    "Mistral AI": {
      "ai_languageModel": [
        [
          {
            "node": "Specialized agent (Discord)",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "44782a70-8bf9-4d5b-9945-cc96b7ecb51b",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "714b8a65be991cccf9b958d49198165beb455e4d7a9185677f8ee711a6555f4c"
  },
  "id": "1J1yBNrmDXWxBB6E",
  "tags": []
}
```
:::


## 📖 Further readings

* [The Yoga of Image Generation – Part 1](https://blog.worldline.tech/2025/02/11/sd-comfyui-part1.html)
* [The Yoga of Image Generation – Part 2](https://blog.worldline.tech/2025/04/14/sd-comfyui-part2.html)
* [The Yoga of Image Generation – Part 3](https://blog.worldline.tech/2025/06/24/sd-comfyui-part3.html)
* [Relay.ai](https://www.relay.app/?_sm_vck=Jq0QMVqMPr7RtrJHNJ3ZSFfj0H0P2ns56Nr2snrMQD3MVq7vrMwQ)
* [Make.com](https://www.make.com/en)
* [n8n](https://n8n.io/)
* [Flowise](https://flowiseai.com/) 