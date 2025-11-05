describe('Produtos API - Serverest', () => {
    it('Listar produtos com sucesso', () => {
      cy.request('/produtos').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.quantidade).to.be.greaterThan(0)
        expect(response.body.produtos).to.be.an('array')
      })
    })
  
    it('Valida erro ao cadastrar produto sem token', () => {
      cy.request({
        method: 'POST',
        url: '/produtos',
        failOnStatusCode: false,
        body: {
          nome: 'Produto sem token',
          preco: 100,
          descricao: 'Produto teste',
          quantidade: 10
        }
      }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
      })
    })
  })