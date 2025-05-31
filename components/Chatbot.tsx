import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatMessage } from '../types';
import Button from './Button'; // Ensure this component exists

const ChatIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3.105 3.105a1.5 1.5 0 011.722-.436l12.04 6.02a1.5 1.5 0 010 2.722l-12.04 6.02a1.5 1.5 0 01-2.158-1.285V4.828a1.5 1.5 0 01.436-1.722z" />
    </svg>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const WHATSAPP_NUMBER = '+254799598942';
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // ✅ if using Vite

    const [chatSession, setChatSession] = useState<any>(null);

    useEffect(() => {
        if (!API_KEY) {
            console.warn("Missing API key");
            setMessages([{
                id: 'system-error',
                sender: 'bot',
                text: "Unable to connect to AI. Please contact us on WhatsApp.",
                timestamp: Date.now()
            }]);
            return;
        }

        const ai = new GoogleGenerativeAI(API_KEY);
        const chat = ai.getGenerativeModel({ model: "gemini-1.5-flash" }).startChat({
            history: [],
            generationConfig: {
                temperature: 0.7,
            },
            systemInstruction: {
                role: "system",
                parts: [{
                    text: `You are Edkam AI Assistant... [keep all your long system prompt here]`
                }]
            },
        });

        setChatSession(chat);
        setMessages([{
            id: 'intro',
            sender: 'bot',
            text: "Hello! I'm the Edkam AI Assistant. How can I help you today?",
            timestamp: Date.now(),
        }]);
    }, [API_KEY]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || !chatSession) return;

        const userMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: inputValue,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            const res = await chatSession.sendMessage(inputValue);
            const reply = await res.response.text();

            const botMsg: ChatMessage = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: reply || `I didn’t catch that. Try again or contact us on WhatsApp ${WHATSAPP_NUMBER}`,
                timestamp: Date.now(),
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, {
                id: `bot-error-${Date.now()}`,
                sender: 'bot',
                text: `Oops! Something went wrong. Contact us at ${WHATSAPP_NUMBER}`,
                timestamp: Date.now()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggleChat = () => setIsOpen(prev => !prev);

    return (
        <>
            {!isOpen && (
                <button onClick={handleToggleChat} className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50">
                    <ChatIcon className="w-6 h-6" />
                </button>
            )}
            {isOpen && (
                <div className="fixed bottom-6 right-6 bg-gray-900 text-white w-96 h-[500px] rounded-lg shadow-2xl flex flex-col z-50">
                    <header className="p-4 border-b border-gray-700 flex justify-between items-center">
                        <h2 className="text-lg font-bold">Edkam AI Assistant</h2>
                        <button onClick={handleToggleChat}><CloseIcon className="w-6 h-6 text-white" /></button>
                    </header>

                    <div className="flex-1 p-4 overflow-y-auto space-y-2">
                        {messages.map(msg => (
                            <div key={msg.id} className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-700' : 'bg-gray-700'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && <div className="text-sm text-left">Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSendMessage();
                    }} className="p-4 border-t border-gray-700 flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            className="flex-grow px-3 py-2 rounded bg-gray-800 text-white"
                            placeholder="Ask something..."
                            disabled={!chatSession || isLoading}
                        />
                        <Button type="submit" disabled={!inputValue.trim() || isLoading}>
                            <SendIcon className="w-5 h-5" />
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;
