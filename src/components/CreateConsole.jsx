const CreateSectionSection = () => {
    return (
        <section className="dark-gray dark-color w-full">
            <div className="relative min-h-[22.5rem] md:min-h-[33.75em]">
                {/* <div className="absolute w-full h-full top-0 left-0"> */}
                    <img className="absolute  top-0 h-full w-full object-contain" style={{objectPosition: '50% 100%'}}  src="/images/shop-banner-module.jpg" alt="" />
                {/* </div> */}
                <div className="flex justify-center  relative ">
                    <div className="py-12 text-center px-[1.25rem] mx-auto">
                        <h4 className="uppercase mb-[1rem] text-[2.25rem] font-semibold">Create Your Own&nbsp;Console</h4>
                        <p className="lead mb-[1rem]">Add-on to make it perfect.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CreateSectionSection;