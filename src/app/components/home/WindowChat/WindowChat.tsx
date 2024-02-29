import OpenAI from "openai";
import { WindowChatProps, Message } from "./types";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const WindowChat: React.FC<WindowChatProps> = ({
  userInput,
  setUserInput,
  chatHistory,
  setChatHistory,
  isLoading,
  setIsLoading,
}) => {
  const handleUserInput = async () => {
    setIsLoading(true);
    const newUserMessage: Message = { role: "user", content: userInput };
    setChatHistory((previousChat) => [...previousChat, newUserMessage]);

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
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }

    setUserInput("");
    setIsLoading(false);
  };

  return (
    <div className="px-4 py-3 text-gray-800/60">
      <div className="mb-4" style={{ height: "400px", overflow: "auto" }}>
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === "user" ? "text-left" : "text-right"
            } mb-2`}
          >
            <div
              className={`rounded-full p-2 max-w-md mx-4 inline-block ${
                message.role === "user"
                  ? "bg-blue-400 text-blue-600"
                  : "bg-green-400 text-green-600"
              }`}
            >
              {message.role === "user" ? "H" : "A"}
            </div>
            <div
              className={`max-w-md mx-4 my-2  inline-block ${
                message.role === "user"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-green-400 text-green-600"
              } p-2 rounded-md`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="ask"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        {isLoading ? (
          <div className="animate-pulse rounded-r-lg bg-red-300">
            Loading....
          </div>
        ) : (
          <button onClick={handleUserInput} className="bg-blue-500">
            Ask
          </button>
        )}
      </div>
    </div>
  );
};
