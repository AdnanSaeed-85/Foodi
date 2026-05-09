import Image from "next/image"
import { Miniver } from "next/font/google";

const miniver = Miniver({
  subsets: ["latin"],
  weight: ["400"],
});

export default function blog_fun() {
    return (
        <section>

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

        </section>
    )
}