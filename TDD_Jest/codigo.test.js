const soma = require('./codigo');

  describe('soma', () => {

    beforeAll(() => {
      console.log('Antes do teste')
    })

    beforeEach(() => {
      console.log('Depois do teste')
    });

    it('deve retornar a soma de dois números', () => {
      const a = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      expect(soma(a, b)).toBe(a + b);
    });


  });
  
  