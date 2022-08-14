let supertest = require('supertest');
let app = require('../src/app');
let request = supertest(app);

jest.setTimeout(30000);

test("A aplicação deve responder na porta 3131",()=>{

    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
}); 

test("Deve retornar vermelho",()=>{

    return request.get('/cor/lucas').then(res => expect(res.body.cor).toEqual("vermelho"));
}); 


