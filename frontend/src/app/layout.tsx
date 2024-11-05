import type { Metadata } from "next";
import "./globals.css";
import { UploadProvider } from './context/UploadContext';

export const metadata: Metadata = {
  title: "Text Extraction",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UploadProvider>
          {children}
        </UploadProvider>
      </body>
    </html>
  );
}

