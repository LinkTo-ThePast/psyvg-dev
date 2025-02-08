const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="flex flex-row g-2 font-bold justify-evenly">{children}</nav>
  );
};

export default Navbar;
