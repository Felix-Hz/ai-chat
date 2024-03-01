import { Message } from "../WindowChat/types";

export type AssistantStatusProps = {
  status: string;
  windowExpand: boolean;
  isLoading: boolean;
  setWindowExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
};
