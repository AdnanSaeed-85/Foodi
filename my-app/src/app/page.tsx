import Image from "next/image";

export default function Home() {
  return (
    <section>

      {/* Section 1 - Hero Image */}
      <div className="relative w-full h-[200px] md:h-[350px] lg:h-[650px]">
        <Image src="/for_home/IMG1.png" alt="" fill className="object-cover" />
      </div>

      {/* Section 2 - Get Started */}
      <div className="flex flex-col md:flex-row w-full bg-white text-black px-6 py-10 md:px-20 md:py-16 gap-10">

        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-[#FFCC00] text-[13px]">PIZZA DELIVERY</h2>
          <h2 className="font-bold text-black text-[28px] md:text-[36px]">Get Started Today!</h2>
          <div className="w-10 h-1 bg-[#FFCC00] mt-1 mb-3"></div>
          <p className="text-[16px] md:text-[18px] font-semibold">Everything you need to build an amazing food restaurant responsive website.</p>
          <p className="text-[12px] md:text-[13px] mt-2 text-gray-600">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
          <Image src="/for_home/IMG2.png" alt="" width={80} height={80} className="mt-4" />
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <h2 className="font-semibold text-[14px]">Food Order</h2>
              <p className="text-[12px] text-gray-600">Food is the necessity of life. It provides nutrition, sustenance growth to human body.</p>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold text-[14px]">Promote Restaurant</h2>
              <p className="text-[12px] text-gray-600">Food can be classified into cereals, pulses, nuts and oilseeds, vegetable</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-[#FFCC00] text-[13px]">About us ——</h2>
          <h2 className="font-bold text-black text-[28px] md:text-[32px] mt-1">Food is an important part Of a balanced Diet</h2>
          <p className="text-[12px] md:text-[13px] mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non at ulputet fringilla bibendum. Urna elit augue vitae, vitae feugiat pretium donec d elementum. Ornare malesuada risus risus. Lacus nisl, in ac dapibus id risus velit in consequat.</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full text-[13px]">Show more</button>
            <button className="flex items-center gap-2 text-[13px] font-semibold">▶ Watch video</button>
          </div>
        </div>

      </div>

      {/* Section 3 - Why People Choose Us */}
      <div className="flex flex-col md:flex-row w-full bg-white text-black px-6 py-10 md:px-20 md:py-16 gap-10">

        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden">
            <Image src="/for_home/left.png" alt="food" fill className="object-cover" />
          </div>
        </div>

        {/* Right - Why Choose Us */}
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-black text-[28px] md:text-[32px]">Why People Choose us?</h2>
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-yellow-100 rounded-md flex items-center justify-center text-xl">🚀</div>
              <div>
                <h3 className="font-semibold text-[15px]">Convenient and Reliable</h3>
                <p className="text-[12px] text-gray-600">Whether you dine-in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtimes hassle-free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-yellow-100 rounded-md flex items-center justify-center text-xl">🍽️</div>
              <div>
                <h3 className="font-semibold text-[15px]">Variety of Options</h3>
                <p className="text-[12px] text-gray-600">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-yellow-100 rounded-md flex items-center justify-center text-xl">🍔</div>
              <div>
                <h3 className="font-semibold text-[15px]">Eat Burger</h3>
                <p className="text-[12px] text-gray-600">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}