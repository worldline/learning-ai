# (GenAI in the Cloud)

Google Cloud is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs, such as Vertex AI, Google Colab, and ML Flow.

Globally Vertex products are supported by the developper branch of Google, and Gemini is supported by ML teams of Google.

<Mermaid :value="`
graph TD
    %% Style definitions
    classDef consumerApp fill:#4285f4,stroke:#333,stroke-width:2px,color:#fff
    classDef apis fill:#9c27b0,stroke:#333,stroke-width:2px,color:#fff
    classDef geminiML fill:#ea4335,stroke:#333,stroke-width:2px,color:#fff
    classDef vertexDev fill:#0f9d58,stroke:#333,stroke-width:2px,color:#fff
    classDef tensorflow fill:#ff9800,stroke:#333,stroke-width:2px,color:#fff
    %% Applications Grand Public - Niveau le plus applicatif au sommet
    subgraph Applications Grand Public
        GSEARCH[Google Search AI]:::consumerApp
        GASSIST[Google Assistant]:::consumerApp
        GPHOTOS[Google Photos AI]:::consumerApp
        GMAIL[Gmail Smart Compose]:::consumerApp
        GTRANS[Google Translate]:::consumerApp
        GLENS[Google Lens]:::consumerApp
        BARD[Bard Gemini Chat]:::consumerApp
        GSEARCH ~~~ GASSIST
        GASSIST ~~~ GPHOTOS
        GPHOTOS ~~~ GMAIL
        GMAIL ~~~ GTRANS
        GTRANS ~~~ GLENS
        GLENS ~~~ BARD
    end
    %% APIs and Pre-trained Models
    subgraph APIs and Pre-trained Models
        NLAPI[Natural Language API]:::apis
        VAPI[Vision API]:::apis
        STTAPI[Speech-to-Text API]:::apis
        TTSAPI[Text-to-Speech API]:::apis
        TRANSAPI[Translation API]:::apis
        DOCAI[Document AI]:::apis
        VIDAPI[Video Intelligence API]:::apis
        AUTOML[AutoML Tables]:::apis
        DFCX[Dialogflow CX]:::apis
        DFES[Dialogflow ES]:::apis
        CCAI[Contact Center AI]:::apis
        RECAI[Recommendations AI]:::apis
        RETAI[Retail AI]:::apis
        HEALTHAI[Healthcare AI]:::apis
        MEDTRANS[Media Translation]:::apis
        NLAPI ~~~ VAPI
        VAPI ~~~ STTAPI
        STTAPI ~~~ TTSAPI
        TTSAPI ~~~ TRANSAPI
        TRANSAPI ~~~ DOCAI
        DOCAI ~~~ VIDAPI
        VIDAPI ~~~ AUTOML
        AUTOML ~~~ DFCX
        DFCX ~~~ DFES
        DFES ~~~ CCAI
        CCAI ~~~ RECAI
        RECAI ~~~ RETAI
        RETAI ~~~ HEALTHAI
        HEALTHAI ~~~ MEDTRANS
    end
    %% Gemini Branch - ML Teams
    subgraph Gemini - ML Teams
        GU[Gemini Ultra]:::geminiML
        GP[Gemini Pro]:::geminiML  
        GN[Gemini Nano]:::geminiML
        AIS[AI Studio]:::geminiML
        GWS[Gemini for Google Workspace]:::geminiML
        GCA[Gemini Code Assist]:::geminiML 
        GU ~~~ GP
        GP ~~~ GN
        GN ~~~ AIS
        AIS ~~~ GWS
        GWS ~~~ GCA
    end
    %% Vertex AI Branch - Developers
    subgraph Vertex AI - Developers
        VAS[Vertex AI Studio]:::vertexDev
        VAW[Vertex AI Workbench]:::vertexDev
        VAP[Vertex AI Pipelines]:::vertexDev
        VAMG[Vertex AI Model Garden]:::vertexDev
        VAFS[Vertex AI Feature Store]:::vertexDev
        VAME[Vertex AI Matching Engine]:::vertexDev
        VAE[Vertex AI Experiments]:::vertexDev
        VAPRED[Vertex AI Predictions]:::vertexDev
        VAT[Vertex AI Training]:::vertexDev
        VAM[Vertex AI Monitoring]:::vertexDev
        VAEX[Vertex AI Explainable AI]:::vertexDev
        COLAB[Google Colab]:::vertexDev
        COLABENT[Colab Enterprise]:::vertexDev
        VAS ~~~ VAW
        VAW ~~~ VAP
        VAP ~~~ VAMG
        VAMG ~~~ VAFS
        VAFS ~~~ VAME
        VAME ~~~ VAE
        VAE ~~~ VAPRED
        VAPRED ~~~ VAT
        VAT ~~~ VAM
        VAM ~~~ VAEX
        VAEX ~~~ COLAB
        COLAB ~~~ COLABENT
    end
    %% TensorFlow Layer - Base du diagramme
    subgraph TensorFlow Layer
        TF[TensorFlow]:::tensorflow
        TFL[TensorFlow Lite]:::tensorflow
        TFJS[TensorFlow.js]:::tensorflow
        JAX[JAX]:::tensorflow
        KERAS[Keras]:::tensorflow
        TB[TensorBoard]:::tensorflow
        TF ~~~ TFL
        TFL ~~~ TFJS
        TFJS ~~~ JAX
        JAX ~~~ KERAS
        KERAS ~~~ TB
    end
    %% Alignement vertical
    GSEARCH ~~~ NLAPI
    NLAPI ~~~ GU
    GU ~~~ VAS
    VAS ~~~ TF
`"/>

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
