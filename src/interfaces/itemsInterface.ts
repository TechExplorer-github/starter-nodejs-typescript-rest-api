export interface BaseItem {
  name: string;
  price: number;
  description: string;
}

export interface Item extends BaseItem {
  id: number;
}

export interface Items {
  [key: number]: Item;
}
