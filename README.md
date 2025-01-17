## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```
On your terminal you'll see "Server running at http://localhost:8080"

## About 

This is a simple express typescript app where we maintain user details and user's task details and perform CRUD operations on tasks. This backend is integrated with smart contract deployed on eth holesky testnet. Whenever a task is created or completed, we create a taskHash and post it onto the smart contract to different functions.

For Ai suggesion we are making simple API calls to another server where "Meta-Llama-3-8B-Instruct.Q4_0.gguf" model is downloaded. For serving the suggestions we used python flask with gpt4all dependency. 
