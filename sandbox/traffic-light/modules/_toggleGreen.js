import {
  streetX2Bulbs,
  streetX3Bulbs,
  streetY2Bulbs,
  streetY3Bulbs,
} from './_config.js';

import {
  redGreen,
  greenRed,
  redYellowGreen,
  greenYellowRed,
} from './_colorSequences.js';

const streetXGreen = () => {
  greenRed(streetX2Bulbs);
  greenYellowRed(streetX3Bulbs);
  redGreen(streetY2Bulbs);
  redYellowGreen(streetY3Bulbs);
};

const streetYGreen = () => {
  greenRed(streetY2Bulbs);
  greenYellowRed(streetY3Bulbs);
  redGreen(streetX2Bulbs);
  redYellowGreen(streetX3Bulbs);
};

export {
  streetXGreen,
  streetYGreen,
};
