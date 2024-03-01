export interface WindowChatProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
}
