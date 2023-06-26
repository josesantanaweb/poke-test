/// <reference types="cypress" />

const validUser = {
  email: "jonhdoe@gmail.com",
  password: "12345",
};

describe("pokemon", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("error login", () => {
    cy.get(".email").type(validUser.email);
    cy.get(".password").type(123456);
    cy.get(".button-login").click();
    cy.get(".alert").first().should("have.text", "Credenciales Invalidas!");
  });

  it("success login", () => {
    cy.get(".email").type(validUser.email);
    cy.get(".password").type(validUser.password);
    cy.get(".button-login").click();
    cy.wait(2000);
    cy.get(".list-title").first().should("have.text", "Lista de Pokemones");
  });

  it("search pokemon", () => {
    cy.get(".email").type(validUser.email);
    cy.get(".password").type(validUser.password);
    cy.get(".button-login").click();
    cy.wait(2000);
    cy.get(".search").type("bulbasaur");
    cy.get(".pokemon-name").first().should("have.text", "bulbasaur");
  });


  it("displays twelve pokemons", () => {
    cy.get(".email").type(validUser.email);
    cy.get(".password").type(validUser.password);
    cy.get(".button-login").click();
    cy.wait(2000);
    cy.get(".pokemon").should("have.length", 12);
  });

  it("check paginate", () => {
    cy.get(".email").type(validUser.email);
    cy.get(".password").type(validUser.password);
    cy.get(".button-login").click();
    cy.get(".button-next").click();
    cy.wait(2000);
    cy.get(".pokemon").should("have.length", 12);
  });

});
