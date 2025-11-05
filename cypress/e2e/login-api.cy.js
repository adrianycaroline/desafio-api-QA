describe('Login API - Serverest', () => {
    it('Login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: '/login',
        body: {
          email: 'adriany@qa.com',
          password: 'teste123'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')
        expect(response.body.authorization).to.exist
      })
    })
  
    it('Falha ao tentar logar com credenciais inválidas', () => {
      cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false,
        body: {
          email: 'usuario@invalido.com',
          password: 'teste123'
        }
      }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Email e/ou senha inválidos')
      })
    })
  })