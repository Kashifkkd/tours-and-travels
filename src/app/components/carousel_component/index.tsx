"use client"

import { useRef, useState, useEffect, Children } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import "@/app/styles/hide-scrollbar.css";

type CarouselComponentPropsType = {
  children: React.ReactNode;
  showIconOnHover?: boolean;
  alwaysShowIcons?: boolean;
  moveIconsOuter?: boolean;
};

const CarouselComponent = ({ children, showIconOnHover, alwaysShowIcons, moveIconsOuter }: CarouselComponentPropsType) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [hovered, setHovered] = useState(false);

  const checkArrows = () => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const timeout = setTimeout(checkArrows, 100);

    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", checkArrows);
    }

    return () => {
      clearTimeout(timeout);
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", checkArrows);
      }
    };
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div
      className="hide-scrollbar relative w-full overflow-hidden"
      onMouseEnter={() => showIconOnHover && setHovered(true)}
      onMouseLeave={() => showIconOnHover && setHovered(false)}
    >
      {(showLeftArrow || alwaysShowIcons) && (!showIconOnHover || hovered || alwaysShowIcons) && (
        <button
          className={`absolute ${moveIconsOuter ? '-left-8' : 'left-2'} top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md`}
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </button>
      )}
      <div
        ref={carouselRef}
        className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-4 no-scrollbar"
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden flex-shrink-0 mx-1"
          >
            {child}
          </div>
        ))}
      </div>
      {(showRightArrow || alwaysShowIcons) && (!showIconOnHover || hovered || alwaysShowIcons) && (
        <button
          className={`absolute ${moveIconsOuter ? '-right-8' : 'right-2'} top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md`}
          onClick={scrollRight}
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button>
      )}
    </div>
  );
};

export default CarouselComponent;