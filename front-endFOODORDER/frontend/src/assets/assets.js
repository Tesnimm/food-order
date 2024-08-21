import logo from './logo.png';
import search_icon from './search_icon.png';
import basket_icon from './basket_icon.png';
import header1 from './header1.jpg';
import menu_1 from './menu_1.jpeg';
import menu_2 from './menu_2.jpeg';
import menu_3 from './menu_3.jpg';
import menu_4 from './menu_4.jpeg';  // Düzeltilmiş kısım
import menu_5 from './menu_5.webp';

import food_1 from './food_1.jpeg';

import instagram from './instagram.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import store_play from './store_play.png';
import store_app from './store_app.png';
import cross_icon from './cross_icon.png';
import rating_star_full from './rating_star_full.png';
import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import add_icon_red from './add_icon_red.png';

export const assets = {
  logo,
  search_icon,
  basket_icon,
  header1,
  instagram,
  facebook,
  linkedin,
  store_play,
  store_app,
  cross_icon,
  rating_star_full,
  add_icon_white,
  add_icon_red,
  add_icon_green
};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_1

  },
  {
    menu_name: "Rolls",
    menu_image: menu_2

  },
  {
    menu_name: "Deserts",
    menu_image: menu_3

  },
  {
    menu_name: "Sandwich",
    menu_image: menu_4  // Düzeltilmiş kısım

  },
  {
    menu_name: "Breakfast",
    menu_image: menu_5

  }
];

export const food_list = [
  {
    _id: "1",
    name: "Greek salad",
    image: food_1,
    price: 12,
    description: "KhshcdoskflaljLld",
    category: "Salad"
  },
  // Diğer öğeler burada aynı şekilde kalıyor...
];
