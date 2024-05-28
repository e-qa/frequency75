class CreatePattern {
  static currentId = 0;
  #patternLength = 16;
  #element;
  #checkboxContainer = [];
  constructor(patternName) {
    this.patternName = patternName;
    this.id = CreatePattern.currentId++;
    this.#element = this.#newPattern();
  }
  get element() {
    return this.#element;
  }
  get checkboxContainer() {
    return this.#checkboxContainer;
  }

  #createCheckbox(index, color) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let colorVar = {
      'bg-fuchsia-600': 'checked:bg-fuchsia-600',
      'bg-purple-600': 'checked:bg-purple-600',
      'bg-sky-600': 'checked:bg-sky-600',
      'bg-emerald-600': 'checked:bg-emerald-600',
      'bg-amber-600': 'checked:bg-amber-600',
      'bg-red-600': 'checked:bg-red-600',
      'bg-green-600': 'checked:bg-green-600',
    };
    checkbox.classList.add(`${colorVar[color]}`);

    if (index === 0) {
      checkbox.type = 'text';
      checkbox.classList.add(`${color}`, 'border-b-2', 'border-red-700', 'w-44', 'checked:bg-blue-800');
      checkbox.value = this.patternName;
      checkbox.disabled = true;
    }
    this.#checkboxContainer.push(checkbox);
    return checkbox;
  }

  #newPattern() {
    const color = this.#getRandomColor();
    const div = document.createElement('div');
    div.classList.add('flex');
    for (let index = 0; index <= this.#patternLength; index++) {
      const checkbox = this.#createCheckbox(index, color);
      div.appendChild(checkbox);
    }
    return div;
  }
  #getRandomColor() {
    const colors = ['bg-fuchsia-600', 'bg-purple-600', 'bg-sky-600', 'bg-emerald-600', 'bg-amber-600', 'bg-red-600', 'bg-green-600'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

export default CreatePattern;
