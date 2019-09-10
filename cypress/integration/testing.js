"use strict";

var expect = require("chai").expect,
joiAssert = require("joi-assert");

const {
    people_schema,
    planets_schema 
  } = require("../schemas/schemas");

const BASE_URL = 'https://swapi.co/api'
const PATH_PEOPLE = '/people/1/'
const PATH_PLANET = '/planets/1/'



describe('Teste Api/Contrato', () => {
    it('Get no endpoint People', () => {
        
        cy.request(BASE_URL + PATH_PEOPLE ).then((response) => {
            expect(response.status).to.be.eql(200);
            joiAssert(response.body, people_schema)
        })
    })
    it('Get no endpoint Planet', () => {
        cy.request(BASE_URL + PATH_PLANET).then((response) => {
            expect(response.status).to.be.eql(200);
            joiAssert(response.body, planets_schema)
        })
    })
})