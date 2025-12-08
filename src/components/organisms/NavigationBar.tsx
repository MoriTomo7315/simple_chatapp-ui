import { Icon } from "../atoms/Icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
    <>
      <Separator />
      <nav className="flex items-center justify-around px-4 py-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Button
              type="button"
              key={tab.id}
              variant="ghost"
              size="icon"
              onClick={() => onTabClick?.(tab.id)}
              className={cn(
                "p-3",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              aria-label={tab.id}
            >
              <Icon name={tab.icon} size={24} />
            </Button>
          );
        })}
      </nav>
    </>
  );
};
