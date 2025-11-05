describe('Carrinhos API - Serverest', () => {
    it('Retorna erro 400 ao cadastrar carrinho sem produtos, mesmo autenticado', () => {
      cy.request({
        method: 'POST',
        url: '/login',
        body: {
          email: 'fulano@qa.com',
          password: 'teste'
        }
      }).then((loginResponse) => {
        const token = loginResponse.body.authorization
  
        cy.request({
          method: 'POST',
          url: '/carrinhos',
          failOnStatusCode: false,
          headers: { Authorization: token },
          body: {
            produtos: []
          }
        }).then((response) => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).to.eq(400)
  
          expect(response.body).to.exist
          expect(response.body).to.be.an('object')
  
          // Só verifica se existir
          if (response.body.error) {
            expect(response.body.error).to.be.true
          }
  
          if (response.body.message) {
            expect(response.body.message).to.be.a('string')
          }
        })
      })
    })
    it('Retorna erro 401 ao tentar cadastrar carrinho sem autenticação', () => {
        cy.request({
          method: 'POST',
          url: '/carrinhos',
          failOnStatusCode: false, // evitar falha automática do Cypress
          body: {
            produtos: [
              {
                idProduto: '1',
                quantidade: 1
              }
            ]
          }
        }).then((response) => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).to.eq(401)
    
          expect(response.body).to.exist
          expect(response.body).to.be.an('object')
    
          // Só verifica se existir
          if (response.body.message) {
            expect(response.body.message).to.be.a('string')
          }
        })
      })
  })