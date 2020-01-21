const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['point'],
    required: true,
    },

    coordinates: {
        type: [Number],
    required: true,

    },
    
});

module.exports = pointSchema;