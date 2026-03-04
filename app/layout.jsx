import { DM_Sans } from "next/font/google";
import "./globals.css";
import SimpleHeader from "@/components/SimpleHeader";
import SimpleFooter from "@/components/SimpleFooter";
import { ThemeProvider } from "@/components/Providers";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

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
    title: "Teja Akella | Computer Engineering Student @ Georgia Tech",
    description:
      "Computer Engineering student specializing in Cybersecurity, Systems & Architecture. AI Security Research Intern at Georgia Tech CyFI Lab. Former Software Engineer Intern at NASA Ames Research Center. Building innovative solutions in AI security, full-stack development, and distributed systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${dmSans.className} flex flex-col min-h-screen antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SimpleHeader />
          {children}
          <SimpleFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
