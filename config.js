const config = {
    NODE_ENV: 'production',
    API_PATH: {
        dev: 'http://127.0.0.1:8000/api',
        test: 'http://localhost:3500',
        production: 'https://api.a-slots.com/api'
    },
    API_TRANSPORT: 'axios' /* axios, nativeFetch */
}
export default  config