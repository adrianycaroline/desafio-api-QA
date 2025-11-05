describe('Usuários API - Serverest', () => {
    it('Cadastra novo usuário com sucesso', () => {
      const random = Math.floor(Math.random() * 10000)
  
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
          nome: 'Teste QA',
          email: `adriany${random}@qa.com`,
          password: 'teste123',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
  
    it('Valida erro ao cadastrar usuário que já existe', () => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body: {
          nome: 'Fulano da Silva',
          email: 'fulano@qa.com',
          password: 'teste',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.include('Este email já está sendo usado')
      })
    })
  })