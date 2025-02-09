const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" bg-welcomePage-primary h-screen p-8 m-4 rounded-[3rem] overflow-hidden flex">
      {children}
    </section>
  );
};

export default Container;
