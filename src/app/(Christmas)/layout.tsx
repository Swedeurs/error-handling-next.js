import { TopNav } from "@/components/top-nav";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="p-4">
      <TopNav />
      <div className="p-8">{children}</div>
    </main>
  );
}
