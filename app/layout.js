import { Toaster } from "sonner";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Neupay Finance",
  description:
    "Securing Transactions, Simplifying Trust: Your Escrow Solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} scroll-transition`}>
        {children}
      </body>
      <Toaster position="top-right" />
    </html>
  );
}
