import React from 'react'
import "./ChatbotButton.css";

function ChatbotButton() {
  return (
    <div className="chatbot">
      <a 
        href="https://sole-mighty-seriously.ngrok-free.app/webhook/82edfa8d-d7c2-4401-91c9-9f4b57d88529/chat" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        A.I 상담시작
      </a>
    </div>
  )
}

export default ChatbotButton;