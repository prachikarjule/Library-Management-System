// export const Server_URL  = 'http://localhost:5000/'
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/';
export const Server_URL = backendUrl.endsWith('/') ? backendUrl : backendUrl + '/';
