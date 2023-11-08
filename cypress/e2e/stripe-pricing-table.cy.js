describe('template spec', () => {
  it('should open the stripe checkout page', function () {
    cy.visit('https://stripe-tinydemos-pricing-table.glitch.me/');
    cy.get('stripe-pricing-table[pricing-table-id="prctbl_1LPkKBAPEf9EarUkgSuVM4vY"]').shadow().find('iframe', { timeout: 5000 })
      .its('0.contentDocument.body').should('not.be.undefined')
      .then(cy.wrap)
      .find('div[data-testid="price-column"]').eq(1)
      .find('button').click()
    cy.origin('https://checkout.stripe.com/', () => {
      cy.get('input[name="shippingName"]').click().type('Ana');
    });
  });
})