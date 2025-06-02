
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { ChatMessage } from '../types';
import Button from './Button';

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3.105 3.105a1.5 1.5 0 011.722-.436l12.04 6.02a1.5 1.5 0 010 2.722l-12.04 6.02a1.5 1.5 0 01-2.158-1.285V4.828a1.5 1.5 0 01.436-1.722z" />
    </svg>
);


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const WHATSAPP_NUMBER = "+254799598942";
  // API key is now sourced from process.env.API_KEY as per guidelines
  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    if (!API_KEY) {
      console.warn("API_KEY not found in process.env. Chatbot will be disabled. Please ensure it is set.");
      setMessages([{
        id: 'system-error',
        sender: 'bot',
        text: "I'm currently unable to connect. Please ensure the API key is configured or contact support.",
        timestamp: Date.now()
      }]);
      return;
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const systemInstruction = `You are a friendly and helpful AI assistant for Edkam Computers Training College. Your name is "Edkam AI Assistant".
Your goal is to answer questions accurately about the college:
- Courses offered: Full-Stack Web Development, Data Science & Machine Learning, Cybersecurity Analyst Pro, Essential IT & Office Productivity, Graphic Design Fundamentals. Details can be found on the 'Courses' page.
- Admission process: Apply via the "Apply Now" button or "Apply" page.
- Location: Maili Kumi, Nakuru, Kenya. Map on 'Contact' page.
- General requirements: Basic computer literacy. Specifics on course pages.
- Flexible learning: Online/hybrid options may be available, check course details.
Be concise and clear.
If you cannot answer a specific question, or if the user requires more personalized assistance, financial details, or official documentation, politely state that you don't have the specific information or capability and direct them to contact the college via WhatsApp at ${WHATSAPP_NUMBER}.
Do not make up information. If a question is outside your scope of knowledge about the college, state that you don't have the information and provide the WhatsApp contact.
Keep responses relatively short and easy to read in a chat format.
Start the conversation by introducing yourself.`;

    const newChat = ai.chats.create({
      model: 'gemini-2.5-flash-preview-04-17',
      config: { systemInstruction },
    });
    setChat(newChat);

    setMessages([
      {
        id: 'initial-bot-message',
        sender: 'bot',
        text: "Hello! I'm the Edkam AI Assistant. How can I help you today with your questions about our college?",
        timestamp: Date.now(),
      },
    ]);
  }, [API_KEY]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggleChat = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputValue,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response: GenerateContentResponse = await chat.sendMessage({ message: userMessage.text });
      const botResponseText = response.text;

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText || "I'm not sure how to respond to that. Please try rephrasing or ask another question. For specific help, contact us on WhatsApp.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      const errorMessage: ChatMessage = {
        id: `bot-error-${Date.now()}`,
        sender: 'bot',
        text: `Sorry, I encountered an issue. Please try again. If the problem persists, you can reach us on WhatsApp: ${WHATSAPP_NUMBER}.`,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!API_KEY && messages.length === 1 && messages[0].id === 'system-error') {
     return null;
  }


  return (
    <>
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-6 right-6 bg-brand-accent-blue text-white p-4 rounded-full shadow-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-accent-blue focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-110 z-[100] ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        aria-label="Open chat"
        aria-expanded={isOpen}
      >
        <ChatIcon className="w-7 h-7" />
      </button>

      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[550px] bg-brand-bg-light-card dark:bg-brand-dark-blue rounded-xl shadow-2xl flex flex-col overflow-hidden z-[100] origin-bottom-right border border-brand-border-light dark:border-slate-700 ${isClosing ? 'animate-chat-window-out' : 'animate-chat-window-in'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-heading"
        >
          <header className="bg-slate-100 dark:bg-brand-dark p-4 flex justify-between items-center border-b border-brand-border-light dark:border-slate-700 flex-shrink-0">
            <h2 id="chatbot-heading" className="text-lg font-semibold text-brand-text-light-primary dark:text-white">Edkam AI Assistant</h2>
            <button
              onClick={handleToggleChat}
              className="text-gray-500 dark:text-gray-400 hover:text-brand-text-light-primary dark:hover:text-white focus:outline-none"
              aria-label="Close chat"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-grow p-4 space-y-3 overflow-y-auto custom-scrollbar-sm">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow ${
                  msg.sender === 'user'
                    ? 'bg-brand-accent-purple text-white rounded-br-none'
                    : 'bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text rounded-bl-none'
                }`}>
                  {/* Ensure text is properly displayed, especially if it contains newlines */}
                  {msg.text.split('\n').map((line, index, arr) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text p-3 rounded-lg rounded-bl-none shadow animate-subtle-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-brand-border-light dark:border-slate-700 bg-slate-100 dark:bg-brand-dark flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-grow bg-white dark:bg-slate-700 border-brand-border-light dark:border-slate-600 rounded-lg shadow-sm py-2.5 px-4 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm placeholder-slate-400 dark:placeholder-slate-500"
                aria-label="Chat message input"
                disabled={isLoading || !chat}
              />
              <Button type="submit" variant="primary" size="md" className="p-2.5 !rounded-lg" disabled={isLoading || !inputValue.trim() || !chat} aria-label="Send message">
                <SendIcon className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
