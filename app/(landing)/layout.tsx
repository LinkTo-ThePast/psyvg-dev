import LandingLayout from "../components/layouts/landing/LandingLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LandingLayout>{children}</LandingLayout>;
};

export default Layout;
