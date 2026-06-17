require('dotenv').config();
require('dotenv').config({ path: '.env' });

module.exports = {
    baseURL: process.env.BASE_URL,
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};