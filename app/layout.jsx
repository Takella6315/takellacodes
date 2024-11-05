import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import { ProgressBarProvider, ThemeProvider } from "@/components/Providers";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://takellacodes.vercel.app/"),

  title: {
    template: "Teja Akella| %s",
    default: "Teja Akella| Home",
  },
  description: `Teja Akella's Portfolio Website`,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Teja",
    "Akella",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
  ],
  authors: [
    { name: "Teja" },
    { name: "Akella", url: "https://takellacodes.vercel.app/" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Teja Akella | Software and Security Engineering",

    description:
      "Welcome! Explore my projects, journey, and passion for turning ideas into reality with code.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ProgressBarProvider>
            <Header />
            {children}
            <BackToTopButton />
            <Footer />
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
