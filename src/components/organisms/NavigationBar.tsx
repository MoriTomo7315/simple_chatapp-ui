import { Icon } from "../atoms/Icon";

interface NavigationBarProps {
  activeTab?: "chat" | "create" | "search" | "profile";
  onTabClick?: (tab: "chat" | "create" | "search" | "profile") => void;
}

export const NavigationBar = ({ activeTab = "chat", onTabClick }: NavigationBarProps) => {
  const tabs: Array<{ id: "chat" | "create" | "search" | "profile"; icon: "chat" | "plus" | "search" | "profile" }> = [
    { id: "chat", icon: "chat" },
    { id: "create", icon: "plus" },
    { id: "search", icon: "search" },
    { id: "profile", icon: "profile" },
  ];

  return (
    <nav className="flex items-center justify-around px-4 py-3 border-t border-gray-700 bg-black">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabClick?.(tab.id)}
            className={`p-3 transition-colors ${
              isActive ? "text-orange-500" : "text-white"
            }`}
            aria-label={tab.id}
          >
            <Icon name={tab.icon} size={24} />
          </button>
        );
      })}
    </nav>
  );
};
