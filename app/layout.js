import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Happy Poultry — Fresh Halal Chicken | Badiadka, Kasaragod",
  description:
    "Happy Poultry is a family-owned poultry group based in Badiadka, Kasaragod, Kerala. With over 20 years in the chicken business, we deliver fresh Halal chilled chicken, live birds, and quality poultry products.",
  keywords:
    "Happy Poultry, halal chicken, broiler, live birds, poultry feeds, Badiadka, Kasaragod, Kerala, fresh chicken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
