const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col h-screen bg-cyan-700">{children}</div>;
};

export default FormWrapper;
