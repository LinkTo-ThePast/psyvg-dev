import Footer from "./Footer";
import Header from "./Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-primary_white overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default LandingLayout;
