import React, { useState } from 'react';

const Projects = () => {
    // State to manage which project details are expanded
    const [expandedProject, setExpandedProject] = useState(null);

    // Projects data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "Gaming Community Platform",
            category: "Full-Stack Web Application",
            image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=Gaming+Platform",
            description: "A comprehensive community platform designed for gamers to connect, share strategies, and organize tournaments.",
            detailedDescription: "This platform features real-time chat functionality, tournament bracket generation, user profiles with achievement systems, and a review system for games. Built with modern web technologies to ensure optimal performance and user engagement.",
            role: "Full-Stack Developer & UI/UX Designer",
            outcome: "Successfully launched with 500+ active users in the first month, 95% user satisfaction rate, and featured in local gaming communities.",
            technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js"],
            features: [
                "Real-time messaging system",
                "Tournament management",
                "User achievement tracking",
                "Game review and rating system",
                "Responsive design for all devices"
            ],
            links: {
                demo: "#",
                github: "#",
                live: "#"
            }
        },
        {
            id: 2,
            title: "E-Commerce Web Store",
            category: "E-Commerce Platform",
            image: "https://via.placeholder.com/400x250/059669/ffffff?text=E-Commerce",
            description: "A modern e-commerce platform with advanced filtering, payment integration, and inventory management.",
            detailedDescription: "A fully responsive e-commerce solution featuring advanced product filtering, secure payment processing, real-time inventory tracking, and an admin dashboard for store management.",
            role: "Frontend Developer & System Architect",
            outcome: "Increased client sales by 40%, reduced page load times by 60%, and improved mobile user experience significantly.",
            technologies: ["React.js", "Redux", "Stripe API", "Firebase", "Tailwind CSS"],
            features: [
                "Advanced product filtering",
                "Secure payment integration",
                "Real-time inventory tracking",
                "Admin dashboard",
                "Mobile-first responsive design"
            ],
            links: {
                demo: "#",
                github: "#",
                live: "#"
            }
        },
        {
            id: 3,
            title: "Task Management Dashboard",
            category: "Productivity Application",
            image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager",
            description: "An intuitive task management application with team collaboration features and progress tracking.",
            detailedDescription: "A comprehensive productivity tool designed to help teams manage projects efficiently. Features include drag-and-drop task boards, time tracking, file sharing, and detailed analytics.",
            role: "Lead Developer & Project Manager",
            outcome: "Improved team productivity by 45%, reduced project completion time by 30%, and adopted by 3 different organizations.",
            technologies: ["React.js", "Context API", "Chart.js", "LocalStorage", "CSS Modules"],
            features: [
                "Drag & drop task boards",
                "Time tracking and reporting",
                "Team collaboration tools",
                "Progress analytics",
                "Offline functionality"
            ],
            links: {
                demo: "#",
                github: "#",
                live: "#"
            }
        }
    ];

    const toggleProjectDetails = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div className="page projects-page">
            <div className="projects-container">
                {/* Page Header */}
                <div className="projects-header">
                    <h1>My Projects</h1>
                    <p className="projects-intro">
                        Here are some of the projects I've worked on, showcasing my skills in
                        web development, user experience design, and problem-solving. Each project
                        represents a unique challenge and learning opportunity.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            {/* Project Image */}
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {/* Project Meta Information */}
                                <div className="project-meta">
                                    <div className="project-role">
                                        <strong>My Role:</strong> {project.role}
                                    </div>
                                    <div className="project-outcome">
                                        <strong>Outcome:</strong> {project.outcome}
                                    </div>
                                </div>

                                {/* Technologies Used */}
                                <div className="project-technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Expandable Details */}
                                {expandedProject === project.id && (
                                    <div className="project-details">
                                        <h4>Project Details:</h4>
                                        <p>{project.detailedDescription}</p>

                                        <h4>Key Features:</h4>
                                        <ul className="features-list">
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="project-actions">
                                    <button
                                        className="btn-details"
                                        onClick={() => toggleProjectDetails(project.id)}
                                    >
                                        {expandedProject === project.id ? 'Hide Details' : 'Show Details'}
                                    </button>

                                    <div className="project-links">
                                        <a href={project.links.demo} className="project-link demo">
                                            🔗 Demo
                                        </a>
                                        <a href={project.links.github} className="project-link github">
                                            📁 Code
                                        </a>
                                        <a href={project.links.live} className="project-link live">
                                            🚀 Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="projects-footer">
                    <p>
                        Interested in collaborating on a project or learning more about my work?
                        Feel free to reach out through my contact page!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;