function soma(a, b) {
    return a + b;
  }
  
  describe('soma', () => {
    it('deve retornar a soma de dois números', () => {
      expect(soma(1, 2)).toBe(3);
    });
  });
  