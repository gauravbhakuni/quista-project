import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const partnerLogos = [
  {
    src: "https://c.animaapp.com/mf6xyuapqVm19p/img/image-46.png",
    alt: "Partner Logo 1",
    className: "w-[143px] h-[142px]",
  },
  {
    src: "https://c.animaapp.com/mf6xyuapqVm19p/img/image-45.png",
    alt: "Partner Logo 2",
    className: "w-36 h-16",
  },
  {
    src: "https://c.animaapp.com/mf6xyuapqVm19p/img/image-43.png",
    alt: "Partner Logo 3",
    className: "w-[171px] h-24",
  },
  {
    src: "https://c.animaapp.com/mf6xyuapqVm19p/img/image-45.png",
    alt: "Partner Logo 4",
    className: "w-[143px] h-16",
  },
];

const scienceCards = [
  {
    title: "Synthesis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundImage:
      "https://c.animaapp.com/mf9be29uB5v363/img/rectangle-97.png",
  },
  {
    title: "Formulations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    backgroundImage:
      "https://c.animaapp.com/mf9be29uB5v363/img/rectangle-101.png",
  },
  {
    title: "Diverse Materials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundImage:
      "https://c.animaapp.com/mf9be29uB5v363/img/rectangle-105.png",
  },
  {
    title: "Manipulation of Light",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    backgroundImage:
      "https://c.animaapp.com/mf9be29uB5v363/img/rectangle-103.png",
  },
];

const newsArticles = [
  {
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    date: "March 08, 2025",
    backgroundImage:
      "https://c.animaapp.com/mf9be29uB5v363/img/rectangle-107.png",
    featured: true,
  },
  {
    title:
      "LumiLab – Exploring the science and innovation behind luminescent materials.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    date: "March 08, 2025",
    featured: false,
  },
  {
    title:
      "The Glow Factor – Trends, discoveries, and applications in photonic materials.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    date: "March 08, 2025",
    featured: false,
  },
  {
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    date: "March 08, 2025",
    featured: false,
  },
];

const Demo2 = () => {
  return (
    <div className="bg-black w-full overflow-x-hidden">
      <div className="w-full flex flex-col items-center">
        {/* Full SVG section */}
        <div className="flex w-full items-start px-4 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[202px]">
          {/* SVG on the left */}
          <div className="flex-shrink-0">
            <svg
              viewBox="0 0 24 1395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[300px] sm:h-[500px] md:h-[700px] lg:h-[1000px] xl:h-[1395px] w-auto"
            >
              <path
                d="M12 5V1389.26"
                stroke="#3B3B3B"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M12 5V666"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M2 4V668"
                stroke="url(#paint1_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M22 4V668"
                stroke="url(#paint2_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="12.5"
                  y1="5"
                  x2="12.5"
                  y2="666"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="2.5"
                  y1="4"
                  x2="2.5"
                  y2="668"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="22.5"
                  y1="4"
                  x2="22.5"
                  y2="668"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Text + Logos on the right */}
          <div className="flex-1 ml-6 sm:ml-10 lg:ml-16 xl:ml-[190px] pt-10 sm:pt-16 lg:pt-24 xl:pt-[203px]">
            <div className="text-white text-lg sm:text-2xl md:text-[36px] lg:text-[50px] xl:text-[60px] leading-snug sm:leading-normal max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod sectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et Lorem ipsum dolor sit amet.
            </div>

            {/* Logos */}
            <section className="mt-12 sm:mt-20 xl:mt-[160px] flex gap-4 overflow-x-auto no-scrollbar">
              {partnerLogos.map((logo, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[70px] h-[70px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[221px] xl:h-[222px] bg-[#f8f9fa0d] rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] border-0 flex items-center justify-center"
                >
                  <CardContent className="p-0 flex items-center justify-center h-full">
                    <img
                      className={`object-contain max-w-full max-h-full ${logo.className}`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </div>

        {/* our journey video section */}
        <div id="whoweare" className="w-full flex justify-center items-center">
          <div className="relative w-full h-[600px] md:h-[690px] lg:h-[790px] flex justify-center items-center overflow-hidden mx-2 px-6 md:mx-10 md:px-10 xl:mx-20 xl:px-20">
            {/* Background video */}
            <video
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="/videos/our-journey.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Blurred background card */}
            <div className="relative z-10 w-full max-w-[1200px] h-[400px] md:h-[400px] lg:h-[500px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] flex items-center justify-center px-4">
              {/* Blur layer */}
              <div className="absolute inset-0 bg-[#F8F9FA33]/80 backdrop-blur-[40px] sm:backdrop-blur-[50px] lg:backdrop-blur-[60px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]" />
              {/* Text */}
              <div className="relative z-20 text-center px-2 sm:px-4">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-[44px] font-bold mb-6 sm:mb-10 lg:mb-[60px] leading-snug">
                  <span>Our Journey Towards</span>
                  <br />
                  <span>Innovation and Excellence</span>
                </h1>
                <p className="text-white/60 text-sm sm:text-base lg:text-[20px] max-w-[522px] mx-auto mb-6 sm:mb-10 lg:mb-[60px]">
                  Brand is an advanced luminescent materials company, leveraging
                  synergies of cutting-edge chemistries to deliver solutions,
                  not just products.
                </p>
                <button className="h-[44px] sm:h-[50px] w-[130px] sm:w-[147px] text-sm sm:text-[16px] bg-white text-black font-medium rounded-[10px] sm:rounded-[12px] hover:bg-gray-200 transition">
                  About Brand
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full SVG section */}
        <div className="flex relative w-full">
          {/* SVG on the right, aligned with yellow block */}
          <div className="flex w-full items-start px-4 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[202px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1150 1698"
              className="w-auto max-w-[1150px] h-auto flex-shrink-0"
              fill="none"
            >
              <path
                d="M1138 488L1138 1693"
                stroke="#3B3B3B"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M12 12V133.099C12 188.327 56.7715 233.099 112 233.099L1038 233.099C1093.23 233.099 1138 277.87 1138 333.099L1138 507.5"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M2 22.0001V133.099C2 193.85 51.2487 243.099 112 243.099L565 243.099"
                stroke="url(#paint1_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M1128 516L1128 333C1128 283.294 1087.71 243 1038 243L565 243"
                stroke="url(#paint2_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M22 2.00012V133.099C22 182.804 62.2944 223.099 112 223.099L585 223.099"
                stroke="url(#paint3_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M1148 496L1148 333C1148 272.249 1098.75 223 1038 223L585 223"
                stroke="url(#paint4_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M1138 327V949"
                stroke="url(#paint5_linear_0_1)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M1128 337V951"
                stroke="url(#paint6_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M1148 337V951"
                stroke="url(#paint7_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="11.5"
                  y1="123.049"
                  x2="11.5"
                  y2="11.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="1.5"
                  y1="133.049"
                  x2="1.5"
                  y2="21.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="1.5"
                  y1="133.513"
                  x2="1.5"
                  y2="23.0306"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_1"
                  x1="21.5"
                  y1="113.049"
                  x2="21.5"
                  y2="1.99987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_0_1"
                  x1="21.5"
                  y1="113.513"
                  x2="21.5"
                  y2="3.0306"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_0_1"
                  x1="1138.5"
                  y1="327"
                  x2="1138.5"
                  y2="949"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_0_1"
                  x1="1128.5"
                  y1="337"
                  x2="1128.5"
                  y2="951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_0_1"
                  x1="1148.5"
                  y1="337"
                  x2="1148.5"
                  y2="951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <section id="technology" className="absolute top-[100px] md:top-[200px] xl:top-[450px] w-full md:w-[700px] lg:w-[870px] xl:w-[1280px] h-auto text-white pl-[20px] md:pl-[80px] xl:pl-[120px] px-6 py-16">
            <h2 className="text-xl md:text-[44px] font-bold mb-12">
              Advanced Materials and <br /> Integrative Solutions
            </h2>

            <div className="md:space-y-16">
              {/* 1st Block */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                  <img
                    className={`object-contain max-w-full max-h-full ${partnerLogos[1].className}`}
                    alt={partnerLogos[1].alt}
                    src={partnerLogos[1].src}
                  />
                </div>
                {/* Text */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg md:text-[24px] font-medium md:mb-[40px]">
                    Securing every physical product <br /> for counterfeit
                    protection
                  </h3>
                  <p className="text-gray-300 w-[340px] md:w-[470px] text-sm md:text-[20px] mb-[40px] max-w-3xl">
                    Riyadh™ makes it easy for brand owners and governments to
                    effectively identify counterfeits, secure revenues and
                    preserve brand integrity.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>

              {/* 2nd Block */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                  <img
                    className={`object-contain max-w-full max-h-full ${partnerLogos[0].className}`}
                    alt={partnerLogos[0].alt}
                    src={partnerLogos[0].src}
                  />
                </div>
                {/* Text */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg md:text-[24px] font-medium md:mb-[40px]">
                    Accelerating biomedical research <br /> with next-generation
                    bio-probes
                  </h3>
                  <p className="text-gray-300 w-[340px] md:w-[470px] text-sm md:text-[20px] mb-[40px] max-w-3xl">
                    Luminicell empowers researchers to achieve breakthroughs at
                    a faster pace by powering long live-cell tracking and deep
                    tissue bio-imaging.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* bubbles video section */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full min-h-[720px] flex justify-center items-center overflow-hidden">
            {/* Background video */}
            <video
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="/videos/soap-bubble.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full flex justify-center items-center px-4">
              <h1
                className="text-center font-bold text-white leading-tight 
                     text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[64px] 
                     max-w-5xl"
              >
                Revolutionizing luminescence to{" "}
                <br className="hidden sm:block" />
                power the next generation of <br className="hidden sm:block" />
                technology
              </h1>
            </div>
          </div>
        </div>

        {/* science behind Svg section */}
        <div className="flex w-full items-start px-4 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[202px] gap-8">
          {/* Content Section */}
          <div className="flex-1">
            {/* Heading + Button */}
            <div  id="solutions" className="mt-[100px] md:mt-[200px] lg:mt-[300px] flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
              <h2 className="text-[20px] md:text-[44px] font-bold max-w-xl">
                The Science Behind Our <br /> Innovative Solutions
              </h2>
              <button className="mt-6 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {scienceCards.map((card, index) => (
                <Card
                  key={index}
                  className="relative w-full h-[528px] rounded-[40px] border border-white/20 overflow-hidden flex items-center justify-start p-8"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content (vertically centered, left aligned) */}
                  <div className="relative z-10 max-w-xl text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                      {card.title}
                    </h3>
                    {card.description.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-sm md:text-base text-gray-200 mb-3"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Vertical Line */}
          <div className="shrink-0">
            <svg
              width="24"
              height="100%"
              viewBox="0 0 24 1773"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full max-h-[1773px]"
              preserveAspectRatio="xMidYMin meet"
            >
              <path
                d="M12 199L12.0001 1768"
                stroke="#3B3B3B"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M12 5L12 660"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M2 15L2.00003 662"
                stroke="url(#paint1_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M22 21L22 662"
                stroke="url(#paint2_linear_0_1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="12.5"
                  y1="5"
                  x2="12.5"
                  y2="660"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="2.5"
                  y1="15"
                  x2="2.50003"
                  y2="662"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="22.5"
                  y1="21"
                  x2="22.5"
                  y2="662"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7300" />
                  <stop offset="1" stopColor="#6B0BEC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Abstract section */}
        <div className="relative w-full py-16 px-20 xl:px-0">
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Video (background for sm/md, side for lg) */}
            <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-2xl order-2 lg:order-2">
              <video
                src="/videos/abstract.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Dark overlay only on small/medium for readability */}
              <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 lg:static lg:px-0 lg:text-left z-10">
              <div className="text-white space-y-6 max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Transforming Innovation with Cutting-Edge Science
                </h2>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*news letter svg section */}
        <div id="newsroom" className="relative w-full max-w-[1150px] aspect-[1150/1648]">
          <Image
            src="/svgs/last-svg.png" // place this inside /public
            alt="Gradient curve line"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute top-[200px] md:top-[300px] lg:top-[350px] left-1/2 -translate-x-1/2 w-full max-w-[900px] px-4 h-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
              What's New at Brand
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.map((article, index) => (
                <Card
                  key={index}
                  className={`relative border-0 rounded-2xl lg:h-[465px] lg:w-[386px] p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between bg-[#F8F9FA33]/20`}
                  style={
                    article.featured
                      ? {
                          backgroundImage: `url(${article.backgroundImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  {/* Overlay only for featured */}
                  {article.featured && (
                    <div className="absolute inset-0 bg-black/50 rounded-xl" />
                  )}

                  <div className="relative z-10">
                    <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-4">
                      {article.date}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-6">
                      {article.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button className="bg-gradient-to-r from-[#FF7300] to-[#6B0BEC] text-white px-4 py-2 rounded-md hover:opacity-90 transition w-fit">
                      Read More
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* last video section */}
        <div id="careers" className="w-full flex justify-center items-center">
          <div className="relative w-full min-h-[720px] flex justify-center items-center overflow-hidden">
            {/* Background video */}
            <video
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="/videos/liquid.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[140px] items-center">
                {/* Left Card */}
                <div
                  className="bg-white/10 backdrop-blur-xl rounded-2xl text-white p-8 flex flex-col justify-between
                        w-full lg:w-[657px] h-auto lg:h-[470px]"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold mb-6 leading-snug">
                      Have Questions? <br /> Let’s Talk!
                    </h2>
                    <p className="text-base md:text-lg lg:text-[18px] text-gray-200 mb-6 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                  <button className="bg-white text-black px-6 py-3 rounded-md font-medium w-fit hover:bg-gray-200 transition">
                    Get Started
                  </button>
                </div>

                {/* Right Side Cards */}
                <div className="flex flex-col gap-6 w-full">
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-2xl text-white flex justify-between items-center p-6
                          w-full lg:w-[522px] h-auto lg:h-[225px]"
                  >
                    <span className="text-2xl md:text-3xl lg:text-[44px] font-semibold">
                      Partnerships
                    </span>
                    <span className="border border-white rounded-full p-3 lg:p-4 text-lg lg:text-2xl">
                      →
                    </span>
                  </div>

                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-2xl text-white flex justify-between items-center p-6
                          w-full lg:w-[522px] h-auto lg:h-[225px]"
                  >
                    <span className="text-2xl md:text-3xl lg:text-[44px] font-semibold">
                      Careers
                    </span>
                    <span className="border border-white rounded-full p-3 lg:p-4 text-lg lg:text-2xl">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
