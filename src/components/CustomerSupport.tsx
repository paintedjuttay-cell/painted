
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const CustomerSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Hi! Welcome to Painted Juttay. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const quickQuestions = [
    'Track my order',
    'Custom order pricing',
    'Shipping information',
    'Return policy',
    'Artist collaborations'
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        message: 'Thanks for your message! Our team will get back to you shortly. For immediate assistance, please call us or check our FAQ section.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setNewMessage(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 bg-black border-gray-800 shadow-2xl">
        {/* Header */}
        <div className="bg-red-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Painted Juttay Support</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-red-700 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-3">
            {[
              { id: 'chat', label: 'Chat', icon: MessageCircle },
              { id: 'phone', label: 'Call', icon: Phone },
              { id: 'email', label: 'Email', icon: Mail }
            ].map(tab => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-red-700 ${
                  activeTab === tab.id ? 'bg-red-700' : ''
                }`}
              >
                <tab.icon className="h-3 w-3 mr-1" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <CardContent className="p-0 h-full">
          {activeTab === 'chat' && (
            <div className="flex flex-col h-80">
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        {message.sender === 'bot' ? (
                          <Bot className="h-3 w-3" />
                        ) : (
                          <User className="h-3 w-3" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.sender === 'bot' ? 'Support' : 'You'}
                        </span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-3 border-t border-gray-800">
                <div className="text-xs text-gray-400 mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map(question => (
                    <Button
                      key={question}
                      onClick={() => handleQuickQuestion(question)}
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-800">
                <div className="flex gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="bg-gray-800 border-gray-600 text-white text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'phone' && (
            <div className="p-6 text-center space-y-4">
              <Phone className="h-12 w-12 text-red-500 mx-auto" />
              <div>
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Speak directly with our team
                </p>
                <div className="space-y-2">
                  <p className="text-white font-semibold">+92 300 1234567</p>
                  <p className="text-gray-400 text-xs">Mon-Fri: 9AM-6PM PKT</p>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Call Now
              </Button>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="p-6 text-center space-y-4">
              <Mail className="h-12 w-12 text-red-500 mx-auto" />
              <div>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  We'll respond within 24 hours
                </p>
                <div className="space-y-2">
                  <p className="text-white font-semibold">hello@paintedjuttay.com</p>
                  <p className="text-gray-400 text-xs">For general inquiries</p>
                  <p className="text-white font-semibold">orders@paintedjuttay.com</p>
                  <p className="text-gray-400 text-xs">For order support</p>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Send Email
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerSupport;
