import * as c from './../actions/ActionTypes'

export const deleteKombucha = id => ({
  type: c.DELETE_KOMBUCHA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKombucha = (kombucha) => {
  const { id, name, brand, price, alcoholContent, flavor, pints } = kombucha
  return {
    type: c.ADD_KOMBUCHA,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    flavor: flavor,
    pints: pints,
    id: id,
  }
}