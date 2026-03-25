"use client";

import { DemoRequestProvider } from "./DemoRequestProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <DemoRequestProvider>{children}</DemoRequestProvider>
    </ThemeProvider>
  );
}
