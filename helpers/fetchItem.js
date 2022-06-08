const fetchItem = async (searchArgument) => {
  const endpoint = `https://api.mercadolibre.com/items/${searchArgument}`;
  const response = await fetch(endpoint);
  const { result } = await response.json();
  console.log(result);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
