## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```
On your terminal you'll see "Server running at http://localhost:8080"
Even if everything runs properly, we do need to populate the env file with correct values.
Once the env file is done, you would not need to re run the app as we are in dev mode and nodemon is there to help :)
If you don't want to use dev mode, run 

```bash
npm run start
```

## About 

This is a simple express typescript app where we maintain user details and user's task details and perform CRUD operations on tasks. This backend is integrated with smart contract deployed on eth holesky testnet. Whenever a task is created or completed, we create a taskHash and post it onto the smart contract to different functions of the sc.

For Ai suggesion we are making simple API calls to another server where "Meta-Llama-3-8B-Instruct.Q4_0.gguf" model is downloaded. For serving the suggestions we used python flask API with gpt4all dependency. 

## Enhancements / Improvements
1.) Currently all our routes are public and since authentication is managed by next-auth, I was not able to add authentication middleware for routes. For tackling this situation we can add CORS policy and whitelist our domains.(I've added and commented the code for this in server.ts)

2.) Responses from ai model takes a long time and to reduce the latency, I would need to research more on how chatgpt and other ai apps are handling this.


