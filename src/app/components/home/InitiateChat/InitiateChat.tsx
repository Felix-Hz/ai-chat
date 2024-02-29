"use client";

import { useState } from "react";
import { Message } from "../WindowChat/types";
import { WindowChat } from "../WindowChat/WindowChat";
import InputMessage from "../InputMessage/InputMessage";
import { AssistantStatus } from "../AssistantStatus/AssistantStatus";

export const InitiateChat = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [windowExpand, setWindowExpand] = useState(false);
  const [assistantTyping, setAssistantTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const handleFormSubmission = () => {
    setWindowExpand(!windowExpand);
  };
  const triggerAssistant = () => {
    setAssistantTyping(!assistantTyping);
  };

  return (
    // Chat Container
    <section
      className={`max-w-7xl xs:max-w-fit mx-auto bg-white shadow-lg rounded-lg overflow-hidden border transition duration-300 hover:shadow-2xl hover:border-gray-500/50 flex flex-col justify-between   ${
        windowExpand
          ? "w-full h-[600px] xs:h-[440px] shadow-xl border-gray-600/40"
          : ""
      }`}
    >
      {/* Status of Freyja */}
      {assistantTyping ? (
        <AssistantStatus status="Freyja is typing..." />
      ) : (
        <AssistantStatus status="Freyja is waiting for you" />
      )}

      {/* Chat Expansion */}
      {windowExpand && (
        <WindowChat
          userInput={userInput}
          setUserInput={setUserInput}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {/* Message Input Bar */}
      <InputMessage
        handleFormSubmission={handleFormSubmission}
        triggerAssistant={triggerAssistant}
      />
    </section>
  );
};
