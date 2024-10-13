import { ReactNode } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen min-h-screen flex flex-col">
      <Header />
      <main className="w-full h-full grow overflow-y-auto p-4 flex flex-col gap-4">{children}</main>
      <Footer />
    </div>
  );
}
