import ChatInput from "../../../components/ChatInput";
import ChatWindow from "../../../components/ChatWindow";

interface ChatPageProps {
  params: {
    id: string;
  };
}

function ChatPage({ params: { id } }: ChatPageProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ChatWindow chatId={id} />

      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
