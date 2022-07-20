/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];  
// console.log(Object.values(productDetails('x', 'x'))[1].details.productId);

// console.log(Object.values(productDetails('y', 'x'))[0]);
// console.log(Object.values(productDetails('y', 'x'))[0].name);
// console.log(Object.values(productDetails('y', 'x'))[1].name);
// const x = Object.values(productDetails('y', 'x'))[0].name;
// const y = Object.values(productDetails('y', 'x'))[1].name;
// console.log(x !== y)
// console.log(Object.keys(productDetails('x','y')[1].name[0]))
// console.log(Object.values(productDetails('x', 'x'))[1].name !== Object.values(productDetails('x', 'x'))[0].name)
// console.log(Object.entries(productDetails('y', 'x'))[0].name !== Object.value(productDetails('y', 'x'))[1].name);
module.exports = productDetails;
