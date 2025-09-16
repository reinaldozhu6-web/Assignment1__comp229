import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with product management, user authentication, and payment processing.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity application for managing tasks and projects with team collaboration features.",
            technologies: ["React Native", "Firebase", "Redux"],
            image: project2,
            link: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A responsive weather application that displays current and forecasted weather conditions.",
            technologies: ["JavaScript", "Weather API", "CSS3"],
            image: project3,
            link: "#"
        },
        {
            id: 4,
            title: "Restaurant Booking System",
            description: "An online reservation system for restaurants with admin dashboard and customer notifications.",
            technologies: ["Vue.js", "Express.js", "MySQL"],
            image: project4,
            link: "#"
        }
    ];

    return (
        <div className="page-container fade-in">
            <div className="container">
                <h1 className="page-title">My Projects</h1>
                <p className="page-subtitle">Here are some of the projects I've worked on</p>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                {/* 使用img标签显示PNG图片 */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-photo"
                                />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <a href={project.link} className="btn btn-outline">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;