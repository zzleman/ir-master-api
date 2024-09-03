module.exports = [
    "strapi::logger",
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    {
        name: "strapi::cors",
        config: {
            origin: [
                "http://localhost:5173",
                "https://irmastergroup.az",
                "https://www.irmastergroup.az",
            ],
            methods: ["GET", "OPTIONS"],
            headers: ["Content-Type", "Authorization"],
            keepHeaderOnError: true,
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];