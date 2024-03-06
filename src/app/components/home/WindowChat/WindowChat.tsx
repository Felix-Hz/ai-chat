import { WindowChatProps } from "./types";
import { useEffect, useRef } from "react";

export const WindowChat: React.FC<WindowChatProps> = ({ chatHistory }) => {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex-grow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto flex-grow p-4 pr-1 text-gray-800/60" ref={chatWindowRef}>
          <div
            className="px-4 xs:max-h-[290px] xs:h-[290px]"
            style={{ maxHeight: "calc(100% - 40px)" }}
          >
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
                    <div className="max-w-md xs:max-w-44 mx-2 my-2 inline-block text-justify p-3 xs:p-3.5 bg-fuchsia-100 text-fuchsia-500 rounded-md">
                      {message.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
