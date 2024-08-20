import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
    const APIKEY = getApiKey();

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${APIKEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: messages,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error comunicándose con OpenAI:', error);
        throw error;
    }
};