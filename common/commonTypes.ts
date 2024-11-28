export enum CaseItemRarity {
  Primary = 1,
  Rare = 2,
  SuperRare = 3,
  Epic = 4,
  Mif = 5,
  Legend = 6
}

export type Item = {
  id: string;
  name: string;
  type: number;
  rarity: CaseItemRarity;
  baseCost: number;
  sellPrice: number;
  isVisible: boolean;
  dropChance: number;
  game: string;
  image: string;
};

export type CaseType = {
  id: string;
  name: string;
  image: string;
  type: number;
  price: number;
  openLimit: number;
  discount: number;
  oldPrice: number;
  items: Item[];
};

export type CaseBaseDataType = {
  id: string;
  name: string;
  image: string;
  category: number;
  rarity: CaseItemRarity;
}