class CreatePattern {
  #patternLength = 16;
  element;

  constructor(patternName) {
    this.patternName = patternName;
    this.element = this.newPattern();
  }

  createCheckbox(index) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    if (index === 0) {
      checkbox.type = 'text';
      checkbox.classList.add('bg-red-900', 'border-b-2', 'border-red-700', 'w-20');
      checkbox.value = this.patternName;
      checkbox.disabled = true;
    }

    return checkbox;
  }

  newPattern() {
    const div = document.createElement('div');
    div.classList.add('flex');

    for (let index = 0; index <= this.#patternLength; index++) {
      const checkbox = this.createCheckbox(index);
      div.appendChild(checkbox);
    }

    return div;
  }
}

export default CreatePattern;
