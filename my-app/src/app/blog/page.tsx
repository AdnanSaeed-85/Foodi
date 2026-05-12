import Image from "next/image"
import { Merienda } from "next/font/google"

const merienda = Merienda({
    subsets: ["latin"],
    weight: ["400"],
});

export default function BlogPage() {
    return (
        <main className="flex-1 pt-16 lg:pt-20 bg-white text-black">
            
            {/* Hero Image Section */}
            <div className="relative">
                <Image src="/for_blog/onion.png" alt="" width={200} height={200} className="w-full object-cover" />
                <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">
                    <span className={merienda.className}>Blog</span>
                </h2>
            </div>

            {/* Two Column Layout */}
            <div className="flex items-start gap-6 px-6 lg:px-30 py-25">
                
                {/* LEFT - Blog Posts (grows with content) */}
                <div className="flex-1 flex flex-col">
                    
                    <div className="shadow shadow-gray-300">
                        {/* blog post cards go here */}
                        <Image src="/for_blog/egg.png" alt="" width={200} height={200} className="w-full object-cover" />
                        
                        <div className="flex flex-row items-center gap-10 px-5 py-5">
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/simple_calender.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Aug 1, 2024</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/iconamoon_profile.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Admin</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/solid_comments.png" alt="" width={30} height={30} className="object-cover" />
                                <p>No comments</p>
                            </div>
                        </div>


                        <div>
                            <h2 className="text-[#3F3F3F] font-semibold text-3xl px-5">Greek yogurt breakfast bowls</h2>
                            <p className="text-[#3F3F3F] text-[18px] text-justify py-3 px-5">Lorem ipsum dolor sit amet consectetur. Aliquet egestas at lacus cum nullam commodo eget consequat. Nulla mattis cras in velit scelerisque diam sit phasellus. Sit odio ultricies volutpat elementum egestas a sed ullamcorper. </p>
                        </div>
                        <div className="px-5 items-start">
                            <button className="bg-[#396C03] rounded-4xl w-55 h-14 text-white">
                                <h2 className="text-[20px]">Read More</h2>
                            </button>
                        </div>
                    </div>

                    
                    
                    <div className="shadow shadow-gray-300 mt-12">
                        <div>
                            <Image src="/for_blog/rectangle.png" alt="" width={200} height={200} className="w-full object-cover" />
                        </div>
                        <div className="flex flex-row items-center gap-10 px-5 py-5">
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/simple_calender.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Aug 1, 2024</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/iconamoon_profile.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Admin</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/solid_comments.png" alt="" width={30} height={30} className="object-cover" />
                                <p>No comments</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#3F3F3F] font-semibold text-3xl px-5">Greek yogurt breakfast bowls</h2>
                            <p className="text-[#3F3F3F] text-[18px] text-justify py-3 px-5">Lorem ipsum dolor sit amet consectetur. Aliquet egestas at lacus cum nullam commodo eget consequat. Nulla mattis cras in velit scelerisque diam sit phasellus. Sit odio ultricies volutpat elementum egestas a sed ullamcorper. </p>
                        </div>
                        <div className="px-5">
                            <button className="bg-[#396C03] rounded-4xl w-50 h-15 text-white">
                                <h2 className="text-[20px]">Read More</h2>
                            </button>
                        </div>
                    </div>


                    <div className="shadow shadow-gray-300 mt-12">
                        <div>
                            <Image src="/for_blog/rectangle2.png" alt="" width={200} height={200} className="w-full object-cover" />
                        </div>
                        <div className="flex flex-row items-center gap-10 px-5 py-5">
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/simple_calender.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Aug 1, 2024</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/iconamoon_profile.png" alt="" width={25} height={25} className="object-cover" />
                                <p>Admin</p>
                            </div>
                            
                            <div className="flex flex-row items-center gap-2">
                                <Image src="/for_blog/solid_comments.png" alt="" width={30} height={30} className="object-cover" />
                                <p>No comments</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#3F3F3F] font-semibold text-3xl px-5">Greek yogurt breakfast bowls</h2>
                            <p className="text-[#3F3F3F] text-[18px] text-justify py-3 px-5">Lorem ipsum dolor sit amet consectetur. Aliquet egestas at lacus cum nullam commodo eget consequat. Nulla mattis cras in velit scelerisque diam sit phasellus. Sit odio ultricies volutpat elementum egestas a sed ullamcorper. </p>
                        </div>
                        <div className="px-5">
                            <button className="bg-[#396C03] rounded-4xl w-50 h-15 text-white">
                                <h2 className="text-[20px]">Read More</h2>
                            </button>
                        </div>
                    </div>
                </div>






                {/* RIGHT - Sidebar (fixed width, never stretches) */}
                <div className="w-92 flex-shrink-0 flex flex-col">
                    {/* sidebar content goes here */}
                    <div>
                        <Image src="/for_blog/search_bar.png" alt="" width={400} height={400} className="object-cover" />
                    </div>
                    

                    <div className="relative mt-7">
                        <h2 className="text-[#3F3F3F] text-[20px] font-semibold">
                            Latest Post
                        <div className="absolute border-b-2 border-[#396C03] w-[65px]"></div>
                        <div className="border-b-1 border-gray-400"></div>
                        </h2>
                    </div>


                    <div>
                        <div className="flex flex-row mt-6">
                            <Image src="/for_blog/right1.png" alt="" width={100} height={100} className="object-cover rounded-lg" />
                            <div className="mx-4">
                                <h2 className="font-semibold text-[18px]">Greek yogurt breakfast bowls</h2>
                                <h1 className="text-[14px] mt-3">Aug 1, 2024</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <Image src="/for_blog/right2.png" alt="" width={100} height={100} className="object-cover rounded-lg" />
                            <div className="mx-4">
                                <h2 className="font-semibold text-[18px]">Greek yogurt breakfast bowls</h2>
                                <h1 className="text-[14px] mt-3">Aug 1, 2024</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <Image src="/for_blog/right3.png" alt="" width={100} height={100} className="object-cover rounded-lg" />
                            <div className="mx-4">
                                <h2 className="font-semibold text-[18px]">Greek yogurt breakfast bowls</h2>
                                <h1 className="text-[14px] mt-3">Aug 1, 2024</h1>
                            </div>
                        </div>
                    </div>


                    <div className="relative mt-12">
                        <h2 className="text-[#3F3F3F] text-[20px] font-semibold">
                            All Categories
                        <div className="absolute border-b-2 border-[#396C03] w-[65px]"></div>
                        <div className="border-b-1 border-gray-400"></div>
                        </h2>
                    </div>


                    <div className="border-b border-dashed border-[#396C03]">
                        
                        {["All", "Restaurant", "Pizza", "Trends", "Breakfast"].map((category) => (
                            <div key={category} className="flex flex-row items-center gap-2 px-3 py-3 border-b border-dashed border-[#396C03] last:border-b-0">
                                <Image src="/for_blog/arrow.png" alt="" width={30} height={30} className="object-cover" />
                                <p className="flex-1 text-black">{category}</p>
                                <p className="text-[#396C03]">(9)</p>
                            </div>
                        ))}
                    </div>


                    <div className="rounded-lg bg-[#D9D9D9] w-full h-60 mt-10">
                        <div className="flex flex-row justify-between items-center h-full">
                            <Image src="/for_blog/left_arrow.png" alt="" width={30} height={30} className="object-cover" />
                            <Image src="/for_blog/right_arrow.png" alt="" width={30} height={30} className="object-cover" />
                        </div>
                    </div>


                    <div className="relative mt-12">
                        <h2 className="text-[#3F3F3F] text-[20px] font-semibold">
                            Tags
                        <div className="absolute border-b-2 border-[#396C03] w-[65px]"></div>
                        <div className="border-b-1 border-gray-400"></div>
                        </h2>
                    </div>


                    <div className="mt-4">
                        {["Resaurant", "Pizza", "Trends", "Breakfast", "Italian", "Sushi"].map((items) => (
                            <button className="mt-3 mr-2 px-5 py-1.5 border border-gray-200 rounded-lg">{items}</button>
                        ))}
                    </div>


                </div>


            </div>


        </main>
    )
}