const sumar = require("../index");
const assert = require('assert');

//pruebas, unitarias, funcionales, integración, estres
//¿cómo se escribe una prueba?


describe("Probar la suma de dos números",()=>{
    //afirmamos que cinco más cinco es diez
    // y afirmamos que cinco más cinco no son 55
    it("cinco más cincoes 10",()=>{
        assert.equal(10,sumar(5,5));
    });

    it("Cinco más cinco no son 55",()=>{
        assert.notEqual(55,sumar(5,5));
    })
});
