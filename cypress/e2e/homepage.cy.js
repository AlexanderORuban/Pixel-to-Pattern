describe('can visit the page', () => {
  it('page appears', () => {
    cy.visit('http://localhost:3001')
  })
})


describe('can create a new pattern', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/create')
    cy.contains('Pixel2Pattern')
  })

  // selet painbucket
  it('select paintBucket', () => {
    cy.get()    // find element
      .click()  // interact
      .should() // assert
  });

  // chose color
  // dump color
  // fill in pattern name
  // fill in author name
  // fill in description
  // click generate pattern

})
// can create post
  // can view post
// can delete post
  // can no longer view post