import { BaseItem, Item, Items } from "../interfaces/itemsInterface";

let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
  },
};

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
