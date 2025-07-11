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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.id
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