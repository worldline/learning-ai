# Code Assistants in IDEs

Assistant tools integrated into IDEs can help developers to write code faster and with better quality. These tools use large language models (LLMs) to provide code suggestions, complete code snippets, generate tests... and more.
This section presents GitHub Copilot, one of the most popular code assistants available today.

## GitHub Copilot

GitHub Copilot is a tool that uses the OpenAI language models to provide code suggestions and suggestions for improving code quality. Copilot can now use other LLMs than OpenAI, including Google, and Anthropic to provide code suggestions. You can choose the model you want to use in the settings of your IDE.

::: tip Alternative code assistance
There is also other producs indegrated to IDEs such as :

- [Gitlab Duo](https://about.gitlab.com/fr-fr/gitlab-duo/),
- [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview?hl=fr),
- [SuperMaven](https://supermaven.com/),
- [AWS CodeWhisperer](https://docs.aws.amazon.com/codewhisperer/latest/userguide/what-is-cwspr.html), and more.
:::

### Copilot Chat 

Copilot Chat is a chat interface that allows you to ask questions and get suggestions for code improvements. It is a similar approach to chat GPT prompting optimised for the developper experience.

it's available on :
- [JetBrains IDEs](https://plugins.jetbrains.com/plugin/17718-github-copilot)
- [Visual Studio](https://visualstudio.microsoft.com/fr/github-copilot/)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- In [GitHub mobile App](https://github.com/mobile)
- Web version in [github.com (Preview)](https://docs.github.com/fr/enterprise-cloud@latest/copilot/using-github-copilot/asking-github-copilot-questions-in-github)
- CLI version in [GitHub CLI](https://cli.github.com/) : CLI helps you using you command line interpreter

You can use it in the terminal with the following command:
```bash
gh auth login
gh extension install github.copilot
gh copilot explain "traceroute github.com"
```

### IDEs integration (VSCode)

Copilot chat is available as an extension for VSCode. You can install it from the VSCode marketplace. The client  enables you to interact with copilot chat directly from your IDE for :

#### Completion

[Examples of prompts](/learning-ai/2.prompt/#completion)

![copilot-assistance](../assets/images/copilot_completion.gif)

#### Code generation & refactoring

[Examples of prompts](/learning-ai/2.prompt/#refactoring)

![copilot-completion](../assets/images/copilot_generation.gif)

#### Assistance

##### Explain code

[Examples of prompts](/learning-ai/2.prompt/#explain-code)

![copilot-assistance](../assets/images/copilot_assistance.gif)

##### Fix code

[Examples of prompts](/learning-ai/2.prompt/#fixing-code)

![copilot-assistance2](../assets/images/copilot_assistance2.gif)

#### Test generation

![copilot-test](../assets/images/copilot_testing.gif)

::: tip Sortcut usage of Copilot chat

You can also use the chat interface to ask questions with shortcuts :

- `/ask`
- `/explain`
- `/generate`
- `/refactor`
- `/test`
- `/setupTest`
- ...

![copilot-test-with-chat](../assets/images/copilot_test.gif)
:::

#### Documentation

#### Architecture diagram

[Mermaid diagrams](https://mermaid.live/) is a great tool to create diagrams in markdown files online. With copilot you can generate a diagram based on the code you write or chat with copilot to generate the diagram.

```text
Generate a mermaid architecture diagram for a simple retail app with product catalog, product details , buying tunnel , loyalty. Be detailed. I want to make this app with express node JS Rest API server, please provide the diagram for the server side. Suggest technical stack on the diagram , name the component variables. Parentheses are not supported by mermaid.
```

![copilot-diagram](../assets/images/copilot_diagram.png)

```sh
graph TD;
    A[Client Application] -->|HTTP Requests| B[Express.js REST API Server]
    B -->|Fetch Products| C[Product Controller - productController]
    B -->|Fetch Product Details| D[Product Details Controller - productDetailsController]
    B -->|Handle Cart Operations| E[Cart Controller - cartController]
    B -->|Process Orders| F[Order Controller - orderController]
    B -->|Manage User Accounts| G[User Controller - userController]
    B -->|Handle Loyalty Program| H[Loyalty Controller - loyaltyController]

    subgraph Database
        I[MongoDB - mongoose]
    end

    subgraph Middleware
        J[Authentication Middleware - passport]
        K[Error Handling Middleware - errorHandler]
        L[Logging Middleware - morgan]
    end

    B -->|Connects to| I
    B -->|Uses| J
    B -->|Uses| K
    B -->|Uses| L

    C -->|CRUD Operations| I
    D -->|CRUD Operations| I
    E -->|CRUD Operations| I
    F -->|CRUD Operations| I
    G -->|CRUD Operations| I
    H -->|CRUD Operations| I
```

### Agent mode 

The agent mode of copilot allows you to create multi step workflows to automate complex tasks and interacts with the IDE and external tools such as terminal, browser, file system, etc. It is using reasoning capabilities of LLMs to decompose a task into smaller sub-tasks and execute them sequentially or in parallel.

## 🧪 Exercise

#### Exercice 1 : Install GitHub Copilot on VSCode

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=github.copilot) on your VSCode
2. Sign in with your GitHub account, if not already done
3. Create a new file and start typing a function or a class, to see the suggestions provided by Copilot

#### Exercice 2 :Generating unit tests

We"re going to use GitHub Copilot to generate unit tests for a simple JavaScript project repository.

To run the project and unit tests, you will need [NodeJs](https://nodejs.org/en/download/) installed on your machine.

1. Clone the following repository: [github.com/worldline/learning-ai-workspace-js](https://github.com/worldline/learning-ai-workspace-js)
2. Open the project in your VSCode
3. Open GitHub Copilot Chat by clicking on the Copilot icon in the bottom right corner of your VSCode
4. Ask Copilot to generate unit tests for the `index.js` file . You can also try the `/setupTests` command
5. Copilot may make several suggestions: choosing a testing framework, adding a `test` command to package.json, install new dependencies. Accept all its suggestions.
6. Try to run the generated tests. In case of trouble, use Copilot Chat to ask for help.

<details>
<summary>Solution</summary>

<p>Here we decided to go with supertest framework</p>

![setupTestsCommand](./images/setupTestsCommand.png =x400)
<img src="./images/setupTests3.png" height="400" />
<img src="./images/setupTests.png" height="400" />
<img src="./images/setupTests2.png" height="400" />

<p>Here is an example of how Copilot can help you fix a failing test:</p>
<img src="./images/fixTest.png" height="300" />
<img src="./images/fixTest2.png" height="300" />

</details>

#### Exercice 3 :Refactoring

Now we are going to use Copilot to refactor a piece of code in the same project.

1. Open the `index.js` file in the project
2. Ask Copilot to add a feature in the GET /movies endpoint that allows filtering movies by director, based on a `director` query parameter.
3. Copilot will generate the code for you. Try to understand the changes it made and run the project to test the new feature.
4. Ask Copilot to complete the unit test in `index.test.js` to test getting movies filtered by director. It should generate more unit tests that check against one of the directors in the example data.
5. Now we're going to refactor the code to extract the filtering logic into a separate function. Select the parts of the code with the `.find()` and `.filter()` function calls and ask Copilot to extract them into a new function. Let Copilot suggest a name for these functions
6. Under the previous generated function, type `function filterMoviesByYear(`. Wait for Copilot to suggest you the rest of the function signature and function body. Accept the suggestion using the `Tab` key.
7. Ask Copilot again to allow filtering movies by a `year` query parameter. Copilot should use the `filterMoviesByYear` function you just created to implement this feature.
8. Open `index.test.js`. In the `GET /movies` test block, add a new assertion block by typing `it('should return movies filtered by year',`. Wait for Copilot to suggest you the rest of the tests. Review code to make sure it uses the ?year query parameter and checks correctly a date from the example data.
9. Run the tests to make sure everything is working as expected. Use Copilot to ask for help if needed.

<details>
<summary>Solution</summary>

<p>Adding the new feature</p>
<img src="./images/addFeature.png" />

<p>Complete the test</p>
<img src="./images/completeTest.png" />

<p>Refactor the code to extract logic</p>
<img src="./images/refactor.png" />

<p>Get code suggestion from a function name</p>
<img src="./images/codeSuggestion.png" />

<p>Refactor with Copilot Chat the API logic</p>
<img src="./images/refactor2.png" />

<p>Get code suggestion from test description</p>
<img src="./images/testSuggestion.png" />
</details>


#### Exercice 4 : Prompt Engineering with Agent mode

Create an application that does the following:
- Create a new React project using Vite
- Add a todo list component with the following features: add, delete, mark as done, tag, filter and sort.
- Use Tailwind CSS for styling
- Create a GitHub repository and push the code to it

Use only GitHub Copilot in agent mode to complete this task. You can use the terminal and file system tools to help you with the task.


## Gihub Spark

[GitHub Spark](https://githubnext.com/projects/github-spark#introducing-github-spark) is an AI-powered tool for creating and sharing micro apps (“sparks”), which can be tailored to your exact needs and preferences, and are directly usable from your desktop and mobile devices. Without needing to write or deploy any code.

And it enables this through a combination of three tightly-integrated components:

- An NL-based editor, which allows easily describing your ideas, and then refining them over time
- A managed runtime environment, which hosts your sparks, and provides them access to data storage, theming, and LLMs
- A PWA-enabled dashboard, which lets you manage and launch your sparks from anywhere

## 🧪 Exercise

#### Create a web app with V0/ Bolt / or GitHub Spark 

- Open [V0.dev](https://v0.dev/) and enter a prompt to create a todo list web app with common features: add, delete, mark as done, tag, filter and sort.
  - Download the code and run it on your local machine. Try to understand the code generated by V0.
- Try again this time with [bolt.new](https://bolt.new/).
  - What are the differences between the two tools?

## 📖 Further readings

- [Worldline AI coding assistant](https://confluence.worldline-solutions.com/display/AICA/AI+Coding+Assistants+Home)
- [Worldline Data platform](https://confluence.worldline-solutions.com/display/DPTECHNO/Data+Platform)
- [Copilot trust Center](https://resources.github.com/copilot-trust-center/)
- [Chat with your IDE](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide)
