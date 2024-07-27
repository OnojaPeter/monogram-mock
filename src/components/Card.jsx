import { useState } from "react";
import {Link} from 'react-router-dom';


const firstProducts = [
  {
    id: 1,
    name: "mini console",
    description: "Ideal for everyday shortcuts. Adaptable to any workflow",
    price: "249",
    image: "/images/Everyday-Bundle-Mocks-final.webp",
    hoverImage: "/images/Everyday-Bundle-Mocks.webp"
  },
  {
    id: 2,
    name: "Audio Console",
    description: "Ideal for music & audio. Adaptable to any workflow.",
    price: "499",
    image: "/images/Packaging_TravelerClosedBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_TravelerBracket1_Monogram.webp"
  },
  {
    id: 3,
    name: "Photo Console",
    description: "Ideal for photo & video. Adaptable to any workflow.",
    price: "599",
    image: "/images/Packaging_StudioClosedBracket1_Monogram_May.webp",
    hoverImage: "/images/Consoles_StudioBracket1_Monogram.webp"
  },
  {
    id: 4,
    name: "Video Console",
    description: "Ideal for Video & Film. Adaptable to any workflow.",
    price: "899",
    image: "/images/Packaging_MasterClosedBracket1_Monogram.webp",
    hoverImage: "/images/Consoles_MasterBracket1_Monogram.webp"
  },
  {
    id: 5,
    name: "Monogram Keyboard + Multipad",
    description: "Adaptable to any workflow.",
    price: "549",
    image: "/images/Monogram_Keyboard_Multipad.webp",
    hoverImage: "/images/Monogram_Keyboard_Multipad2.webp"
  },
];
const CardsSection = () => {
  const [isHover, setIsHover] = useState(null);

  // const hover = () => {
  //     !isHover ? setIsHover(true) : setIsHover(false)
  // }
  const hover = (id) => {
    // console.log(id)
    setIsHover(id);
  };
  const notHover = () => {
    setIsHover(null);
  };
  return (
    <section className="px-5">
        <div id="next"></div>
      <div className="max-w-[600px] md:max-w-[728px] lg:max-w-[994px] xl:max-w-[1220px] mx-auto flex flex-wrap mb-4 pt-6 md:pt-12 relative" >
        {firstProducts.map((product, index) => (
          <div
            key={index}
            onMouseEnter={() => hover(product.id)}
            onMouseLeave={() => notHover()}
            className={`w-full ${product.id === 5 ? 'w-full ' : 'md:w-[50%]'}  px-2 mb-6`}
          >
            
            <div className="relative">
              <img
                className={`h-full w-full transition-opacity duration-300 ease-in-out object-cover ${product.id === 5 ? 'md:h-[272px] lg:h-[380px]' : ''}`}
                style={{opacity: isHover === product.id ? 0 : 1, }}
                src={
                   product.image
                }
                alt={`slide ${product.name}`}
              />
              <img
                className={`absolute top-0 left-0 h-full w-full transition-opacity duration-300 ease-in-out object-cover `}
                style={{opacity: isHover === product.id ? 1 : 0}}
                src={
                  product.hoverImage 
                }
                alt={`slide ${product.name}`}
              />
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
              <p className="cardText">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
