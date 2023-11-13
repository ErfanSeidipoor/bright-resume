import { FontFamily } from "@bright-resume/components/types/index.type";
import { MainLayout } from "../components/layouts/MainLayout";
// import "./global.css";

interface Props {
  children: React.ReactNode;
}
export default async function Index({ children }: Props) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{ fontFamily: "sans-serif" }}
      >
        <MainLayout>
          <main className="app">{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
