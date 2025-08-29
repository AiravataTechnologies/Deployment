import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    shouldUseVideo: true
  });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced device detection with better video capability assessment
  useEffect(() => {
    const detectDevice = () => {
      const isMobile = window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      let shouldUseVideo = true;

      // Only disable video on very low-end devices or extremely slow connections
      if (isMobile && 'connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const verySlowTypes = ['slow-2g'];
          const isVerySlowConnection = verySlowTypes.includes(connection.effectiveType) || 
                                      (connection.downlink && connection.downlink < 0.5);
          if (isVerySlowConnection) {
            shouldUseVideo = false;
          }
        }
      }

      // Only disable on very low memory devices (reduced threshold for better 4K support)
      if (isMobile && 'deviceMemory' in navigator) {
        const deviceMemory = (navigator as any).deviceMemory;
        if (deviceMemory < 1) { // Reduced from 2GB to 1GB to allow more devices to use 4K
          shouldUseVideo = false;
        }
      }

      setDeviceInfo({ isMobile, shouldUseVideo });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Enhanced video loading with better error handling and preloading
  useEffect(() => {
    if (!deviceInfo.shouldUseVideo) return;

    let loadTimer: NodeJS.Timeout;
    let errorTimer: NodeJS.Timeout;

    const handleLoad = () => {
      clearTimeout(errorTimer);
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = () => {
      setVideoError(true);
      setVideoLoaded(false);
    };

    // Set up iframe load handlers
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError);
    }

    // Fallback timer for when load event doesn't fire
    loadTimer = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        setVideoLoaded(true);
      }
    }, 2000);

    // Error fallback timer
    errorTimer = setTimeout(() => {
      if (!videoLoaded) {
        setVideoError(true);
      }
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(errorTimer);
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
      }
    };
  }, [deviceInfo.shouldUseVideo, videoLoaded, videoError]);

  // Generate optimized YouTube URL with enhanced parameters for 4K on all devices
  const getYouTubeUrl = () => {
    const baseUrl = 'https://www.youtube.com/embed/k-ru5IBrHM0';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      controls: '0',
      showinfo: '0',
      rel: '0',
      iv_load_policy: '3',
      modestbranding: '1',
      playsinline: '1',
      playlist: 'k-ru5IBrHM0',
      start: '0',
      enablejsapi: '1',
      disablekb: '1',
      fs: '0',
      cc_load_policy: '0',
      hl: 'en',
      color: 'white',
      // Force 4K quality on all devices
      vq: 'hd2160', // Request 4K quality
      hd: '1',
      fmt: '22',
      quality: 'hd2160',
      // Additional performance parameters
      origin: window.location.origin,
      widget_referrer: window.location.href,
      // Enhanced mobile parameters for 4K
      ...(deviceInfo.isMobile ? {
        playsinline: '1',
        // Force 4K on mobile as well
        vq: 'hd2160',
        quality: 'hd2160',
        // Additional mobile-specific parameters for better quality
        html5: '1',
        rel: '0',
        modestbranding: '1'
      } : {
        vq: 'hd2160',
        quality: 'hd2160'
      })
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const useStaticBackground = !deviceInfo.shouldUseVideo || videoError;

  // Enhanced static background with subtle animation
  const staticBackgroundStyle = {
    background: `
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
      linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
    `,
    backgroundSize: '200% 200%',
    animation: 'gradientShift 10s ease infinite'
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Enhanced Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {useStaticBackground ? (
          // Enhanced static background fallback with animation
          <div
            className="absolute inset-0 w-full h-full"
            style={staticBackgroundStyle}
          />
        ) : (
          <>
            {/* Enhanced YouTube Video Background - Optimized for 4K on all devices */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <iframe
                ref={iframeRef}
                src={getYouTubeUrl()}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  width: '100vw',
                  height: '56.25vw', // 16:9 aspect ratio
                  minHeight: '100vh',
                  minWidth: '177.77vh', // 16:9 aspect ratio
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  left: '50%',
                  pointerEvents: 'none',
                  // Enhanced scaling for crisp 4K display
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges'
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Background Video"
                loading="eager"
                importance="high"
              />
            </div>

            {/* Enhanced loading fallback with smooth transition */}
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
              style={staticBackgroundStyle}
            />
          </>
        )}
      </div>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-20">
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
          >
            <span className="text-white tracking-wide sm:tracking-wider md:tracking-widest">
              AIRAVATA TECHNOLOGIES
            </span>

            <br />
            <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-4xl">
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
