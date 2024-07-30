import { useState, useRef } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline  } from "react-icons/io5";
import Accordion from "./Accordion";

const ProductDetails = () => {
    const [currentImage, setCurrentImage] = useState('/images/Packaging_TravelerClosedBracket1_Monogram.webp');
    const [showModal, setShowModal] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const modalRef = useRef(null);

    const images = [
        '/images/Packaging_TravelerClosedBracket1_Monogram.webp',
        '/images/Everyday-Bundle-Mocks-final.webp',
        '/images/Packaging_TravelerClosedBracket1_Monogram.webp',
        '/images/Everyday-Bundle-Mocks-final.webp',
        '/images/Packaging_TravelerClosedBracket1_Monogram.webp',
        '/images/Everyday-Bundle-Mocks-final.webp',
    ];

    const handleImageClick = (index) => {
        setCurrentImage(images[index]);
        setShowModal(true);
        setModalImageIndex(index);
    };
    const handleModalClose = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };
    
    const handleNext = () => {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCurrentImage(images[(modalImageIndex + 1) % images.length]);
    };
    
    const handlePrevious = () => {
        setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setCurrentImage(images[(modalImageIndex - 1 + images.length) % images.length]);
    };
    const handleImageHover =(index)=> {
        setCurrentImage(images[index])
    }

    return (
        <section className="py-24 md:py-28 bg-[#f0efed] ">
            <div className="max-w-[600px] md:max-w-[728px] lg:max-w-[994px] xl:max-w-[1220px] mx-auto ">
                <div className="flex flex-col lg:flex-row">
                <h1 className="uppercase text-[2.2rem] mb-1 block lg:hidden px-2">audio console</h1>
                    <div className="w-full lg:w-1/2 lg:pr-3">
                        <div>
                            <img className="p-2" src={currentImage} alt="" />
                            <div className="flex flex-wrap w-full">
                                {images.map((src, index) => 
                                    <img 
                                        onClick={() => handleImageClick(index)}
                                        onMouseEnter={()=> handleImageHover(index)} 
                                        key={index} 
                                        className="w-1/6 lg:w-1/2 p-2" src={src} alt="" 
                                    />
                                )}
                                {/* <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" />
                                <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" />
                                <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" />
                                <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" />
                                <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" />
                                <img className="w-1/6 lg:w-1/2 p-2" src="/images/Packaging_TravelerClosedBracket1_Monogram.webp" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-3 ">
                        <div className="m-2">
                            <h1 className="uppercase text-[2.2rem] mb-3 hidden lg:block">audio console</h1>
                            <div className="flex justify-between mb-5">
                                <p><span className="text-[#ff7952] text-[1.5rem] font-semibold">$499</span> <span className="text-[1.45rem] line-through">$576</span></p>
                            </div>
                            <p>or 4 interest-free payments of $124.75 with sezzle(logo) </p>
                            <div className="flex gap-2 mt-5">
                                <div className="flex items-center">
                                    <select className="bg-white py-1 px-4 rounded-full border-2 border-blue-900" name="" id="">
                                        <option value="Charcoal">Charcoal</option>
                                        <option value="Silver">Silver</option>
                                    </select>
                                </div>
                                <div className="flex items-center">
                                    <select className="bg-white py-1 px-4 rounded-full border-2 border-blue-900" name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>                           
                                </div>
                                <div>
                                    <button className="py-2 px-7 rounded-full bg-blue-900 text-white">ADD TO BAG</button>
                                </div>
                            </div>
                        </div>

                        <Accordion />
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
                <div ref={modalRef} className="relative">
                    <div className="relative flex justify-end">
                        <button
                            onClick={()=> setShowModal(false)}
                            className="text-gray-400 hover:text-white "
                        >
                            <svg width="40" height="40" className="float-right" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
                        </button>
                    </div>

                  <img className="max-w-[500px] max-h-screen" src={currentImage} alt="Full Size" />
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