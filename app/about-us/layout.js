import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "About Us | Trusted Train Travel Booking – AmtrakTrainTicket.com",
  description: "Learn about AmtrakTrainTicket.com, a trusted U.S.-based platform for train travel planning since 2000. Discover our mission, services, and how we make rail journeys easy and affordable for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
