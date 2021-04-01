/**
 * Primary (Orange/Blue Team) and Accent Palettes
 * Courtesy of: https://docs.google.com/spreadsheets/d/1GvlRejt7bUiYnHPS9td8JXQ4GCsGIJmmoB8uUTRCQ-k/edit#gid=1691273010
 */

export const BLUE = [
  ['#507F39', '#65B23E', '#72E539', '#5CFC0C', '#4ACC0A', '#3CA508', '#2E7F06'],
  ['#397F3F', '#3EB248', '#39E547', '#0CFC20', '#0ACC1A', '#08A515', '#067F10'],
  ['#397F64', '#3EB286', '#39E5A3', '#0CFCA0', '#0ACC81', '#08A569', '#067F51'],
  ['#397D7F', '#3EAEB2', '#39DFE5', '#0CF4FC', '#0AC5CC', '#08A0A5', '#067B7F'],
  ['#396B7F', '#3E91B2', '#39B4E5', '#0CB8FC', '#0A95CC', '#0879A5', '#065D7F'],
  ['#395D7F', '#3E7AB2', '#3992E5', '#0C88FC', '#0A6ECC', '#0859A5', '#06447F'],
  ['#394F7F', '#3E63B2', '#396FE5', '#0C58FC', '#0A47CC', '#083AA5', '#062C7F'],
  ['#39427F', '#3E4DB2', '#3950E5', '#0C2CFC', '#0A24CC', '#081DA5', '#06167F'],
  ['#4C397F', '#5D3EB2', '#6739E5', '#4C0CFC', '#3D0ACC', '#3208A5', '#26067F'],
  ['#51397F', '#673EB2', '#7539E5', '#600CFC', '#4E0ACC', '#3F08A5', '#30067F'],
];

export const ORANGE = [
  ['#7F7F39', '#B2B23E', '#E5E539', '#FCFC0C', '#CCCC0A', '#A5A508', '#7F7F06'],
  ['#7F7039', '#B2993E', '#E5C039', '#FCC80C', '#CCA20A', '#A58308', '#7F6506'],
  ['#7F6339', '#B2843E', '#E5A039', '#FC9C0C', '#CC7E0A', '#A56608', '#7F4F06'],
  ['#7F5A39', '#B2743E', '#E58939', '#FC7C0C', '#CC640A', '#A55108', '#7F3E06'],
  ['#7F5439', '#B26A3E', '#E57B39', '#FC680C', '#CC540A', '#A54408', '#7F3406'],
  ['#7F4E39', '#B2613E', '#E56D39', '#FC540C', '#CC440A', '#A53708', '#7F2A06'],
  ['#7F4739', '#B2553E', '#E55B39', '#FC3C0C', '#CC300A', '#A52708', '#7F1E06'],
  ['#7F3939', '#B23E3E', '#E53939', '#FC0C0C', '#CC0A0A', '#A50808', '#7F0606'],
  ['#7F3951', '#B23E67', '#E53975', '#FC0C60', '#CC0A4E', '#A5083F', '#7F0630'],
  ['#7F395C', '#B23E78', '#E5398F', '#FC0C84', '#CC0A6B', '#A50857', '#7F0642'],
];

export const ACCENT = [
  ['#E5E5E5', '#BFBFBF', '#999999', '#666666', '#3F3F3F', '#262626', '#000000'],
  ['#FF7F7F', '#FF5959', '#FF3232', '#FF0000', '#B20000', '#660000', '#330000'],
  ['#FF9F7F', '#FF8259', '#FF6532', '#FF3F00', '#B22C00', '#661900', '#330C00'],
  ['#FFCF7F', '#FFC059', '#FFB232', '#FF9F00', '#B26F00', '#663F00', '#331F00'],
  ['#EFFF7F', '#EAFF59', '#E5FF32', '#DFFF00', '#9CB200', '#596600', '#2C3300'],
  ['#AFFF7F', '#97FF59', '#7FFF32', '#5FFF00', '#42B200', '#266600', '#133300'],
  ['#7FFF7F', '#59FF59', '#32FF32', '#00FF00', '#00B200', '#006600', '#003300'],
  ['#7FFFB2', '#59FF9B', '#32FF84', '#00FF66', '#00B247', '#006628', '#003314'],
  ['#7FE9FF', '#59E3FF', '#32DCFF', '#00D4FF', '#0094B2', '#005466', '#002A33'],
  ['#7FB0FF', '#5998FF', '#3281FF', '#0061FF', '#0044B2', '#002766', '#001333'],
  ['#7F88FF', '#5964FF', '#3240FF', '#0011FF', '#000BB2', '#000666', '#000333'],
  ['#AE7FFF', '#9659FF', '#7D32FF', '#5D00FF', '#4100B2', '#250066', '#120033'],
  ['#E57FFF', '#DD59FF', '#D632FF', '#CC00FF', '#8E00B2', '#510066', '#280033'],
  ['#FF7FD0', '#FF59C2', '#FF32B4', '#FF00A1', '#B20071', '#660040', '#330020'],
  ['#FF7F94', '#FF5974', '#FF3255', '#FF002A', '#B2001D', '#660011', '#330008'],
];

/**
 * Item paints sorted by respective id.
 */

export const PAINTS = [
  { name: 'None', color: '#000000' },
  { name: 'Crimson', color: '#d40001' },
  { name: 'Lime', color: '#7efd01' },
  { name: 'Black', color: '#111111' },
  { name: 'Cobalt', color: '#3f51b4' },
  { name: 'Sky Blue', color: '#03a8f3' },
  { name: 'Burnt Sienna', color: '#4c1101' },
  { name: 'Forest Green', color: '#4cae50' },
  { name: 'Purple', color: '#9C27B0' },
  { name: 'Pink', color: '#fd4080' },
  { name: 'Orange', color: '#f3b301' },
  { name: 'Grey', color: '#777777' },
  { name: 'Titanium White', color: '#FFFFFF' },
  { name: 'Saffron', color: '#fdea3b' },
  // TODO: Fill in BakkesMod hex color codes
  { name: 'Gold', color: '#000000' },
  { name: 'Rose Gold', color: '#000000' },
  { name: 'White Gold', color: '#000000' },
  { name: 'Onyx', color: '#000000' },
  { name: 'Platinum', color: '#000000' },
];

export enum SLOT {
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