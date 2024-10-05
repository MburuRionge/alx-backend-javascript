// Spread && Rest parameters
const med = ['Sabah', 'Daniel', 'Sumaya', 'Pauline', 'Shaza', 'Ab'];
const engineering = ['Sabah', 'Daniel', 'Sumaya', 'Pauline', 'Shaza', 'Ab'];
const namE = 'Daniel';
const school = [...med, ...engineering, ...namE];

const obj = {
  brand: 'Toyota',
  model: 'Camry',
  speed: '25hm/hr',
};

const fxn = (brand, model, speed) => {
  return { brand: brand, model: model, speed: speed };
};

const fxn2 = (brand, model, speed) => {
  return { brand, model, speed };
};
