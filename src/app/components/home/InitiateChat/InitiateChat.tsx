"use client";

import OpenAI from "openai";
import { useState } from "react";
import { Message } from "../WindowChat/types";
import { WindowChat } from "../WindowChat/WindowChat";
import InputMessage from "../InputMessage/InputMessage";
import { AssistantStatus } from "../AssistantStatus/AssistantStatus";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const InitiateChat = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [windowExpand, setWindowExpand] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const handleUserInput = async () => {
    const emptyMessage = userInput.trim().length;
    if (userInput === "" || userInput.length <= 1 || emptyMessage < 1) {
      /* TODO: Add a better notificaton for this [https://www.radix-ui.com/primitives/docs/components/toast]*/
      window.alert("Your message to Freyja can't be empty.");
    } else {
      setIsLoading(true);
      if (windowExpand === false) {
        setWindowExpand(!windowExpand);
      }
      const newUserMessage: Message = { role: "user", content: userInput };
      setChatHistory((previousChat) => [...previousChat, newUserMessage]);
      setUserInput("");
      console.log("Message submitted.");

      try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [...chatHistory, { role: "assistant", content: userInput }],
          model: "gpt-3.5-turbo",
          // TODO: Add features like temperature here.
        });

        if (chatCompletion.choices[0]?.message.content !== null) {
          const newAssistantMessage: Message = {
            role: "assistant",
            content: chatCompletion.choices[0].message.content,
          };
          setChatHistory((previousChat) => [
            ...previousChat,
            newAssistantMessage,
          ]);
        } else {
          console.error("OpenAI's assistant is busy. Try again later.");
        }
      } catch (error: any) {
        // console.error("Error calling OpenAI API:", error);
        const newAssistantMessage: Message = {
          role: "assistant",
          content: `You can sneak peek OpenAI's API integration with Freyja on the code: https://rb.gy/6hyv5u`,
        };
        setChatHistory((previousChat) => [
          ...previousChat,
          newAssistantMessage,
        ]);
      }
      setIsLoading(false);
    }
  };

  return (
    // Chat Container
    // TODO: Make the window expand on a % to make it dynamic for different mobile screens
    <section
      className={`max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border transition duration-300 hover:shadow-2xl hover:border-gray-500/50 flex flex-col justify-between ${
        windowExpand
          ? "w-full h-[600px] xs:h-[440px] shadow-xl border-gray-600/40 xs:max-w-[355px] xs:w-full "
          : ""
      }`}
    >
      {/* Status of Freyja */}
      {isLoading ? (
        <AssistantStatus
          status="Freyja is typing..."
          windowExpand={windowExpand}
          setWindowExpand={setWindowExpand}
          isLoading={isLoading}
          setChatHistory={setChatHistory}
        />
      ) : (
        <AssistantStatus
          status="Freyja is waiting for you"
          windowExpand={windowExpand}
          setWindowExpand={setWindowExpand}
          isLoading={isLoading}
          setChatHistory={setChatHistory}
        />
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
        handleUserInput={handleUserInput}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </section>
  );
};
