import { items } from "../data/items";

export const getItemByName = (name) => {
  if (name.length === 0) return []
  name = name.toLowerCase()
  return items.filter(item => item.name.toLowerCase().includes(name))


}