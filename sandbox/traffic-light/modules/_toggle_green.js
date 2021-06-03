import {
  str_x_2,
  str_x_3,
  str_y_2,
  str_y_3,
} from './_config.js';

import green_red from './_green_red.js';
import green_yellow_red from './_green_yellow_red.js';
import red_green from './_red_green.js';
import red_yellow_green from './_red_yellow_green.js';

const x_side_green = () => {
  green_red(str_x_2);
  green_yellow_red(str_x_3);
  red_green(str_y_2);
  red_yellow_green(str_y_3);
};

const y_side_green = () => {
  green_red(str_y_2);
  green_yellow_red(str_y_3);
  red_green(str_x_2);
  red_yellow_green(str_x_3);
};

export {
  x_side_green,
  y_side_green,
};
