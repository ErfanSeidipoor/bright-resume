import { ThemeProvider } from "@chatbot/providers/theme";
import { ApolloProvider } from "@chatbot/providers/apollo";
import { ToastProvider } from "@chatbot/providers/toast";

import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ApolloProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
