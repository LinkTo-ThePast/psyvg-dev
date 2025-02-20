const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="flex flex-row gap-4 px-4 py-4 font-bold justify-evenly">
      {children}
    </nav>
  );
};

export default Navbar;
