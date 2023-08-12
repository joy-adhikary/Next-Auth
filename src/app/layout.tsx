
import './globals.css'
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

export const metadata: Metadata = {
  title: "Auth using Next-Auth",
  description: "Authentication",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
