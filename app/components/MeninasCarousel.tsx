"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import Autoplay from "embla-carousel-autoplay";

export default function MeninasCarousel() {
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" });

  if (isMediumOrLarger) {
    return (
      <div className="meninas h-[60vh] flex flex-wrap w-full">
        <div className="menina kalo w-1/2 md:w-auto md:flex-auto bg-yellow"></div>
        <div className="menina nath w-1/2 md:w-auto md:flex-auto bg-pink"></div>
        <div className="menina mayu w-1/2 md:w-auto md:flex-auto bg-blue"></div>
        <div className="menina izu w-1/2 md:w-auto md:flex-auto bg-yellow"></div>
        <div className="menina panshee w-1/2 md:w-auto md:flex-auto bg-pink"></div>
      </div>
    );
  }

  return (
    <Carousel
      plugins={[
        Autoplay({ delay: 4000 }),
      ]}
    >
      <CarouselContent className="h-[60vh]">
        <CarouselItem>
          <div className="menina kalo h-full bg-yellow"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="menina nath h-full bg-pink"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="menina mayu h-full bg-blue"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="menina izu h-full bg-yellow"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="menina panshee h-full bg-pink"></div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
