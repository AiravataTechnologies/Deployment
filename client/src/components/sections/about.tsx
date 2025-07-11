import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Enhanced Glass Card Component
const GlassCard = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "backdrop-blur-xl bg-white/8 border border-white/15 shadow-2xl",
    subtle: "backdrop-blur-md bg-white/5 border border-white/10 shadow-lg",
    highlight: "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl"
  };
  
  return (
    <div 
      className={`${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

// Enhanced Animated Background
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Primary gradient orb */}
    <motion.div
      className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/8 via-cyan-400/6 to-transparent rounded-full blur-3xl"
      animate={{
        x: [0, 60, 0],
        y: [0, -80, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Secondary gradient orb */}
    <motion.div
      className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/8 via-blue-400/6 to-transparent rounded-full blur-3xl"
      animate={{
        x: [0, -60, 0],
        y: [0, 80, 0],
        scale: [1.1, 1, 1.1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Tertiary accent orb */}
    <motion.div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-300/4 to-cyan-300/4 rounded-full blur-2xl"
      animate={{
        x: [-32, 32, -32],
        y: [-32, 32, -32],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

// Enhanced Counter Component
const ProfessionalCounter = ({ value, label, prefix = "", suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCount(prev => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + Math.ceil(value / 40);
          });
        }, 60);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [value, delay, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-5xl lg:text-6xl font-extralight text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 bg-clip-text mb-3"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {prefix}{count.toLocaleString()}{suffix}
        </motion.div>
        <div className="text-sm font-medium text-gray-600 uppercase tracking-widest mb-2">{label}</div>
        <motion.div
          className="mx-auto w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: delay + 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
};

// Enhanced Timeline Component with Achievements - Fixed Layout
const AchievementTimeline = () => {
  const milestones = [
    {
      year: "2025",
      title: "Foundation & Vision",
      description: "Established with a clear mission to revolutionize enterprise technology solutions through innovative approaches and strategic partnerships.",
      metric: "4 Founding Members",
      color: "from-blue-500 to-blue-600",
      icon: "🚀"
    },
    {
      year: "Q2 2025",
      title: "SIH 2024 Victory & Recognition", 
      description: "Achieved national recognition by winning Smart India Hackathon 2024, demonstrating our innovative problem-solving capabilities and technical excellence at the national level.",
      metric: "SIH 2024 Winners",
      color: "from-blue-600 to-cyan-500",
      icon: "🏆"
    },
    {
      year: "Q3 2025",
      title: "National Level Projects Launch",
      description: "Successfully launched multiple national-level projects, establishing our presence in government and public sector technology initiatives with scalable solutions.",
      metric: "National Level Impact",
      color: "from-cyan-500 to-cyan-600",
      icon: "🌟"
    },
    {
      year: "Q4 2025",
      title: "Live Project Portfolio",
      description: "Deployed and actively maintaining live projects across various domains, showcasing real-world impact and continuous innovation in enterprise solutions.",
      metric: "Live Projects Active",
      color: "from-cyan-600 to-blue-500",
      icon: "💡"
    }
  ];

  return (
    <div className="relative">
      {/* Animated Timeline line */}
      <motion.div 
        className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-cyan-400"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="relative pl-16"
          >
            {/* Enhanced Timeline dot with bigger icons and animations */}
            <motion.div
              className={`absolute left-0 top-3 w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10`}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 + 0.4, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.5
                }}
              >
                {milestone.icon}
              </motion.span>
            </motion.div>
            
            {/* Enhanced Achievement Badges with bigger size and animations */}
            {/* Enhanced Achievement Badges with bigger size and animations */}
            {index === 0 && (
              <motion.div
                className="absolute -left-20 top-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full shadow-lg font-bold whitespace-nowrap z-10"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                  y: -5
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                🚀 Our Start
              </motion.div>
            )}
            
            {/* Enhanced Achievement Badges with bigger size and animations */}
            {index === 1 && (
              <motion.div
                className="absolute -left-20 top-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-4 py-2 rounded-full shadow-lg font-bold whitespace-nowrap z-10"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
                  y: -5
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                🏆 SIH Winner
              </motion.div>
            )}
            {index === 2 && (
              <motion.div
                className="absolute -left-24 top-16 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-lg font-bold whitespace-nowrap z-10"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                  y: -5
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                🌟 National Level
              </motion.div>
            )}
            {index === 3 && (
              <motion.div
                className="absolute -left-20 top-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-lg font-bold whitespace-nowrap z-10"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                  y: -5
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                💡 Live Projects
              </motion.div>
            )}
            
            {/* Enhanced Content card with complex animations */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                background: "rgba(255, 255, 255, 0.15)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 + 0.3,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
            >
              <GlassCard variant="subtle" className="rounded-xl p-6 transition-all duration-500 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-cyan-50/50 to-blue-50/50 rounded-xl"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                />
                
                <div className="space-y-3 relative z-10">
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {milestone.year}
                    </motion.span>
                    <motion.span 
                      className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {milestone.metric}
                    </motion.span>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-semibold text-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {milestone.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    {milestone.description}
                  </motion.p>
                </div>
                
                {/* Floating particles animation */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-blue-300 rounded-full opacity-60"
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.7
                  }}
                />
                <motion.div
                  className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, -3, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: index * 0.4 + 1
                  }}
                />
              </GlassCard>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Loading animation overlay that fades out */}
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          className="flex space-x-2"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 0.8,
                repeat: 3,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// // Enhanced Leadership Component
// const LeadershipTeam = () => {
//   const leaders = [
//     {
//       name: "Aniket Rane",
//       position: "Chief Executive Officer",
//       background: "Former VP of Engineering at Fortune 500 technology company with 15+ years of leadership experience",
//       education: "MBA Harvard Business School • MS Computer Science MIT",
//       speciality: "Strategic Vision & Innovation",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Dr. Sarah Mitchell",
//       position: "Chief Technology Officer", 
//       background: "20+ years in enterprise software architecture and AI research with multiple published papers",
//       education: "PhD Computer Science Stanford • MS AI Research",
//       speciality: "AI & Enterprise Architecture",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Michael Rodriguez",
//       position: "Chief Operations Officer",
//       background: "Former McKinsey Partner specializing in operations excellence and digital transformation",
//       education: "MBA Wharton • BS Industrial Engineering",
//       speciality: "Operations & Strategy",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     },
//     {
//       name: "Jennifer Kim",
//       position: "Chief Marketing Officer",
//       background: "Former VP of Marketing at leading tech unicorn with expertise in B2B growth strategies",
//       education: "MBA Northwestern Kellogg • BA Marketing",
//       speciality: "Brand Strategy & Growth",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
//     }
//   ];

//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {leaders.map((leader, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="group"
//         >
//           <GlassCard 
//             variant="highlight" 
//             className="rounded-2xl p-8 hover:bg-white/15 transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
//           >
//             <div className="text-center space-y-6">
//               {/* Profile Image */}
//               <div className="relative mx-auto w-24 h-24">
//                 <motion.img
//                   src={leader.image}
//                   alt={leader.name}
//                   className="w-24 h-24 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                   whileHover={{ scale: 1.05 }}
//                 />
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//               </div>
              
//               {/* Name and Position */}
//               <div className="space-y-2">
//                 <h4 className="text-xl font-semibold text-gray-800">{leader.name}</h4>
//                 <div className="text-sm font-medium text-blue-600">{leader.position}</div>
//                 <div className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">
//                   {leader.speciality}
//                 </div>
//               </div>
              
//               {/* Background */}
//               <p className="text-sm text-gray-600 leading-relaxed">{leader.background}</p>
              
//               {/* Education */}
//               <div className="text-xs text-gray-500 border-t border-gray-200/50 pt-4 font-medium">
//                 {leader.education}
//               </div>
//             </div>
//           </GlassCard>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// Enhanced Values Component (with full-screen video in each box)
const CoreValues = () => {
  const values = [
    {
      title: "Innovation Excellence",
      description: "Pioneering cutting-edge solutions that drive competitive advantage and transform business outcomes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Quality Assurance",
      description: "Implementing rigorous testing, validation processes, and best practices to ensure exceptional deliverables.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Strategic Partnership",
      description: "Building long-term collaborative relationships focused on sustained success and mutual growth.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Agile Delivery",
      description: "Employing modern methodologies and frameworks to deliver solutions efficiently and effectively.",
      color: "from-cyan-600 to-blue-500"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative h-80 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            {/* Full-screen video background for each box */}
            <div className="absolute inset-0 z-0">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/blue.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content overlay */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              {/* Top spacer */}
              <div className="flex-1"></div>
              
              {/* Title centered */}
              <div className="text-center">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="font-light text-2xl mb-8 tracking-wide"
                  style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'system-ui', sans-serif" }}
                >
                  {value.title}
                </motion.h4>
              </div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="text-white leading-relaxed text-center text-base font-light tracking-wide px-2"
                style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'system-ui', sans-serif" }}
              >
                {value.description}
              </motion.p>
              
              {/* Bottom section with accent line */}
              <div className="text-center mt-8 flex-1 flex flex-col justify-end pb-4">
                <motion.div
                  className="w-16 h-0.5 bg-white/80 rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 z-5 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function ProfessionalAbout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden min-h-screen"
    >
      <motion.div style={{ y: backgroundY }}>
        <AnimatedBackground />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div
          style={{ y: textY }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 rounded-full border border-blue-200/50 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">About Airavata Technologies</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight"
          >
            Transforming Business Through
            <br />
            <span className="font-light bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Innovative Technology
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are a premier technology consultancy specializing in enterprise digital transformation, 
            artificial intelligence solutions, and scalable software architecture. Our commitment to excellence 
            drives measurable business outcomes for organizations worldwide.
          </motion.p>
        </motion.div>

        {/* Video Section - Replaces Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Full-screen background video */}
            <div className="absolute inset-0 z-0">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/tree.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20 z-5"></div>
            
            {/* Optional centered content over video */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h3 className="text-4xl lg:text-5xl font-extralight mb-4">
                  Excellence in Motion
                </h3>
                <p className="text-lg font-light max-w-2xl mx-auto">
                  Driving innovation through cutting-edge technology solutions
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to technology, innovation, and client success.
            </p>
          </div>
          <CoreValues />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 mb-24">
          {/* Company Philosophy - Takes 3 columns with Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard variant="subtle" className="rounded-2xl overflow-hidden h-full relative">
              {/* Fullscreen Background Video */}
              <div className="absolute inset-0 z-0">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/win.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="grid lg:grid-cols-5 h-full relative z-10">
                {/* Text Content - 3 columns */}
                <div className="lg:col-span-3 p-10 flex flex-col justify-center">
                  <h2 className="text-4xl font-light text-white mb-8">Our Philosophy</h2>
                  <div className="space-y-6 flex-grow">
                    <p className="text-white/90 leading-relaxed text-lg">
                      We believe that technology should be an enabler of human potential, not a barrier.
                      Our approach combines deep technical expertise with strategic business insight to
                      deliver solutions that create lasting competitive advantages.
                    </p>
                    <p className="text-white/90 leading-relaxed text-lg">
                      Every engagement begins with understanding your unique challenges and objectives.
                      We then architect solutions that not only address immediate needs but also
                      position your organization for future growth and innovation.
                    </p>
                    <div className="pt-6">
                      {/* Removed blue gradient line */}
                    </div>
                  </div>
                </div>
                
                {/* Empty space to maintain grid structure - 2 columns */}
                <div className="lg:col-span-2 relative">
                  {/* This div maintains the grid structure but is transparent */}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Timeline - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">Our Journey</h2>
            <AchievementTimeline />
          </motion.div>
        </div>

        {/* Philosophy Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <GlassCard variant="subtle" className="rounded-3xl overflow-hidden">
            <div className="relative h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Modern office environment with collaborative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-cyan-700/80 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-light mb-6"
                  >
                    Innovation Through Collaboration
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg font-light leading-relaxed"
                  >
                    Our success stems from fostering an environment where creativity meets expertise, 
                    enabling us to deliver transformative solutions that exceed expectations.
                  </motion.p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Leadership Section
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Executive Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our leadership team brings decades of combined experience from top-tier technology 
              companies and consulting firms, driving innovation and excellence across all initiatives.
            </p>
          </div>
          <LeadershipTeam />
        </motion.div> */}

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <GlassCard variant="highlight" className="rounded-3xl p-16 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8">Our Commitment to Excellence</h2>
              <p className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
                "We are committed to delivering technology solutions that not only meet today's challenges 
                but anticipate tomorrow's opportunities. Our success is measured by the sustainable growth 
                and competitive advantage we create for our clients."
              </p>
              <div className="flex justify-center">
                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}