"use client";
import { useEffect, useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // effect for shrinking
  const [initialLayout, setInitialLayout] = useState<boolean>(true);
  // trigger effect
  useEffect(() => {
    // initial point: green card takes all the viewport; final state: green card starts to shinrk!
    setInitialLayout(false);
  }, []);

  return (
    <main
      id="main-container"
      className={`min-h-screen bg-black relative overflow-hidden`}
    >
      <div
        id="main-card"
        className={`bg-primary_green transition-all duration-700 ease-in-out ${
          initialLayout
            ? "rounded-none p-0 w-full h-screen"
            : "rounded-3xl p-6 h-[95vh] w-[95vw]"
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
