import React from 'react';
import Button from '../../src/components/Button';

describe('Button.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Button className='test'>Click me!</Button>);

    cy.get('button')
      .invoke('attr', 'class')
      .should('eq', 'default test')
  })
})