// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    
    config.params.APPID = '72462fb374cc8269c21726ec7b68b904';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});