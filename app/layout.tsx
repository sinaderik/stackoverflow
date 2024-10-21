import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter,Space_Grotesk} from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stackoverflow",
  description: "A community-driven platform for asking and answering programming questions",
  icons:{
    icon:"/public/assets/images/site-logo.svg"
  }
};

const inter=Inter({
  subsets:["latin"],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
})

const spaceGrotesk=Space_Grotesk({
  subsets:["latin"],
  weight:['300','400','500','600','700'],
  variable:'--font-spaceGrotesk'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      elements:{
        formButtonPrimary:"primary-gradient",
        footerActionLink:"primary-text-gradient hover:text-primary-500"
      }
    }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${spaceGrotesk.variable}`}
        >
          <h1 className="h1-bold">This is a peice of text</h1>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
