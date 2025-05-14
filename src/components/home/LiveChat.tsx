import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{text: string; sender: 'user' | 'agent'; time: Date}>>([
    {
      text: "Hi there! 👋 How can we help you today?",
      sender: 'agent',
      time: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      text: message,
      sender: 'user' as const,
      time: new Date()
    };
    
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Simulate agent response after delay
    setTimeout(() => {
      const agentMessage = {
        text: "Thanks for your message! One of our team members will get back to you shortly. In the meantime, feel free to check out our portfolio or services.",
        sender: 'agent' as const,
        time: new Date()
      };
      
      setChatHistory((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };

  // Format time for chat messages
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Auto-scroll to bottom when chat history updates
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat window */}
      <div 
        className={`bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Chat header */}
        <div className="bg-blue-900 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="font-bold">BrightSites Support</h3>
            <p className="text-xs text-blue-100">We typically reply in a few minutes</p>
          </div>
          <button 
            onClick={toggleChat} 
            className="text-white hover:text-gray-200 focus:outline-none" 
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat messages */}
        <div 
          id="chat-messages" 
          className="p-4 overflow-y-auto" 
          style={{ height: 'calc(500px - 60px - 64px)' }}
        >
          {chatHistory.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-4 ${msg.sender === 'user' ? 'text-right' : ''}`}
            >
              <div className={`inline-block max-w-xs sm:max-w-sm rounded-lg p-3 ${
                msg.sender === 'user' 
                  ? 'bg-blue-900 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                <p>{msg.text}</p>
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                {formatTime(msg.time)}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-4">
              <div className="inline-block bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 rounded-r-md hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;