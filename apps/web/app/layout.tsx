import "./global.css";

export const metadata = {
  title: "Bright resume",
  description: "Build your resume to be seen by Bright resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
