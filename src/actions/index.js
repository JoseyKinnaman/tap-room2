export const deleteKombucha = id => ({
  type: 'DELETE_KOMBUCHA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKombucha = (kombucha) => {
  const { id, name, brand, price, alcoholContent, flavor, pints } = kombucha
  return {
    type: 'ADD_KOMBUCHA',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    flavor: flavor,
    pints: pints,
    id: id,
  }
}