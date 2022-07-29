// import functions and grab DOM elements
import { cars } from './array-cars.js';
import { renderCar } from './render-car.js';

import { renderBrand } from './car-two-render.js';
import { carsTwo } from './array-cars-two.js';

const carListEl = document.getElementById('car-list');
const carTwoEl = document.getElementById('car-list-two');


for (let car of cars) {
    const singleCar = renderCar(car);
    carListEl.append(singleCar);
}


for (let brand of carsTwo) {
    const carbrandEl = renderBrand(brand);
    carTwoEl.append(carbrandEl);
}






// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
