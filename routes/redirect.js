const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

router.get('/:code', async (request,response) => {
    try{
        const url = await Url.findOne({ urlCode: request.params.code });

        if(url){
            return response.redirect(url.longUrl);
        } else{
            return response.status(404).json('No Url found');
        }
    } catch(err){
        console.error(err.message);
        response.status(500).json('Server Error');
    }
});

module.exports = router;