// import functions and grab DOM elements
import { cars } from './array-cars.js';
import { renderCar } from './render-car.js';

import { renderBrand } from './car-two-render.js';
import { carsTwo } from './array-cars-two.js';

import { renderAudi } from './render-three.js';
import { carsThree } from './array-cars-three.js';

import { renderPorsche } from './render-four.js';
import { carsFour } from './array-cars-four.js';

const carListEl = document.getElementById('car-list');
const carTwoEl = document.getElementById('car-list-two');
const carsThreeEl = document.getElementById('car-list-three');
const carFourEl = document.getElementById('car-list-four');

for (let car of cars) {
    const singleCar = renderCar(car);
    carListEl.append(singleCar);
}


for (let brand of carsTwo) {
    const carbrandEl = renderBrand(brand);
    carTwoEl.append(carbrandEl);
}

for (let boxcar of carsThree) {
    const boxcars = renderAudi(boxcar);
    carsThreeEl.append(boxcars);
}

for (let porsche of carsFour) {
    const porsches = renderPorsche(porsche);
    carFourEl.append(porsches);
}



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
