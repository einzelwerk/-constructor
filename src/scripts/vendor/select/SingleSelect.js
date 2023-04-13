export class SingleSelect {
  constructor(selectElement) {
    this.originalSelect = selectElement;
    this.customSelect = null;
    this.selectHead = null;
    this.selectBody = null;
    this.optionsCollection = [];

    this.currentHeadOption = null;

    this.#initializeStructure();

    this.customSelect.addEventListener('click', this.toggleSelect.bind(this));
    this.optionsCollection.forEach((option) => {
      option.addEventListener('click', this.changeOption.bind(this, option));
    });
  }

  toggleSelect(event) {
    if (!this.selectHead.contains(event.target)) {
      this.customSelect.classList.remove('is-open');
      return;
    }
    
    event.preventDefault();
    this.customSelect.classList.toggle('is-open');
  }

  changeOption(optionElement) {
    this.optionsCollection.forEach((option) => {
      option.classList.toggle('is-selected', option === optionElement);
    });

    const newHeadOption = optionElement.cloneNode(true);
    newHeadOption.classList.replace('select__option_body', 'select__option_head');
    this.currentHeadOption.replaceWith(newHeadOption);
    this.currentHeadOption = newHeadOption;
  }

  #initializeStructure() {
    this.customSelect = document.createElement('div');
    this.customSelect.className = this.originalSelect.className;

    this.selectHead = document.createElement('div');
    this.selectHead.classList.add('select__head');
    this.customSelect.append(this.selectHead);

    this.selectBody = document.createElement('div');
    this.selectBody.classList.add('select__body');
    this.customSelect.append(this.selectBody);

    this.optionsCollection = Array.from(this.originalSelect.children).map((optionEl, index) => {
      const newOptionEl = document.createElement('div');

      optionEl.getAttributeNames().forEach((attr) => {
        newOptionEl.setAttribute(attr, optionEl.getAttribute(attr));
      });

      newOptionEl.classList.add('select__option', 'select__option_body');

      newOptionEl.innerHTML = optionEl.innerHTML;
      newOptionEl.dataset.id = index + 1;

      this.selectBody.append(newOptionEl);
      return newOptionEl;
    });

    const placeholderOption =
      this.optionsCollection.find((opt) => !opt.dataset.value) || this.optionsCollection[0].cloneNode(true);
    this.optionsCollection[0].classList.add('is-selected');
    placeholderOption.classList.replace('select__option_body', 'select__option_head');
    this.currentHeadOption = placeholderOption.cloneNode(true);
    this.selectHead.append(this.currentHeadOption);
    placeholderOption.remove()

    this.originalSelect.replaceWith(this.customSelect);

    const widthCol = this.optionsCollection.map((opt) => opt.scrollWidth);
    const maxWidth = Math.max(...widthCol);
    this.customSelect.style.width = `${maxWidth}px`;
  }
}
