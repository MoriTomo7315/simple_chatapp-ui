"use client";

import { Icon } from "../atoms/Icon";
import { useRouter } from "next/navigation";

interface ChatRoomHeaderProps {
  name: string;
}

export const ChatRoomHeader = ({ name }: ChatRoomHeaderProps) => {
  const router = useRouter();

  return (
    <header className="flex items-center gap-4 px-4 py-4 bg-black">
      <button
        type="button"
        onClick={() => router.back()}
        className="text-white p-1 hover:opacity-80 transition-opacity"
        aria-label="戻る"
      >
        <Icon name="arrow-left" size={24} />
      </button>
      <h1 className="text-white text-lg font-normal flex-1">{name}</h1>
    </header>
  );
};
