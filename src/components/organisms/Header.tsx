import { Separator } from "@/components/ui/separator";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <header className="flex items-center justify-center px-4 py-4">
        <h1 className="text-foreground text-lg font-medium">{title}</h1>
      </header>
      <Separator />
    </>
  );
};

