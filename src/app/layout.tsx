// app/layout.tsx
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head /> {/* Required placeholder for metadata injection */}
      <body>{children}</body>
    </html>
  );
}
