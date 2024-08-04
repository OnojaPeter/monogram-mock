import { useState, useRef, useContext  } from "react";
import { useParams, Link } from 'react-router-dom';
import { IoChevronForwardOutline, IoChevronBackOutline  } from "react-icons/io5";
import Accordion from "./Accordion";
import { CartContext } from "../contexts/CartContext";
import { products } from "../Data";


const ProductDetails = () => {
    const {cartItems, addItemToCart, isLoading, isAdded, clearNotification } = useContext(CartContext);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const modalRef = useRef(null);

    const { slug } = useParams();
    const product = products.find(product => product.slug === slug)
    if (!product) {
        console.log('Product not found')
    }
    const handleQuantityChange = (event)=> {
        const quantity = parseInt(event.target.value, 10);
        setSelectedQuantity(quantity)
    }
    
    const handleAddToCart = () => {
        addItemToCart(product, selectedQuantity);
        // setIsAdded(true);
    };

    const handleImageClick = (index) => {
        setCurrentImage(product.images[index]);
        setShowModal(true);
        setModalImageIndex(index);
    };
    const handleModalClose = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };
    
    const handleNext = () => {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
        setCurrentImage(product.images[(modalImageIndex + 1) % product.images.length]);
    };
    
    const handlePrevious = () => {
        setModalImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
        setCurrentImage(product.images[(modalImageIndex - 1 + product.images.length) % product.images.length]);
    };
    const handleImageHover =(index)=> {
        setCurrentImage(product.images[index])
    }

    return (
        <section className="py-24 md:py-28 bg-[#f0efed] ">
            <div className="max-w-[600px] md:max-w-[728px] lg:max-w-[994px] xl:max-w-[1220px] mx-auto ">
                <div className="flex flex-col lg:flex-row">
                
                <h1 className="uppercase text-[2.2rem] mb-1 block lg:hidden px-2">{product.name}</h1>
                    <div className="w-full lg:w-1/2 lg:pr-3">
                        <div>
                            <div className="aspect-ratio">
                                <img className="p-2" src={currentImage === '' ? setCurrentImage(product.image): currentImage} alt="" />
                            </div>
                            {product.images &&
                                <div className="flex flex-wrap w-full ">
                                    {product.images.map((src, index) => 
                                        <img 
                                            onClick={() => handleImageClick(index)}
                                            onMouseEnter={()=> handleImageHover(index)} 
                                            key={index} 
                                            className="w-1/6 lg:w-1/2 p-2 max-h-[200px] object-cover" src={src} alt="" 
                                        />
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-3 ">
                        <div className="m-2">
                            <h1 className="uppercase text-[2.2rem] mb-3 hidden lg:block">{product.name}</h1>
                            <div className="flex justify-between mb-5">
                                <p><span className="text-[#ff7952] text-[1.5rem] font-semibold">${product.price}</span> <span className="text-[1.45rem] line-through">${Math.floor(product.price * 1.182)}</span></p>
                            </div>
                            <div className="flex items-center flex-wrap gap-2"> 
                                <p>or 4 interest-free payments of ${product.price / 4} with </p>

                                <div>
                                    <svg title="Sezzle" height="18" enableBackground="new 0 0 798.16 199.56" viewBox="0 0 798.16 199.56" style={{verticalAlign: "text-top"}}><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="76.8588" x2="44.4249" y1="136.1435" y2="97.4903"><stop offset="0" stopColor="#ce5dcb"></stop><stop offset=".2095" stopColor="#c558cc"></stop><stop offset=".5525" stopColor="#ac4acf"></stop><stop offset=".9845" stopColor="#8534d4"></stop><stop offset="1" stopColor="#8333d4"></stop></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="78.0353" x2="147.7278" y1="92.1462" y2="92.1462"><stop offset=".0237" stopColor="#ff5667"></stop><stop offset=".6592" stopColor="#fc8b82"></stop><stop offset="1" stopColor="#fba28e"></stop></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="0" x2="95.9173" y1="67.1002" y2="67.1002"><stop offset="0" stopColor="#00b874"></stop><stop offset=".5126" stopColor="#29d3a2"></stop><stop offset=".6817" stopColor="#53dfb6"></stop><stop offset="1" stopColor="#9ff4d9"></stop></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="65.3598" x2="161.2761" y1="132.4593" y2="132.4593"><stop offset="0" stopColor="#fcd77e"></stop><stop offset=".5241" stopColor="#fea500"></stop><stop offset="1" stopColor="#ff5b00"></stop></linearGradient><path d="m13.54 134.2c18.05 18.05 47.31 18.05 65.36 0l1.73-1.73c9.02-9.02-9.03-56.34 0-65.36z" fill="url(#a)"></path><path d="m82.37 65.37-1.73 1.73c-9.02 9.02 9.02 56.34 0 65.36l67.09-67.09c-9.03-9.02-20.85-13.53-32.68-13.53-11.83-.01-23.66 4.51-32.68 13.53" fill="url(#b)"></path><path d="m13.54 68.84c-18.05 18.05-18.05 47.31 0 65.36l68.84-68.84c18.05-18.05 18.05-47.31 0-65.36z" fill="url(#c)"></path><path d="m78.9 134.2c-18.05 18.05-18.05 47.31 0 65.36l68.84-68.84c18.05-18.05 18.05-47.31 0-65.36z" fill="url(#d)"></path><g fill="#382757"><path d="m415.54 100.14c-1.39-4.76-3.46-9.31-6.17-13.5-4.63-7.17-11.06-13.15-18.62-17.29-11.93-6.51-26.18-8.04-39.29-4.22-13.24 3.86-24.17 12.66-30.79 24.79-6.58 12.07-8.1 25.97-4.27 39.17l.04.13c.88 2.94 2.29 6.7 2.32 6.76 4.39 10.28 11.75 18.13 22.48 23.99 7.58 4.15 16.11 6.34 24.67 6.34 4.92 0 9.83-.71 14.6-2.12 10.09-2.95 18.89-8.77 25.54-16.95l.42-.52c1.7-2.14 3.23-4.43 4.56-6.82 2.37-4.23.85-9.6-3.38-11.97-1.31-.73-2.79-1.12-4.29-1.12-3.19 0-6.13 1.72-7.68 4.5-2.17 3.88-5.05 7.26-8.55 10.02-.3.24-.59.5-.74.68-3.22 2.4-6.86 4.2-10.8 5.36-8.62 2.53-18.02 1.52-25.95-2.8-5.23-2.85-9.6-7.08-12.71-12.26l72.67-21.31c4.63-1.36 7.29-6.23 5.94-10.86zm-49.49-19.61c5.62 0 11.25 1.45 16.29 4.19 4.97 2.71 9.23 6.66 12.31 11.41.17.27.35.55.52.83l-63.27 18.56c-.16-5.97 1.28-11.91 4.18-17.22 4.36-7.99 11.57-13.8 20.31-16.37 3.18-.93 6.43-1.4 9.66-1.4z"></path><path d="m508.81 149.61h-48.08l53.77-78.98c1.02-1.49 1.12-3.41.28-5.01s-2.49-2.59-4.3-2.59h-68.36c-4.54 0-8.23 3.69-8.23 8.23s3.69 8.23 8.23 8.23h45.81l-53.75 78.98c-1.02 1.5-1.12 3.42-.28 5.01.84 1.6 2.49 2.58 4.3 2.58h70.6c4.54 0 8.23-3.69 8.23-8.23.01-4.52-3.68-8.22-8.22-8.22z"></path><path d="m615.33 149.61h-48.07l53.76-78.98c1.02-1.49 1.12-3.41.28-5.01-.84-1.59-2.49-2.58-4.3-2.58h-68.35c-4.54 0-8.23 3.69-8.23 8.23s3.69 8.23 8.23 8.23h45.81l-53.75 78.98c-1.01 1.5-1.12 3.42-.28 5.01.85 1.6 2.49 2.58 4.3 2.58h70.6c4.54 0 8.23-3.69 8.23-8.23 0-4.53-3.69-8.23-8.23-8.23z"></path><path d="m662.8 18.47c-4.54 0-8.23 3.69-8.23 8.23v131.43c0 4.54 3.69 8.23 8.23 8.23s8.23-3.7 8.23-8.23v-131.43c0-4.54-3.69-8.23-8.23-8.23z"></path><path d="m797.81 100.15c-1.38-4.76-3.46-9.3-6.16-13.5-4.63-7.17-11.07-13.15-18.62-17.29-11.94-6.51-26.17-8.04-39.29-4.22-13.24 3.86-24.17 12.66-30.78 24.79-6.59 12.06-8.1 25.97-4.28 39.17l.04.14c.88 2.93 2.29 6.69 2.32 6.76 4.39 10.28 11.75 18.12 22.48 23.99 7.58 4.15 16.11 6.34 24.67 6.34 4.91 0 9.83-.71 14.6-2.12 10.09-2.95 18.89-8.77 25.53-16.94l.43-.55c1.7-2.15 3.23-4.44 4.55-6.8 2.37-4.23.85-9.6-3.38-11.97-1.31-.73-2.79-1.12-4.29-1.12-3.19 0-6.13 1.72-7.68 4.5-2.17 3.89-5.05 7.26-8.54 10.02-.31.24-.59.5-.75.68-3.22 2.4-6.86 4.2-10.81 5.36-8.61 2.53-18.02 1.52-25.95-2.8-5.23-2.85-9.61-7.08-12.71-12.26l72.68-21.33c4.63-1.36 7.29-6.23 5.94-10.85zm-49.48-19.62c5.62 0 11.25 1.45 16.29 4.19 4.97 2.71 9.22 6.66 12.31 11.41.17.27.35.55.52.83l-63.27 18.56c-.16-5.98 1.28-11.91 4.18-17.22 4.36-7.99 11.57-13.8 20.31-16.37 3.17-.93 6.42-1.4 9.66-1.4z"></path><path d="m288.83 120.31c-2.44-3.57-5.97-6.55-10.47-8.85-7.37-3.75-16.92-5.47-26.08-6.9l-1.45-.22c-6.43-1-13.08-2.04-17.35-4.2-3.23-1.64-4.38-3.48-4.38-7.07 0-6.95 7.57-12.19 17.6-12.19 11.98 0 18.66 3.5 26.16 8.07 1.39.85 2.99 1.3 4.61 1.3 3.12 0 5.95-1.58 7.58-4.24 1.23-2.02 1.61-4.4 1.05-6.71-.56-2.3-1.98-4.25-4-5.48-4.15-2.54-8.69-5.18-14.42-7.24-6.45-2.31-13.31-3.44-20.97-3.44-9.24 0-17.89 2.81-24.34 7.91-7.09 5.6-11 13.42-11 22.02 0 10.3 4.88 18.22 14.11 22.89 6.78 3.43 14.84 4.68 22.63 5.89l1.44.22c19.98 3.13 25.76 5.95 25.76 12.56 0 8.19-8.2 13.55-20.89 13.66h-.46c-13.62 0-21.26-5.23-25.36-8.04-.68-.46-1.26-.87-1.84-1.23-1.41-.88-3.03-1.34-4.69-1.34-3.08 0-5.9 1.56-7.53 4.17-2.59 4.15-1.32 9.63 2.83 12.22.23.14.58.38.97.65l.24.16c4.87 3.33 16.27 11.15 35.38 11.15h.61c11.02-.1 20.48-3.06 27.38-8.58 7.15-5.73 11.09-13.83 11.09-22.81-.01-5.45-1.43-10.26-4.21-14.33z"></path></g></svg>
                                </div>
                            </div>
                            
                            {isAdded && 
                                <div className="alert alert-success mt-2 flex justify-between">Added to bag!
                                    <button onClick={() => clearNotification()}>
                                        <svg width="26" height="26" className="float-right" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </button>
                                </div>
                            }

                            <div className="flex gap-2 mt-5">
                                <div className="flex items-center">
                                    <select
                                        value={selectedQuantity}
                                        onChange={(event) => handleQuantityChange(event)}
                                        className="bg-white py-1 px-4 rounded-full border-2 border-blue-900" name="" id="">
                                            {[...Array(6)].map((_, i) => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                    </select>                           
                                </div>
                                <div>
                                    <div  className="h-full w-32  rounded-full bg-blue-900 text-white ">
                                        {isLoading ? 
                                            <div className='flex justify-center cursor-not-allowed'>
                                                <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a10" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#FFFFFF"></stop><stop offset=".3" stopColor="#FFFFFF" stopOpacity=".9"></stop><stop offset=".6" stopColor="#FFFFFF" stopOpacity=".6"></stop><stop offset=".8" stopColor="#FFFFFF" stopOpacity=".3"></stop><stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a10)" strokeWidth="29" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FFFFFF" strokeWidth="29" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
                                            </div>
                                        :
                                            <button onClick={ handleAddToCart} className="px-3 h-full rounded-full">ADD TO BAG</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-5 font-semibold">
                                **PRE-ORDER ITEM: <span className="font-normal">Estimated to ship in</span> SEPTEMBER**
                            </h4>
                        </div>

                        <Accordion product={product} />
                    </div>
                </div>

                <div className="bg-[#1a2456] text-white p-5 lg:p-16 space-y-5 mt-6 lg:mt-20 md:mx-2">
                    <h3 className="pt-4 ">MONOGRAM CREATOR APP</h3>
                    <p>
                        Included with every Console is Monogram Creator app, a free and powerful macOS and Windows app to optimize Creative Console to any workflow; no coding or scripting required.
                    </p>
                    <ul className="list-disc ml-10 lg:ml-12 pb-7">
                        <li>Adjust sensitivity and range for any control to get the perfect feel</li>
                        <li>Set and change LED colors for any control</li>
                        <li>Advanced gestures for every input: dial press, dial press & turn, key press, key press-and-hold, Orbiter tilt mode</li>
                        <li>Standard input device mode: keyboard shortcuts, keyboard macros, joystick, mouse actions</li>
                        <li>Digitally label modules and bring up a preview on screen for a reminder</li>
                        <li>Unlock a new world of creativity with Audio, Photo, and Video Console Packs; giving your Console hundreds of more functions and profiles</li>
                    </ul>
                    
                </div>

                <div className="mt-6 lg:mt-20 md:mx-2 min-h-[300px] relative w-full h-full overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0">
                        <img src="/images/mono_poster.jpg" alt="" className="object-cover w-full h-full" />
                    </div>

                    <div className="relative flex items-center justify-center p-6 md:p-12 lg:p-20">
                        <div className="white-bg text-center space-y-4 py-4 md:py-10 px-6 md:px-12 lg:px-16">
                            <h4 className="text-xl md:text-2xl">Audio and Music Production</h4>
                            <p className="lead ">
                                Add dynamic expression and a tactile experience to your digital music composition with Creative Console. Personalize your 
                                compositions and productions with the uniquely modular toolset that can be used with Digital Audio&nbsp;Workstations.
                            </p>
                            <button className="bg-[#1a2456] text-white rounded-full px-4 py-[2px] md:py-2 md:px-6 md:py-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                onClick={handleModalClose}
              >
                <div ref={modalRef} className="relative ">
                    <div className="relative flex justify-end">
                        <button
                            onClick={()=> setShowModal(false)}
                            className="text-gray-400 hover:text-white "
                        >
                            <svg width="40" height="40" className="float-right" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
                        </button>
                    </div>

                  <img className="px-5 md:px-0 max-w-[100%] md:max-w-2xl lg:max-w-3xl max-h-screen" src={currentImage} alt="Full Size" />
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 text-black bg-gray-200 hover:bg-gray-100 p-3 rounded-full text-3xl"
                  >
                    <IoChevronBackOutline  />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 ext-black bg-gray-200 hover:bg-gray-100 p-3 rounded-full text-3xl"
                  >
                    <IoChevronForwardOutline />
                  </button>
                </div>
              </div>
            )}
        </section>
    );
};


export default ProductDetails