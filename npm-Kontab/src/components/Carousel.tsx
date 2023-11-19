import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 15000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden rounded-r absolute">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)`}}
        
      >
        {slides.map((img) => (
          <img key={img} src={img} alt="" className="w-full object-cover object-center"/>
          
          
        ))}
        
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-10">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <div key={i}
              className={`
              transition-all w-[40px] h-1 bg-white rounded
              ${curr === i ? "p-[2px]" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      
    </div>
    
  );
}