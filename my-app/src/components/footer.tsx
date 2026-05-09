import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative w-full overflow-x-hidden">
        {/* Footer */}
        <footer className="w-full bg-[#A8BCA14D] px-4 py-10 sm:px-8 sm:py-12 md:px-20 lg:px-40 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Col 1 - Brand */}
            <div>
                <h3 className="font-semibold text-[18px] mb-3">F<span className="text-[#195A00]">oo</span>dtuck</h3>
                <p className="text-[12px] sm:text-[13px] text-gray-600 mb-4">Subscribe our newsletter and get discount 25%off</p>
                <div className="flex items-center overflow-hidden">
                <input type="text" placeholder="Enter Your Email" className="px-3 py-2 text-[10px] bg-white w-full" />
                <button className="bg-[#195A00] px-3 py-2 text-white text-[14px] shrink-0">
                    <Image src="/for_home/send_button.png" alt="" width={15} height={15} />
                </button>
                </div>
                <div className="flex gap-3 mt-4">
                <Image src="/for_home/bb_social.png" alt="" width={185} height={185} className="w-[160px] sm:w-[185px]" />
                </div>
            </div>

            {/* Col 2 - Contact */}
            <div>
                <h3 className="font-bold text-[17px] sm:text-[18px] mb-4">Contact us</h3>
                <div className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-gray-600">
                <div className="flex items-center gap-2">
                    <Image src="/for_home/MapPin.png" alt="" width={20} height={20} className="shrink-0" /><p>Kolkata India, 3rd Floor, Office 45</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/for_home/Phone.png" alt="" width={20} height={20} className="shrink-0" /><p>00965 - 96659986</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/for_home/mailbox.png" alt="" width={20} height={20} className="shrink-0" /><p>M.Alyaqout@4house.Co</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/for_home/Clock.png" alt="" width={20} height={20} className="shrink-0" /><p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                </div>
                </div>
            </div>

            {/* Col 3 - Links */}
            <div>
                <h3 className="font-bold text-[17px] sm:text-[18px] mb-4">Links</h3>
                <div className="flex flex-col gap-2 text-[12px] sm:text-[13px] text-gray-600">
                <a href="/about_us">About us</a>
                <a href="/contact_us">Contact Us</a>
                <a href="#">Our Menu</a>
                <a href="#">Team</a>
                <a href="/faq">FAQ</a>
                </div>
            </div>

            {/* Col 4 - Instagram Gallery */}
            <div>
                <h3 className="font-bold text-[17px] sm:text-[18px] mb-3">Instagram Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                {[
                    "/for_home/bt1.png",
                    "/for_home/bt2.png",
                    "/for_home/bt3.png",
                    "/for_home/bt4.png",
                    "/for_home/bt5.png",
                    "/for_home/bt6.png",
                ].map((img, index) => (
                    <div key={index} className="relative w-full h-[70px] sm:h-[90px] overflow-hidden">
                    <Image src={img} alt="" fill className="object-cover" />
                    </div>
                ))}
                </div>
            </div>

            </div>
        </footer>

        <div className="relative h-0 overflow-visible">
            <Image src="/for_home/bb.png" alt="" width={200} height={200} className="absolute right-0 bottom-[-30px] md:bottom-110 lg:bottom-[-45px] w-[100px] sm:w-[140px] md:w-[180px]" />
        </div>

        {/* Bottom bar */}
        <div className="bg-[#195A00] w-full text-white pt-4 pb-4 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col sm:flex-row justify-between text-[11px] sm:text-[13px] gap-2 sm:gap-0">
            <p>Copyright © 2024 Shawon3 Themes. All rights reserved</p>
            <div className="flex gap-3 sm:gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Partner</a>
            </div>
        </div>
    </div>
  );
}