"use client";
import { useEffect, useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // effect for shrinking
  const [initialLayout, setInitialLayout] = useState<boolean>(true);
  // trigger effect
  useEffect(() => {
    setInitialLayout(false);
  }, []);

  return (
    <main id="main-container" className={`min-h-screen bg-primary_white`}>
      <div
        id="main-card"
        className={`bg-primary_green w-full min-h-screen ${
          initialLayout ? "rounded-none" : "rounded-3xl p-6"
        } transition-all duration-700 ease-in-out`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
