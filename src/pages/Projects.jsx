const Projects = () => {
    const projects = [
        {
            title: "E-commerce Website",
            description: "A full-stack e-commerce platform with React and Node.js",
            tech: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Weather App",
            description: "Real-time weather application with location detection",
            tech: ["JavaScript", "API Integration", "CSS"]
        },
        {
            title: "Task Manager",
            description: "Productivity app for managing daily tasks and projects",
            tech: ["React", "Local Storage", "Material UI"]
        }
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">My Projects</h1>
            <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        padding: '2rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>{project.title}</h3>
                        <p style={{ marginBottom: '1rem' }}>{project.description}</p>
                        <div>
                            {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} style={{
                                    display: 'inline-block',
                                    padding: '0.3rem 0.8rem',
                                    background: '#3498db',
                                    color: 'white',
                                    borderRadius: '15px',
                                    fontSize: '0.8rem',
                                    margin: '0.2rem'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;