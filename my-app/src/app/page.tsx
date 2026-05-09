import Image from "next/image";
import { Miniver } from "next/font/google";

const miniver = Miniver({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <section className="overflow-x-hidden w-full">

      {/* Section 1 - Hero Image */}
      <div className="relative w-full 
        h-[300px] 
        sm:h-[450px] 
        md:h-[500px] 
        lg:h-[750px] 
        overflow-hidden bg-white">

        <Image src="/for_home/bg1.png" alt="" width={600} height={650}
          className="absolute top-0 right-0 
            w-[48%] 
            sm:w-[46%] 
            md:w-[45%] 
            lg:w-[36%] 
            h-full object-cover" />

        <Image src="/for_home/bg3.png" alt="" width={100} height={100}
          className="absolute
            w-[100px] right-[35%] top-[29%]
            sm:w-[60px]
            md:w-[170px] md:right-[28%] md:top-[20%]
            lg:w-[350px] lg:top-[100px] lg:right-[350px]" />

        <Image src="/for_home/bg2.png" alt="" width={300} height={300}
          className="absolute
            right-[23%] top-24 w-[110px] 
            sm:w-[150px] 
            md:w-[170px] md:top-[130px] md:right-[19%]
            lg:w-[20%] lg:top-[200px] lg:right-[270px]" />

        <Image src="/for_home/leaf_right.png" alt="" width={150} height={200}
          className="absolute
            w-[80px] bottom-7 right-[18%] 
            sm:w-[80px] 
            md:w-[120px] 
            lg:w-[270px] lg:right-[180px]" />

        <Image src="/for_home/leaf_left.png" alt="" width={120} height={200}
          className="absolute 
            w-[30px] top-4 left-0
            sm:w-[80px] 
            md:w-[80px] 
            lg:w-[130px] lg:top-[30px] lg:left-[5px]" />

        <Image src="/for_home/stobray.png" alt="" width={400} height={400}
          className="absolute
            w-[35px] right-[55%] top-[70%] 
            sm:w-[50px] 
            md:w-[80px] md:top-[75%] md:right-[50%]
            lg:w-[90px] lg:top-[450px] lg:right-[700px]" />

        <Image src="/for_home/sticks.png" alt="" width={80} height={120}
          className="absolute
            w-[40px] bottom-5 right-[48%] 
            sm:w-[50px] 
            md:w-[65px] md:right-[40%]
            lg:w-[75px] lg:top-[550px] lg:bottom-0 lg:right-[36%]" />

        <Image src="/for_home/social_share.png" alt="" width={30} height={100}
          className=" 
            sm:block sm:absolute sm:right-[2%] sm:top-[50%] sm:w-[18px] 
            md:w-[25px]  md:top-40
            lg:w-[30px] lg:right-[30px] lg:top-[230px]" />

        <div className="absolute 
          top-[25%] left-[10%] w-[48%]
          sm:top-[18%] sm:left-[5%] sm:w-[46%] 
          md:left-[10%] md:w-[42%]">
          <h3 className="text-[#d82e2e] font-semibold 
            text-[11px] 
            sm:text-[13px] 
            md:text-[17px] 
            lg:text-[20px]">CHEF&apos;S SPECIAL</h3>
          <h1 className="font-semibold text-black leading-tight
            text-[24px] 
            sm:text-[30px] 
            md:text-[48px] 
            lg:text-[68px]">
            Freshness <br /> in every bite
          </h1>
          <p className="text-gray-600 mt-1 hidden
            sm:block sm:text-[12px] sm:mt-2
            md:text-[15px] 
            lg:text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo studio.
          </p>
          <button className="mt-3 bg-[#201E1E] text-white rounded-2xl
            px-5 py-2 text-[11px]
            sm:px-6 sm:py-2 sm:text-[13px]
            md:px-10 md:py-4 md:text-[18px]">
            Download Recipe
          </button>
        </div>
      </div>

      {/* Section 2 - Get Started */}
      <div className="flex flex-col 
        w-full bg-white text-black 
        px-4 py-8 gap-8
        sm:px-8 sm:py-10 sm:gap-12
        md:flex-row md:px-20 md:py-16 md:gap-20
        lg:px-40 lg:py-16">

        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-[#FFCC00] 
            text-[13px] 
            sm:text-[14px]">PIZZA DELIVERY</h2>
          <h2 className="font-bold text-black 
            text-[24px] 
            sm:text-[20px] 
            md:text-[20px]">Get Started Today!</h2>
          <div className="h-1 bg-[#FFCC00] mt-1 mb-3
            w-24 
            sm:w-30"></div>
          <p className="font-semibold text-justify
            text-[14px] 
            sm:text-[16px] 
            md:text-[18px]">Everything you need to build an amazing food restaurant responsive website.</p>
          <p className="mt-2 text-gray-600 text-justify
            text-[11px] 
            sm:text-[12px] 
            md:text-[13px]">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
          <Image src="/for_home/IMG2.png" alt="" width={80} height={80} 
            className="mt-4 
              w-[60px] 
              sm:w-[80px]" />
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <h2 className="font-semibold 
                text-[13px] 
                sm:text-[14px]">Food Order</h2>
              <p className="text-gray-600 text-justify
                text-[11px] 
                sm:text-[12px]">Food is the necessity of life. It provides nutrition, sustenance growth to human body.</p>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold 
                text-[13px] 
                sm:text-[14px]">Promote Restaurant</h2>
              <p className="text-gray-600 text-justify
                text-[11px] 
                sm:text-[12px]">Food can be classified into cereals, pulses, nuts and oilseeds, vegetable</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full 
          my-1
          md:w-1/2 
          lg:my-14">
          <h2 className="font-semibold text-[#195A00] text-[13px]">
            <span className={miniver.className}>About us ____</span>
          </h2>
          <h2 className="font-bold text-black mt-1 text-justify
            text-[16px] 
            sm:text-[28px] 
            md:text-[20px]">Food is an important part Of a balanced Diet</h2>
          <p className="mt-3 text-gray-600 text-justify
            text-[11px] 
            sm:text-[12px] 
            md:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non at ulputet fringilla bibendum. Urna elit augue vitae, vitae feugiat pretium donec d elementum. Ornare malesuada risus risus. Lacus nisl, in ac dapibus id risus velit in consequat.</p>
          <div className="flex mt-4
            gap-3 
            sm:gap-4">
          <button className="bg-[#195A00] text-white rounded-lg
            px-7 py-0 text-[10px]
            sm:px-7 sm:py-0 sm:text-[12px]
            lg:text-[13px]">Show more</button>
            <button className="flex items-center font-semibold
              gap-2 text-[12px]
              sm:text-[13px]">
              <span className="bg-[#195A00] rounded-full flex items-center justify-center text-white text-[12px]
                w-7 h-7
                sm:w-9 sm:h-9
                md:w-9 md:h-9
                lg:w-9 lg:h-9">
                <Image src="/for_home/Play.png" alt="" width={12} height={12} />
              </span>
              Watch video
            </button>
          </div>
        </div>

      </div>

      {/* Section 3 - Why People Choose Us */}
      <div className="flex flex-col 
        w-full bg-white text-black 
        px-6 py-10
        md:flex-row md:px-20 md:py-16">

        {/* Left - Image */}
        <div className="flex items-center justify-center
          lg:px-[75px]">
          <Image src="/for_home/left.png" alt="food" width={300} height={300} 
            className="object-contain w-full h-auto max-w-[400px]" />
        </div>

        {/* Right - Why Choose Us */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-black 
            text-[22px] 
            md:text-[28px]">Why People Choose us?</h2>
          <div className="flex flex-col gap-6 mt-6">

            {/* Card 1 */}
            <div className="flex gap-4 items-center shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center py-3">
                <Image src="/for_home/01.png" alt="" width={50} height={50}/>
              </div>
              <div>
                <h3 className="text-[20px]">Convenient and Reliable</h3>
                <p className="text-[12px] text-gray-600">Whether you dine-in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtimes hassle-free.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 items-center shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center py-3">
                <Image src="/for_home/02.png" alt="" width={50} height={50} />
              </div>
              <div>
                <h3 className="text-[20px]">Variety of Options</h3>
                <p className="text-[12px] text-gray-600">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 items-center shadow shadow-gray-300 rounded-lg px-3 py-3">
              <div className="flex items-center justify-center py-3">
                <Image src="/for_home/03.png" alt="" width={50} height={50} />
              </div>
              <div>
                <h3 className="font-semibold text-[15px]">Eat Burger</h3>
                <p className="text-[12px] text-gray-600">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Section 4 - Best dishes */}
      <div className="flex flex-col text-black bg-white w-full px-4 py-8 sm:px-8 sm:py-10 md:px-20 md:py-16 lg:px-38 lg:py-16">

        <div className="mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-semibold">Our best Seller Dishes🔥🔥</h2>
          <p className="text-[12px] sm:text-[13px] text-gray-500 mt-2 max-w-[90%] sm:max-w-[500px] mx-auto">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: "/for_home/dish1.png", name: "Breakfast Food", price: "$230" },
            { img: "/for_home/dish2.png", name: "Health Breakfast", price: "$230" },
            { img: "/for_home/dish3.png", name: "Breakfast Food", price: "$230" },
            { img: "/for_home/dish4.png", name: "Breakfast Food", price: "$230" },
            { img: "/for_home/dish5.png", name: "Breakfast Food", price: "$230" },
            { img: "/for_home/dish6.png", name: "Breakfast Food", price: "$230" },
          ].map((dish, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative w-full h-[180px] sm:h-[200px]">
                <Image src={dish.img} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[14px] sm:text-[15px]">{dish.name}</h3>
                  <button className="bg-[#F03328] text-white text-[11px] sm:text-[12px] px-3 sm:px-4 py-1 rounded-full">Buy Now</button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-orange-400 text-[13px] sm:text-[14px]">★★★★★</span>
                  <span className="font-semibold text-[14px] sm:text-[15px]">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 - Customer Feedback */}
      <div className="relative flex flex-col md:flex-row text-black bg-white w-full px-4 sm:px-8 sm:py-10 md:px-20 lg:px-40 gap-6 sm:gap-10 items-center overflow-hidden">

        {/* Left - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[40px] mt-4 sm:mt-10 font-bold">
            Customer <span className="text-red-500">Feedback</span>
          </h2>
          <p className="text-[12px] sm:text-[14px] text-gray-600 mt-3 text-justify">
            I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.
          </p>
          <Image src="/for_home/feed5.png" alt="" width={500} height={500}
          className="my-3 w-full max-w-[320px] sm:max-w-[400px] md:max-w-full" />
        </div>

        {/* Right - Chef Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image src="/for_home/feed1.png" alt="chef" width={400} height={400}
          className="object-contain w-[150%] sm:w-[80%] md:w-full lg:my-[-60px] max-w-[450px]" />
        </div>

        {/* Leaf - top right */}
        <Image src="/for_home/feed2.png" alt="" width={200} height={200}
          className="absolute top-130 right-0 w-[200px] sm:w-[150px] md:w-[200px] lg:w-[300px] lg:mt-[90px] lg:top-0 object-contain z-10" />
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

        {/* Section - Quality Food */}
        <div className="w-full bg-white px-4 py-10 sm:px-8 sm:py-14 md:px-20 lg:px-40 text-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { img: "/for_home/t1.png", title: "Quality Food", learn: "text-black" },
              { img: "/for_home/t2.png", title: "Quality Food", learn: "text-red-500" },
              { img: "/for_home/t3.png", title: "Quality Food", learn: "text-black" },
              { img: "/for_home/t4.png", title: "Quality Food", learn: "text-black" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md px-3 py-6 sm:px-6 sm:py-10 gap-3 sm:gap-4">
                <Image src={item.img} alt={item.title} width={80} height={80} className="object-contain w-[50px] sm:w-[80px]" />
                <h3 className="font-semibold text-[15px] sm:text-[20px]">{item.title}</h3>
                <p className="text-black text-[11px] sm:text-[13px]">Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                <p className={`font-bold text-[12px] sm:text-[14px] ${item.learn}`}>Learn More</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section - Latest News & Blog */}
        <div className="w-full bg-white px-4 py-10 sm:px-8 sm:py-14 md:px-20 lg:px-40">

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10 relative">
            <Image src="/for_home/leaf_behind.png" alt="" width={200} height={200}
              className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain w-[100px] sm:w-[150px] lg:w-[200px] lg:pt-20 lg:top-0" />
            <h2 className="text-[26px] sm:text-[32px] md:text-[42px] font-bold text-black">Latest news & Blog</h2>
            <p className="text-gray-500 text-[12px] sm:text-[13px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
            {[
              { img: "/for_home/lat.png", title: "Chocolate Truffle Cake With Honey Flavor" },
              { img: "/for_home/lat.png", title: "Chocolate Truffle Cake With Honey Flavor" },
              { img: "/for_home/lat.png", title: "Chocolate Truffle Cake With Honey Flavor" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="relative w-full h-[200px] sm:h-[220px]">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-4 text-gray-500 text-[12px] mb-3">
                    <span className="flex items-center gap-1">
                      <Image src="/for_home/Conmments.png" alt="" width={200} height={200} className="w-[120px] sm:w-[160px]" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-[14px] sm:text-[16px] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[11px] sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque. Tempus, poten diam ac integer id tellus est.</p>
                  <button className="flex items-center gap-2 mt-4 text-[12px] sm:text-[13px] font-semibold">Read more →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section - We work with the best people */}
        <div className="w-full bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-20 lg:px-40">
          <div>
            <Image src="/for_home/b_text.png" alt="" width={100} height={100} className="mx-auto w-[80px] sm:w-[100px]" />
          </div>
          <div className="relative">
            <Image src="/for_home/b_leaf.png" alt="" width={100} height={100} className="relative bottom-8 mx-auto w-[80px] sm:w-[100px] md:bottom-12 lg:bottom-[40px] lg:top-[-40px]" />
            <h2 className="text-center text-black font-semibold text-[15px] sm:text-2xl md:text-3xl mt-[-60px] sm:mt-[-80px] lg:mt-[-93px] mb-2 lg:mb-[0px]">We work with the best pepole</h2>
          </div>
          <div>
            <Image src="/for_home/b_logo.png" alt="" width={1050} height={1050} className="relative mx-auto w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] lg:top-10 lg:right-6" />
          </div>
        </div>
                {/* Section - Partners */}
        <div className="relative w-full bg-white px-10 py-2 md:px-20 lg:py-10">
          {/* Leaf - left side */}
          <Image src="/for_home/bb_leaf.png" alt="" width={220} height={220}
            className="absolute w-[130px] top-[-130] right-80 md:right-160 lg:left-[-15px] lg:top-[-140px] lg:w-[200px] object-contain" />
        </div>

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
    </section>
  );
}