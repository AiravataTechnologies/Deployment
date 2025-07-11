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

//SK
// import { motion } from "framer-motion";
// import { ArrowRight, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useRef } from "react";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Aggressive video preloading and optimization
//   useEffect(() => {
//     // Preload video immediately when component mounts
//     const link = document.createElement('link');
//     link.rel = 'preload';
//     link.href = '/videos/bgtwo.mp4';
//     link.as = 'video';
//     link.type = 'video/mp4';
//     document.head.appendChild(link);

//     // Optimize video element
//     if (videoRef.current) {
//       const video = videoRef.current;

//       // Set video to load immediately
//       video.load();

//       // Try to play as soon as possible
//       video.addEventListener('loadedmetadata', () => {
//         video.play().catch(e => console.log('Autoplay prevented:', e));
//       });

//       // Force faster loading by requesting first frame
//       video.addEventListener('loadstart', () => {
//         video.currentTime = 0.1;
//       });
//     }

//     return () => {
//       // Cleanup
//       const existingLink = document.querySelector('link[href="/videos/bgtwo.mp4"]');
//       if (existingLink) {
//         document.head.removeChild(existingLink);
//       }
//     };
//   }, []);

//   return (
//     <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
//       {/* Video Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover"
//           onError={(e) => console.error('Video failed to load:', e)}
//           style={{
//             // Force hardware acceleration
//             transform: 'translateZ(0)',
//             backfaceVisibility: 'hidden',
//             perspective: '1000px'
//           }}
//         >
//           <source src="/videos/bgtwo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
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
//               className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 w-auto object-contain"
//             /> */}
//           </motion.div>

//           {/* Main Heading - Made Sleek and Mobile Responsive */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 leading-tight tracking-wide"
//             style={{
//               fontFamily: "'SF Pro Display', 'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//               textShadow: '0 8px 32px rgba(0,0,0,0.4)',
//               fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
//               letterSpacing: '0.02em'
//             }}
//           >
//             <span className="text-white drop-shadow-lg tracking-wide sm:tracking-wider md:tracking-widest">
//               AIRAVATA TECHNOLOGIES
//             </span>

//             <br />
//             <span className="text-white drop-shadow-lg text-sm xs:text-base sm:text-lg md:text-xl lg:text-4xl">
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
//             className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-2 sm:px-0"
//           >
//             Transforming businesses through cutting-edge technology solutions, AI-powered innovation, and digital excellence.
//           </motion.p>

//           {/* CTA Buttons */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
//           >
//             <Button
//               onClick={() => scrollToSection('services')}
//               className="group gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 transform hover:scale-105 tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
//             >
//               <span className="mr-2">Explore Services</span>
//               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </Button>

//             <Button
//               onClick={() => scrollToSection('contact')}
//               variant="outline"
//               className="glass-effect text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-black tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
//             >
//               <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//               Get in Touch
//             </Button>
//           </motion.div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
//SK

// import { motion } from "framer-motion";
// import { ArrowRight, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useRef, useState } from "react";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [videoState, setVideoState] = useState({
//     loaded: false,
//     error: false,
//     playing: false
//   });
//   const [deviceInfo, setDeviceInfo] = useState({
//     isMobile: false,
//     shouldUseVideo: true
//   });

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Device detection
//   useEffect(() => {
//     const detectDevice = () => {
//       const isMobile = window.innerWidth < 768 ||
//         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

//       let shouldUseVideo = true;

//       // Check connection quality
//       if (isMobile && 'connection' in navigator) {
//         const connection = (navigator as any).connection;
//         if (connection) {
//           const slowTypes = ['slow-2g', '2g'];
//           const isSlowConnection = slowTypes.includes(connection.effectiveType) || connection.downlink < 1;
//           if (isSlowConnection) {
//             shouldUseVideo = false;
//           }
//         }
//       }

//       // Check device memory
//       if (isMobile && 'deviceMemory' in navigator) {
//         const deviceMemory = (navigator as any).deviceMemory;
//         if (deviceMemory < 4) {
//           shouldUseVideo = false;
//         }
//       }

//       setDeviceInfo({ isMobile, shouldUseVideo });
//     };

//     detectDevice();
//     window.addEventListener('resize', detectDevice);
//     return () => window.removeEventListener('resize', detectDevice);
//   }, []);

//   // Optimized video loading
//   useEffect(() => {
//     if (!deviceInfo.shouldUseVideo) return;

//     const video = videoRef.current;
//     if (!video) return;

//     // Configure video based on device
//     video.preload = deviceInfo.isMobile ? 'metadata' : 'auto';

//     // Timeout for video loading
//     const loadingTimeout = setTimeout(() => {
//       if (!videoState.loaded) {
//         setVideoState(prev => ({ ...prev, error: true }));
//         console.log('Video loading timeout - using fallback');
//       }
//     }, deviceInfo.isMobile ? 3000 : 5000);

//     const handleLoadedData = () => {
//       setVideoState(prev => ({ ...prev, loaded: true }));
//       clearTimeout(loadingTimeout);

//       // Attempt to play with retry logic
//       const attemptPlay = async (retries = 3) => {
//         try {
//           await video.play();
//           setVideoState(prev => ({ ...prev, playing: true }));
//         } catch (error) {
//           if (retries > 0) {
//             setTimeout(() => attemptPlay(retries - 1), 500);
//           } else {
//             setVideoState(prev => ({ ...prev, error: true }));
//           }
//         }
//       };

//       setTimeout(() => attemptPlay(), 100);
//     };

//     const handleError = () => {
//       setVideoState(prev => ({ ...prev, error: true }));
//       clearTimeout(loadingTimeout);
//     };

//     video.addEventListener('loadeddata', handleLoadedData);
//     video.addEventListener('canplaythrough', handleLoadedData);
//     video.addEventListener('error', handleError);

//     video.load();

//     return () => {
//       clearTimeout(loadingTimeout);
//       video.removeEventListener('loadeddata', handleLoadedData);
//       video.removeEventListener('canplaythrough', handleLoadedData);
//       video.removeEventListener('error', handleError);
//     };
//   }, [deviceInfo.shouldUseVideo, deviceInfo.isMobile, videoState.loaded]);

//   const useStaticBackground = !deviceInfo.shouldUseVideo || videoState.error;

//   return (
//     <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
//       {/* Video Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         {useStaticBackground ? (
//           // Static background fallback
//           <div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               background: `
//                 radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
//                 radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
//                 radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
//                 linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
//               `
//             }}
//           />
//         ) : (
//           <>
//             <video
//               ref={videoRef}
//               autoPlay={false}
//               muted
//               loop
//               playsInline
//               preload={deviceInfo.isMobile ? 'metadata' : 'auto'}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoState.loaded && videoState.playing ? 'opacity-100' : 'opacity-0'
//                 }`}
//               style={{
//                 transform: 'translateZ(0)',
//                 backfaceVisibility: 'hidden',
//                 perspective: '1000px'
//               }}
//             >
//               <source src="/videos/bgtwo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Loading fallback */}
//             <div
//               className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${videoState.loaded && videoState.playing ? 'opacity-0' : 'opacity-100'
//                 }`}
//               style={{
//                 background: `
//                   radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
//                   radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
//                   radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
//                   linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
//                 `
//               }}
//             />
//           </>
//         )}
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
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
//               className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 w-auto object-contain"
//             /> */}
//           </motion.div>

//           {/* Main Heading - Made Sleek and Mobile Responsive */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 leading-tight tracking-wide"
//             style={{
//               fontFamily: "'SF Pro Display', 'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//               textShadow: '0 8px 32px rgba(0,0,0,0.4)',
//               fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
//               letterSpacing: '0.02em'
//             }}
//           >
//             <span className="text-white drop-shadow-lg tracking-wide sm:tracking-wider md:tracking-widest">
//               AIRAVATA TECHNOLOGIES
//             </span>

//             <br />
//             <span className="text-white drop-shadow-lg text-sm xs:text-base sm:text-lg md:text-xl lg:text-4xl">
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
//             className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-2 sm:px-0"
//           >
//             Transforming businesses through cutting-edge technology solutions, AI-powered innovation, and digital excellence.
//           </motion.p>

//           {/* CTA Buttons */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
//           >
//             <Button
//               onClick={() => scrollToSection('services')}
//               className="group gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 transform hover:scale-105 tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
//             >
//               <span className="mr-2">Explore Services</span>
//               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </Button>

//             <Button
//               onClick={() => scrollToSection('contact')}
//               variant="outline"
//               className="glass-effect text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-black tracking-wide font-sans w-full sm:w-auto max-w-xs sm:max-w-none"
//             >
//               <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768 ||
        ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Aggressive video preloading and optimization
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // Mobile-specific optimizations
    if (isMobile) {
      // Reduce quality for mobile
      video.style.filter = 'brightness(0.9)'; // Slightly reduce brightness to save processing

      // Use intersection observer to load video only when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadVideo();
              observer.unobserve(video);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(video);

      return () => observer.disconnect();
    } else {
      // Desktop: Load immediately
      loadVideo();
    }

    function loadVideo() {
      // Preload video resource
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/videos/bgtwo.mp4';
      link.as = 'video';
      link.type = 'video/mp4';
      document.head.appendChild(link);

      // Set video attributes for faster loading
      video.preload = 'metadata'; // Change from 'auto' to 'metadata' for mobile
      video.crossOrigin = 'anonymous';

      // Add loading event listeners
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      // Start loading
      video.load();
    }

    function handleLoadStart() {
      console.log('Video loading started');
    }

    function handleLoadedMetadata() {
      console.log('Video metadata loaded');
      // For mobile, set to a frame that loads quickly
      if (isMobile) {
        video.currentTime = 0;
      }
    }

    function handleLoadedData() {
      console.log('Video data loaded');
      setIsVideoLoaded(true);
    }

    function handleCanPlay() {
      console.log('Video can play');
      // Try to play with better error handling
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch((error) => {
            console.log('Autoplay prevented or failed:', error);
            // Fallback: show poster or try playing on user interaction
            if (isMobile) {
              video.controls = false; // Keep controls hidden but make it clickable
              video.addEventListener('click', () => {
                video.play().catch(e => console.log('Manual play failed:', e));
              });
            }
          });
      }
    }

    function handleError(e) {
      console.error('Video failed to load:', e);
      // Fallback: You could show a static background image here
    }

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href="/videos/bgtwo.mp4"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }

      if (video) {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      }
    };
  }, [isMobile]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Video Background with Loading State */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback background while video loads */}
        <div
          className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            // Force hardware acceleration
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            // Additional mobile optimizations
            ...(isMobile && {
              willChange: 'transform',
              WebkitTransform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
            })
          }}
        >
          <source src="/videos/bgtwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin opacity-50"></div>
          </div>
        )}
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
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}