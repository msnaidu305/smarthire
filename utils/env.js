require('dotenv').config();
require('dotenv').config({ path: '.env' });

module.exports = {
    baseURL: process.env.BASE_URL,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,

    lowbaseUrl: process.env.LowerEnv_URL,
    workemail: process.env.WorkEmail,
    Pass: process.env.Pass  
};