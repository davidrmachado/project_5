require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  it('Verifica se fetchItem é uma função', () => {
    const actual = typeof fetchItem;
    const expected = 'function';
    expect(actual).toEqual(expected);
  })

  it('Verifica se, ao executar a função fetchItem com o argumento "MLB1615760527", a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(expected);
  })

  it('Verifica se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const actual = await fetchItem('item');
    expect(actual).toEqual(item);
  })

  it('Verifica se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const actual = await fetchItem();
    expect(actual).toEqual(new Error('You must provide a url'));
  })
});
