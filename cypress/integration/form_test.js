

describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002')
    })

    const nameInput = () => cy.get('input[data-test=name-test-input]')
    const emailInput = () => cy.get('input[data-test=email-test-input]')
    const passwordInput = () => cy.get('input[data-test=password-test-input]')
    const termsCheck = () => cy.get('input[data-test=terms-test-check]')
    const submitBtn = () => cy.get('button[id=submitBtn]')

    const setInputs = () => {
        nameInput()
            .should('have.value', '')
            .type('Kaldog')
            .should('have.value', 'Kaldog')
        emailInput()
            .should('have.value', '')
            .type('Kaldog@doggo.com')
            .should('have.value', 'Kaldog@doggo.com')
        passwordInput()
            .should('have.value', '')
            .type('peanutButter')
            .should('have.value', 'peanutButter')
        termsCheck()
            .check()
    }

    const submitForm = () => {
        setInputs()
        submitBtn().click()
    }

    it('can type in the inputs', setInputs)

    it('can check terms of service box', () => {
        termsCheck()
            .check()
    })

    describe('can submit form data', () => {
        it('can type in the inputs', submitForm)
    })

    it('form validation if empty input field', () => {
        setInputs()
        nameInput().clear()
        cy.contains('Username is required').should('exist')
    })

})