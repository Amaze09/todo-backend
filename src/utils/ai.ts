import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

interface taskInput {
    name: string;
    priorityRating: number;
    deadline: string;
}

export async function suggestTaskPriority(tasks: taskInput[]): Promise<any> {
    const taskDescriptions = tasks.map(task => {
        return `Task Name: ${task.name}\nPriority Rating: ${task.priorityRating}\nDeadline: ${task.deadline}`;
    }).join('\n\n');

    const prompt = `
      Based on the following task details, suggest an adjusted priority order from 1 (most urgent) to 10 (least urgent) and breakdown each task into small subtasks.
      
      ${taskDescriptions}
    `;
    const body = {
        prompt: prompt
    }
    const url = 'http://localhost:5001/generate';
    try {
        const response = await axios.post(
            url,
            body
        );
        return response.data;
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return null;
    }
}

export const mapToTaskInput = (tasks: any[]): taskInput[] => {
    return tasks.map(task => ({
        name: task.title, 
        priorityRating: task.priority,  
        deadline: task.deadline,  
    }));
};
