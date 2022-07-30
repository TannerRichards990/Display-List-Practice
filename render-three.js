export function renderAudi(cars) {
    const audiContainerEl = document.createElement('div');
    const makeEl = document.createElement('h1');
    const supercarEl = document.createElement('p');
    const sedanEl = document.createElement('p');
    const touringEl = document.createElement('p');
    const yearEl = document.createElement('p');
    makeEl.textContent = cars.make;
    
    supercarEl.textContent = cars.model.supercar;
    sedanEl.textContent = cars.model.sedan;
    touringEl.textContent = cars.model.touring;
    yearEl.textContent = cars.year;
    audiContainerEl.classList.add('booger');
    audiContainerEl.append(makeEl, supercarEl, sedanEl, touringEl, yearEl);
    return audiContainerEl;

}


