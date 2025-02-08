const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className="flex flex-row justify-between">{children}</header>;
};

export default Header;
