import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

interface taskInput {
    name: string;
    priorityRating: number;
    deadline: string;
}

export async function suggestTaskPriority(tasks: taskInput[]): Promise<any> {
    // Prepare task data as input for GPT-3 model
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
        console.log("axiossssssssssssssssssssssss")
        return response.data;
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return null;
    }
}

export const mapToTaskInput = (tasks: any[]): taskInput[] => {
    return tasks.map(task => ({
        name: task.title,  // Mapping the 'title' to 'name'
        priorityRating: task.priority,  // Mapping 'priority' to 'priorityRating'
        deadline: task.deadline,  // Keeping 'deadline' as it is
    }));
};
