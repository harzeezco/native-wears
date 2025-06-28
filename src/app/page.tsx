"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const headerItems = [
  {
    label: 'Bubas',
    href: ''
  },
  {
    label: 'Khaftans',
    href: ''
  },
  {
    label: 'Agbada',
    href: ''
  },
  {
    label: 'Limited editions',
    href: ''
  },
  {
    label: 'About us',
    href: ''
  },
]

const carouselData = [
  {
    id: 1,
    title: "Our Fabric & Craft\nObsession",
    description: "At Buba Classic, we are passionate about sourcing the finest, most luxurious fabrics that not only look exceptional but also feel incredible to wear. Every material is carefully chosen to ensure durability, comfort, and a rich texture that honors tradition while embracing modern elegance.",
    image: "/boys.png",
    label: "Coronado",
    labelDescription: "Control round shape racquet"
  },
  {
    id: 2,
    title: "Premium Materials\n& Excellence",
    description: "Our commitment to excellence extends beyond design to the very heart of our craft. We partner with master weavers and fabric artisans who share our passion for creating textiles that tell stories and honor cultural heritage.",
    image: "/boys.png",
    label: "Heritage",
    labelDescription: "Traditional weaving techniques"
  },
  {
    id: 3,
    title: "Artisan Crafted\nLegacy",
    description: "Each garment represents hours of meticulous handwork by skilled artisans who have perfected their craft over generations. From intricate embroidery to hand-stitched details, every stitch is a testament to the artistry and dedication that goes into each piece.",
    image: "/boys.png",
    label: "Mastery",
    labelDescription: "Handcrafted precision"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentData = carouselData[currentSlide];
  return (
    <div className="overlay">
      <div className="min-h-screen lg:h-screen relative">
        {/* Header */}
        <header className="flex items-center justify-between p-4 sm:p-6 lg:p-[32px] relative z-50">
          <Link href="/" className="">
            <Image 
              src="/buba-logo.svg" 
              alt="Buba Classic Logo" 
              className="h-8 sm:h-10 w-auto" 
              width={120} 
              height={40} 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-[32px]">
              {headerItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[15px] text-[#FCFCFC] hover:text-[#F2D953] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-[#FCFCFC] p-2 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-[#FCFCFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-[#FCFCFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-[#FCFCFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </header>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center justify-center min-h-screen">
            <nav className="text-center">
              <ul className="space-y-8">
                {headerItems.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="text-2xl sm:text-3xl text-[#FCFCFC] hover:text-[#F2D953] transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex items-center justify-center relative z-30 min-h-[60vh] lg:h-[70vh] px-4 sm:px-6 lg:px-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-ibarra text-[#FCFCFC] leading-tight">
              Welcome to <br className="sm:hidden" />
              <span className="block sm:inline">Buba Classic</span>
            </h1>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-[40px] lg:right-[40px] z-30">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0">
            {/* Description */}
            <div className="order-2 lg:order-1 max-w-lg">
              <p className="text-sm sm:text-base text-[#BFBFBF] leading-relaxed">
                Where tradition meets timeless style crafted just for you. Discover the elegance of bespoke kaftans and agbadas, tailored with care and passion to make you stand out with confidence.
              </p>
            </div>

            {/* CTA Button */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <button type="button" className="bg-[#F2D953] flex gap-2 items-center text-[#161616] font-semibold rounded-md px-4 sm:px-6 lg:px-[24px] py-2 lg:py-2 hover:bg-[#E5C748] transition-colors w-full sm:w-auto justify-center lg:justify-start">
                <span className="text-sm sm:text-base">Shop our collections</span>
                <div className="flex items-center justify-center p-2 lg:py-3 lg:px-4 bg-white rounded-md">
                  <Image src="/arrow.svg" alt="arrow" width={16} height={16} className="w-3 h-3 lg:w-4 lg:h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute top-0 right-0 w-full h-[80%] lg:w-4/5 lg:h-full overflow-hidden">
          <Image 
            src='/cloth.png' 
            alt="Traditional African clothing display" 
            fill
            className="object-right lg:object-contain"
            priority
          />
        </div>
      </div>
      {/* Buba Classic Difference Section */}


      <main>
        <section className="py-16 mt-28 px-8 lg:px-[40px]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-[#BFBFBF] flex justify-center gap-[4px] text-sm mb-4 tracking-wider">
                <span className="text-[#F2D953]">
                  |
                </span>
                <span>
                The Buba Classic Difference
                </span>
              </p>
              <h2 className="text-white font-ibarra text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-4xl mx-auto">
                Tailored. Timeless.<br />
                Distinctly Yours.
              </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid border-b border-[#444] lg:grid-cols-[357px_1fr] pb-20 gap-8 lg:gap-3 mb-16">
              {/* Left Side - Fila Image and Description */}
              <div className="order-2 lg:order-1">
                <div className="relative mb-4">
                  <Image
                    src="/fila.png"
                    alt="Blue Kaftan with intricate geometric embroidery"
                    width={600}
                    height={800}
                    className=" h-auto rounded-lg"
                  />
                </div>

                <div className="rounded-lg mt-2">
                  <p className="text-[#BFBFBF] text-sm max-w-[350px] leading-relaxed">
                    At Buba Classic, every stitch tells a story. Our expert tailors pour decades of experience into crafting garments that honor tradition while embracing modern comfort and style.
                  </p>
                </div>
              </div>

              {/* Right Side - Agbada Image and Description */}
              <div className="order-1 lg:order-2">
                <div className="relative mb-4">
                  <Image
                    src="/agbada.png"
                    alt="Brown Agbada with detailed embroidery and traditional beading"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />

                </div>

                <div className="text-center lg:text-left border-b border-[#444444] pb-6">
                  <p className="text-white font-ibarra  text-lg lg:text-xl leading-relaxed max-w-2xl">
                    Handcrafted Kaftans and Agbadas designed to celebrate your heritage and elevate your style. Each piece is created with passion, precision, and the finest fabrics.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 mt-6">
                  {/* Handcrafted Excellence */}
                  <div className="text-center md:text-left">
                    <Image src="/circle-dots.svg" alt="" width={32} height={32} className="size-8 mx-auto md:mx-0" />
                    <h3 className="text-white font-ibarra mt-3 text-lg font-medium mb-3">Handcrafted Excellence</h3>
                    <p className="text-[#BFBFBF] text-sm leading-relaxed">
                      Every stitch is made with care by skilled artisans.
                    </p>
                  </div>

                  {/* For Every Occasion */}
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <Image src="/three-line.svg" alt="" width={32} height={32} className="size-8" />
                    </div>
                    <h3 className="text-white font-ibarra text-lg font-medium mb-3">For Every Occasion</h3>
                    <p className="text-[#BFBFBF] text-sm leading-relaxed">
                      From traditional ceremonies to modern events, our collection is made for all moments worth celebrating.
                    </p>
                  </div>

                  {/* Unmatched Quality */}
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <Image src="/four-dots.svg" alt="" width={32} height={32} className="size-8" />
                    </div>
                    <h3 className="text-white font-ibarra text-lg font-medium mb-3">Unmatched Quality</h3>
                    <p className="text-[#BFBFBF] text-sm leading-relaxed">
                      We use premium fabrics and hand embroidery to deliver garments that are as durable as they are beautiful.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}

          </div>
        </section>

        {/* Bespoke Designs Section */}
        <div className="px-10">
          <section className="bg-[#2A2A2A] pt-16 rounded-lg px-4 lg:px-[40px]">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-12 lg:pl-20">
                <p className="flex gap-2 items-center text-sm mb-4 tracking-wider">
                  <span className="text-[#F2D953]">|</span>
                  <span className="text-[#FCFCFC] text-[15px]">Our Craftsmanship</span></p>
                <h2 className="text-white font-ibarra text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-2xl">
                  Bespoke Designs<br />
                  Made to Last
                </h2>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Side - Image with Label */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <Image
                      src={currentData.image}
                      alt={`${currentData.label} - Traditional Buba Classic garments`}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side - Content and Navigation */}
                <div className="order-1 lg:order-2">
                  {/* Navigation Arrows */}
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-10 hover:bg-[#333] rounded-md border-[#444] border flex items-center justify-center transition-colors"
                      aria-label="Previous"
                    >
                      <ArrowLeft className="text-[#BFBFBF]" size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-12 h-10 hover:bg-[#333] rounded-md border-[#444] border flex items-center justify-center transition-colors"
                      aria-label="next"
                    >
                      <ArrowRight className="text-[#BFBFBF]" size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white font-ibarra text-2xl lg:text-3xl font-light mb-4 whitespace-pre-line">
                      {currentData.title}
                    </h3>
                    <p className="text-[#BFBFBF] text-base lg:text-lg leading-relaxed max-w-lg">
                      {currentData.description}
                    </p>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex gap-2 mt-6">
                    {carouselData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-[#F2D953] w-6' : 'bg-[#444]'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Featured Bubas Section */}
        <section className="py-16 px-8 lg:px-[40px]">
          <div className="max-w-7xl pt-20 border-t border-[#444] mx-auto">
            {/* Header */}
            <div className="mb-3">
              <p className="flex gap-2 items-center text-sm mb-4 tracking-wider">
                <span className="text-[#F2D953]">|</span>
                <span className="text-[#FCFCFC] text-[15px]">Featured bubas</span>
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div>
                <h2 className="text-white font-ibarra text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8">
                  Find Your<br />
                  Perfect Piece
                </h2>

                <p className="text-[#BFBFBF] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                  Explore our curated collections made to honor tradition and personal style. Whether it&apos;s a soft, embroidered kaftan or a majestic agbada, your perfect fit awaits.
                </p>

                <button className="bg-[#F2D953] flex gap-2 items-center text-[#161616] font-semibold rounded-md px-[24px] py-3 hover:bg-[#E5C748] transition-colors">
                  <span>View all collections</span>
                  <div className="flex items-center justify-center py-2 px-3 bg-white rounded-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Right Side - Product Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* White Agbada */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/white-agba.png"
                      alt="Premium White Agbada - Ideal for royal events"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                  </div>
                </div>

                {/* Blue Agbada */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/blue-agbada.png"
                      alt="Premium Blue Agbada - Ideal for royal events"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 px-8 lg:px-[40px]">
          <div className="max-w-7xl pb-20 mx-auto border-b border-[#444]">
            {/* Header */}
            <div className="mb-3">
              <p className="flex gap-2 items-center text-sm mb-4 tracking-wider">
                <span className="text-[#F2D953]">|</span>
                <span className="text-[#FCFCFC] text-[15px]">Community</span>
              </p>
            </div>

            {/* Three-column Layout */}
            <div className="grid lg:grid-cols-[1fr_400px_200px] gap-8 lg:gap-12 items-start">
              {/* Left Side - Content */}
              <div>
                <h2 className="text-white font-ibarra text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8">
                  Join the Buba<br />
                  Collections Social<br />
                  Club
                </h2>

                <p className="text-[#BFBFBF] text-base lg:text-lg leading-relaxed max-w-lg">
                  Connect with fellow lovers of timeless style and bespoke tailoring. Follow us on Instagram for exclusive previews, styling tips, and behind-the-scenes stories.
                </p>
              </div>

              {/* Middle - Instagram Image */}
              <div className="relative flex ">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/full-image.png"
                    alt="Buba Classic community member wearing traditional attire"
                    width={400}
                    height={500}
                    className=""
                  />
                </div>
              </div>

              {/* Right Side - Instagram Button (Separate) */}
              <div className="flex items-end h-full">
                <button className="bg-[#1A1A1A] hover:bg-[#333] transition-colors rounded-lg px-6 py-3 flex items-center gap-3 border border-[#333]">
                  <span className="text-white font-medium">Instagram</span>
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Text Marquee Section */}
        <section className="py-12 overflow-hidden relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="relative">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Repeat the text multiple times for seamless loop */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex font-ibarra items-center mx-8">
                  <span className="text-6xl lg:text-9xl xl:text-9xl text-[#FCFCFC] tracking-wider">
                    BUBA
                  </span>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F2D953] rounded-full mx-8" />
                  <span className="text-6xl lg:text-9xl xl:text-9xl text-[#FCFCFC] tracking-wider">
                    CLASSIC
                  </span>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F2D953] rounded-full mx-8" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-8 lg:px-[40px]">
        <div className="max-w-xl max-sm:flex-col max-sm:justify-center mx-auto flex justify-center  items-center lg:gap-20">
          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center  gap-2 text-[#BFBFBF] hover:text-white transition-colors group"
          >
            <span className="text-sm">Back to top</span>
           <Image src="/arrow-top.svg" alt="" width={16} height={16} className="transform group-hover:-translate-y-1 transition-transform"/>
          </button>

          {/* Site credit */}
          <p className="text-[#BFBFBF] text-sm">
            Site by <span className="text-white">Quadri Ismail</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
