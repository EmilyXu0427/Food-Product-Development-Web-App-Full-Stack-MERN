import { useState } from 'react';
import { getAnswerFromAI } from '../requests/OpenAIRequests';
import chatBotBG from '../pages/picture/chatBotBG.jpg';

const RecipeChatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');

    // Get answer from openai api call
    async function getAnswer(prompt) {
        const c = await getAnswerFromAI(prompt);
        setAnswer(c);
    }

    return (
        <div className='bg-cover bg-center h-screen w-screen'
        style={{ backgroundImage: `url(${chatBotBG})`}}>
            <div className='flex flex-col text-xl font-sans font-semibold w-[600px] h-[800px] p-10 bg-red-200 mx-auto'>
                    <span className='flex-grow bg-white border rounded-lg'>{answer}</span>
                    <span className='pb-3 text-2xl pt-5'> Start chat with Recipe bot </span>
                    <textarea 
                        onChange={(event) => setPrompt(event.target.value)}
                        className='border rounded border rounded-lg pb-4'>
                    </textarea>
                    <br/>
                    <button
                        onClick={() => getAnswer(prompt)}
                        className='bg-green-800 text-white border rounded-lg h-12'>Send</button>
            </div>

        </div>
    );
};

export default RecipeChatbot;