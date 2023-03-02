import axios from 'axios';

const DEV_URL = 'http://localhost:8000';
const PROD_URL = 'https://hiring-registration-system-prod-tbomrea3iq-uw.a.run.app';
const STAGE_URL = 'https://hiring-registration-system-stage-tbomrea3iq-uw.a.run.app/';

const getCurrentUrl = () => window.location.href;

const isProd = getCurrentUrl().includes("hiring-registration-system-prod");
const isStage = getCurrentUrl().includes("hiring-registration-system-prod");
const isDev = !(isProd || isStage);


const API = axios.create({
  baseURL: (
    isDev ? DEV_URL : (
        isProd ? PROD_URL : STAGE_URL
    )
  )
});

// Import this object instead of axios
// make API requests like:
// API.get("/api/login").then(...)
export default API;
