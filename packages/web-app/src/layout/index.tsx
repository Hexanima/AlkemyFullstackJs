import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen bg-cyan-200">{children}</div>
  );
}
