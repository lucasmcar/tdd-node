let app = require('../app');

test("Deve realizar a soma quando receber a e b", () => {
    let resultado = app.soma(5,5);

    expect(resultado).toEqual(10);
});