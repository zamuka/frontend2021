const vegetable = {
  name: 'onion',
  color: 'white',
  shape: 'round',
};

const { name, color } = vegetable;

console.log(`${name}s are usually ${color}`);

const { shape } = vegetable;

console.log(`${name}s are usually ${shape}`);

const vegetables = [
  { name: 'cucuber', color: 'green' },
  vegetable, // это наш лук
  { name: 'pumpkin', color: 'orange' },
  { name: 'tomato', color: 'red', shape: 'round' },
];

const [cucumber, onion] = vegetables;

console.log(`${cucumber.name} and ${onion.name}`);

const [, , pumpkin] = vegetables;

console.log(`${pumpkin.name}s are usually ${pumpkin.color}`);

const [, , , tomato] = vegetables;

console.log(`${tomato.name}es are usually ${tomato.color} and ${tomato.shape}`);

const [firstVegetable, ...otherVegetables] = vegetables;

console.log(`a ${firstVegetable.name} and ${otherVegetables.length} other vegetables`);

export {};