const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:3000'
    }
];

module.exports = PROXY_CONFIG;
