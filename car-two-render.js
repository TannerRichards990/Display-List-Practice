export function renderBrand(carbrand) {
    const carbrandContainer = document.createElement('div');
    const carbrandEl = document.createElement('h2');
    const modelEl = document.createElement('h3');
    const colorEl = document.createElement('p');

    carbrandEl.textContent = carbrand.brand;
    modelEl.textContent = carbrand.model;
    colorEl.textContent = carbrand.color; 


    carbrandContainer.append(carbrandEl, modelEl, colorEl);

    return carbrandContainer;
}