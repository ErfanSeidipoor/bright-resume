interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{ fontFamily: "Helvetica", margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
