# Introduction

::: warning
 LLMs and MMLLMs are constantly evolving, and new applications for developer training are emerging all the time.
:::

## Prerequisites

#### **Shell Command Line Skills:**

The AI should include support for providing guidance on using shell commands, navigating file systems, and executing command-line operations across different operating systems.

#### **Understanding of HTTP and API:**

Proficiency in HTTP protocol, RESTful API concepts, and web service integration is crucial for the AI to provide support on API design, consumption, and troubleshooting common API-related issues.

#### **Basic Cloud Knowledge:**

Understanding of cloud computing principles, including basic concepts of cloud infrastructure, services, and deployment models, will enable the AI to offer guidance on cloud-based development, deployment, and best practices.

::: warning
Additionnaly, **Request Worldline librechat access:** send a mail at  [Generative AI Taskforce email](mailto:GenAITaskforce@worldline.com)

There is a dedicated sharepoint for basic general assistant quick start at Worldline : [LibreChat Worldline guides](https://worldline365.sharepoint.com/:u:/r/sites/GenerativeAIQA/SitePages/LibreChat-guides.aspx?csf=1&web=1&e=evKJpU)
:::

## Generative AI ?

<Mermaid :value="`
graph TD
subgraph ML[MACHINE LEARNING]
  subgraph DL[DEEP LEARNING]
    subgraph NN[NEURAL NETWORKS]
      subgraph NLP[NLP]
        subgraph LLM[LLM]
          MM[MultiModal:
          GPT-4V
          Claude 3
          DALL-E
          LLaVa]
          M[Models:
          GPT-1/4, BERT
          T5, Claude
          LaMDA, PaLM]
        end
        T[Techniques:
        Tokenization
        Word Embeddings
        Attention, NER]
      end
      TY[Types:
      Perceptron, MLP
      Feedforward
      Backpropagation]
    end
    A[Architectures:
    CNN, RNN, LSTM
    Transformers, GANs
    Autoencoders]
  end
  CT[Classical Techniques:
  SVM, Random Forest
  Linear Regression
  K-Means, Decision Trees]
end
classDef white fill:#ffffff,stroke:#1565c0,stroke-width:2px,color:#000
classDef level1 fill:#ffffff,stroke:#0d47a1,stroke-width:3px,color:#000
classDef level2 fill:#ffffff,stroke:#1976d2,stroke-width:2px,color:#000
classDef level3 fill:#ffffff,stroke:#1976d2,stroke-width:2px,color:#000
classDef level4 fill:#ffffff,stroke:#42a5f5,stroke-width:2px,color:#000
classDef level5 fill:#ffffff,stroke:#64b5f6,stroke-width:2px,color:#000
class ML level1
class DL level2
class NN level3
class NLP level4
class LLM level5
class MM,M,T,TY,A,CT white
`" />

#### Machine Learning (ML)

Machine Learning is a subset of AI that focuses on training algorithms to learn from data and make predictions or decisions without explicit programming. ML powers many AI applications, including image recognition, natural language processing, and predictive analytics.

#### Deep Learning (DL)

Deep Learning is a type of ML that uses artificial neural networks with multiple layers to learn complex patterns from data.DL has revolutionized fields like computer vision, speech recognition, and machine translation.

### Neural Network

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
Example : ChatGPT, Bard, Claude, Gemini, Llama 2, Mistral, etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iR2O2GPbB0E" title="What are Large Language Models (LLMs)? by Google for developpers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*What are Large Language Models (LLMs)? by Google for developpers*

#### Multi-Modal LLM (MMLLM)

Multi-Modal Large Language Model is an advanced LLM that can process and generate both text and other data formats like images, audio, or video.
Ex:  DALL-E 2, Stable Diffusion (for image generation)

## Key Concepts

#### Transformers

Transformers are a type of neural network architecture that have revolutionized the field of NLP. They are based on the idea of self-attention, which allows the model to focus on different parts of the input sequence when making predictions. This makes them particularly effective for tasks like machine translation and text summarization.

You can have a look to a visual model of a transformer [here](https://jalammar.github.io/illustrated-transformer/).


#### Learners 

* **Language Models are Unsupervised Multitask Learners** by Radford et al. (2019): This paper introduced the GPT-3 architecture, which is the foundation of most 
modern LLMs.  

Learners are the core component of LLMs. They are trained on large amounts of text data to learn patterns and relationships between words, phrases, and sentences. 
Their ability to understand and generate human-like text makes them a powerful tool for a wide range of applications, from language translation 
to creative writing and even generating coherent stories.

#### **RAG: Retrieval Augmented Generation**

RAG (Retrieval Augmented Generation) is a powerful technique in the field of Natural Language Processing (NLP) that combines the best of both worlds: information retrieval and language generation.

* The system first retrieves relevant information from a vast knowledge base (often a database or a set of documents) based on the user's query or prompt.
* This retrieved information is then used to augment the language model's input, providing it with more context and specific facts.
* Finally, the language model uses this augmented input to generate a more comprehensive and informative response, leveraging both its knowledge base and its language generation capabilities.

#### **Prompt**

A specific set of instructions or questions given to an LLM to guide its response. Well-crafted prompts are crucial for getting accurate and relevant output from LLMs.
Ex :  "Write a Python function to check if a string is a palindrome."

#### **Token**

The smallest unit of meaning processed by an LLM.  Tokens can be words, parts of words, punctuation marks, or special characters. LLMs process text by analyzing sequences of tokens, making it important to understand how they are broken down.
Ex : The sentence "I love programming" would be split into the following tokens: "I", "love", "programming".

#### **Temperature**

A parameter in some LLMs that controls the randomness or creativity of the generated text. Adjust temperature based on the desired level of creativity or accuracy in the LLM's output.

* A higher temperature generate more randomness and unpredictability in the output.
* A lower temperature generate more predictable and coherent output.

#### **Vector Database**

A vector database is a specialized database designed to store and retrieve high-dimensional vectors efficiently. It is particularly useful for applications involving similarity search, such as image recognition, recommendation systems, and natural language processing.

You can have a look to a 3D model of a vector database [here](https://projector.tensorflow.org).



## A bit of History

AI's history has been marked by periods of progress and setbacks. Computing power, data availability, and algorithmic advancements have played crucial roles in AI's evolution. AI is no longer limited to expert systems but encompasses a wide range of techniques and applications.

* **1950:** Alan Turing proposes the "Turing Test" to assess machine intelligence.

During the turing test, the human questioner asks a series of questions to both respondantes. After the specified time, the questionner tries to decide which terminal is operated bu the human respondant and which terminal is operated by the computer.

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

## The market

 #### Gen AI app landscape

### Ecosystem of Generative AI Applications (2025)

#### Layer 1: Application Layer

##### Copywriting
| Name             | Description                     |
|------------------|---------------------------------|
| Jasper           | Versatile AI assistant          |
| copy.ai          | Content generation              |
| Headline         | Headline creation               |
| Co:here          | NLP platform                    |
| HyperWrite       | Assisted writing                |
| Writesonic       | Marketing content creation      |
| Contenda         | Content automation              |
| Unbounce         | Optimized landing pages        |
| Copysmith        | Text generation                 |

##### Coding
| Name               | Description                                  |
|--------------------|----------------------------------------------|
| tabnine            | Code autocompletion                         |
| MUTABLE AI        | Code generation                              |
| Codiga             | Development tools                            |
| co:here            | NLP for code                                |
| GitHub Copilot   | Programming assistance                        |
| CODEGEN            | AI code generation                           |

##### Dev Tools
| Name              | Description                                            |
|-------------------|--------------------------------------------------------|
| algolia          | AI-powered search engine                                |
| warp             | AI terminal editor                                    |
| Mintlify         | Smart documentation                                   |
| cogram           | SQL query automation                                  |
| Debuild          | API and backend generation                              |
| replit           | Cloud-based coding platform                             |

##### Chat / Communications
| Name             | Description                                |
|------------------|--------------------------------------------|
| MessageBird      | AI messaging platform                     |
| Replier.ai       | Automated responses                        |
| Sapling          | Communication assistant                     |
| FABLE            | Conversational chatbot                      |

##### Business Operations
| Name           | Description                             |
|----------------|----------------------------------------|
| viable         | Process automation                     |
| Enterprnt     | AI business platform                     |
| tabulate       | Spreadsheet automation                     |
| Anecdote       | Storytelling generation                    |
| OTHERSIDE AI | Diverse business AI tools                     |
| casetext       | Legal research AI                            |
| Dover          | Administrative automation                    |

#### Layer 2: Infrastructure Layer

##### Model Creation
| Name            | Description                                  |
|-----------------|----------------------------------------------|
| AI21 Labs       | Advanced NLP models                         |
| OpenAI          | GPT, DALL·E, etc.                            |
| EleutherAI      | Open-source alternatives                     |
| NVIDIA          | AI hardware solutions                         |
| ADEPT           | AI research                                   |
| Google AI       | Advanced models from Google                   |
| ANTHROPIC      | Language & AI models                           |

##### Hardware
| Name            | Description                          |
|-----------------|-------------------------------------|
| habana          | Habana AI accelerators               |
| SambaNova       | Data center AI chips                |
| NVIDIA          | GPU and infrastructure                |
| cerebras        | High-performance AI chips             |
| Graphcore       | AI-specific processors               |

##### Fine Tuning
| Name            | Description                                      |
|-----------------|-------------------------------------------------|
| Google AI       | Model fine-tuning                                    |
| AWS             | Cloud infrastructure for fine-tuning             |
| OpenAI         | GPT model fine-tuning                                |
| Hugging Face    | Model platform & fine-tuning                      |

##### Inference
| Name            | Description                                   |
|-----------------|----------------------------------------------|
| OpenAI        | API inference service                          |
| Hugging Face  | Inference platform                                |

### Top 50 Generative AI applications

| Rang | Application | Plateforme | Lien |
|-------|--------------|--------------|-------|
| 1 | ChatGPT | Web, Mobile | [Lien](https://chat.openai.com/) |
| 2 | ChatGPT API | API | [Lien](https://platform.openai.com/api-keys) |
| 3 | Jasper | Web, Mac, Windows | [Lien](https://www.jasper.ai/) |
| 4 | Bard (Google) | Web, Mobile | [Lien](https://bard.google.com/) |
| 5 | Claude (Anthropic) | Web | [Lien](https://claude.ai/) |
| 6 | Bing Chat | Web | [Lien](https://www.bing.com/new) |
| 7 | Midjourney | Web | [Lien](https://www.midjourney.com/) |
| 8 | Stable Diffusion | Web, Local | [Lien](https://stablediffusionweb.com/) |
| 9 | Lensa AI | Mobile (iOS/Android) | [Lien](https://apps.apple.com/us/app/lensa-ai-photo-editor/id868133423) |
| 10 | Canva Image Generator | Web, Mobile | [Lien](https://www.canva.com/) |
| 11 | Adobe Firefly | Web | [Lien](https://helpx.adobe.com/firefly.html) |
| 12 | Runway ML | Web, Mac, Windows | [Lien](https://runwayml.com/) |
| 13 | DALL·E 2 | Web | [Lien](https://openai.com/dall-e-2/) |
| 14 | Copy.ai | Web | [Lien](https://www.copy.ai/) |
| 15 | Writesonic | Web | [Lien](https://writesonic.com/) |
| 16 | Tome | Web | [Lien](https://tome.app/) |
| 17 | Podcast.ai | Mobile, Web | [Lien](https://podcast.ai/) |
| 18 | Beeble AI | Mobile | [Lien](https://apps.apple.com/us/app/beeble-ai/id1603442934) |
| 19 | Jasper Art | Web | [Lien](https://www.jasper.ai/art) |
| 20 | Wonder Studio | Web | [Lien](https://wonderstudio.com/) |
| 21 | Deep Nostalgia | Web, Mobile | [Lien](https://myheritage.com/deep-nostalgia) |
| 22 | CopySmith | Web | [Lien](https://copysmith.ai/) |
| 23 | Nebula Cloud | Web | [Lien](https://nebulacloud.ai/) |
| 24 | Synthesia | Web, Mobile | [Lien](https://www.synthesia.io/) |
| 25 | Rosebud AI | Web | [Lien](https://rosebud.ai/) |
| 26 | DeepBrain | Web | [Lien](https://www.deepbrain.io/) |
| 27 | Prisma Labs | Android, iOS | [Lien](https://prisma-ai.com/) |
| 28 | Jasper Chat | Web | [Lien](https://www.jasper.ai/chat) |
| 29 | Maverick | Web | [Lien](https://www.maverick.ai/) |
| 30 | Syntha | Web | [Lien](https://syntha.ai/) |
| 31 | Ditto | Web | [Lien](https://ditto.com/) |
| 32 | System1 | Web | [Lien](https://system1.com/) |
| 33 | Waifu Diffusion | Web | [Lien](https://waifulabs.com/) |
| 34 | Artbreeder | Web | [Lien](https://www.artbreeder.com/) |
| 35 | Pixray | Web | [Lien](https://pxray.readthedocs.io/en/latest/) |
| 36 | Dream by Wombo | iOS, Android | [Lien](https://www.wombo.art/) |
| 37 | NightCafe | Web, iOS, Android | [Lien](https://creator.nightcafe.studio/) |
| 38 | Artbreeder | Web | [Lien](https://www.artbreeder.com/) |
| 39 | Deep Dream Generator | Web | [Lien](https://deepdreamgenerator.com/) |
| 40 | StarryAI | iOS, Android | [Lien](https://starryai.com/) |
| 41 | Artify | Web | [Lien](https://artify.com/) |
| 42 | Wombo Dream | Web, iOS, Android | [Lien](https://www.wombo.art/) |
| 43 | DeepAI | Web | [Lien](https://deepai.org/) |
| 44 | ArtSmart | Web | [Lien](https://artsmart.ai/) |
| 45 | Pixilart | Web, Mobile | [Lien](https://www.pixilart.com/) |
| 46 | Runway Gen-2 | Web | [Lien](https://runwayml.com/) |
| 47 | PaintsChainer | Web | [Lien](https://paintschainer.preferred.tech/index_en.html) |
| 48 | Dreamstudio | Web | [Lien](https://beta.dreamstudio.ai/) |
| 49 | Artify | Web | [Lien](https://artify.com/) |
| 50 | Deep Dream Generator | Web | [Lien](https://deepdreamgenerator.com/) |



## 🧪 Exercises

<div>
    <h3>1. LLMs and MMLLMs are constantly evolving.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>2. Multi-Modal LLMs can process and generate only text data.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>3. Which of the following are examples of Machine Learning applications?</h3>
    <label><input type="checkbox" /> Image recognition</label><br />
    <label><input type="checkbox" /> Natural language processing</label><br />
    <label><input type="checkbox" /> Cloud deployment</label><br />
    <label><input type="checkbox" /> Shell scripting</label>
    <h3>4. Deep Learning uses artificial neural networks with multiple layers.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>5. Natural Language Processing (NLP) includes which of the following?</h3>
    <label><input type="checkbox" /> Text Analysis</label><br />
    <label><input type="checkbox" /> Language Understanding</label><br />
    <label><input type="checkbox" /> Cloud Computing</label><br />
    <label><input type="checkbox" /> Shell Commands</label>
    <h3>6. RAG stands for Retrieval Augmented Generation.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>7. LLMs can only generate text and cannot understand it.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>8. Which of the following is NOT a type of Machine Learning?</h3>
    <label><input type="checkbox" /> Supervised Learning</label><br />
    <label><input type="checkbox" /> Unsupervised Learning</label><br />
    <label><input type="checkbox" /> Reinforcement Learning</label><br />
    <label><input type="checkbox" /> Predictive Learning</label>
    <h3>9. Deep Learning models require less data than traditional Machine Learning models.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>10. Natural Language Processing can be used for sentiment analysis.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>11. Which of the following are common applications of Deep Learning?</h3>
    <label><input type="checkbox" /> Image Classification</label><br />
    <label><input type="checkbox" /> Speech Recognition</label><br />
    <label><input type="checkbox" /> Data Entry Automation</label><br />
    <label><input type="checkbox" /> Fraud Detection</label>
    <h3>12. RAG can improve the accuracy of responses generated by LLMs.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>13. Which of the following is a benefit of using Cloud Computing for AI?</h3>
    <label><input type="checkbox" /> Scalability</label><br />
    <label><input type="checkbox" /> Cost Efficiency</label><br />
    <label><input type="checkbox" /> Limited Accessibility</label><br />
    <label><input type="checkbox" /> Enhanced Security</label>
    <h3>14. The Turing Test is designed to evaluate a machine's ability to exhibit intelligent behavior.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>15. Multi-Modal LLMs can only process text and images.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" /> False</label>
    </div>

::: details Solution

<div>
    <h3>1. LLMs and MMLLMs are constantly evolving.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>2. Multi-Modal LLMs can process and generate only text data.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" checked /> False</label>
    <h3>3. Which of the following are examples of Machine Learning applications?</h3>
    <label><input type="checkbox" checked /> Image recognition</label><br />
    <label><input type="checkbox" checked /> Natural language processing</label><br />
    <label><input type="checkbox" /> Cloud deployment</label><br />
    <label><input type="checkbox" /> Shell scripting</label>
    <h3>4. Deep Learning uses artificial neural networks with multiple layers.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>5. Natural Language Processing (NLP) includes which of the following?</h3>
    <label><input type="checkbox" checked /> Text Analysis</label><br />
    <label><input type="checkbox" checked /> Language Understanding</label><br />
    <label><input type="checkbox" /> Cloud Computing</label><br />
    <label><input type="checkbox" /> Shell Commands</label>
    <h3>6. RAG stands for Retrieval Augmented Generation.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>7. LLMs can only generate text and cannot understand it.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" checked /> False</label>
    <h3>8. Which of the following is NOT a type of Machine Learning?</h3>
    <label><input type="checkbox" /> Supervised Learning</label><br />
    <label><input type="checkbox" /> Unsupervised Learning</label><br />
    <label><input type="checkbox" /> Reinforcement Learning</label><br />
    <label><input type="checkbox" checked /> Predictive Learning</label>
    <h3>9. Deep Learning models require less data than traditional Machine Learning models.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" checked /> False</label>
    <h3>10. Natural Language Processing can be used for sentiment analysis.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>11. Which of the following are common applications of Deep Learning?</h3>
    <label><input type="checkbox" checked /> Image Classification</label><br />
    <label><input type="checkbox" checked /> Speech Recognition</label><br />
    <label><input type="checkbox" /> Data Entry Automation</label><br />
    <label><input type="checkbox" checked /> Fraud Detection</label>
    <h3>12. RAG can improve the accuracy of responses generated by LLMs.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>13. Which of the following is a benefit of using Cloud Computing for AI?</h3>
    <label><input type="checkbox" checked /> Scalability</label><br />
    <label><input type="checkbox" checked /> Cost Efficiency</label><br />
    <label><input type="checkbox" /> Limited Accessibility</label><br />
    <label><input type="checkbox" /> Enhanced Security</label>
    <h3>14. The Turing Test is designed to evaluate a machine's ability to exhibit intelligent behavior.</h3>
    <label><input type="checkbox" checked /> True</label><br />
    <label><input type="checkbox" /> False</label>
    <h3>15. Multi-Modal LLMs can only process text and images.</h3>
    <label><input type="checkbox" /> True</label><br />
    <label><input type="checkbox" checked /> False</label>
</div>

:::

## 📖 Further readings

* [Generative AI Taskforce mailing-list](mailto:GenAITaskforce@worldline.com)
* [GRS mailing-list](mailto:dl-wl-cto-grs-ai@worldline.com)
* [Top 100 GenAI](https://a16z.com/100-gen-ai-apps/)
