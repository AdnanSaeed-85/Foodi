import Image from "next/image";
import { Miniver } from "next/font/google";

const miniver = Miniver({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <section>

      {/* Section 1 - Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[750px] overflow-hidden bg-white">
        
        {/* Background dark shape - right side */}
        <Image src="/for_home/bg1.png" alt="" width={600} height={650}
          className="absolute top-0 right-0
          w-[50%]
          md:w-[45%]
          lg:w-[36%] lg:right-[0px] lg:top-[0px] h-full object-cover" />

        {/* lemon */}
        <Image src="/for_home/bg3.png" alt="" width={100} height={100}
          className="absolute right-[35%] top-[40%]
          w-[60px]
          md:w-[80px]
          lg:w-[350px] lg:top-[100px] lg:right-[350px]" />

        {/* Lemons/decorations */}
        <Image src="/for_home/bg2.png" alt="" width={300} height={300}
          className="absolute right-[15%] top-0
          w-[150px]
          md:w-[220px]
          lg:w-[20%] lg:bottom-[5px] lg:top-[200px]" />

        {/* Leaf - bottom right */}
        <Image src="/for_home/leaf_right.png" alt="" width={150} height={200}
          className="absolute bottom-0 right-[30%]
          w-[80px]
          md:w-[120px]
          lg:w-[270px] lg:right-[180px]" />

        {/* Leaf - top left */}
        <Image src="/for_home/leaf_left.png" alt="" width={120} height={200}
          className="absolute top-0 left-0
          w-[80px]
          md:w-[100px]
          lg:w-[130px] lg:top-[30px] lg:left-[5px]" />

        {/* Logo - top left */}
        <Image src="/for_home/logo.png" alt="" width={80} height={40}
          className="absolute top-6 left-16
          w-[60px]
          md:w-[80px]
          lg:w-[80px] lg:top-[27px] lg:left-[170px]" />

        {/* strawboray - right center */}
        <Image src="/for_home/stobray.png" alt="" width={400} height={400}
          className="absolute right-[5%] top-[5%]
          w-[50px]
          md:w-[80px]
          lg:w-[90px] lg:top-[450px] lg:right-[700px]" />

        {/* Sticks - bottom center */}
        <Image src="/for_home/sticks.png" alt="" width={80} height={120}
          className="absolute bottom-0 right-[38%]
          w-[50px]
          md:w-[65px]
          lg:w-[75px] lg:top-[550px]" />

        {/* Social share */}
        <Image src="/for_home/social_share.png" alt="" width={30} height={100}
          className="absolute right-[2%] top-[50%]
          w-[20px]
          md:w-[25px]
          lg:w-[30px] lg:right-[30px] lg:top-[230px]" />

        <div className="absolute top-[20%] left-[5%] md:left-[10%] w-[45%] md:w-[40%]">
          <h3 className="text-[#d82e2e] font-semibold text-[15px] md:text-[17px] lg:text-[20px]">CHEF&apos;S SPECIAL</h3>
          
          <h1 className="font-semibold text-black text-[36px] md:text-[52px] lg:text-[68px] leading-tight">
            Freshness <br /> in every bite
          </h1>
          <p className="text-gray-600 text-[15px] md:text-[17px] lg:text-[19px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo studio.
          </p>
          <button className="mt-4 lg:bg-[#201E1E] text-white px-8 py-3 md:px-10 md:py-4 rounded-2xl text-[15px] md:text-[18px]">
            Download Recipe
          </button>
        </div>
      </div>

      {/* Section 2 - Get Started */}
      <div className="flex flex-col md:flex-row w-full bg-white text-black
      px-6 py-10
      md:px-20 md:py-16
      lg:px-40 lg:py-16
      gap-20">

        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-[#FFCC00] text-[14px]">PIZZA DELIVERY</h2>
          <h2 className="font-bold text-black text-[28px] md:text-[36px]">Get Started Today!</h2>
          <div className="w-30 h-1 bg-[#FFCC00] mt-1 mb-3"></div>
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
        <div className="w-full md:w-1/2 lg:my-14">
          <h2 className="font-semibold text-[#195A00] text-[13px]">
            <span className={miniver.className}>About us ____</span>
          </h2>
          <h2 className="font-bold text-black text-[28px] md:text-[32px] mt-1">Food is an important part Of a balanced Diet</h2>
          <p className="text-[12px] md:text-[13px] mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non at ulputet fringilla bibendum. Urna elit augue vitae, vitae feugiat pretium donec d elementum. Ornare malesuada risus risus. Lacus nisl, in ac dapibus id risus velit in consequat.</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#195A00] text-white px-8 py-3 rounded-lg text-[14px]">Show more</button>
            <button className="flex items-center gap-2 text-[13px] font-semibold">
              <span className="w-8 h-8 bg-[#195A00] rounded-full flex items-center justify-center text-white text-[12px]"><Image src="/for_home/Play.png" alt="" width={12} height={12}></Image></span>
              Watch video
            </button>
          </div>
        </div>

      </div>

      {/* Section 3 - Why People Choose Us */}
      <div className="flex flex-col md:flex-row w-full bg-white text-black
      px-6 py-10
      md:px-20 md:py-16
      lg:px-40 lg:py-16">

        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image src="/for_home/left.png" alt="food" width={300} height={300} className="object-contain w-full h-auto max-w-[400px]" />
        </div>

        {/* Right - Why Choose Us */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-black text-[28px] md:text-[32px]">Why People Choose us?</h2>
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex gap-4 items-start shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center text-xl py-3"><Image src="/for_home/01.png" alt="" width={60} height={60}></Image></div>
              <div>
                <h3 className="text-[20px]">Convenient and Reliable</h3>
                <p className="text-[12px] text-gray-600">Whether you dine-in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtimes hassle-free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center text-xl py-3"><Image src="/for_home/02.png" alt="" width={50} height={50}></Image></div>
              <div>
                <h3 className="text-[20px]">Variety of Options</h3>
                <p className="text-[12px] text-gray-600">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center text-xl py-3"><Image src="/for_home/03.png" alt="" width={50} height={50}></Image></div>
              <div>
                <h3 className="font-semibold text-[15px]">Eat Burger</h3>
                <p className="text-[12px] text-gray-600">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    {/* Section 4 - Best dishes */}
    <div className="flex flex-col text-black bg-white w-full
    px-6 py-10
    md:px-20 md:py-16
    lg:px-60 lg:py-16">

      {/* Heading */}
      <div className="mx-auto text-center mb-10">
        <h2 className="text-[32px] md:text-[40px] font-semibold">Our best Seller Dishes🔥🔥</h2>
        <p className="text-[13px] text-gray-500 mt-2 max-w-[500px] mx-auto">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Card */}
        {[
          { img: "/for_home/dish1.png", name: "Breakfast Food", price: "$230" },
          { img: "/for_home/dish2.png", name: "Health Breakfast", price: "$230" },
          { img: "/for_home/dish3.png", name: "Breakfast Food", price: "$230" },
          { img: "/for_home/dish4.png", name: "Breakfast Food", price: "$230" },
          { img: "/for_home/dish5.png", name: "Breakfast Food", price: "$230" },
          { img: "/for_home/dish6.png", name: "Breakfast Food", price: "$230" },
        ].map((dish, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full h-[200px]">
              <Image src={dish.img} alt={dish.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[15px]">{dish.name}</h3>
                <button className="bg-[#F03328] text-white text-[12px] px-4 py-1 rounded-full">Buy Now</button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-orange-400 text-[14px]">★★★★★</span>
                <span className="font-semibold text-[15px]">{dish.price}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

        {/* Section 5 - Customer feedback */}
    <div className="flex flex-col md:flex-row text-black bg-white w-full px-6 py-10 md:px-20 lg:px-60 gap-10 items-center text-justify">

      {/* Left - Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[28px] md:text-[32px] font-bold">
          Customer <span className="text-red-500">Feedback</span>
        </h2>
        <p className="text-[13px] text-gray-600 mt-3">
          I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.
        </p>

      </div>

      {/* Right - Chef Image */}
      <div className="w-full md:w-1/2 flex justify-end">
        <Image src="/for_home/feed1.png" alt="chef" width={400} height={400} className="object-contain w-full h-auto max-w-[350px]" />
      </div>

    </div>
    </section>
  );
}