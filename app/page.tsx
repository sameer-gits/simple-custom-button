import Button from "@/components/Button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="flex justify-center items-center h-screen bg-black">
        <Button buttonLink="/" buttonText="MY BUTTON" />
      </div>
    </main>
  );
}
