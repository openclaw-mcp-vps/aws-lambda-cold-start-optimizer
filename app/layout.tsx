import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lambda Cold Start Optimizer",
  description: "Analyze your AWS Lambda functions and get actionable recommendations to reduce cold start times and cut costs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a8289c2a-ff9e-4fef-bce7-de5db5beca2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
