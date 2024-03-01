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
      className="p-2 text-sm text-gray-600/50 my-0 mx-2 xs:mx-2 py-1 px-2 rounded-lg transition duration-300 hover:shadow-md hover:bg-gray-100/30 hover:text-gray-600/70"
      onClick={clearHistory}
    >
      Clear
    </button>
  );
};

export default ClearChatHistory;
