import React from 'react'
import { Link } from 'react-router-dom'
import hero from '/src/assets/images/1.png'

export default function About() {
    return (
        <>
            {/*------- Banner -------*/}
            <div className='grid grid-cols-1 mb-[100px]'>
                <div className='promo text-center'>
                    <h1 className='sm:text-[65px] text-[33px] font-[700] mt-[20px] text-[#fff]'>About Us</h1>
                    <h3 className='sm:text-[20px] text-[17px] font-[700] text-[#8b8df1]'>Mobile Zone!</h3>
                </div>
            </div>

            {/*------- About Hero -------*/}
            <div className="container mx-auto sm:mt-[80px] sm:mb-[0px] mt-[100px]">
                <div className='grid lg:grid-cols-[55%_auto] '>

                    <div className='hero-text sm:pr-[200px] my-auto'>
                        <h3 className='sm:text-[17px] text-[17px] font-[700] text-[#6366F1]'>Welcome to Mobile Zone!</h3>
                        <h1 className='sm:text-[50px] text-[33px] font-[800] mt-[10px]'>About Us</h1>
                        <p className='sm:text-[17px] text-[15px] mt-[20px] text-[#7a7878]'>Experience the ultimate mobile shopping destination! We offer the latest smartphones, premium accessories, and reliable repair services at affordable prices. From top brands to budget-friendly options, we’ve got something for everyone. Whether you're buying new, upgrading, or fixing your device, our expert team is here to help. Visit us today for quality, value, and excellent customer service. Discover a world of mobile technology at your fingertips! <br /> <br /> We specialize in the latest smartphones, high-quality accessories, and fast, dependable repair services. Whether you're searching for top brands!</p>
                        <Link to="/shop"> <button className='mt-[25px] btn-hero'>Shop Now</button> </Link>
                    </div>

                    <div className='text-center'>
                        <img src={hero} />
                    </div>

                </div>
            </div>

            {/*------- Features -------*/}
            <section class="text-gray-600 body-font mb-[50px]">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                    <h1 className='sm:text-[50px] text-[33px] font-[800] mt-[10px] text-[#000]'>Features</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-[#6366F1] inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-[#6366F1] mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a class="mt-3 text-[#6366F1]  inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-[#6366F1]  mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a class="mt-3 text-[#6366F1] inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-[#6366F1]  mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a class="mt-3 text-[#6366F1] inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>

        </>
    )
}
