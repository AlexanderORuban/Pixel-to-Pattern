describe('Pixel2Pattern App', () => {
  it('page appears', () => {
    cy.visit('/');
    cy.contains('Pixel2Pattern');
  })
})

describe('Create Pattern Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can draw and submit a new pattern', () => {
    cy.contains('Create').click();

    cy.get('[data-testid="paint-bucket"]').click();
    cy.get('[data-testid="pixel-canvas"]').click(50,50);
    cy.get('[data-testid="pattern-name"]').type("Tartarus");
    cy.get('[data-testid="pattern-description"]').type("Testing Cypress!")

    cy.get('[data-testid="submit-pattern"]').click();

    cy.url().should("match", /\/view\/\d+$/)

    cy.get('[data-testid="pattern-canvas"]').should('exist')
    cy.contains("Tartarus");
    cy.contains("Testing Cypress!")
    cy.contains("Row 1: 10 S.C. in #000000")

    cy.get('[data-testid="delete-pattern"]').click()
  })

  it('can delete a pattern after making it', () => {
    cy.contains('Create').click();

    cy.get('[data-testid="pixel-canvas"]').click(50,50);
    cy.get('[data-testid="pattern-name"]').type("a bug?");
    cy.get('[data-testid="pattern-description"]').type("Shortest lived post in history.. just like a bug")

    cy.get('[data-testid="submit-pattern"]').click();

    cy.get('[data-testid="delete-pattern"]').click();
    cy.url().should("match", /\/$/)
    cy.contains('Shortest lived post in history..').should('not.exist')
  })
});