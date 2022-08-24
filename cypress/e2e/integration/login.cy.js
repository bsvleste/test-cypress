/// <reference types="cypress" />
context("Functionalities login",()=>{
    it("should be able to login with a valid email",()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta")
        cy.get('#username').type("aluno_ebac@teste.com");
        cy.get('#password').type("teste@teste.com");
        cy.get('.woocommerce-form > .button').click();

        cy.get('.page-title').should('contain.text', "Minha conta");
    })
    it("should not be able to login with a invalid email",()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta")
        cy.get('#username').type("aluno@teste.com");
        cy.get('#password').type("teste@teste.com");
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain.text', "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.")
    })
    it("should not be able to login with a invalid password",()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta")
        cy.get('#username').type("aluno_ebac@teste.com");
        cy.get('#password').type("testedsdsds@teste.com");
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain.text', "Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?")
    })
})