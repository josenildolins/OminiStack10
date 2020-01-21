const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');
const routes = Router();

// para receber a resposta do servidor(primeira rota)
routes.post('/devs', async (request, response) =>{
    const { github_username, techs,latitude, longitude } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login,avatar_url,bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'point',
        coordinates: [longitude, latitude],

    };

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
        
    })



   return response.json(dev);
});

module.exports = routes;