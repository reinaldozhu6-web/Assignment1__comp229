const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom website development with modern technologies"
        },
        {
            title: "Responsive Design",
            description: "Mobile-friendly designs that work on all devices"
        },
        {
            title: "API Integration",
            description: "Connecting your application with third-party services"
        }
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Services</h1>
            <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        padding: '1.5rem',
                        borderLeft: '4px solid #3498db',
                        backgroundColor: '#f8f9fa'
                    }}>
                        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;