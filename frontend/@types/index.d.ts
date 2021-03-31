export enum Slot {
  BODY = 0,
  SKIN = 1,
  WHEELS = 2,
  BOOST = 3,
  ANTENNA = 4,
  HAT = 5,
  PAINTFINISH = 7,
  PAINTFINISH_SECONDARY = 12,
  ENGINE_AUDIO = 13,
  SUPERSONIC_TRAIL = 14,
  GOALEXPLOSION = 15,
}

export enum Paint {
  NONE = 0,
  CRIMSON = 1,
  LIME = 2,
  BLACK = 3,
  SKYBLUE = 4,
  COBALT = 5,
  BURNT_SIENNA = 6,
  FOREST_GREEN = 7,
  PURPLE = 8,
  PINK = 9,
  ORANGE = 10,
  GREY = 11,
  TITANIUM_WHITE = 12,
  SAFFRON = 13,
  GOLD = 14,
  ROSE_GOLD = 15,
  WHITE_GOLD = 16,
  ONYX = 17,
  PLATINUM = 18,
}

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
