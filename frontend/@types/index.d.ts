declare type Rarity =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'VERY_RARE'
  | 'IMPORT'
  | 'EXOTIC'
  | 'BLACK_MARKET'
  | 'LIMITED'
  | 'PREMIUM';

declare type Paint =
  | 'CRIMSON'
  | 'LIME'
  | 'BLACK'
  | 'SKY_BLUE'
  | 'BURNT_SIENNA'
  | 'FOREST_GREEN'
  | 'PURPLE'
  | 'PINK'
  | 'ORANGE'
  | 'TITANIUM_WHITE'
  | 'SAFFRON';

declare type BmPaint =
  | 'GOLD'
  | 'ROSE_GOLD'
  | 'WHITE_GOLD'
  | 'ONYX'
  | 'PLATINUM';

declare type Item = {
  name: string;
  src: string;
  rarity: Rarity;
  paint?: Paint;
  bmPaint?: BmPaint;
  edition?: string;
  primary?: Color;
  accent?: Color;
};

declare type Color = {
  color: string;
  bmColor?: string;
};

declare type Loadout = {
  body: Item;
  decal: Item;
  finish: Item;
  wheels: Item;
  boost: Item;
  topper: Item;
  antenna: Item;
  explosion: Item;
  trail: Item;
  engine: Item;
  banner: Item;
};

declare type Loadouts = {
  blue: Loadout;
  orange: Loadout;
};
