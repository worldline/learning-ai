<template>
    <div class="rest-llm-tester">
        <div class="config-section">
            <h3>API Configuration</h3>
            <div class="config-inputs">
                <div class="input-group">
                    <label for="apiKey">API Key:</label>
                    <input id="apiKey" v-model="config.apiKey" type="password"
                        placeholder="Enter your Mistral AI API key" class="config-input" />
                </div>
                <div class="input-group">
                    <label for="baseUrl">Base URL:</label>
                    <input id="baseUrl" v-model="config.baseUrl" type="text" placeholder="https://api.mistral.ai"
                        class="config-input" />
                </div>
            </div>
        </div>

        <div class="endpoints-section">
            <h3>Available Endpoints</h3>

            <!-- List Models -->
            <div class="endpoint-card">
                <div class="endpoint-header">
                    <h4><span class="method get">GET</span> List Models</h4>
                    <p>Retrieve list of available models</p>
                </div>
                <button @click="testListModels" :disabled="!config.apiKey" class="test-button">
                    Test Endpoint
                </button>
            </div>

            <!-- Retrieve Model -->
            <div class="endpoint-card">
                <div class="endpoint-header">
                    <h4><span class="method get">GET</span> Retrieve Model</h4>
                    <p>Get details of a specific model</p>
                </div>
                <div class="input-group">
                    <label>Model ID:</label>
                    <input v-model="modelId" type="text" placeholder="open-mistral-7b" class="endpoint-input" />
                </div>
                <button @click="testRetrieveModel" :disabled="!config.apiKey || !modelId" class="test-button">
                    Test Endpoint
                </button>
            </div>

            <!-- Chat Completions -->
            <div class="endpoint-card">
                <div class="endpoint-header">
                    <h4><span class="method post">POST</span> Chat Completions</h4>
                    <p>Generate chat-based responses</p>
                </div>
                <div class="form-grid">
                    <div class="input-group">
                        <label>Model:</label>
                        <input v-model="chatRequest.model" type="text" placeholder="open-mistral-7b"
                            class="endpoint-input" />
                    </div>
                    <div class="input-group">
                        <label>Temperature:</label>
                        <input v-model.number="chatRequest.temperature" type="number" min="0" max="2" step="0.1"
                            class="endpoint-input" />
                    </div>
                    <div class="input-group">
                        <label>Max Tokens:</label>
                        <input v-model.number="chatRequest.max_tokens" type="number" min="1" class="endpoint-input" />
                    </div>
                    <div class="input-group">
                        <label>Top P:</label>
                        <input v-model.number="chatRequest.top_p" type="number" min="0" max="1" step="0.1"
                            class="endpoint-input" />
                    </div>
                </div>
                <div class="input-group">
                    <label>System Message:</label>
                    <textarea v-model="chatRequest.systemMessage" placeholder="You are a helpful assistant"
                        class="endpoint-textarea" rows="2"></textarea>
                </div>
                <div class="input-group">
                    <label>User Message:</label>
                    <textarea v-model="chatRequest.userMessage" placeholder="Hello, how are you?"
                        class="endpoint-textarea" rows="3"></textarea>
                </div>
                <button @click="testChatCompletions" :disabled="!config.apiKey || !chatRequest.userMessage"
                    class="test-button">
                    Test Endpoint
                </button>
            </div>

            <!-- Embeddings -->
            <div class="endpoint-card">
                <div class="endpoint-header">
                    <h4><span class="method post">POST</span> Embeddings</h4>
                    <p>Generate vector embeddings for text</p>
                </div>
                <div class="input-group">
                    <label>Model:</label>
                    <input v-model="embeddingRequest.model" type="text" placeholder="mistral-embed"
                        class="endpoint-input" />
                </div>
                <div class="input-group">
                    <label>Input Text:</label>
                    <textarea v-model="embeddingRequest.input" placeholder="Hello world" class="endpoint-textarea"
                        rows="2"></textarea>
                </div>
                <button @click="testEmbeddings" :disabled="!config.apiKey || !embeddingRequest.input"
                    class="test-button">
                    Test Endpoint
                </button>
            </div>
        </div>

        <!-- Console Output -->
        <div class="console-section">
            <div class="console-header">
                <h3>Output Console</h3>
                <button @click="clearConsole" class="clear-button">Clear</button>
            </div>
            <div class="console-output" ref="consoleOutput">
                <div v-for="(log, index) in consoleLogs" :key="index" :class="['console-log', log.type]">
                    <span class="timestamp">{{ log.timestamp }}</span>
                    <span class="method">{{ log.method }}</span>
                    <span class="url">{{ log.url }}</span>
                    <div class="log-content">{{ log.content }}</div>
                </div>
                <div v-if="consoleLogs.length === 0" class="console-empty">
                    Console output will appear here...
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'

// Configuration
const config = reactive({
    apiKey: '',
    baseUrl: 'https://api.mistral.ai'
})

// Model retrieval
const modelId = ref('open-mistral-7b')

// Chat completion request
const chatRequest = reactive({
    model: 'open-mistral-7b',
    temperature: 0.7,
    max_tokens: 100,
    top_p: 1,
    systemMessage: 'You are a helpful assistant.',
    userMessage: ''
})

// Embedding request
const embeddingRequest = reactive({
    model: 'mistral-embed',
    input: ''
})

// Completion request
const completionRequest = reactive({
    model: 'open-mistral-7b',
    temperature: 0.7,
    max_tokens: 100,
    prompt: ''
})

// Console
const consoleLogs = ref([])
const consoleOutput = ref(null)

// Helper function to log to console
const logToConsole = async (method, url, content, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString()
    consoleLogs.value.push({
        timestamp,
        method,
        url,
        content: typeof content === 'object' ? JSON.stringify(content, null, 2) : content,
        type
    })

    await nextTick()
    if (consoleOutput.value) {
        consoleOutput.value.scrollTop = consoleOutput.value.scrollHeight
    }
}

// Helper function to make API requests
const makeRequest = async (method, endpoint, body = null) => {
    const url = `${config.baseUrl}${endpoint}`

    try {
        logToConsole(method, url, 'Request sent...', 'info')

        const options = {
            method,
            headers: {
                'Authorization': `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json'
            }
        }

        if (body) {
            options.body = JSON.stringify(body)
            logToConsole(method, url, `Request Body: ${JSON.stringify(body, null, 2)}`, 'request')
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
            logToConsole(method, url, `✅ Success (${response.status}): ${JSON.stringify(data, null, 2)}`, 'success')
        } else {
            logToConsole(method, url, `❌ Error (${response.status}): ${JSON.stringify(data, null, 2)}`, 'error')
        }
    } catch (error) {
        logToConsole(method, url, `❌ Network Error: ${error.message}`, 'error')
    }
}

// Endpoint test functions
const testListModels = () => {
    makeRequest('GET', '/v1/models')
}

const testRetrieveModel = () => {
    makeRequest('GET', `/v1/models/${modelId.value}`)
}

const testChatCompletions = () => {
    const messages = [
        { role: 'system', content: chatRequest.systemMessage },
        { role: 'user', content: chatRequest.userMessage }
    ]

    const body = {
        model: chatRequest.model,
        messages,
        temperature: chatRequest.temperature,
        max_tokens: chatRequest.max_tokens,
        top_p: chatRequest.top_p
    }

    makeRequest('POST', '/v1/chat/completions', body)
}

const testEmbeddings = () => {
    const body = {
        model: embeddingRequest.model,
        input: embeddingRequest.input,
        encoding_format: 'float'
    }

    makeRequest('POST', '/v1/embeddings', body)
}

const clearConsole = () => {
    consoleLogs.value = []
}
</script>

<style scoped>
h3,
h4 {
    margin-top: 1em;
    padding-top: 0;
}

.rest-llm-tester {
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.config-section {
    border-radius: 8px;
    margin-bottom: 24px;
}

.config-section h3 {
    margin-top: 0;
    margin-bottom: 16px;
}

.config-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

@media (max-width: 768px) {
    .config-inputs {
        grid-template-columns: 1fr;
    }
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.input-group label {
    font-weight: 600;
    font-size: 14px;
}

.config-input,
.endpoint-input {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.15s ease-in-out;
}

.config-input:focus,
.endpoint-input:focus,
.endpoint-textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.endpoints-section h3 {
    margin-bottom: 20px;
}

.endpoint-card {
    border-radius: 8px;
    margin-bottom: 16px;
}

.endpoint-header h4 {
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.method {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}

.endpoint-header p {
    margin: 0 0 16px 0;
    color: #6c757d;
    font-size: 14px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin-bottom: 12px;
}

.endpoint-textarea {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
    resize: vertical;
    transition: border-color 0.15s ease-in-out;
}

.test-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.15s ease-in-out;
}

.test-button:hover:not(:disabled) {
    background: #0056b3;
}

.test-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
}

.console-section {
    border-radius: 8px;
    margin-top: 24px;
}

.console-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.console-header h3 {
    margin: 0;
}

.clear-button {
    background: #6c757d;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
}

.clear-button:hover {
    background: #545b62;
}

.console-output {
    background: #2d3748;
    color: #e2e8f0;
    border-radius: 4px;
    padding: 16px;
    max-height: 400px;
    overflow-y: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 12px;
    line-height: 1.5;
}

.console-log {
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #4a5568;
}

.console-log:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.console-log .timestamp {
    color: #a0aec0;
    margin-right: 8px;
}

.console-log .method {
    margin-right: 8px;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
}

.console-log .url {
    color: #63b3ed;
    word-break: break-all;
}

.console-log .log-content {
    margin-top: 4px;
    white-space: pre-wrap;
    word-break: break-word;
}

.console-log.success .log-content {
    color: #68d391;
}

.console-log.error .log-content {
    color: #fc8181;
}

.console-log.request .log-content {
    color: #fbb6ce;
}

.console-empty {
    color: #a0aec0;
    font-style: italic;
    text-align: center;
    padding: 20px;
}
</style>