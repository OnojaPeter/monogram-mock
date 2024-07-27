import { useState } from "react";
import {Link} from 'react-router-dom';


const firstProducts = [
  {
    id: 1,
    name: "Monogram Keyboard",
    price: "399",
    image: "/images/Monogram_Keyboardv2.webp",
    hoverImage: "/images/monogram_Keyboardv2_hover.webp"
  },
  {
    id: 2,
    name: "Monogram Multipad",
    price: "199",
    image: "/images/MonogramMultipad.webp",
    hoverImage: "/images/Monogram_Keyboard_3.webp"
  },
  {
    id: 3,
    name: "Monogram Core",
    price: "159",
    image: "/images/Packaging_CoreBracket1.webp",
    hoverImage: "/images/Consoles_CoreBracket1_Monogram.webp"
  },
  {
    id: 4,
    name: "Slider Module",
    price: "159",
    image: "/images/Packaging_SliderHeroBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_SliderBracket1_Monogram.webp"
  },
  {
    id: 5,
    name: "Orbiter Module",
    price: "159",
    image: "/images/Packaging_OrbiterBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_OrbiterHero_Monogram.webp"
  },
  {
    id: 6,
    name: "Essential Keys Module",
    price: "129",
    image: "/images/Packaging_KeysBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_KeysBracket1_Monogram.webp"
  },
  {
    id: 7,
    name: "Dial Module",
    price: "129",
    image: "/images/Packaging_DialHeroBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_DialBracket1_Monogram.webp"
  },
  {
    id: 8,
    name: "Monogram Carrying Case",
    price: "59",
    image: "/images/20221018_MonogramCC_Case.webp",
    hoverImage: "/images/20221018_MonogramCC_Case_02.webp"
  },
  {
    id: 9,
    name: "Console Pack: Video",
    price: "69",
    image: "/images/SW-box-render-mini-video.webp",
    // hoverImage: ""
  },
  {
    id: 10,
    name: "Console Pack: Photo",
    price: "39",
    image: "/images/SW-box-render-mini-photo.webp",
    // hoverImage: "/images/Consoles_KeysBracket1_Monogram.webp"
  },
  {
    id: 11,
    name: "Console Pack: Audio",
    price: "29",
    image: "/images/SW-box-render-mini-midi.webp",
    // hoverImage: "/images/Consoles_DialBracket1_Monogram.webp"
  },
  {
    id: 12,
    name: "Monogram Care",
    price: "19 - 129",
    image: "/images/Care-updated-traveler.webp",
    hoverImage: "/images/MONO_CONSOLE_CARE_STU.webp"
  },
];
const Cards2Section = () => {
  const [isHover, setIsHover] = useState(null);

  const hover = (id) => {
    setIsHover(id);
  };
  const notHover = () => {
    setIsHover(null);
  };
  return (
    <section className="px-5">
      <div className="max-w-[600px] md:max-w-[728px] lg:max-w-[994px] xl:max-w-[1220px] mx-auto flex flex-wrap mb-4 md:mb-12 pt-6 md:pt-12 relative" >
        {firstProducts.map((product, index) => (
          <div
            key={index}
            onMouseEnter={() => hover(product.id)}
            onMouseLeave={() => notHover()}
            className={`w-full  px-2 lg:px-6 mb-6 md:basis-1/2 md:max-w-[50%] xl:basis-1/3 xl:max-w-[33%]`}
          >
            
            <div className="aspect-ratio">
              <img
                className={` w-full transition-opacity duration-300 ease-in-out object-cover `}
                style={{ opacity: product.hoverImage & isHover === product.id ? 0 : 1, }}
                src={
                   product.image
                }
                alt={`slide ${product.name}`}
              />
              {product.hoverImage &&
                <img
                    className={`absolute top-0 left-0 h-full w-full transition-opacity duration-300 ease-in-out object-cover `}
                    style={{opacity: isHover === product.id ? 1 : 0}}
                    src={
                    product.hoverImage 
                    }
                    alt={`slide ${product.name}`}
                />
                }
            </div>
            <div className="dark-color pt-2">
              <div className="flex justify-between relative">
                <h3 className="uppercase mb-2">{product.name}</h3>
                <div className="min-w-[8rem] text-end">
                    <p className="mb-2 relative transition-opacity duration-300 ease-in-out" style={{opacity: isHover === product.id ?0 : 1, }}>${product.price}</p> 
                    <button className="absolute top-0 right-0 btn px-4 transition-opacity duration-300 ease-in-out bg-[#1a2456] hover:bg-[#111839] text-white rounded-[50rem] border border-[#0e142f]"
                        style={{opacity: isHover === product.id ?1 : 0}} >Shop Now
                    </button>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards2Section;
