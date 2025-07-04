# Prompting usages

## Prompt engineering

Prompt engineering involves the design and creation of prompts that are used to elicit specific responses or actions from AI models or interactive systems. These prompts are carefully crafted to guide the behavior or generate particular outputs from the AI, such as generating natural language responses, providing recommendations, or completing specific tasks.

### Definition

In the context of AI language models, prompt engineering is especially important for shaping the model's behavior and output. By designing prompts effectively, engineers can influence the model's responses and ensure that it generates coherent, relevant, and accurate content.

There are four main areas to consider when writing an effective prompt. You don’t need to use all four, but using a few will help!

- `Persona`: Who is the user you're writing for? What are their skills and knowledge?
- `Task`: What specific action do you want the user to perform?
- `Context`: What information does the user need to know to complete the task?
- `Format`: What is the desired output of the task?

**Example Prompt:**

* [`Persona`] You are a Google Cloud program manager.
* [`Task`] Draft an executive summary email
* [`Context`] to [person description] based on [details about relevant program docs].
* [`Format`] Limit to bullet points.

By using "act as," you are establishing a specific context for the language model and guiding it to understand the type of task or request you are making. This helps to set the right expectations and provides the language model with the necessary context to generate a response tailored to the defined role.

```
"Act as a creative writing assistant and generate a short story based 
on a prompt about a futuristic world where robots have become sentient."
```
## Frameworks

### Framework : Chain of Thought

**Chain-of-Thought (CoT)** encourages models to show their reasoning steps instead of jumping directly to answers.

Introduced in Wei et al. (2022), chain-of-thought (CoT) prompting enables complex reasoning capabilities through intermediate reasoning steps. You can combine it with few-shot prompting to get better results on more complex tasks that require reasoning before responding.
[Prompting Guide with CoT](https://www.promptingguide.ai/techniques/cot)


#### ❌ Standard Prompting
```
Q: This Python code has a bug. What's wrong?
```python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

result = calculate_average([])
```

**Output:** 
```
`ZeroDivisionError`
```

####  ✅ Chain-of-Thought Prompting
```
Q: This Python code has a bug. What's wrong?
[same code]

A: Let me trace through this step by step:
1. Function receives empty list []
2. Loop doesn't execute (no numbers)
3. total remains 0
4. Division: 0 / len([]) = 0 / 0 → ZeroDivisionError

Fix: Add empty list check before division.
```

**Output:** 
```
Let me analyze this systematically:
1. **Input**: Empty list []
2. **Loop execution**: No iterations, total = 0  
3. **Division step**: total / len([]) = 0 / 0
4. **Error**: Division by zero

**Solution**: Check if list is empty:
```python
def calculate_average(numbers):
    if not numbers:
        return 0  # or raise ValueError
    total = sum(numbers)
    return total / len(numbers)
```

#### Key Benefits

| Standard | Chain-of-Thought |
|----------|------------------|
| Direct answer | Shows reasoning steps |
| Hard to debug | Easy to spot errors |
| Less accurate | More reliable |

**Simple trigger**: Add "Let's think step by step" or "Analyze this systematically" to your prompts.



### ReAct ( Reason + Act ) 

**ReAct** combines reasoning (thinking) with acting (tool use) in iterative cycles to solve complex problems step-by-step.

Yao et al., 2022 introduced a framework named ReAct where LLMs are used to generate both reasoning traces and task-specific actions in an interleaved manner.

Generating reasoning traces allow the model to induce, track, and update action plans, and even handle exceptions. The action step allows to interface with and gather information from external sources such as knowledge bases or environments.

The ReAct framework can allow LLMs to interact with external tools to retrieve additional information that leads to more reliable and factual responses.

[Prompting Guide with CoT](https://www.promptingguide.ai/techniques/react.en)


#### ❌ Standard Approach
```
Q: What programming language was TikTok's recommendation algorithm originally written in?

A: TikTok's algorithm was written in Python and C++.
```
*May be inaccurate, no verification*

#### ✅ ReAct Approach
```
Q: What programming language was TikTok's recommendation algorithm originally written in?

Thought 1: I need to search for information about TikTok's algorithm implementation.
Act 1: Search[TikTok recommendation algorithm programming language]
Obs 1: TikTok uses machine learning models... but details about specific languages are limited in public sources.

Thought 2: Let me search more specifically for TikTok's technical stack.
Act 2: Search[TikTok backend technology stack programming languages]
Obs 2: TikTok's backend primarily uses Go and Python. ByteDance engineering posts mention Go for microservices.

Thought 3: I should look for official ByteDance engineering information.
Act 3: Search[ByteDance TikTok algorithm Go Python engineering blog]
Obs 3: ByteDance engineering blog confirms Go for backend services, Python for ML pipelines, with some C++ for performance-critical components.

Thought 4: Based on multiple sources, I can provide a comprehensive answer.
Act 4: Finish[TikTok's recommendation system uses primarily Go for backend services, Python for machine learning pipelines, and C++ for performance-critical components] ✓
```

#### Key Components

| Component | Purpose | Example |
|-----------|---------|---------|
| **Thought** | Reasoning step | "I need to verify this information" |
| **Act** | Tool usage | Search, Calculate, API call |
| **Observation** | Tool output | Search results, data response |

#### Benefits

- **Verifiable**: Each step can be traced
- **Accurate**: Information is fact-checked
- **Transparent**: Shows the research process
- **Iterative**: Can refine approach based on findings

**Simple pattern**: Think → Act → Observe → Repeat until solution found.


## Prompting techniques (basics)

### Summarize

Summary is a prompt engineering technique that involves providing a summary of a given document or text. It can helps for summarizing changelogs, articles, or other technical documents.

```
Help me write an article of this document [Insert or copy paste document text]
Generate 5 titles out of the following topic….
Generate a subtitle to catch readers’ attention on the following 
topic [describe the topic]
```

### Write

Write is a prompt engineering technique that involves providing a step-by-step guide or instructions for a given task or process. Its useful for developers to create functional and technical documentations.

```
Create a template of an email response to customer inquiring about ….
Create a guide that explains how to use ….
Write step by step instructions
```

### Code explanation

Code explanation is a prompt engineering technique that involves providing a detailed explanation of a code snippet or function. This technique is useful for developers who want to understand the inner workings of a codebase or for those who want to document their code.

cf. Preformatted prompts for an example of code explanation

### Generation

```
Act as a code generator. Generate a Python function that takes a list of 
numbers as input and returns the sum of all the numbers.
```

## 🧪 Exercises

#### Basic Function Creation

- Create a function that calculates the factorial of a number.
- Handle both positive integers and zero, with error handling for negative inputs.

**Expected Output (python)**

```python
def factorial(n):
    if n < 0:
        raise ValueError("Input must be a non-negative integer.")
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```


::: details Solutions

**Persona:** Python Developer
**Task:** Create a function
**Context:** You need to calculate the factorial of a number.

As a Python Developer, create a function named `factorial` that takes a single integer input and returns its factorial. The function should handle both positive integers and zero. Include error handling for negative inputs.
:::


## Devs techniques

#### API Request Handling

- Write a function to fetch data from a given URL using the Fetch API.
- Return the JSON response and handle any potential errors.

**Expected Output (javascript)**

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```

::: details Solutions

**Persona:** JavaScript Developer
**Task:** Write a function to handle API requests
**Context:** You need to fetch data from a given URL.

As a JavaScript Developer, write a function named `fetchData` that takes a URL as an argument and fetches data from that URL using the Fetch API. The function should return the JSON response and handle any errors that may occur during the fetch operation.
:::



#### Class Definition

- Define a class representing a book with properties for title, author, and publication year.
- Include a method to display the book's details.

**Expected Output (C#)**

```csharp
public class Book
{
    public string Title { get; set; }
    public string Author { get; set; }
    public int PublicationYear { get; set; }

    public void DisplayDetails()
    {
        Console.WriteLine($"Title: {Title}, Author: {Author}, Year: {PublicationYear}");
    }
}
```

::: details Solutions

**Persona:** C# Developer
**Task:** Define a class
**Context:** You are creating a representation of a book.

As a C# Developer, create a class named `Book` that has properties for `Title`, `Author`, and `PublicationYear`. Include a method named `DisplayDetails` that prints the book's details in a formatted string.

:::

#### Simple Web Server

- Set up a basic web server that listens on port 3000.
- Respond with a simple message when accessed.

**Expected Output (Javascript)**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

::: details Solutions

**Persona:** JavaScript Developer
**Task:** Set up a web server
**Context:** You need to create a simple server that responds to requests.

As a JavaScript Developer, set up a simple web server using the `http` module that listens on port 3000 and responds with "Hello, World!" when accessed.
:::



#### Data Validation

**Details:**

- Write a method to validate if a given string is a valid email address.
- Use a regular expression for the validation.

**Expected Output (Ruby)**

```ruby
def valid_email?(email)
    regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    !!(email =~ regex)
end
```


::: details Solutions

**Persona:** Ruby Developer
**Task:** Write a validation method
**Context:** You need to validate email addresses.

As a Ruby Developer, write a method named `valid_email?` that takes a string as input and returns true if it is a valid email address, and false otherwise. Use a regular expression for validation.

:::


### Completion

Code completion is a prompt engineering technique that involves providing a list of possible completions for a given code snippet or function. This technique is useful for developers who want to suggest possible code changes or improvements based on their existing code.

### Conversion

Code conversion is a prompt engineering technique that involves providing a conversion of a code snippet or function from one programming language to another. This technique is useful for developers who want to migrate their code from one language to another or for those who want to use a different programming language for their projects.

### Review

Code review is a prompt engineering technique that involves providing a code review of a given code snippet or function. This technique is useful for developers who want to review their code for potential issues,bugs, or for those who want to provide feedback on their code.

### Fixing

Code fixing is a prompt engineering technique that involves providing a code fix for a given code snippet or function. This technique is useful for developers who want to fix bugs or issues in their code or for those who want to improve the quality of their code.

```
Help me find mistakes in my code [insert your code]
Explain what this snippet of code does [insert code snippet]
What it the correct syntax for a [statement or function] 
in [programming language]
How do I fix the following programming language code 
[program language] code which explain the functioning [Insert code snippet]
```

### Refactoring

Code refactor is a prompt engineering technique that involves providing a code refactoring of a given code snippet or function within a specific scope. This technique is useful for developers who want to refactor their code within a specific context or for those who want to improve the readability and maintainability of their code.

### Data mocking

Mock data generation is a prompt engineering technique that involves providing a mock data set for a given code snippet or function. This technique is useful for developers who want to test their code with mock data or for those who want to generate test data for their projects. It avoid creating manually fake data for testing.

## 🧪 Exercises

#### Mock Data Generation

Create prompts that can generate mock user profiles. The language used is JavaScript.

The profile should include:

* Name
* Age
* Email
* Address (Street, City, State, Zip Code)
* Phone Number


::: details Solutions

Mock Data Generation

As a JavaScript Developer, write a function named `generateUserProfile` that generates a mock user profile with the following details: name, age, email, address, and phone number. The function should return an object containing the user profile details.

```javascript
function generateUserProfile() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 18; // Age between 18 and 67
    const randomEmail = `${randomName.toLowerCase()}@example.com`;
    const randomAddress = {
        street: `${Math.floor(Math.random() * 1000)} Main St`,
        city: "Sample City",
        state: "CA",
        zip: "12345"
    };
    const randomPhone = `(${Math.floor(Math.random() * 900) + 100})-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;

    return {
        name: randomName,
        age: randomAge,
        email: randomEmail,
        address: randomAddress,
        phone: randomPhone
    };
}

// Example usage
console.log(generateUserProfile());
```

:::


## Software development lifecycle

You can also use prompt engineering techniques to assist with various stages of the software development lifecycle. here is an overview of it :

![Software development lifecycle](../assets/images/software_lifecycle.png)

### Testing

Testing is a prompt engineering technique that involves providing a test case for a given code snippet or function. This technique is useful for developers who want to test their code or for those who want to ensure the correctness of their code.

### System design and architecture

System design and architecture is a prompt engineering technique that involves providing a system design or architecture for a given code snippet or function. This technique is useful for developers who want to design their code or for those who want to understand the overall architecture of their projects.

### Documentation generation

Documentation generation is a prompt engineering technique that involves providing a documentation for a given code snippet or function. This technique is useful for developers who want to document their code or for those who want to provide documentation for their projects. It can be used to generate documentation in various formats such as Markdown, HTML, or PDF.

### Commit Message Generation

Commit message generation is a prompt engineering technique that involves providing a commit message for a given code snippet or function. This technique is useful for developers who want to generate commit messages for their code or for those who want to ensure that their commit messages are clear and concise.

### Vulnerability checking

Vulnerability checking is a prompt engineering technique that involves providing a vulnerability check for a given code snippet or function. This technique is useful for developers who want to check for vulnerabilities in their code or for those who want to ensure that their code is secure.

::: warning
This prompt is not recommended for production use. It is intended for testing and debugging purposes only and is not a proof of security or safety of your app.
:::

### Shell/CLI commands manual

As a developer, you’re not limited to only writing code. LLMs can assist with CLI such as shell commands and version control using Git.

### Regular expression explanation

You can understand complex regular expressions and generate ones that match specific patterns in text. This technique is useful for developers who want to write complex regular expressions or for those who want to understand the syntax of regular expressions.

```
Explain this regular expression in JavaScript: const regex = 
/^[A-Za-z0–9._%+-]+@[A-Za-z0–9.-]+\\.[A-Za-z]{2,}$/;
```
