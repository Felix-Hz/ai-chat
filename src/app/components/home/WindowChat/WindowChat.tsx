import { WindowChatProps } from "./types";

export const WindowChat: React.FC<WindowChatProps> = ({ chatHistory }) => {
  return (
    <div className="pl-4 pr-1 text-gray-800/60 grow">
      <div
        className="overflow-y-auto p-4"
        style={{ maxHeight: "459px", overflow: "auto" }}
      >
        {chatHistory.map((message, index: number) => (
          <div
            key={index}
            className={`${
              message.role === "user" ? "text-right" : "text-left"
            } mb-2`}
          >
            <div
              className={`max-w-full rounded-full pt-1.5 w-9 h-9 text-center inline-block  ${
                message.role === "user"
                  ? "bg-violet-600 text-violet-50"
                  : "bg-fuchsia-500 text-fuchsia-50"
              }`}
            >
              {message.role === "user" ? "U" : "F"}
            </div>
            <div
              className={`max-w-md mx-4 my-2 inline-block text-left p-2 ${
                message.role === "user"
                  ? "bg-violet-100 text-violet-600"
                  : "bg-fuchsia-100 text-fuchsia-500"
              } p-2 rounded-md`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
