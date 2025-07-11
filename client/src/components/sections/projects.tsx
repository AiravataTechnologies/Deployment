// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, X, Play, Github, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Enhanced ProjectCard component with video support
// function ProjectCard({ title, description, image, tags, videoUrl, onViewDetails }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//       <div className="relative group">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-48 object-cover"
//         />
//         {videoUrl && (
//           <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Play className="w-12 h-12 text-white drop-shadow-lg" />
//           </div>
//         )}
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         <Button
//           onClick={onViewDetails}
//           className="w-full gradient-bg text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
//         >
//           View Details
//           <ExternalLink className="w-4 h-4 ml-2" />
//         </Button>
//       </div>
//     </div>
//   );
// }

// // Project Details Modal
// function ProjectDetailsModal({ project, isOpen, onClose }) {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
//               <Button
//                 onClick={onClose}
//                 variant="outline"
//                 size="sm"
//                 className="rounded-full p-2"
//               >
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6">
//               {/* Video Section */}
//               {project.videoUrl && (
//                 <div className="mb-8">
//                   <h3 className="text-lg font-semibold mb-4">Project Demo</h3>
//                   <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
//                     <iframe
//                       src={project.videoUrl}
//                       title={`${project.title} Demo`}
//                       className="w-full h-full"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 </div>
//               )}

//               {/* Project Images Gallery */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {project.images.map((img, index) => (
//                     <div key={index} className="rounded-lg overflow-hidden shadow-md">
//                       <img 
//                         src={img} 
//                         alt={`${project.title} screenshot ${index + 1}`}
//                         className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Brief Description */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">About This Project</h3>
//                 <p className="text-gray-600 leading-relaxed">{project.briefDescription}</p>
//               </div>

//               {/* Technologies Used */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Key Features */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Key Features</h3>
//                 <ul className="space-y-2">
//                   {project.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Project Links */}
//               {(project.liveUrl || project.githubUrl) && (
//                 <div className="flex gap-4">
//                   {project.liveUrl && (
//                     <Button className="gradient-bg text-white">
//                       <Globe className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </Button>
//                   )}
//                   {project.githubUrl && (
//                     <Button variant="outline">
//                       <Github className="w-4 h-4 mr-2" />
//                       View Code
//                     </Button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'web', label: 'Web' },
//     { id: 'mobile', label: 'Mobile' },
//     { id: 'cloud', label: 'Cloud' },
//     { id: 'ai', label: 'AI' }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "AI E-commerce Platform",
//       description: "Intelligent recommendation engine with real-time analytics",
//       briefDescription: "A comprehensive e-commerce platform powered by artificial intelligence that provides personalized shopping experiences. The system analyzes user behavior patterns, purchase history, and preferences to deliver highly accurate product recommendations. Built with modern web technologies and scalable cloud infrastructure, it handles thousands of concurrent users while maintaining optimal performance. The platform includes advanced analytics dashboards for merchants, real-time inventory management, and automated customer service chatbots.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["React", "Python", "TensorFlow"],
//       categories: ["web", "ai"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "AI-powered product recommendations",
//         "Real-time analytics dashboard",
//         "Advanced search with NLP",
//         "Personalized user experiences",
//         "Scalable cloud architecture",
//         "Mobile-responsive design"
//       ],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com/example"
//     },
//     {
//       id: 2,
//       title: "HealthTech Mobile App",
//       description: "Patient management and telemedicine platform",
//       briefDescription: "A revolutionary healthcare application that bridges the gap between patients and healthcare providers through seamless digital communication. The app enables remote consultations, appointment scheduling, prescription management, and health monitoring. With HIPAA-compliant security measures and intuitive user interface, it ensures patient data privacy while providing accessible healthcare services. The platform supports video calls, secure messaging, and integration with wearable devices for continuous health monitoring.",
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["React Native", "Node.js", "MongoDB"],
//       categories: ["mobile"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "Telemedicine video consultations",
//         "Appointment scheduling system",
//         "Prescription management",
//         "Health records integration",
//         "Wearable device connectivity",
//         "HIPAA-compliant security"
//       ]
//     },
//     {
//       id: 3,
//       title: "Enterprise Cloud Migration",
//       description: "Scalable multi-cloud infrastructure solution",
//       briefDescription: "A comprehensive cloud migration strategy that transformed legacy enterprise systems into modern, scalable cloud infrastructure. The project involved migrating critical business applications across AWS, Azure, and Google Cloud platforms while ensuring zero downtime and enhanced security. Implemented containerization with Kubernetes, automated CI/CD pipelines, and infrastructure as code practices. The solution reduced operational costs by 40% and improved system reliability and performance significantly.",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["AWS", "Kubernetes", "Docker"],
//       categories: ["cloud"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "Multi-cloud architecture",
//         "Zero-downtime migration",
//         "Automated CI/CD pipelines",
//         "Infrastructure as Code",
//         "Container orchestration",
//         "Enhanced security protocols"
//       ]
//     },
//     {
//       id: 4,
//       title: "FinTech Trading Platform",
//       description: "Real-time trading and portfolio management system",
//       briefDescription: "A sophisticated financial trading platform that provides real-time market data, advanced charting tools, and automated trading capabilities. The system processes thousands of transactions per second with ultra-low latency and implements robust risk management algorithms. Features include portfolio analytics, social trading, algorithmic trading bots, and comprehensive reporting tools. Built with cutting-edge technologies to ensure regulatory compliance and maximum security for financial transactions.",
//       image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["Vue.js", "Express", "Redis"],
//       categories: ["web"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "Real-time market data feeds",
//         "Advanced charting and analytics",
//         "Automated trading algorithms",
//         "Portfolio management tools",
//         "Risk assessment systems",
//         "Regulatory compliance features"
//       ]
//     },
//     {
//       id: 5,
//       title: "Smart Manufacturing AI",
//       description: "Predictive maintenance and quality control system",
//       briefDescription: "An intelligent manufacturing system that leverages IoT sensors and machine learning algorithms to optimize production processes. The platform provides predictive maintenance capabilities, quality control automation, and real-time monitoring of manufacturing equipment. By analyzing sensor data and historical patterns, it predicts equipment failures before they occur, reducing downtime by 60% and improving overall equipment effectiveness. The system integrates seamlessly with existing manufacturing execution systems.",
//       image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["PyTorch", "FastAPI", "IoT"],
//       categories: ["ai"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "Predictive maintenance algorithms",
//         "IoT sensor integration",
//         "Quality control automation",
//         "Real-time equipment monitoring",
//         "Production optimization",
//         "Failure prediction analytics"
//       ]
//     },
//     {
//       id: 6,
//       title: "EdTech Learning Platform",
//       description: "Adaptive learning with cloud-based content delivery",
//       briefDescription: "An innovative educational technology platform that personalizes learning experiences through adaptive algorithms and cloud-based content delivery. The system analyzes student performance and learning patterns to customize curriculum delivery and pace. Features include interactive multimedia content, virtual classrooms, progress tracking, and AI-powered tutoring assistants. The platform supports multiple learning styles and provides comprehensive analytics for educators to track student engagement and performance.",
//       image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       images: [
//         "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
//       ],
//       tags: ["Flutter", "Firebase", "GraphQL"],
//       categories: ["mobile", "cloud"],
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
//       features: [
//         "Adaptive learning algorithms",
//         "Interactive multimedia content",
//         "Virtual classroom environments",
//         "Progress tracking and analytics",
//         "AI-powered tutoring assistance",
//         "Multi-platform accessibility"
//       ]
//     }
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.categories.includes(activeFilter));

//   const handleViewDetails = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing our latest innovations and successful client partnerships.
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <Button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               variant={activeFilter === filter.id ? "default" : "outline"}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeFilter === filter.id
//                   ? 'gradient-bg text-white shadow-lg'
//                   : 'glass-effect hover:bg-white/30'
//               }`}
//             >
//               {filter.label}
//             </Button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           layout
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               layout
//             >
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//                 tags={project.tags}
//                 videoUrl={project.videoUrl}
//                 onViewDetails={() => handleViewDetails(project)}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Project Details Modal */}
//       <ProjectDetailsModal
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </section>
//   );
// }
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, X, Play, Github, Globe } from "lucide-react";

// // Button component (since we can't import from shadcn)
// function Button({ children, onClick, variant = "default", size = "default", className = "", ...props }) {
//   const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
//   const variants = {
//     default: "bg-primary text-primary-foreground hover:bg-primary/90",
//     outline: "border border-input hover:bg-accent hover:text-accent-foreground",
//   };
  
//   const sizes = {
//     default: "h-10 py-2 px-4",
//     sm: "h-9 px-3 rounded-md",
//   };
  
//   return (
//     <button
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// // Enhanced ProjectCard component with video support
// function ProjectCard({ title, description, image, tags, videoUrl, onViewDetails }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//       <div className="relative group">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-48 object-cover object-top cursor-pointer"
//           onClick={() => onViewDetails()}
//         />
//         {videoUrl && (
//           <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Play className="w-12 h-12 text-white drop-shadow-lg" />
//           </div>
//         )}
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         <button
//           onClick={onViewDetails}
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
//         >
//           View Details
//           <ExternalLink className="w-4 h-4 ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Image Zoom Modal
// function ImageZoomModal({ imageSrc, alt, isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           className="relative max-w-[90vw] max-h-[90vh]"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <img 
//             src={imageSrc} 
//             alt={alt}
//             className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// // Project Details Modal
// function ProjectDetailsModal({ project, isOpen, onClose }) {
//   const [zoomedImage, setZoomedImage] = useState(null);
//   const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);

//   if (!project) return null;

//   const handleImageClick = (imageSrc, alt) => {
//     setZoomedImage({ src: imageSrc, alt });
//     setIsImageZoomOpen(true);
//   };

//   const handleCloseImageZoom = () => {
//     setIsImageZoomOpen(false);
//     setZoomedImage(null);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
//               <button
//                 onClick={onClose}
//                 className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6">
//               {/* Video Section */}
//               {project.videoUrl && (
//                 <div className="mb-8">
//                   <h3 className="text-lg font-semibold mb-4">Project Demo</h3>
//                   <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
//                     <iframe
//                       src={project.videoUrl}
//                       title={`${project.title} Demo`}
//                       className="w-full h-full"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 </div>
//               )}

//               {/* Project Images Gallery */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {project.images.map((img, index) => (
//                     <div 
//                       key={index} 
//                       className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
//                       onClick={() => handleImageClick(img, `${project.title} screenshot ${index + 1}`)}
//                     >
//                       <img 
//                         src={img} 
//                         alt={`${project.title} screenshot ${index + 1}`}
//                         className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Brief Description */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">About This Project</h3>
//                 <p className="text-gray-600 leading-relaxed">{project.briefDescription}</p>
//               </div>

//               {/* Technologies Used */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Key Features */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Key Features</h3>
//                 <ul className="space-y-2">
//                   {project.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Project Links */}
//               {(project.liveUrl || project.githubUrl) && (
//                 <div className="flex gap-4">
//                   {project.liveUrl && (
//                     <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg flex items-center hover:shadow-lg transition-all">
//                       <Globe className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </button>
//                   )}
//                   {project.githubUrl && (
//                     <button className="border border-gray-300 px-6 py-2 rounded-lg flex items-center hover:bg-gray-100 transition-colors">
//                       <Github className="w-4 h-4 mr-2" />
//                       View Code
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* Image Zoom Modal */}
//           <ImageZoomModal
//             imageSrc={zoomedImage?.src}
//             alt={zoomedImage?.alt}
//             isOpen={isImageZoomOpen}
//             onClose={handleCloseImageZoom}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'web', label: 'Web' },
//     { id: 'mobile', label: 'Mobile' },
//     { id: 'cloud', label: 'Cloud' },
//     { id: 'ai', label: 'AI' }
//   ];

// const projects = [
//     {
//       id: 1,
//       title: "Prototype for Real-Time Hospital-Blood Bank Coordination Platform",
//       description: "A Smart System for Efficient Blood Request Management and Rapid Emergency Response",
//       briefDescription: "This web-based healthcare logistics platform bridges the gap between hospitals and blood banks by providing a real-time blood request, delivery, and coordination system. The system ensures swift and transparent communication from blood request initiation to final delivery or return, improving emergency response and patient care outcomes.",
//       image: "videos/1.1.png",
//       images: [
//         "videos/1.1.png",
//         "videos/1.2.png",
//         "videos/1.3.png",
//         "videos/1.4.png"
//       ],
//       tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//       categories: ["web"],
//       videoUrl: "https://www.youtube.com/embed/cfXZBSW-RSI",
//       features: [
//         "Role-Based Dashboards - Custom interfaces for Hospitals, Blood Banks, Drivers, and Admins",
//         "Secure login and real-time dashboard updates based on role",
//         "Hospital Panel Features: Initiate Blood Request with blood group, quantity, urgency level",
//         "Blood Bank management system with inventory tracking",
//         "Real-time delivery tracking and status updates",
//         "Emergency response prioritization system"
//       ],
//       liveUrl: "https://example.com"
//     },
//     {
//       id: 2,
//       title: "Professional Restaurant Website Design Prototype",
//       description: "Enhancing Online Presence and Customer Engagement for Restaurants",
//       briefDescription: "This project is a modern, fully responsive restaurant website prototype developed using React.js, aimed at enhancing the online presence of restaurants, cafés, and food businesses. The design emphasizes clean aesthetics, intuitive navigation, and mobile-first responsiveness. It provides a solid foundation for real-world deployment by combining engaging visuals with a modular, scalable code structure.",
//       image: "videos/2.1.png",
//       images: [
//         "videos/2.1.png",
//         "videos/2.2.png",
//         "videos/2.3.png",
//         "videos/2.4.png"
//       ],
//       tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//       categories: ["web"],
//       videoUrl: "https://www.youtube.com/embed/9hA-mSbXZh4",
//       features: [
//         "Home Page with full-screen banner and sticky navigation with smooth scrolling",
//         "Menu Section with categorized items and reusable React components for dynamic rendering",
//         "About Us Section with story-driven content and chef profiles with photos",
//         "Contact & Reservation Section with responsive forms and embedded Google Map",
//         "Mobile-first responsive design optimized for all devices",
//         "Future-ready architecture for eCommerce integration and CMS"
//       ],
//       liveUrl: "https://example.com"
//     },
//     {
//       id: 3,
//       title: "Smart QR-Based Restaurant Menu and Management App",
//       description: "Digitizing Dining Experiences with Contactless Menus and Streamlined Management",
//       briefDescription: "This application is a digital restaurant menu system that streamlines the dining experience for customers and simplifies menu and restaurant management for owners. It supports two primary user roles: Customers and Restaurant Owners, with a third Admin/Product Owner Panel for overseeing multiple restaurants across the platform.",
//       image: "videos/3.1.png",
//       images: [
//         "videos/3.1.png",
//         "videos/3.2.png",
//         "videos/3.3.png",
//         "videos/3.4.png"
//       ],
//       tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//       categories: ["web"],
//       videoUrl: "https://www.youtube.com/embed/DzWkxU0Y1SY",
//       features: [
//         "Customer arrives and sits at table with QR code scanning capability",
//         "Digital menu viewing and seamless order placement system",
//         "Real-time order display on Owner Dashboard and Kitchen Display",
//         "Customer service features: waiter calling and bill request functionality",
//         "Owner analytics dashboard with daily orders, revenue, and popular dishes tracking",
//         "Multi-restaurant management through Admin/Product Owner Panel"
//       ],
//       liveUrl: "https://example.com"
//     }
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.categories.includes(activeFilter));

//   const handleViewDetails = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Featured Projects</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing our latest innovations and successful client partnerships.
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeFilter === filter.id
//                   ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                   : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-gray-200'
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           layout
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               layout
//             >
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//                 tags={project.tags}
//                 videoUrl={project.videoUrl}
//                 onViewDetails={() => handleViewDetails(project)}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Project Details Modal */}
//       <ProjectDetailsModal
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </section>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Play, Github, Globe } from "lucide-react";

// Button component (since we can't import from shadcn)
function Button({ children, onClick, variant = "default", size = "default", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Enhanced ProjectCard component with video support
function ProjectCard({ title, description, image, tags, videoUrl, onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover object-top cursor-pointer"
          onClick={() => onViewDetails()}
        />
        {videoUrl && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-12 h-12 text-white drop-shadow-lg" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          View Details
          <ExternalLink className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

// Image Zoom Modal
function ImageZoomModal({ imageSrc, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={imageSrc} 
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Project Details Modal
function ProjectDetailsModal({ project, isOpen, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);

  if (!project) return null;

  const handleImageClick = (imageSrc, alt) => {
    setZoomedImage({ src: imageSrc, alt });
    setIsImageZoomOpen(true);
  };

  const handleCloseImageZoom = () => {
    setIsImageZoomOpen(false);
    setZoomedImage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <button
                onClick={onClose}
                className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Video Section */}
              {project.videoUrl && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Project Demo</h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} Demo`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Project Images Gallery */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => handleImageClick(img, `${project.title} screenshot ${index + 1}`)}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Brief Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">About This Project</h3>
                <p className="text-gray-600 leading-relaxed">{project.briefDescription}</p>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center hover:shadow-lg transition-all">
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="border border-gray-300 px-6 py-2 rounded-lg flex items-center hover:bg-gray-100 transition-colors">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Image Zoom Modal */}
          <ImageZoomModal
            imageSrc={zoomedImage?.src}
            alt={zoomedImage?.alt}
            isOpen={isImageZoomOpen}
            onClose={handleCloseImageZoom}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ai', label: 'AI' }
  ];

const projects = [
    {
      id: 1,
      title: "Prototype for Real-Time Hospital-Blood Bank Coordination Platform",
      description: "A Smart System for Efficient Blood Request Management and Rapid Emergency Response",
      briefDescription: "This web-based healthcare logistics platform bridges the gap between hospitals and blood banks by providing a real-time blood request, delivery, and coordination system. The system ensures swift and transparent communication from blood request initiation to final delivery or return, improving emergency response and patient care outcomes.",
      image: "videos/1.1.png",
      images: [
        "videos/1.1.png",
        "videos/1.2.png",
        "videos/1.3.png",
        "videos/1.4.png"
      ],
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      categories: ["web"],
      videoUrl: "https://www.youtube.com/embed/cfXZBSW-RSI",
      features: [
        "Role-Based Dashboards - Custom interfaces for Hospitals, Blood Banks, Drivers, and Admins",
        "Secure login and real-time dashboard updates based on role",
        "Hospital Panel Features: Initiate Blood Request with blood group, quantity, urgency level",
        "Blood Bank management system with inventory tracking",
        "Real-time delivery tracking and status updates",
        "Emergency response prioritization system"
      ],
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Professional Restaurant Website Design Prototype",
      description: "Enhancing Online Presence and Customer Engagement for Restaurants",
      briefDescription: "This project is a modern, fully responsive restaurant website prototype developed using React.js, aimed at enhancing the online presence of restaurants, cafés, and food businesses. The design emphasizes clean aesthetics, intuitive navigation, and mobile-first responsiveness. It provides a solid foundation for real-world deployment by combining engaging visuals with a modular, scalable code structure.",
      image: "videos/2.1.png",
      images: [
        "videos/2.1.png",
        "videos/2.2.png",
        "videos/2.3.png",
        "videos/2.4.png"
      ],
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      categories: ["web"],
      videoUrl: "https://www.youtube.com/embed/9hA-mSbXZh4",
      features: [
        "Home Page with full-screen banner and sticky navigation with smooth scrolling",
        "Menu Section with categorized items and reusable React components for dynamic rendering",
        "About Us Section with story-driven content and chef profiles with photos",
        "Contact & Reservation Section with responsive forms and embedded Google Map",
        "Mobile-first responsive design optimized for all devices",
        "Future-ready architecture for eCommerce integration and CMS"
      ],
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Smart QR-Based Restaurant Menu and Management App",
      description: "Digitizing Dining Experiences with Contactless Menus and Streamlined Management",
      briefDescription: "This application is a digital restaurant menu system that streamlines the dining experience for customers and simplifies menu and restaurant management for owners. It supports two primary user roles: Customers and Restaurant Owners, with a third Admin/Product Owner Panel for overseeing multiple restaurants across the platform.",
      image: "videos/3.1.png",
      images: [
        "videos/3.1.png",
        "videos/3.2.png",
        "videos/3.3.png",
        "videos/3.4.png"
      ],
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      categories: ["web"],
      videoUrl: "https://www.youtube.com/embed/DzWkxU0Y1SY",
      features: [
        "Customer arrives and sits at table with QR code scanning capability",
        "Digital menu viewing and seamless order placement system",
        "Real-time order display on Owner Dashboard and Kitchen Display",
        "Customer service features: waiter calling and bill request functionality",
        "Owner analytics dashboard with daily orders, revenue, and popular dishes tracking",
        "Multi-restaurant management through Admin/Product Owner Panel"
      ],
      liveUrl: "https://example.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest innovations and successful client partnerships.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                videoUrl={project.videoUrl}
                onViewDetails={() => handleViewDetails(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}