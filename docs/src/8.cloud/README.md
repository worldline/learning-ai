# GenAI in the Cloud 

Google Cloud is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs, such as Vertex AI, Google Colab, and ML Flow.

Globally Vertex products are supported by the developper branch of Google, and Gemini is supported by ML teams of Google.

## Large Consumer-Facing

-**[Gemini:](https://gemini.google.com/)** Google's large language model (LLM), positioned as a competitor to OpenAI's GPT models. Gemini's capabilities are integrated into various Google products and services, and are also accessible through APIs. Different versions of Gemini (e.g., Gemini Pro, Gemini Ultra) offer varying levels of capability and access. It powers several consumer-facing features across Google's ecosystem.

-**[AI Studio:](https://aistudio.google.com/)** Cloud-based machine learning platform offered by several companies, most notably Google with its Google AI Studio (now Vertex AI Studio). It provides APIs for leading foundation models, and tools to rapidly prototype, easily tune models with your own data, and seamlessly deploy to applications.

## Vertex AI

This is the central hub for most Google Cloud's AI/ML services. It integrates and supersedes many previous offerings.

-**Custom Training:** Training machine learning models using various algorithms and frameworks (TensorFlow, PyTorch, scikit-learn, XGBoost, etc.). Provides access to managed compute instances (including TPUs).

-**Prediction:** Deploying trained models for inference (making predictions). Offers different deployment options based on scale and latency requirements.

-**Pipelines:** Creating and managing machine learning workflows, including data preprocessing, model training, evaluation, and deployment, as a series of connected steps.

-**Model Monitoring:** Monitoring deployed models for performance degradation and potential issues (drift).

-**Feature Store:** Centralized repository for storing, managing, and versioning features used in machine learning models, improving collaboration and reuse.

- ...

## Google Cloud APIs

Pre-trained Models and APIs: Google offers numerous pre-trained models and APIs for various tasks, making it easier to integrate AI into applications without building models from scratch. Examples include:

-**Natural Language:** Processing and understanding text (sentiment analysis, entity recognition, etc.).

-**Vision:** Analyzing images (object detection, image classification, optical character recognition, etc.).

-**Speech-to-Text:** Converting audio to text.

-**Text-to-Speech:** Converting text to audio.

-**Translation API:** Translating text between languages.

- ...

## Specialized AI Products

Beyond the core platform and APIs, Google offers several specialized AI products:

-**TensorFlow:** A popular open-source machine learning framework developed by Google. While not strictly a "Google Cloud" product, it's deeply integrated with their services.

-**Dialogflow:** A conversational AI platform for building complex conversational experiences.

- ...


## Collaborative (Hugging Face)

The platform where the machine learning community collaborates on models, datasets, and applications.

Hugging Face is a platform for researchers and developers to share, explore, and build AI models. It provides a centralized repository for models, datasets, and applications, making it easy to find, use, and contribute to the growing ecosystem of AI technologies.

- Creating/deploy/customize a model
- Pre-trained model, use behind the APIs, also a ML part, training model generation for use


## Manage models (ML Flow)

MLflow provides tools for managing experiments, tracking model versions, deploying models to various environments, and managing models in a central registry. It's designed to be platform-agnostic, meaning it can work with many different cloud providers and even on-premises infrastructure.

## 🧪 Exercises

#### Exercise 1 - Fork and deploy a model in Vertex AI

* Fork and deploy a model
* Train a simple model
* Create a simple chatbot application with your instance

#### Exercise 2 - Use a pre-trained model with Hugging Face

* Use a pre-trained model of worldline fraud detection model

#### Exercice 3 -Create a model registry in Google Cloud instance

1. Create a model registry in Google Cloud instance
2. Create a model in the registry
3. Deploy the model to Google Cloud instance
