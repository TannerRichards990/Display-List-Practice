export function renderCar(car) {
    const pTag = document.createElement('p');
    pTag.textContent = car;
    pTag.classList.add('car');

    return pTag;
}