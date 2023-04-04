import React from 'react';
import Repos from '../../src/components/Repos';

describe('Profiles.cy.tsx', () => {
  it('lists all the profiles', () => {
    const fakeRepos = [
      {
        name: 'test1',
        link: 'http://fake.com/test1',
      },
      {
        name: 'test2',
        link: 'http://fake.com/test2',
      }
    ];

    cy.mount(<Repos data={fakeRepos} />);

    cy.get('[data-test="repos-ul"]').children().should('have.length', 2).as('lis');
    
    cy.get('@lis').eq(0).contains('test1');
    cy.get('@lis').eq(0).within(() => {
      cy.get('a').invoke('attr', 'href').should('eq', 'http://fake.com/test1');
    });

    cy.get('@lis').eq(1).contains('test2');
    cy.get('@lis').eq(1).within(() => {
      cy.get('a').invoke('attr', 'href').should('eq', 'http://fake.com/test2');
    });
  })
})