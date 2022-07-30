export function renderPorsche(cars) {

    const porscheContainerEl = document.createElement('div');
    const makeEl = document.createElement('h1');
    const modelEl = document.createElement('p');
    const colorRedEl = document.createElement('p');
    const colorBlueEl = document.createElement('p');
    const colorWhiteEl = document.createElement('p');
    const colorYellowEl = document.createElement('p');
    const yearEl = document.createElement('p');

    makeEl.textContent = cars.make;
    modelEl.textContent = cars.model;
    colorRedEl.textContent = cars.colors[0];
    colorBlueEl.textContent = cars.colors[1];
    colorWhiteEl.textContent = cars.colors[2];
    colorYellowEl.textContent = cars.colors[3];
    colorRedEl.style.color = cars.colors[0];
    colorBlueEl.style.color = cars.colors[1];
    colorWhiteEl.style.color = cars.colors[2];
    colorYellowEl.style.color = cars.colors[3];




    yearEl.textContent = cars.year;
    porscheContainerEl.classList.add('Porsche');
    porscheContainerEl.append(makeEl, modelEl, colorRedEl, colorBlueEl, colorWhiteEl, colorYellowEl, yearEl);
    return porscheContainerEl;

















}