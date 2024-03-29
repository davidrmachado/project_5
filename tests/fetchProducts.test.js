require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Verifica se fetchProducts é uma função', () => {
    const actual = typeof fetchProducts;
    const expected = 'function';
    expect(actual).toEqual(expected);
  })

  it('Verifica se, ao executar a função fetchProducts com o argumento "computador", a função fetch é chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(expected);
  })

  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  })

  it('Verifica se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const actual = await fetchProducts();
    expect(actual).toEqual(new Error('You must provide a url'));
  })
});
