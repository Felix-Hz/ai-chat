import ClearChatHistory from "../ClearChat/ClearChat";
import { CloseWindow } from "../CloseWindow/CloseWindow";
import { AssistantStatusProps } from "./types";

export const AssistantStatus: React.FC<AssistantStatusProps> = ({
  status,
  isLoading,
  windowExpand,
  setWindowExpand,
  setChatHistory,
}) => {
  return (
    <section className="w-full flex-none flex justify-between items-center border-b border-gray-300 py-2 px-6">
      <div
        className={`px-4 py-3 flex justify-center items-center ${
          isLoading ? "animate-pulse" : ""
        }`}
      >
        <p className="inline xs:text-lg text-2xl">👩🏻‍💻</p>
        <p className="inline pl-2 xs:ml-2 xs:text-sm opacity-75 text-gray-800">
          {status}
        </p>
      </div>
      <section
        className={`flex-no-shrink fill-current flex flex-row space-x-6 ${
          !windowExpand ? "hidden" : ""
        }`}
      >
        <ClearChatHistory setChatHistory={setChatHistory} />
        <CloseWindow
          setWindowExpand={setWindowExpand}
          windowExpand={windowExpand}
        />
      </section>
    </section>
  );
};
