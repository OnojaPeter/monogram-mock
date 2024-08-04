import { useState } from "react";
import {Link} from 'react-router-dom';
import { products } from "../Data";


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
        {products.slice(5).map((product, index) => (
          <div
            key={product.id}
            onMouseEnter={() => hover(product.id)}
            onMouseLeave={() => notHover()}
            className={`w-full  px-2 lg:px-6 mb-6 md:basis-1/2 md:max-w-[50%] xl:basis-1/3 xl:max-w-[33%]`}
          >
            <Link to={`/products/${product.slug}`}>  
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards2Section;
