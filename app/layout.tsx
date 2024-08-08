import "./globals.css";
import localFont from "next/font/local";

// Fonts
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-poppins",
});
const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} pb-16 sm:pb-0`}
      >
        {children}
      </body>
    </html>
  );
}
