import AsideBar from "@/components/aside-bar";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1 grid grid-cols-[250px_1fr] overflow-hidden">
      <AsideBar />
      {children}
    </section>
  );
}
