interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center justify-center px-4 py-4 border-b border-gray-700">
      <h1 className="text-white text-lg font-medium">{title}</h1>
    </header>
  );
};

