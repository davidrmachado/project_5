const fetchProducts = async (searchArgument) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${searchArgument}`;
  const response = await fetch(endpoint);
  const { results } = await response.json();
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
