import { MainLayout } from "../components/layouts/MainLayout";

interface Props {
  children: React.ReactNode;
}
export default async function Index({ children }: Props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{ fontFamily: "Helvetica" }}>
        <MainLayout>
          <main className="app">{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
