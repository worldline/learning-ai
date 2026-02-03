import{by as i,bz as n,bB as o,bC as r,bA as t,bE as s,bF as l}from"./app-DmbIGF3-.js";const d={};function c(p,e){const a=s("Mermaid");return l(),n("div",null,[e[0]||(e[0]=o("h1",{id:"agentic-ai-on-the-cloud",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#agentic-ai-on-the-cloud"},[o("span",null,"(Agentic AI on the cloud)")])],-1)),e[1]||(e[1]=o("p",null,"Google Cloud is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs, such as Vertex AI, Google Colab, and ML Flow.",-1)),e[2]||(e[2]=o("p",null,"Globally Vertex products are supported by the developper branch of Google, and Gemini is supported by ML teams of Google.",-1)),r(a,{value:`
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
`}),e[3]||(e[3]=t('<h2 id="large-consumer-facing" tabindex="-1"><a class="header-anchor" href="#large-consumer-facing"><span>Large Consumer-Facing</span></a></h2><p>-<strong><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Gemini:</a></strong> Google&#39;s large language model (LLM), positioned as a competitor to OpenAI&#39;s GPT models. Gemini&#39;s capabilities are integrated into various Google products and services, and are also accessible through APIs. Different versions of Gemini (e.g., Gemini Pro, Gemini Ultra) offer varying levels of capability and access. It powers several consumer-facing features across Google&#39;s ecosystem.</p><p>-<strong><a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer">AI Studio:</a></strong> Cloud-based machine learning platform offered by several companies, most notably Google with its Google AI Studio (now Vertex AI Studio). It provides APIs for leading foundation models, and tools to rapidly prototype, easily tune models with your own data, and seamlessly deploy to applications.</p><h2 id="vertex-ai" tabindex="-1"><a class="header-anchor" href="#vertex-ai"><span>Vertex AI</span></a></h2><p>This is the central hub for most Google Cloud&#39;s AI/ML services. It integrates and supersedes many previous offerings.</p><p>-<strong>Custom Training:</strong> Training machine learning models using various algorithms and frameworks (TensorFlow, PyTorch, scikit-learn, XGBoost, etc.). Provides access to managed compute instances (including TPUs).</p><p>-<strong>Prediction:</strong> Deploying trained models for inference (making predictions). Offers different deployment options based on scale and latency requirements.</p><p>-<strong>Pipelines:</strong> Creating and managing machine learning workflows, including data preprocessing, model training, evaluation, and deployment, as a series of connected steps.</p><p>-<strong>Model Monitoring:</strong> Monitoring deployed models for performance degradation and potential issues (drift).</p><p>-<strong>Feature Store:</strong> Centralized repository for storing, managing, and versioning features used in machine learning models, improving collaboration and reuse.</p><ul><li>...</li></ul><h2 id="google-cloud-apis" tabindex="-1"><a class="header-anchor" href="#google-cloud-apis"><span>Google Cloud APIs</span></a></h2><p>Pre-trained Models and APIs: Google offers numerous pre-trained models and APIs for various tasks, making it easier to integrate AI into applications without building models from scratch. Examples include:</p><p>-<strong>Natural Language:</strong> Processing and understanding text (sentiment analysis, entity recognition, etc.).</p><p>-<strong>Vision:</strong> Analyzing images (object detection, image classification, optical character recognition, etc.).</p><p>-<strong>Speech-to-Text:</strong> Converting audio to text.</p><p>-<strong>Text-to-Speech:</strong> Converting text to audio.</p><p>-<strong>Translation API:</strong> Translating text between languages.</p><ul><li>...</li></ul><h2 id="specialized-ai-products" tabindex="-1"><a class="header-anchor" href="#specialized-ai-products"><span>Specialized AI Products</span></a></h2><p>Beyond the core platform and APIs, Google offers several specialized AI products:</p><p>-<strong>TensorFlow:</strong> A popular open-source machine learning framework developed by Google. While not strictly a &quot;Google Cloud&quot; product, it&#39;s deeply integrated with their services.</p><p>-<strong>Dialogflow:</strong> A conversational AI platform for building complex conversational experiences.</p><ul><li>...</li></ul><h2 id="collaborative-hugging-face" tabindex="-1"><a class="header-anchor" href="#collaborative-hugging-face"><span>Collaborative (Hugging Face)</span></a></h2><p>The platform where the machine learning community collaborates on models, datasets, and applications.</p><p>Hugging Face is a platform for researchers and developers to share, explore, and build AI models. It provides a centralized repository for models, datasets, and applications, making it easy to find, use, and contribute to the growing ecosystem of AI technologies.</p><ul><li>Creating/deploy/customize a model</li><li>Pre-trained model, use behind the APIs, also a ML part, training model generation for use</li></ul><h2 id="manage-models-ml-flow" tabindex="-1"><a class="header-anchor" href="#manage-models-ml-flow"><span>Manage models (ML Flow)</span></a></h2><p>MLflow provides tools for managing experiments, tracking model versions, deploying models to various environments, and managing models in a central registry. It&#39;s designed to be platform-agnostic, meaning it can work with many different cloud providers and even on-premises infrastructure.</p><h2 id="🧪-exercises" tabindex="-1"><a class="header-anchor" href="#🧪-exercises"><span>🧪 Exercises</span></a></h2><h4 id="exercise-1-fork-and-deploy-a-model-in-vertex-ai" tabindex="-1"><a class="header-anchor" href="#exercise-1-fork-and-deploy-a-model-in-vertex-ai"><span>Exercise 1 - Fork and deploy a model in Vertex AI</span></a></h4><ul><li>Fork and deploy a model</li><li>Train a simple model</li><li>Create a simple chatbot application with your instance</li></ul><h4 id="exercise-2-use-a-pre-trained-model-with-hugging-face" tabindex="-1"><a class="header-anchor" href="#exercise-2-use-a-pre-trained-model-with-hugging-face"><span>Exercise 2 - Use a pre-trained model with Hugging Face</span></a></h4><ul><li>Use a pre-trained model of worldline fraud detection model</li></ul><h4 id="exercice-3-create-a-model-registry-in-google-cloud-instance" tabindex="-1"><a class="header-anchor" href="#exercice-3-create-a-model-registry-in-google-cloud-instance"><span>Exercice 3 -Create a model registry in Google Cloud instance</span></a></h4><ol><li>Create a model registry in Google Cloud instance</li><li>Create a model in the registry</li><li>Deploy the model to Google Cloud instance</li></ol>',37))])}const m=i(d,[["render",c]]),A=JSON.parse('{"path":"/8.cloud/","title":"(Agentic AI on the cloud)","lang":"en-US","frontmatter":{"description":"(Agentic AI on the cloud) Google Cloud is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs,...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"(Agentic AI on the cloud)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-16T11:34:05.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://worldline.github.io/learning-ai/learning-ai/8.cloud/"}],["meta",{"property":"og:title","content":"(Agentic AI on the cloud)"}],["meta",{"property":"og:description","content":"(Agentic AI on the cloud) Google Cloud is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-12-16T11:34:05.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-16T11:34:05.000Z"}]]},"git":{"updatedTime":1765884845000,"contributors":[{"name":"Brah","username":"Brah","email":"brah.gharbi@gmail.com","commits":4,"url":"https://github.com/Brah"}],"changelog":[{"hash":"d168b510c3146c98f9dce9c549b5e31cd0f977af","time":1765884845000,"email":"brah.gharbi@gmail.com","author":"Brah","message":"last updates"},{"hash":"a549ea1e43467b2b45356b8fa6baff8e93550ef4","time":1752677721000,"email":"brah.gharbi@gmail.com","author":"Brah","message":"update with mermaid diagrams config"},{"hash":"42dd9e2b5e91cd318765455d92978ee04cac314f","time":1751636761000,"email":"brah.gharbi@gmail.com","author":"Brah","message":"update"},{"hash":"2d799747dfdf2759b2ebec625c433d5738895409","time":1751625745000,"email":"brah.gharbi@gmail.com","author":"Brah","message":"update structure ased on feedback, added practical work"}]},"filePathRelative":"8.cloud/README.md","autoDesc":true}');export{m as comp,A as data};
