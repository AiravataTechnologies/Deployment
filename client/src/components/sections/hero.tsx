// import { motion } from "framer-motion";
// import { ArrowRight, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";


// export default function Hero() {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
//       {/* Video Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover"
//           onError={(e) => console.error('Video failed to load:', e)}
//         >
//           <source src="/videos/bgtwo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <div className="max-w-4xl mx-auto">
//           {/* Company Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="mb-2 flex justify-center"
//           >
//             {/* <img 
//               src="/videos/aw.png" 
//               alt="Company Logo" 
//               className="h-24 md:h-32 lg:h-48 xl:h-56 w-auto object-contain"
//             /> */}
//           </motion.div>

//           {/* Main Heading - Made Sleek */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-6xl md:text-6xl font-light mb-6 leading-tight tracking-wide"
//             style={{
//               fontFamily: "'SF Pro Display', 'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//               textShadow: '0 8px 32px rgba(0,0,0,0.4)',
//               fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
//               letterSpacing: '0.02em'
//             }}
//           >
//             <span className="text-white drop-shadow-lg tracking-widest">
//               AIRAVATA TECHNOLOGIES
//             </span>

//             <br />
//             <span className="text-white drop-shadow-lg text-xl md:text-4xl">
//               We Create | Innovate | Elevate
//             </span>

//             {/* <br />
//             <span className="text-white drop-shadow-lg">Tomorrow, Today</span> */}
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
//           >
//             Transforming businesses through cutting-edge technology solutions, AI-powered innovation, and digital excellence.
//           </motion.p>

//           {/* CTA Buttons */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//           >
//             <Button
//               onClick={() => scrollToSection('services')}
//               className="group gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 transform hover:scale-105 tracking-wide font-sans"
//             >
//               <span className="mr-2">Explore Services</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </Button>

//             <Button
//               onClick={() => scrollToSection('contact')}
//               variant="outline"
//               className="glass-effect text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-black tracking-wide font-sans"
//             >
//               <Phone className="w-5 h-5 mr-2" />
//               Get in Touch
//             </Button>
//           </motion.div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Aggressive video preloading and optimization
  useEffect(() => {
    // Preload video immediately when component mounts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/videos/bgtwo.mp4';
    link.as = 'video';
    link.type = 'video/mp4';
    document.head.appendChild(link);

    // Optimize video element
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Set video to load immediately
      video.load();
      
      // Try to play as soon as possible
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log('Autoplay prevented:', e));
      });
      
      // Force faster loading by requesting first frame
      video.addEventListener('loadstart', () => {
        video.currentTime = 0.1;
      });
    }

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href="/videos/bgtwo.mp4"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.error('Video failed to load:', e)}
          style={{
            // Force hardware acceleration
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          <source src="/videos/bgtwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-2 flex justify-center"
          >
            {/* <img 
              src="/videos/aw.png" 
              alt="Company Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 w-auto object-contain"
            /> */}
          </motion.div>

          {/* Main Heading - Made Sleek and Mobile Responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 leading-tight tracking-wide"
            style={{
              fontFamily: "'SF Pro Display', 'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              textShadow: '0 8px 32px rgba(0,0,0,0.4)',
              fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
              letterSpacing: '0.02em'
            }}
          >
            <span className="text-white drop-shadow-lg tracking-wide sm:tracking-wider md:tracking-widest">
              AIRAVATA TECHNOLOGIES
            </span>

            <br />
            <span className="text-white drop-shadow-lg text-sm xs:text-base sm:text-lg md:text-xl lg:text-4xl">
              We Create | Innovate | Elevate
            </span>

            {/* <br />
            <span className="text-white drop-shadow-lg">Tomorrow, Today</span> */}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-2 sm:px-0"
          >
            Transforming businesses through cutting-edge technology solutions, AI-powered innovation, and digital excellence.
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
          >
            <Button
              onClick={() => scrollToSection('services')}
              className="group gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 transform hover:scale-105 tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="mr-2">Explore Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="glass-effect text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-black tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get in Touch
            </Button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}