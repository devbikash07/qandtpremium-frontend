
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(

   <>
   <CarouselComponent/>
   </>
  );
}
