"use strict";

const Joi = require("joi");


const people_schema = Joi.object({
    name: Joi.string(),
    height: Joi.string(),
    mass: Joi.string(),
    hair_color: Joi.string(),
    skin_color: Joi.string(),
    eye_color: Joi.string(),
    birth_year: Joi.string(),
    gender: Joi.string(),
    homeworld: Joi.string(),
    species: Joi.array(),
    films: Joi.array(),
    vehicles: Joi.array(),
    starships: Joi.array(),
    created: Joi.string(),
    edited: Joi.string(),
    url: Joi.string(), 

})

const planets_schema = Joi.object({
    name: Joi.string(),
    rotation_period: Joi.string(),
    orbital_period: Joi.string(),
    diameter: Joi.string(),
    climate: Joi.string(),
    gravity: Joi.string(),
    terrain: Joi.string(),
    surface_water: Joi.string(),
    population: Joi.string(),
    residents: Joi.array(),
    films: Joi.array(),
    created: Joi.string(),
    edited: Joi.string(),
    url: Joi.string(), 
})
  
  
  module.exports = {
    people_schema,
    planets_schema
  }