import "./globals.css";

export const metadata = {
  title: "Metalk",
  description: "Metalk"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
