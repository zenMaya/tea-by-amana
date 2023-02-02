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

export let teas: Tea[] = [
  {
    "name": "India Darjeeling HIMALAYAN",
    "description": "Výhledem na třet nejvyšší horu světa Kangchenjunga  (Kančendžunga) se pyšní mnoho místních čajových zahrad. Právě  jejich zasazení v podhůří Himálaje zásadně určuje charakter  produkovaných čajů. Mimořádně povzbudivý vysokohorský černý čaj  himáljského tpu. Výběrové lístky poskytují vyvážený nálev ovocně  květnového aroma a nahořklé, lehce kořeněné chut. Technologicky  jsou tyto čaje převážně jen částečně fermentované, přesto jsou  tradičně klasiﬁkovány jako černé. Mezi více než osmdesát čajovými  zahradami, které se na poměrně malém území okresu Darjeeling  rozkládají, v nadmořské výšce od 600 do 2 300 metrů, často vznikají  naprosté čajové skvosty, ceněné pro svou nezaměnitelnou chuť,  aroma a občerstvující účinky.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 2-3  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Ind. Darjeeling.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ind. Darjeeling.jpg", import.meta.url).href,
    "price_bio": 212,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "India Assam BENGAL TIGER",
    "description": "V úrodných nížinných oblastech po obou březích řeky Brahmaputry se  nacházejí jedny z nejznámějších čajových plantáží světa. Tropickému  klimatu nejlépe svědčí pěstování velkolisté ásámské variety čajovníku.  Hutný černý čaj ASSAM BENGAL TIGER se vyznačuje sladce kořeněnou  až vyzrále ovocnou vůní, sladově-robustní až hořko sladkou chut s vanilkovými, citrusovými i malinovými podtóny. Svou popularitu  si získal již během 19. stol. zejména na nizozemském a britském trhu,  který ho sice přioděl smetanou, mlékem a cukrem, ale propůjčil mu  tm zároveň jistou formu nesmrtelnost patrnou dodnes.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 6-8  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Ind. Assam.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ind. Assam.jpg", import.meta.url).href,
    "price": 112,
    "price_bio": 135,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Nepal HIMALAYAN SHAGRI-LA",
    "description": "Ač se v tomto malém himalájském království čaj pěstuje jen asi 70 let,  své pevné místo mezi milovníky vysokohorských čajů našel již dávno.  Společná hranice s Indií a hlavně blízkost Darjeelingu ovlivňuje  i charakteristku místně produkovaných čajů. Podmínky pro jejich  pěstování jsou zde navíc ideální. Mimořádně povzbudivý  vysokohorský černý čaj himalájského tpu. Výběrové lístky poskytují  vyvážený nálev ovocně květnového aroma a nahořklé, lehce  kořeněné chut. Technologicky jsou tyto čaje převážně jen částečně  fermentované, přesto jsou tradičně klasiﬁkovány jako černé.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 2-3  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Nepál Shangri-la.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Nepál Shangri-la.jpg", import.meta.url).href,
    "price_bio": 170,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Nepal MAKALU",
    "description": "Pátá nejvyšší hora světa Makalu je zasazená do hradby horských šttů  na nepálsko-tbetském pomezí. Výhledem na její majestát se za  dobrého počasí mohou pochlubit mnohé nepálské čajové zahrady.  Mimořádně povzbudivý vysokohorský černý čaj himalájského typu.  Výběrové lístky poskytují vyvážený nálev ovocně květnového aroma  a nahořklé, lehce kořeněné chut. Technologicky jsou tyto čaje  převážně jen částečně fermentované, přesto jsou tradičně  klasiﬁkovány jako černé. Zpracováním i charakteristkou jsou často  k nerozeznání od čajů z Darjeelingu.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 2-3  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Nepal Makalu.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Nepal Makalu.jpg", import.meta.url).href,
    "price": 135,
    "tea_type": 1,
    "tea_tag": {
      "bio": false,
      "aromathized": false
    }
  },
  {
    "name": "Ceylon RATNAGIRI",
    "description": "Ostrov ve tvaru kapky protná centrální pohoří s dominantní horou Sri  Pada (Svatá stopa). Ta je unikátním poutním místem největších  náboženství světa, křesťany nazývána Adamova Hora. Sladce  ovocně-medová až citrusová vůně černého čaje CEYLON RATNAGIRI  se dokonale snoubí s jeho svěže říznou a ušlechtlou chut. Pěstuje  se v nadmořských výškách nad 1 200 metrů a má silně povzbudivý  účinek. Geograﬁcký kontrast pobřežních nížin s centrálním horským  masivem, charakterizovaný střídavým působením monzunových dešťů  v rámci vegetačního cyklu ostrova, dává možnost praktcky celoroční  sklizně čaje v různých oblastech.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Cej. Ratnagiri.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Cej. Ratnagiri.jpg", import.meta.url).href,
    "price": 135,
    "price_bio": 170,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Ceylon YALTA",
    "description": "Ostrov ve tvaru kapky protná centrální pohoří s dominantní horou Sri  Páda (Svatá stopa). Ta je unikátním poutním místem největších  náboženství světa, křesťany nazývána Adamova Hora. Sladce  ovocně-medová až citrusová vůně černého čaje CEYLON YALTA  se dokonale snoubí s jeho svěže říznou a ušlechtlou chut.  Pěstuje se v nadmořských výškách nad 1 200 metrů a má silně  povzbudivý účinek. Geograﬁcký kontrast pobřežních nížin s centrálním  horským masivem, charakterizovaný střídavým působením  monzunových dešťů v rámci vegetačního cyklu ostrova, dává možnost  praktcky celoroční sklizně čaje v různých oblastech.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Cej. Yalta.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Cej. Yalta.jpg", import.meta.url).href,
    "price": 170,
    "tea_type": 1,
    "tea_tag": {
      "bio": false,
      "aromathized": false
    }
  },
  {
    "name": "China KEEMUN MOUNTAIN TEMPLE",
    "description": "Na dohled od chrámového komplexu rozkládajícímu se na posvátné   buddhistcké hoře Jiu Hua Shan (Ťiou Chua Šan) rostou v hornatém  mlžném reliéfu čajové keře, zpracovávané na čaj KEEMUN. Podmanivé  exotcky květnové tóny, připomínající orchideje, podkreslují  čokoládovo-kořeněný chuťový základ tohoto lehčího černého čaje bez  svíravost, ceněného také pro jeho vyrovnaný účinek. Ačkoliv je  v provincii Anhui (Anchuej) technologie výroby černého (v Číně  červeného) čaje známá již ze 7. stolet opravdového mezinárodního  věhlasu dosáhl až započatou produkcí v 19. stolet, kdy na britském  trhu nakrátko zastnil oblíbený Darjeeling.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Čín. Keemun.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Keemun.jpg", import.meta.url).href,
    "price": 135,
    "tea_type": 1,
    "tea_tag": {
      "bio": false,
      "aromathized": false
    }
  },
  {
    "name": "China YUNNAN GOLDEN MONKEY",
    "description": "Území šest čajových hor v oblast Xishuangbanna (Si Šuang Pan Na) je  podle místních obyvatel národnost Taj kolébkou čaje odkud  se semena čajovníku rozšířila, díky veletokům, do okolního světa.  Provincií Yunnan (Jün Nan) totž protékají tři z největších asijských řek  a tradice místní výroby čaje je stará až 1 700 let. YUNNAN GOLDEN  MONKEY je znám svým medově ovocným aroma v doprovodu sladové,  jemně čokoládové chut s přiměřenou svíravost a velmi povzbudivým  účinkem. Černé (v Číně červené) čaje z této oblast se získávají  z prastarých stromovitých odrůd velkolistých čajovníků, jenž rostou  podél řeky Lang Cang (Mekong) v nejnižším místě provincie Yunnan,  která má průměrnou nadmořskou výšku 1 500 metrů.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Čín. Yunnan.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Yunnan.jpg", import.meta.url).href,
    "price": 112,
    "price_bio": 135,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "EARL GREY ROYAL",
    "description": "Dnes snad nejznámější černý aromatsovaný čaj EARL GREY je  pojmenován po britském premierovi 30.let 19.stolet Charlesi  Greyovi, pro kterého byl dle různých podání namíchán. Snad jej získal  darem na své misi v Číně. Naše vynikající třída EXCELENT je z kvalitního  černého čaje, nálev příjemné chut i vůně s výraznou, charakteristcky  ovocnou složkou bergamotu. Použitá esence, jenž získala svůj název  snad dle města Bergamo, se získává z kůry plodů bergamotu (Citrus  aurantnum), jehož největším světovým producentem je italská  Kalábrie.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Earl. Royal.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Earl. Royal.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 1,
    "tea_tag": {
      "bio": true,
      "aromathized": true
    }
  },
  {
    "name": "EARL GREY EXCELLENT",
    "description": "Dnes snad nejznámější černý aromatzovaný čaj EARL GREY je  pojmenován po britském premiérovi 30. let 19. stolet Charlesi  Greyovi, pro kterého byl dle různých podání namíchán. Snad jej získal  darem na své misi v Číně. Naše vynikající třída EXCELENT je z kvalitního  černého čaje, nálev příjemné chut i vůně s výraznou, charakteristcky  ovocnou složkou bergamotu. Použitá esence, jenž získala svůj název  snad dle města Bergamo se získává z kůry plodů bergamotu (Citrus  aurantnum), jehož největším světovým producentem je italská  Kalábrie.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem.  Pro rovnoměrnější přípravu nálevu můžete v průběhu luhování odlít  část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Earl. Excellent.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Earl. Excellent.jpg", import.meta.url).href,
    "price": 112,
    "tea_type": 1,
    "tea_tag": {
      "bio": false,
      "aromathized": true
    }
  },
  {
    "name": "China LUNG CHING DRAGON WELL",
    "description": "Z přímořské provincie Zhejiang (Če-tang) pochází jeden  z nejslavnějších čínských zelených čajů LUNG CHING (Lung-ťing, Dračí  Studna), pojmenovaný dle stejnojmenné vesnice na březích jezera  Xi Hu (Západní jezero). List prvotřídní kvality zpracovaný do typického  plochého tvaru, krásného vzhledem i barvou. Nálev květově zelinkavé,  mírně ovocně nasládlé chut s typicky ořechovými či kaštanovými tóny.  Legenda vypráví, že císař Čchien Lung z dynaste Čching  (221-206 př. n. l.) pil tento čaj v klášteře na Lvím vrcholu (Shi Feng) a  byl tak spokojený s jeho kvalitou, že čajovníkům rostoucím před  klášterem propůjčil titul Císařský čaj.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vodou o teplotě 80°C. Po 2 minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování odlít část do připraveného šálku a nalít zpět z vrchu do konvice.",
    "small_image": new URL("../assets/teas/Čín. Lung Ching.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Lung Ching.jpg", import.meta.url).href,
    "price": 212,
    "tea_type": 2,
    "tea_tag": {
      "bio": false,
      "aromathized": false
    }
  },
  {
    "name": "China YUN WU (CLOUD & MIST)",
    "description": "O čaji Oblaků a mlhy ze Zelených hor (Lu Šan) z provincie Jiangsi (Ťiang  Si) se zmiňuje již dávný čajový mudrc Lu Jü, který v této oblast napsal  své legendární literární dílo. Právě geograﬁcká speciﬁčnost místa, kde  se kombinují horské masívy s rozsáhlými vodními plochami, poskytuje  ideální podmínky pro pěstování čaje. Značně povzbudivý zelený čaj  YUN WU, jemné bylinně-květové vůně a dokonale hladce nasládlé  chut, těší své příznivce již po několik stalet. Čínské zelené čaje Oblaků  a mlhy se vyznačují menší hořkost a svíravost. Snad právě kvůli  častým mlhám v místech kde čaj roste. Ta částečně rozptyluje sluneční  paprsky a zapříčiňuje tak nižší tvorbu tříslovin a svíravých látek  v listech.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vodou o teplotě 80°C. Po cca 2 minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování  odlít část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Čín. Yun Wu.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Yun Wu.jpg", import.meta.url).href,
    "price": 135,
    "tea_type": 2,
    "tea_tag": {
      "bio": false,
      "aromathized": false
    }
  },
  {
    "name": "Japan SENCHA FUJI",
    "description": "Nenapodobitelnou scenérii čajových polí s majestátní horou Fuji na  pozadí poskytuje prefektura Shizuoka, jenž je největším producentem  nejznámějšího japonského čaje Sencha. Tento čaj se vyznačuje  rovnováhou vůně, chutě umami a přiměřené svíravost. Velice  povzbuzující zelený čaj, oblíbený pro svou hladkou pitelnost,  způsobenou bylinně-vegetálním aroma s vitální, trávově květnovou  chut. Čaje typu Sencha získávají svou charakteristckou  trávově-bylinnou povahu díky japonské technologii propařování  mladých lístků, které se provádí ihned po jejich sklizení a zvýrazní tak  chuť i barvu čaje.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vodou o teplotě 70-80°C. Po cca 2 minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr  do připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování  odlít část do připraveného šálku a nalít zpět z vrchu do konvice. \n",
    "small_image": new URL("../assets/teas/Jap. Fuji.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Jap. Fuji.jpg", import.meta.url).href,
    "price": 170,
    "price_bio": 212,
    "tea_type": 2,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Japan BANCHA ASAHI",
    "description": "Nenapodobitelnou scenérii čajových polí s majestátní horou Fuji na  pozadí poskytuje japonská prefektura Shizuoka. Odtud pochází značná část místní produkce zelených čajů. Jedním z nejklasičtějších  zástupců je BANCHA ASAHI, nerozdílný souputník známějšího čaje  Sencha. Tyto čaje získávají svůj charakteristcký trávově zelený  charakter díky japonské technologii propařování mladých lístků, která  zvýrazní jak chuť, tak i barvu čaje. BANCHA ASAHI se vyznačuje  rovnováhou vůně, nasládlé chutě a přiměřené svíravost. Osvěžující  zelený čaj s nízkým obsahem teinu je vhodný ke každodennímu pit.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vroucí vodou (80-90°C). Po 1-2  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete v průběhu  luhování odlít část do připraveného šálku a nalít zpět z vrchu do  konvice.\n",
    "small_image": new URL("../assets/teas/Jap. Asahi.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Jap. Asahi.jpg", import.meta.url).href,
    "price": 170,
    "price_bio": 170,
    "tea_type": 2,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "China JASMIN MANDARIN",
    "description": "Podél řeky Minjiang (Minťien) v provincii Fujian (Fuťien) se obzvlášť  daří jasmínovým keřům. Pronikavé aroma jejich kvítků prostupuje celé  údolí, zvláště v podvečer, kdy se květy otevírají a vydávají nejvíce vůně.  Zcela charakteristcký svěží nálev výrazně květové vůně a lahodně  štplavé chut s bylinnými podtóny je oblíben pro své digestvní a dech  osvěžující účinky. Již po stalet produkovaný, takto aromatsovaný čaj  by neměl obsahovat větší množství jasmínového květu, neboť  tradičně se květy k čajovým lístkům pouze opakovaně přikládají a po  skončení několikahodinového procesu aromatsování se odstraňují.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vodou o teplotě 80-90°C. Po 1-2  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování  odlít část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Jas. Mandarin.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Jas. Mandarin.jpg", import.meta.url).href,
    "price": 145,
    "tea_type": 2,
    "tea_tag": {
      "bio": false,
      "aromathized": true
    }
  },
  {
    "name": "China JASMIN PHOENIX",
    "description": "Jasmín se dostal do Číny z Persie asi ve 3 stol. n. l.. Zhruba o tsíc let  později za vlády dynaste Sung jsou zmínky o módě používání jeho  květů k aromatsování zeleného čaje. Zcela charakteristcký svěží nálev  výrazně květové vůně a lahodně štplavé chut s bylinnými podtóny je  oblíben pro své digestvní a dech osvěžující účinky. Již po stalet  produkovaný, takto aromatsovaný čaj by neměl obsahovat větší  množství jasmínového květu, neboť tradičně se květy k čajovým  lístkům pouze opakovaně přikládají a po skončení několikahodinového  procesu aromatsování se odstraňují.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vodou o teplotě 80-90°C. Po 1-2  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování  odlít část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Jas. Phoenix.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Jas. Phoenix.jpg", import.meta.url).href,
    "price_bio": 170,
    "tea_type": 2,
    "tea_tag": {
      "bio": true,
      "aromathized": true
    }
  },
  {
    "name": "China PAI MU TAN (WHITE PEONY)",
    "description": "Budhistčt mniši v klášteře Gu Shan (Ku Shan, Bubnová hora) v čínské  provincii Fujian (Fuťien) prosluli výrobou tohoto čaje, který nazvali Bílý  oblak z Bubnových hor. Mírně povzbudivý bílý čaj PAI MU TAN proslul  svou jemně květnovou až pivoňkovou vůní a nasládle bylinnou chut  s podtóny zralého ovoce. Podle čínské medicíny je bílý čaj  nejprospěšnější pro lidský organismus. Technologicky se vyrábí  zavadnutm sklizeného list a poměrně rychlým zasušením, nejčastěji  na přímém slunci. Takto vyrobený čaj si ponechává atraktvní rustkální  zjev s větším podílem bíle ochmýřených pupenů, podle nichž nese své  pojmenování.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte, za mírného protřepání, lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vodou o teplotě 80-90°C. Po 2-3  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete během luhování  odlít část do připraveného šálku a nalít zpět z vrchu do konvice. \n",
    "small_image": new URL("../assets/teas/Čín. Pai Mu Tan.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Pai Mu Tan.jpg", import.meta.url).href,
    "price": 135,
    "price_bio": 170,
    "tea_type": 3,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "China PU ERH BLACK DRAGON",
    "description": "Na březích řeky Lang Cang (Mekong) v oblast Xishuangbanna  (Si Šuang Pan Na) rostou prastaré čajové stromy. Podle jedněch  se jedná o potomky původní, předglaciální formy čajovníku. Z jejich  robustních listů se vyrábí jedinečný čaj PU ERH BLACK DRAGON,  charakteristcký nasládně-zemitou vůní a plnou, nepatrně svíravou  chut s podtóny vyzrálých plodů peckovin. Tento naprosto svérázný čaj  je široce oblíben pro prospěšné zdravotní účinky, projevující se jeho  pravidelným popíjením. Prokazatelně tak snižuje hladinu cholesterolu  v krvi a působí blahodárně na zažívání. Tradice původních čajů,  lisovaných předchůdců čaje Pu erh, sahá až do dynaste Tchang  (618-907 n. l).\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  čaje, nechte (za mírného protřepání) lístky krátce nabrat horkost a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 5-7  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete v průběhu  luhování odlít část do připraveného šálku a nalít zpět z vrchu  do konvice.\n",
    "small_image": new URL("../assets/teas/Čín. Pu Erh.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Čín. Pu Erh.jpg", import.meta.url).href,
    "price": 170,
    "price_bio": 212,
    "tea_type": 4,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Fruit Tea ČESKÝ LES",
    "description": "Na dohled Českého Středohoří přezdívaného \"Brána Čech\" se tyčí  památná hora Říp, jenž nabízí úchvatný výhled do krajiny. Ten, dle  legend, okouzlil i přišedší slovanské kmeny, které si následně tento kraj  zvolily za svůj domov. Zcela harmonická ovocně-rostlinná směs plná  plodů černého bezu, vinné révy, arónie, černého rybízu a květu ibišku  neobsahuje žádný kofein a popíjet jej mohou i dět. Ovocná kompozice  šťavnatých zralých bobulí, společně s jemně sladkými tóny  ostružinových listů završují tuto symfonii plodů a nabízejí skutečný  chuťový zážitek z kontrolovaného ekologického zemědělství.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 8-10 gramů  směsi, nechte (za mírného protřepání) její kousky krátce nabrat  horkost a vlhkost z konvice. Poté zalijte vroucí vodou (90-100°C).  Po nejméně 6-8 minutách luhování přelijte nálev přes čajové sítko  nebo ﬁltr do připravené konvice o stejném objemu, popřípadě  vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete průběhu luhování odlít část do připraveného šálku a nalít zpět  z vrchu do konvice. \n",
    "small_image": new URL("../assets/teas/Ovoc. Český les.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ovoc. Český les.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 5,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Fruit Tea ARARAT",
    "description": "Obzvláště působivý pohled na tuto nejvyšší tureckou horu nabízí  arménské hlavní město Jerevan. Tento vulkán, se stále zamrzlým dvoj-  vrcholem, je jmenován již v bibli v příběhu o velké potopě a nachází se  v Turecku poblíž arménských a íránských hranic.  Mimořádně vyvážená ovocně-rostlinná směs sestávající z plodů  černého a červeného rybízu, černého bezu, květu ibišku, kousků  ananasu a jablek neobsahuje žádný kofein a popíjet jej mohou i dět.  Nezaměnitelná chuť sluncem políbených rybízových plodů a bezinek  je v této směsi zjemněna sladkost ananasu a jahod. Skutečné ovocné  potěšení pocházející z kontrolovaného ekologického zemědělství.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 8-10 gramů  směsi, nechte (za mírného protřepání) její kousky krátce nabrat  horkost a vlhkost z konvice. Poté zalijte vroucí vodou (90-100°C).  Po nejméně 6-8 minutách luhování přelijte nálev přes čajové sítko  nebo ﬁltr do připravené konvice o stejném objemu, popřípadě  vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete  v průběhu luhování odlít část do připraveného šálku a nalít zpět  z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Ovoc. Ararat.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ovoc. Ararat.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 5,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Fruit Tea HAWAII",
    "description": "Nejvyšším vrcholem Havajských ostrovů je sopka Mauna Kea (Bílá  hora). S vrcholem v nadmořské výšce 4 205 m n.m. a s úpatm  v hloubce 5 500 m pod mořskou hladinou. Výškou od základny  k vrcholu tak převyšuje Mount Everest a samotné Havajské ostrovy  tvoří, výměrou od dna oceánu, nejvyšší pohoří světa. Pestře  zkomponovaná ovocně-rostlinná směs složená z květů ibišku, kousků  jablek, citrusů a ananasu s plody rakytníku, třešní, černého bezu  a malin neobsahuje žádný kofein a popíjet jej mohou i dět. Všechny  ingredience se spojují bez přidaného aroma a vytvářejí doslova  \"chuťovou symfonii \" z kontrolovaného ekologického zemědělství.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 8-10 gramů  směsi, nechte (za mírného protřepání) její kousky krátce nabrat  horkost a vlhkost z konvice. Poté zalijte vroucí vodou (90-100°C).  Po nejméně 6-8 minutách luhování přelijte nálev přes čajové sítko  nebo ﬁltr do připravené konvice o stejném objemu, popřípadě  vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete  v průběhu luhování odlít část do připraveného šálku a nalít zpět  z vrchu do konvice. \n",
    "small_image": new URL("../assets/teas/Ovoc. Hawaii.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ovoc. Hawaii.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 5,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "Fruit Tea SAINT LUCIA",
    "description": "Jeden z tzv. Návětrných ostrovů Karibiku, v souostroví Malých Antl,  skrývá ve svém nitru tropický deštný les, bohatý na lákavé exotcké  plody. Přírodní kříženec jamajského sladkého pomeranče a pomela  dříve nazývaný \"zakázané ovoce\" dnes znám jako Grapefruit (Citrus  xparadisi) zde dávno zcela zdomácněl a roste divoce. Tropicky  podmanivá ovocně-rostlinná směs obsahující množství grapefruitu  a citrusových plodů, ananasu, okvětních lístků chrpy, ibišku, šípku a kousků jablek neobsahuje žádný kofein a popíjet jej mohou i dět.  Lahodně nahořklá a šťavnatá, chuť grapefruitu, harmonicky spojená  se sladkost ananasu, dodává této ovocné kreaci výjimečnou notu. Vše  z kontrolovaného ekologického zemědělství.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 8-10 gramů  směsi, nechte (za mírného protřepání) její kousky krátce nabrat  horkost a vlhkost z konvice. Poté zalijte vroucí vodou (90-100°C).  Po nejméně 6-8 minutách luhování přelijte nálev přes čajové sítko  nebo ﬁltr do připravené konvice o stejném objemu, popřípadě  vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete  v průběhu luhování odlít část do připraveného šálku a nalít zpět  z vrchu do konvice. \n",
    "small_image": new URL("../assets/teas/Ovoc. Saint Lucia.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Ovoc. Saint Lucia.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 5,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "South Africa ROOIBOS KALAHARI",
    "description": "Lahodný jihoafrický nápoj vyhledávaný pro nezaměnitelnou medově  ovocnou chuť. Jehličkovité lístky čajovce kapského, se sklízejí  například v oblast Cedrových hor poblíž Kapského Města. Význam  tohoto endemitního keříku z čeledi bobovitých s latnským názvem  Aspalathus linearis byl pochopitelně znám již místním  lovcům-sběračům a pastevcům, kteří jej představili nizozemským britským kolonialistům. Ti z jeho lístků vyvinuli nápoj, jenž si získal  oblibu jako náhražka pravého čaje. Zpracovává se podobně jako lístky  čajovníku, neobsahuje však žádný kofein a popíjet jej mohou i děti v kteroukoli denní dobu. Díky svým prokazatelným zdravotním  beneﬁtům si tento nápoj nachází pevné místo v zdravém životním  stylu moderní společnost.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  rooibosu, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 3-5  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr  s čajem. Pro rovnoměrnější přípravu nálevu můžete v průběhu  luhování odlít část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Roi. Kalahari.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Roi. Kalahari.jpg", import.meta.url).href,
    "price_bio": 112,
    "tea_type": 6,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  },
  {
    "name": "South Africa ROOIBOS BLOODORANGE",
    "description": "Přírodně aromatzovaný jihoafrický nápoj vyhledávaný pro  nezaměnitelnou medově ovocnou chuť. Jehličkovité lístky čajovce  kapského s přídavkem citrusové kůry a ibišku vytvářejí lahodně  šťavnatou chuťovou kombinaci. Význam tohoto endemitního keříku  z čeledi bobovitých s latnským názvem Aspalathus linearis byl  pochopitelně znám již místním lovcům - sběračům a pastevcům, kteří  jej představili nizozemským a britským kolonialistům. Ti z jeho lístků  vyvinuli nápoj, jenž si získal oblibu jako náhražka pravého čaje.  Zpracovává se podobně jako lístky čajovníku, neobsahuje však žádný  kofein a popíjet jej mohou i dět v kteroukoli denní dobu. Díky svým  prokazatelným zdravotním beneﬁtům si tento nápoj nachází pevné  místo v zdravém životním stylu moderní společnost.\n",
    "preparation": "Do vyhřáté konvice o objemu 0,5 litru (či do ﬁltru) nasypte 6-8 gramů  rooibosu, nechte (za mírného protřepání) lístky krátce nabrat horkost  a vlhkost z konvice a poté zalijte vroucí vodou (95-100°C). Po 4-6  minutách luhování přelijte nálev přes čajové sítko nebo ﬁltr do  připravené konvice o stejném objemu, popřípadě vyjměte ﬁltr s čajem. Pro rovnoměrnější přípravu nálevu můžete v průběhu  luhování odlít část do připraveného šálku a nalít zpět z vrchu do konvice.\n",
    "small_image": new URL("../assets/teas/Roi. Bloodorange.jpg", import.meta.url).href,
    "large_image": new URL("../assets/teas/Roi. Bloodorange.jpg", import.meta.url).href,
    "price_bio": 135,
    "tea_type": 6,
    "tea_tag": {
      "bio": true,
      "aromathized": false
    }
  }
]

// import code unused

// const get_type = (str: any): TeaType => {
//   let typ: TeaType;
//   switch (str) {
//     case "black":
//       typ = TeaType.Black;
//       break;
//     case "green":
//       typ = TeaType.Green;
//       break;
//     case "white":
//       typ = TeaType.White;
//       break;
//     case "dark":
//       typ = TeaType.Dark;
//       break;
//     case "fruit":
//       typ = TeaType.Fruit;
//       break;
//     case "rooibos":
//       typ = TeaType.Rooibos;
//       break;
//     default:
//   }
//   return typ;
// };

// const get_tags = (aromathized, price_bio): TeaTag => {
//   let tag: TeaTag = new TeaTag();
//   if (aromathized == true)
//     tag.aromathized = true;
//   if (price_bio !== undefined)
//     tag.bio = true;
//   return tag;
// };

// const yaml2tea = (yaml): Tea => {
//   let l_image = yaml.large_image === undefined ? yaml.small_image : yaml.large_image;
//   return {
//     name: yaml.name,
//     description: yaml.description,
//     preparation: yaml.preparation,
//     small_image: yaml.small_image,
//     large_image: l_image,
//     price: yaml.price,
//     price_bio: yaml.price_bio,
//     tea_type: get_type(yaml.tea_type),
//     tea_tag: get_tags(yaml.aromathized, yaml.price_bio),
//   };
// };


// import darjeeling_01 from "..../assets/teas/01-darjeeling.yaml";
// import assam_02 from "..../assets/teas/02-assam.yaml";
// import nepal_03 from "..../assets/teas/03-nepal.yaml";
// import nepal_04 from "..../assets/teas/04-nepal.yaml";
// import ceylon_05 from "..../assets/teas/05-ceylon.yaml";
// import ceylon_06 from "..../assets/teas/06-ceylon.yaml";
// import keemun_07 from "..../assets/teas/07-keemun.yaml";
// import yunnan_08 from "..../assets/teas/08-yunnan.yaml";
// import earlgrey_09 from "..../assets/teas/09-earlgrey.yaml";
// import earlgrey_10 from "..../assets/teas/10-earlgrey.yaml";
// import lungching_11 from "..../assets/teas/11-lungching.yaml";
// import yunwu_12 from "..../assets/teas/12-yunwu.yaml";
// import sencha_13 from "..../assets/teas/13-sencha.yaml";
// import bancha_14 from "..../assets/teas/14-bancha.yaml";
// import jasmin_15 from "..../assets/teas/15-jasmin.yaml";
// import jasmin_16 from "..../assets/teas/16-jasmin.yaml";
// import paimutan_17 from "..../assets/teas/17-paimutan.yaml";
// import puerh_18 from "..../assets/teas/18-puerh.yaml";
// import les_19 from "..../assets/teas/19-les.yaml";
// import ararat_20 from "..../assets/teas/20-ararat.yaml";
// import hawaii_21 from "..../assets/teas/21-hawaii.yaml";
// import lucia_22 from "..../assets/teas/22-lucia.yaml";
// import rooibos_23 from "..../assets/teas/23-rooibos.yaml";
// import rooibos_24 from "..../assets/teas/24-rooibos.yaml";

// let tea_imports = [
//   darjeeling_01,
//   assam_02,
//   nepal_03,
//   nepal_04,
//   ceylon_05,
//   ceylon_06,
//   keemun_07,
//   yunnan_08,
//   earlgrey_09,
//   earlgrey_10,
//   lungching_11,
//   yunwu_12,
//   sencha_13,
//   bancha_14,
//   jasmin_15,
//   jasmin_16,
//   paimutan_17,
//   puerh_18,
//   les_19,
//   ararat_20,
//   hawaii_21,
//   lucia_22,
//   rooibos_23,
//   rooibos_24,
// ]
