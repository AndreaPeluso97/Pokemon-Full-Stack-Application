import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  pokemon: [
    {
      name: String,
      base_experience: Number,
      thumbnailSrc: String,
      abilities: [],
      types: []
    }
  ]
}, {timestamps: true})