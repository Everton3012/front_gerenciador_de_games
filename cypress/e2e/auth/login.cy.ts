describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
  
    it('should login successfully', () => {
      cy.get('input[name="email"]').type('evertonmoura137@outlook.com')
      cy.get('input[name="password"]').type('Ever@137')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
    })
  
    it('should show error on invalid credentials', () => {
      cy.get('input[name="email"]').type('invalid@email.com')
      cy.get('input[name="password"]').type('wrongpass')
      cy.get('button[type="submit"]').click()
      cy.contains('Erro ao fazer login').should('be.visible')
    })
  })