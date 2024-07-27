import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
    return (
        <div className="">
            <div className="relative h-screen max-h-[420px] md:max-h-[675px]">
                <div>
                    <div className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute"></div>
                    <img className="w-full h-screen max-h-[420px] md:max-h-[675px] object-cover" src="/images/shop-hero.webp" alt="" />
                </div>
  
                <div className="absolute inset-0 flex flex-col justify-center items-center color">
                    <h1 className="px-4 text-center mb-[1rem]">A CONSOLE FOR <br className="hidden md:block" /> EVERY WORKFLOW</h1>
                    <p className="lead text-center">Discover the perfect console for yours.</p>
                </div>
                <div className="relative bottom-20 flex  justify-center ">
                    <a href="#next">
                        <IoIosArrowDown className="text-5xl text-white transition duration-500 ease-in-out hover:scale-125" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero