import { Dispatch, SetStateAction } from "react";
import { Message } from "../WindowChat/types";

interface ClearChatHistoryProps {
  setChatHistory: Dispatch<SetStateAction<Message[]>>;
}

const ClearChatHistory: React.FC<ClearChatHistoryProps> = ({
  setChatHistory,
}) => {
  const clearHistory = () => {
    setChatHistory([]);
  };

  return (
    <button
      className="text-sm text-gray-600/60 rounded-lg transition duration-300 hover:text-gray-600/90"
      onClick={clearHistory}
    >
      Clear
    </button>
  );
};

export default ClearChatHistory;
