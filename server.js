
const express = require('express');
const path = require('path');

const app = express();

// Configure port for local and cloud deployment
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API 1: Cloud Services Catalog
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: 'Amazon EC2',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-go'
        },
        {
            serviceId: 2,
            serviceName: 'AWS Lambda',
            category: 'PaaS',
            pricingModel: 'Pay-per-request'
        },
        {
            serviceId: 3,
            serviceName: 'Amazon S3',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-use'
        },
        {
            serviceId: 4,
            serviceName: 'Google Cloud Run',
            category: 'PaaS',
            pricingModel: 'Pay-per-use'
        }
    ];

    res.json(services);
});

// API 2: Application Status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Operational',
        developer: 'John Daniel Iype',
        environment: 'Cloud PaaS'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Cloud Catalog server running on port ${PORT}`);
    console.log(`Local URL: http://localhost:${PORT}`);
});
