type AssistantStatusProps = {
  status: string;
};

export const AssistantStatus: React.FC<AssistantStatusProps> = ({ status }) => {
  return (
    <div className="px-4 py-3 border-b border-gray-300 flex justify-center items-center">
      <p className="inline text-2xl">👩🏻‍💻</p>
      <p className="inline pl-2 opacity-75 text-gray-800">{status}</p>
    </div>
  );
};
