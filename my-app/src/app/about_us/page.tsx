"use client";
import { useState } from "react";
import Image from "next/image";
import { Miniver } from "next/font/google";

const miniver = Miniver({
    subsets: ["latin"],
    weight: ["400"],
});

export default function blog_fun() {

    const [activeTab, setActiveTab] = useState("Breakfast");

    const menuItems: Record<string, { name: string; desc: string; cal: string; price: string }[]> = {
        Breakfast: [
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
            { name: "Alder Grilled Chinook Salmon", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL", price: "32$" },
        ],
        Lunch: [
            { name: "Grilled Chicken Salad", desc: "Fresh greens with grilled chicken and vinaigrette", cal: "420 CAL", price: "28$" },
            { name: "Grilled Chicken Salad", desc: "Fresh greens with grilled chicken and vinaigrette", cal: "420 CAL", price: "28$" },
            { name: "Grilled Chicken Salad", desc: "Fresh greens with grilled chicken and vinaigrette", cal: "420 CAL", price: "28$" },
            { name: "Grilled Chicken Salad", desc: "Fresh greens with grilled chicken and vinaigrette", cal: "420 CAL", price: "28$" },
        ],
        Dinner: [
            { name: "Beef Tenderloin Steak", desc: "Prime cut with herb butter and roasted vegetables", cal: "780 CAL", price: "45$" },
            { name: "Beef Tenderloin Steak", desc: "Prime cut with herb butter and roasted vegetables", cal: "780 CAL", price: "45$" },
            { name: "Beef Tenderloin Steak", desc: "Prime cut with herb butter and roasted vegetables", cal: "780 CAL", price: "45$" },
            { name: "Beef Tenderloin Steak", desc: "Prime cut with herb butter and roasted vegetables", cal: "780 CAL", price: "45$" },
        ],
        Dessert: [
            { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with vanilla ice cream", cal: "350 CAL", price: "18$" },
            { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with vanilla ice cream", cal: "350 CAL", price: "18$" },
        ],
        Drink: [
            { name: "Fresh Mango Juice", desc: "100% natural mango blend with no added sugar", cal: "120 CAL", price: "8$" },
            { name: "Fresh Mango Juice", desc: "100% natural mango blend with no added sugar", cal: "120 CAL", price: "8$" },
        ],
        Snack: [
            { name: "Crispy Spring Rolls", desc: "Vegetable filled rolls with sweet chili dipping sauce", cal: "280 CAL", price: "12$" },
            { name: "Crispy Spring Rolls", desc: "Vegetable filled rolls with sweet chili dipping sauce", cal: "280 CAL", price: "12$" },
        ],
    };

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

                    pt-6 md:pt-0 px-6 md:px-8 lg:px-16">
                    
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

            {/* Why Choose Us */}
            <div className="flex flex-col text-black lg:py-8 px-10 lg:px-40 items-center">
                <div>
                    <h2 className="text-center font-semibold lg:text-[35px]">Why Choose us</h2>
                    <p className="text-[#4F4F4F] text-[10px] lg:text-[12px] text-center lg:w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                </div>

                <div className="py-9 flex justify-center lg:px-11">
                    <Image src="/for_about/ab_center2.png" alt="" width={1000} height={400} className="w-full h-auto object-cover" />
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
            <div className="relative w-full overflow-x-hidden py-6">
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[380px]">
                    <Image src="/for_home/feed3.png" alt="" fill className="object-cover" />
        
                    <div className="absolute top-8 sm:top-12 md:top-16 left-0 w-full text-white text-center px-6">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold">Team Member</h2>
                        <p className="text-[12px] sm:text-[13px] md:text-[15px] mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                            Varius sed pharetra dictum neque massa congue
                        </p>
                    </div>
        
                    <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-52 translate-y-[60%] sm:translate-y-[65%] md:translate-y-[70%]">
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

                {/* Testimonials */}
                <div className="py-14 px-13 lg:py-16 lg:px-52">
                    <div>
                        <h2 className="font-semibold text-[#195A00] text-[14px] lg:text-[17px]">
                            <span className={miniver.className}>Testimonials</span>
                        </h2>
                        <h2 className="font-semibold text-[#333333] text-[14px] lg:text-[30px]">What our client are saying</h2>
                    </div>

                    <div className="relative flex justify-center mt-20">

                        <div className="absolute -top-12 z-10">
                            <Image src="/for_about/Ellipse.png" alt="" width={100} height={100} className="rounded-full" />
                        </div>

                        <div className="absolute
                            -right-30 -bottom-10 w-[340px] h-[340px]
                            lg:right-13 lg:-bottom-15 lg:w-[400px] lg:h-[400px]">
                            <Image src="/for_about/unsplash_Ioq6qEibtbU.png" alt="" fill className="object-contain" />
                        </div>

                        <div className="relative z-10 w-full lg:w-[600px] shadow shadow-gray-500 rounded-lg pt-16 pb-10 px-10 flex flex-col items-center text-center overflow-hidden">
                            <Image src="/for_about/Quotes.png" alt="" width={40} height={40} />
                            <p className="text-[#4F4F4F] text-[14px] mt-4 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </p>
                            <Image src="/for_about/star.png" alt="" width={100} height={100} className="mt-3" />
                            <h3 className="font-bold text-[#333333] text-[16px] mt-2">Alamin Hasan</h3>
                            <p className="text-[#4F4F4F] text-[12px]">Food Specialist</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-10">
                        <span className="w-3 h-3 rounded-full bg-[#396C03]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                        <span className="w-3 h-3 rounded-full bg-[#F5A623] opacity-50"></span>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="py-10 px-10 lg:py-16 lg:px-52">

                    <div className="text-center relative">
                        <div className="absolute
                            left-[27%] -top-9
                            lg:left-[43%] lg:-top-8">
                            <Image src="/for_about/unsplash_x1ZZWyDU8sU.png" alt="" width={140} height={140} />
                        </div>
                        <h2 className="font-bold text-[#333333] text-3xl lg:text-4xl">Our Food Menu</h2>
                        <p className="text-[#4F4F4F] text-[10px] lg:text-[13px] mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                            Varius sed pharetra dictum neque massa congue
                        </p>
                    </div>

                    <div className="flex justify-center py-10 gap-4 lg:gap-8 lg:mt-8 border-b border-gray-200">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-[12px] lg:text-[14px] font-medium ${
                                    activeTab === tab
                                        ? "text-[#396C03] border-b-2 border-[#396C03]"
                                        : "text-[#4F4F4F]"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-6">
                        {menuItems[activeTab].map((item, i) => (
                            <div key={i} className="flex justify-between items-start py-4 border-b border-gray-200">
                                <div>
                                    <h3 className={`font-semibold text-[15px] ${i < 2 ? "text-[#396C03]" : "text-[#333333]"}`}>
                                        {item.name}
                                    </h3>
                                    <p className="text-[#4F4F4F] text-[12px]">{item.desc}</p>
                                    <p className="text-[#4F4F4F] text-[11px]">{item.cal}</p>
                                </div>
                                <span className={`font-semibold text-[15px] shrink-0 ml-4 ${i < 2 ? "text-[#396C03]" : "text-[#333333]"}`}>
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="border border-[#396C03] text-[#396C03] px-4 py-2 text-[10px] hover:bg-[#396C03] hover:text-white transition-colors">
                            View menu
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}