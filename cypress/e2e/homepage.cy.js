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

    cy.get('[data-testid="pixel-canvas"]').click(50,50)
  })
});
// describe('can create a new pattern', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3001/create')
//   })

//   // selet painbucket
//   it('select paintBucket', () => {
//     cy.get()    // find element
//       .click()  // interact
//       .should() // assert
//   });

  // chose color
  // dump color
  // fill in pattern name
  // fill in author name
  // fill in description
  // click generate pattern

// })
// can create post
  // can view post
// can delete post
  // can no longer view post