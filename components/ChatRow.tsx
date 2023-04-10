import { useState, useEffect } from "react";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

interface ChatRowProps {
  id: string;
}

function ChatRow({ id }: ChatRowProps) {
  const [active, setActive] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname, id]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active ? "bg-gray-700" : ""}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-t text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
