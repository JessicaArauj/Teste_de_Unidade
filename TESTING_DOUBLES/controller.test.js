// const sinon = require('sinon');
const {spy, assert, stub, mock} = require('sinon');
const {Database} = require ('./database');
const {UsuariosController} = require ('./controller');

describe('Controller de Usuários', () => {

    let respostaEsperada

    beforeAll(() => {
         respostaEsperada = [
            {
                id: 10,
                nome: 'João Carlos',
                email: 'email@teste.com'
            }
        ]
    });

    it('fake', () => {
        

        const fakeDatabase = {
            findAll() { // correção do nome do método
                return respostaEsperada
            }
        }

        const controller = new UsuariosController(fakeDatabase)
        const response = controller.getAll() // chamada da função getAll

        expect(response).toBe(respostaEsperada) // utilização do toEqual para comparar objetos toBe ou toEqual

    });


    it('spy', () => {
        console.log(Database)
        const findAll = spy(Database, 'findAll')
        const controller = new UsuariosController(Database)
        controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        findAll.restore()
    });

    it('stub', () => {

        const findAll = stub(Database, 'findAll')
        findAll.withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuariosController(Database)
        
        const response = controller.getAll()
        assert.calledWith(findAll, 'usuarios')
        expect(response).toEqual(respostaEsperada)

        findAll.restore()
    });
    
    it('mock', () => {

        const dbMock = mock(Database)
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuariosController(Database)
        const response = controller.getAll()
        expect(response).toEqual(respostaEsperada)

        dbMock.verify()
        dbMock.restore()

    });

});