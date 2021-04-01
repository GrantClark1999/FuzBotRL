export type Item = {
  id: number;
  paint?: number;
};

export type Color = {
  color: number;
  finish: number;
  override?: number;
};

export type Skin = {
  id: number;
  primary: Color;
  accent: Color;
};

export type Loadout = {
  banner: Item;
  boost: Item;
  car: Item;
  goalExplosion: Item;
  skin: Skin;
  trail: Item;
  wheels: Item;
  topper: Item;
  antenna: Item;
  engineAudio: number;
};
