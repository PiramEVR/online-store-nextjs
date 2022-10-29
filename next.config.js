module.exports = {
    experimental: {appDir: true},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/img/**',
            },
        ]
    }
}