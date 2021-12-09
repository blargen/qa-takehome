/// <reference types="cypress" />

describe('search for MarketDial using google and verify', () => {
  it('searches for MarketDial using google and clicks the link to verify that we are brought to the correct page', () => {
    cy.visit('https://www.google.com')
    cy.get('input[name="q"')
      .type('MarketDial{enter}');

    // I left this in here to talk about. This was an attempt to get rid of the "errors" when google is attempting
    // to autocomplete. Not perfect, but it certainly lowers the number of them. Instead of typing into the field
    // we are attempting to change the value all at once. This isn't a great way to do it, either, but google always
    // causes problems with automated tests.
    // cy.get('input[name="q"]')
    //   .invoke('val', 'MarketDial')
    //   .trigger('change')
    //   .type('{enter}')

    cy.get('a[href="https://marketdial.com/"]')
      .first()
      .click();
    // We want to make sure we have the right heading
    cy.get('h2[class="u-heading"]')
      .should('have.text', 'Applicable for Any Retail Function')
      .should('be.visible');
    cy.get('#menu-item-374')
      .parent()
      .invoke('show');
    cy.get('#menu-item-374')
      .click();
    // This will fail as it is worded improperly
    cy.get('.o-banner > .container > .row > .col-md-12 > h2')
      .should('have.text', 'Using MarketDial, You Can')
      .should('be.visible');
  });

});