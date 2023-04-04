import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Profiles from '../../src/components/Profiles';

describe('Profiles.cy.tsx', () => {
  it('lists all the profiles', () => {
    const fakeProfiles = ['test1', 'test2', 'test3'];

    cy.mount(
      <MemoryRouter initialEntries={["/repos/test"]}>
        <Profiles profiles={fakeProfiles} />
      </MemoryRouter>
    );

    cy.get('[data-test="profiles-ul"]').children().as('lis')
    cy.get('@lis').eq(0).contains('test1')
    cy.get('@lis').eq(1).contains('test2')
    cy.get('@lis').eq(2).contains('test3')
  })
})