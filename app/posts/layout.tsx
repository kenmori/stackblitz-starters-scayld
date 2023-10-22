"use client";

import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('Layout rendered');
  }, []);
  return (
    <>
      <h2>Layout Header</h2>
      {children}
      <h2>Layout Footer</h2>
    </>
  );
}