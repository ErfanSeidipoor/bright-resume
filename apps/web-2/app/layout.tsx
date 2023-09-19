import { MainLayout } from "../components/layouts/MainLayout";
import "./global.css";

interface Props {
  children: React.ReactNode;
}
export default async function Index({ children }: Props) {
  return (
    <MainLayout>
      <main className="app">{children}</main>
    </MainLayout>
  );
}
