import { render } from '@testing-library/react';

describe('InputWithFocusButton', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('increments render count when input value changes', () => {
    cy.get('input').type('some text').should('have.value', 'some text');
    cy.get('#p1').should('have.text', 'Render count: 9');
  });

  it('displays the word count when the button is clicked ', () => {
    const text = 'This test is for useRef';

    cy.get('input').type(text);
    cy.get('button').click();

    cy.get('#p2').should('have.text', `Word count: ${text.trim().split(' ').length}`);
  });
  
  it('shows the value in the input when typing', () => {
    const typedText = 'This Test is for UseRef';

    cy.get('input').type(typedText).should('have.value', typedText);
  });


  it('focuses the input on button click', () => {
    cy.get('input').should('not.be.focused');
    cy.get('button').click();
    cy.get('input').should('be.focused');
    cy.focused().should('have.attr', 'type', 'text');
  });



});
