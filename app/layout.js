import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bharath Agrovet Industries — Leading Poultry Producer in Karnataka",
  description:
    "Established in 2005, Bharath Agrovet Industries is a leading poultry producing company in Mangaluru, committed to quality and service with integrated breeding, hatching, feed milling, and processing operations.",
  keywords:
    "Bharath Agrovet, poultry, broiler, hatchery, feed mill, chicken, Mangalore, Karnataka",
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
