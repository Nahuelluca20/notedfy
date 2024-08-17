import AsideBar from "@/components/navigation/aside-bar";
import Header from "@/components/navigation/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex-1 grid grid-cols-[250px_1fr] overflow-hidden h-screen">
        <AsideBar />
        <div className="p-4">{children}</div>
      </div>
    </section>
  );
}
