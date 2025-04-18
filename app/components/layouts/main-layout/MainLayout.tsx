"use client";
import { useEffect, useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // effect for shrinking
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // trigger effect
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main
      id="main-container"
      className="min-h-screen min-w-full bg-primary_white"
    >
      <div
        id="main-card"
        className={`${
          isLoading
            ? "min-h-screen w-full"
            : "min-h-screen w-full p-6 rounded-md"
        } bg-primary_green transition duration-300 ease-in-out`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
