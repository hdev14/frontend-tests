import React from 'react';
import FormProfile from '../../src/components/FormProfile';

describe('FormProfile.cy.tsx', () => {
  it('calls addProfile after type the input', () => {
    // Arrange
    const addProfileSpy = cy.spy().as('addProfileSpy')
    cy.mount(<FormProfile addProfile={addProfileSpy}/>)
    
    // Act
    cy.get('[data-test="form-profile-input"]').type('asdfasdfasdfasdfsd')
    cy.get('[data-test="form-profile-btn"]').click()
    
    // Assert
    cy.get('@addProfileSpy').should('have.been.calledOnce')
  })

  it("doesn't call addProfile if input is empty", () => {
    // Arrange
    const addProfileSpy = cy.spy().as('addProfileSpy')
    cy.mount(<FormProfile addProfile={addProfileSpy}/>)
    
    cy.get('[data-test="form-profile-btn"]').click()
    
    // Assert
    cy.get('@addProfileSpy').should('not.have.been.calledOnce')
  })
})