import { WindowChatProps } from "./types";

export const WindowChat: React.FC<WindowChatProps> = ({ chatHistory }) => {
  return (
    <div className="px-2 pr-1 text-gray-800/60 grow">
      <div className="overflow-y-auto p-4 max-h-[459px] xs:max-h-[290px] xs:h-[290px] overflow-auto">
        {chatHistory.map((message, index: number) => (
          <div
            key={index}
            className={`${
              message.role === "user" ? "text-right" : "text-left"
            } mb-2`}
          >
            {message.role === "user" ? (
              <div>
                <div className="max-w-md xs:max-w-40 mx-2 my-2 inline-block text-left p-2 bg-violet-100 text-violet-600 rounded-md">
                  {message.content}
                </div>
                <div className="max-w-full rounded-full pt-1.5 w-9 h-9 text-center inline-block bg-violet-600 text-violet-50">
                  U
                </div>
              </div>
            ) : (
              <div>
                <div className="max-w-full rounded-full pt-1.5 w-9 h-9 text-center inline-block bg-fuchsia-500 text-fuchsia-50">
                  F
                </div>
                <div className="max-w-md xs:max-w-40 mx-2 my-2 inline-block text-left p-2 bg-fuchsia-100 text-fuchsia-500 rounded-md">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
