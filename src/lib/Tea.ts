export enum TeaType {
  All = 0,
  Black,
  Green,
  White,
  Dark,
  Fruit,
  Rooibos,
  Aromathized,
  None,
};

export class TeaTag {
  bio: bool;
  aromathized: bool;

  constructor() {
    this.bio = false;
    this.aromathized = false;
  }
};

//"black" | "green" | "white" | "dark" | "fruit" | "rooibos" | null;

export class Tea {
  name: string;
  description: string;
  preparation: string;
  small_image: string;
  large_image: string;
  tea_type: TeaType;
  tea_tag: TeaTag;
  price: number;
  price_bio: number;
}

const get_type = (str: any): TeaType => {
  let typ: TeaType;
  switch (str) {
    case "black":
      typ = TeaType.Black;
      break;
    case "green":
      typ = TeaType.Green;
      break;
    case "white":
      typ = TeaType.White;
      break;
    case "dark":
      typ = TeaType.Dark;
      break;
    case "fruit":
      typ = TeaType.Fruit;
      break;
    case "rooibos":
      typ = TeaType.Rooibos;
      break;
    default:
  }
  return typ;
};

const get_tags = (aromathized, price_bio): TeaTag => {
  let tag: TeaTag = new TeaTag();
  if (aromathized == true)
    tag.aromathized = true;
  if (price_bio !== undefined)
    tag.bio = true;
  return tag;
};

const yaml2tea = (yaml): Tea => {
  let l_image = yaml.large_image === undefined ? yaml.small_image : yaml.large_image;
  return {
    name: yaml.name,
    description: yaml.description,
    preparation: yaml.preparation,
    small_image: yaml.small_image,
    large_image: l_image,
    price: yaml.price,
    price_bio: yaml.price_bio,
    tea_type: get_type(yaml.tea_type),
    tea_tag: get_tags(yaml.aromathized, yaml.price_bio),
  };
};


import darjeeling_01 from "../teas/01-darjeeling.yaml";
import assam_02 from "../teas/02-assam.yaml";
import nepal_03 from "../teas/03-nepal.yaml";
import nepal_04 from "../teas/04-nepal.yaml";
import ceylon_05 from "../teas/05-ceylon.yaml";
import ceylon_06 from "../teas/06-ceylon.yaml";
import keemun_07 from "../teas/07-keemun.yaml";
import yunnan_08 from "../teas/08-yunnan.yaml";
import earlgrey_09 from "../teas/09-earlgrey.yaml";
import earlgrey_10 from "../teas/10-earlgrey.yaml";
import lungching_11 from "../teas/11-lungching.yaml";
import yunwu_12 from "../teas/12-yunwu.yaml";
import sencha_13 from "../teas/13-sencha.yaml";
import bancha_14 from "../teas/14-bancha.yaml";
import jasmin_15 from "../teas/15-jasmin.yaml";
import jasmin_16 from "../teas/16-jasmin.yaml";
import paimutan_17 from "../teas/17-paimutan.yaml";
import puerh_18 from "../teas/18-puerh.yaml";
import les_19 from "../teas/19-les.yaml";
import ararat_20 from "../teas/20-ararat.yaml";
import hawaii_21 from "../teas/21-hawaii.yaml";
import lucia_22 from "../teas/22-lucia.yaml";
import rooibos_23 from "../teas/23-rooibos.yaml";
import rooibos_24 from "../teas/24-rooibos.yaml";

let tea_imports = [
  darjeeling_01,
  assam_02,
  nepal_03,
  nepal_04,
  ceylon_05,
  ceylon_06,
  keemun_07,
  yunnan_08,
  earlgrey_09,
  earlgrey_10,
  lungching_11,
  yunwu_12,
  sencha_13,
  bancha_14,
  jasmin_15,
  jasmin_16,
  paimutan_17,
  puerh_18,
  les_19,
  ararat_20,
  hawaii_21,
  lucia_22,
  rooibos_23,
  rooibos_24,
]

export let teas: Tea[] = tea_imports.map(yaml2tea);
console.log(teas);
