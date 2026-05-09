import Image from "next/image"
import { Miniver } from "next/font/google";

const miniver = Miniver({
  subsets: ["latin"],
  weight: ["400"],
});

export default function blog_fun() {
    return (
        <section className="bg-white">

            {/* Header section */}
            <div className="relative">
                <div className="lg:h-[80px] bg-[#0D0D0D]"></div>
                
                <Image src="/for_about/ab_header.png" alt="" width={200} height={50} className="w-full h-[130px] md:h-[160px] lg:h-[260px]" />
                
                <div className="absolute
                inset-x-0 top-[50px]
                md:inset-x-0 md:top-[40px] md:bottom-0
                lg:inset-x-0 lg:top-[80px] lg:bottom-0
                flex flex-col items-center justify-center text-white">                    
                    <h2 className="text-[20px] lg:text-4xl font-semibold">About Us</h2>
                    <h2 className="lg:py-[20px]">Home &gt; <span className="text-[#396C03]">About</span></h2>
                </div>
            </div>


            {/* Middle section */}
            <div className="flex flex-col md:flex-row
                mx-4 py-8
                md:mx-20
                lg:mx-40 lg:py-16">

                {/* Left image section */}
                <div className="relative w-full md:w-[50%] shrink-0 aspect-square">
                    <Image src="/for_about/ab_center1.png" alt="" fill className="object-contain" />
                </div>

                {/* Right text section */}
                <div className="w-full md:w-[50%] flex flex-col justify-center
                    pt-6 md:pt-0 md:px-8 lg:px-16">
                    
                    <h2 className="font-semibold text-[#195A00] text-[14px] lg:text-[17px]">
                        <span className={miniver.className}>About us ____</span>
                    </h2>
                    
                    <h2 className="text-[#333333] font-semibold text-[20px] md:text-[24px] lg:text-[35px] leading-tight">
                        Food is an important part Of a balanced Diet
                    </h2>
                    
                    <p className="text-[12px] lg:text-[12px] text-justify text-[#4F4F4F] py-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>

                    {/* Button section */}
                    <div className="flex items-center mt-4 gap-3">
                        <button className="bg-[#396C03] text-white rounded-lg whitespace-nowrap
                            px-5 py-2 text-[12px]
                            lg:py-3 lg:px-9 lg:text-[13px]">
                            Show more
                        </button>
                        <button className="flex items-center font-semibold text-black gap-2 text-[12px] lg:text-[13px]">
                            <span className="bg-[#396C03] rounded-full flex items-center justify-center text-white
                                w-8 h-8
                                lg:w-11 lg:h-11">
                                <Image src="/for_home/Play.png" alt="" width={16} height={16} />
                            </span>
                            Watch video
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-black lg:py-8 lg:px-40 items-center">
                <div>
                    <h2 className="text-center font-semibold lg:text-[35px]">Why Choose us</h2>
                    <p className="text-[#4F4F4F] text-[10px] lg:text-[12px] text-center lg:w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                </div>
                
                <div className="py-9">
                    <Image src="/for_about/ab_center2.png" alt="" width={200} height={200} className="w-full"></Image>
                </div>

               <div className="flex flex-row gap-10 lg:gap-40 justify-center lg:my-6">
                <div className="flex flex-col items-center text-center w-[100px] lg:w-[200px]">
                    <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                    <Image src="/for_about/Student.png" alt="" fill className="object-contain" />
                    </div>
                    <h3 className="font-bold text-[12px] lg:text-[16px] mt-3">Best Chef</h3>
                    <p className="text-[#4F4F4F] text-[8px] lg:text-[12px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>

                <div className="flex flex-col items-center text-center w-[100px] lg:w-[200px]">
                    <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                    <Image src="/for_about/Coffee.png" alt="" fill className="object-contain" />
                    </div>
                    <h3 className="font-bold text-[12px] lg:text-[16px] mt-3">120 Item food</h3>
                    <p className="text-[#4F4F4F] text-[8px] lg:text-[12px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>

                <div className="flex flex-col items-center text-center w-[100px] lg:w-[200px]">
                    <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                    <Image src="/for_about/Person.png" alt="" fill className="object-contain" />
                    </div>
                    <h3 className="font-bold text-[12px] lg:text-[16px] mt-3">Clean Environment</h3>
                    <p className="text-[#4F4F4F] text-[8px] lg:text-[12px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
                </div>
            </div>


            {/* Section - Team Member */}
            <div className="relative w-full overflow-x-hidden">
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[380px]">
                    <Image src="/for_home/feed3.png" alt="" fill className="object-cover" />
        
                    <div className="absolute top-8 sm:top-12 md:top-16 left-0 w-full text-white text-center px-6">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold">Team Member</h2>
                    <p className="text-[12px] sm:text-[13px] md:text-[15px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Varius sed pharetra dictum neque massa congue
                    </p>
                    </div>
        
                    <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-40 translate-y-[60%] sm:translate-y-[65%] md:translate-y-[70%]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
                        {[
                        { img: "/for_home/feed4.png" },
                        { img: "/for_home/feed4.png" },
                        { img: "/for_home/feed4.png" },
                        { img: "/for_home/feed4.png" },
                        ].map((member, index) => (
                        <div key={index} className="text-center">
                            <Image src={member.img} alt="" width={300} height={300} className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[400px] object-cover" />
                            <div className="py-2 sm:py-4"></div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
        
                <div className="h-[140px] sm:h-[180px] md:h-[250px] bg-white"></div>



                <div className="py-14 px-13 lg:py-16 lg:px-40">
                    {/* Heading */}
                    <div>
                        <h2 className="font-semibold text-[#195A00] text-[14px] lg:text-[17px]">
                        <span className={miniver.className}>Testimonials</span>
                        </h2>
                        <h2 className="font-semibold text-[#333333] text-[14px] lg:text-[30px]">What our client are saying</h2>
                    </div>

                    {/* Card wrapper — relative so avatar can overlap */}
                    <div className="relative flex justify-center mt-20">

                        {/* Avatar — absolute, centered, sitting above the card */}
                        <div className="absolute -top-12 z-10">
                        <Image src="/for_about/Ellipse.png" alt="" width={100} height={100} className="rounded-full" />
                        </div>

                        {/* Card */}
                        <div className="relative w-full lg:w-[600px] shadow shadow-gray-500 rounded-lg pt-16 pb-10 px-10 flex flex-col items-center text-center overflow-hidden">

                            {/* Background decorative image */}
                            <Image src="/for_about/unsplash_Ioq6qEibtbU.png" alt="" fill className="relative object-cover pointer-events-none left-10"/>

                            {/* Quotes icon */}
                            <Image src="/for_about/Quotes.png" alt="" width={40} height={40} />

                            {/* Review text */}
                            <p className="text-[#4F4F4F] text-[14px] mt-4 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </p>

                            {/* Stars */}
                            <Image src="/for_about/star.png" alt="" width={100} height={100} className="mt-3"/>


                            {/* Name and title */}
                            <h3 className="font-bold text-[#333333] text-[16px] mt-2">Alamin Hasan</h3>
                            <p className="text-[#4F4F4F] text-[12px]">Food Specialist</p>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        <span className="w-3 h-3 rounded-full bg-[#396C03]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                    </div>
                </div>

               {/* Menu Section */}
                <div className="py-10 lg:py-16 lg:px-40">
                
                    {/* Heading */}
                    <div className="text-center relative">
                        <div className="absolute -top-4 left-[52%]">
                        <Image src="/for_about/unsplash_x1ZZWyDU8sU.png" alt="" width={60} height={60} />
                        </div>
                        <h2 className="font-bold text-[#333333] text-4xl">Our Food Menu</h2>
                        <p className="text-[#4F4F4F] text-[13px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Varius sed pharetra dictum neque massa congue
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center gap-8 mt-8 border-b border-gray-200">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((tab) => (
                        <button
                            key={tab}
                            className={`pb-2 text-[14px] font-medium ${
                            tab === "Breakfast"
                                ? "text-[#396C03] border-b-2 border-[#396C03]"
                                : "text-[#4F4F4F]"
                            }`}
                        >
                            {tab}
                        </button>
                        ))}
                    </div>

                    {/* Menu Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mt-6">
                        {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex justify-between items-start py-4 border-b border-gray-200">
                            <div>
                            <h3 className={`font-semibold text-[15px] ${i < 2 ? "text-[#396C03]" : "text-[#333333]"}`}>
                                Alder Grilled Chinook Salmon
                            </h3>
                            <p className="text-[#4F4F4F] text-[12px]">Toasted French bread topped with romano, cheddar</p>
                            <p className="text-[#4F4F4F] text-[11px]">560 CAL</p>
                            </div>
                            <span className={`font-semibold text-[15px] shrink-0 ml-4 ${i < 2 ? "text-[#396C03]" : "text-[#333333]"}`}>
                            32$
                            </span>
                        </div>
                        ))}
                    </div>

                    {/* View Menu Button */}
                    <div className="flex justify-center mt-10">
                        <button className="border border-[#333333] text-[#333333] px-10 py-3 text-[13px] hover:bg-[#396C03] hover:text-white hover:border-[#396C03] transition-colors">
                        View menu
                        </button>
                    </div>
                </div>



            </div>
        </section>
    )
}