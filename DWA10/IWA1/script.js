const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;
const STEP_AMOUNT = 1;


class AddButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
        <style>
        .add-button{
            margin: 1rem;
            border: 2px solid var(--color-dark-purple)
            }
            </style>
         <sl-button class="add-button">
           <slot></slot>
         </sl-button>
            `;
  }

  connectedCallback() {
    const addButton = this.shadowRoot.querySelector('.add-button');
    addButton.addEventListener('click', this.addHandler.bind(this));
  }

  addHandler = () => {
    const number = document.querySelector('[data-key="number"]');
    const add = document.querySelector('[data-key="add"]');
    const subtract = document.querySelector('[data-key="subtract"]');

    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled === true) {
      subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER) {
      add.disabled = true;
    }
  };
}

customElements.define('add-button', AddButton);

class SubtractButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
          <style>
          .subtract-button{
              margin: 1rem;
              border: 2px solid var(--color-peach)
              }
              </style>
           <sl-button class="subtract-button">
             <slot></slot>
           </sl-button>
              `;
  }

  connectedCallback() {
    const subtractButton = this.shadowRoot.querySelector('.subtract-button');
    subtractButton.addEventListener('click', this.subtractHandler.bind(this));
  }

  subtractHandler = () => {
    const number = document.querySelector('[data-key="number"]');
    const add = document.querySelector('[data-key="add"]');
    const subtract = document.querySelector('[data-key="subtract"]');

    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled === true) {
      add.disabled = false;
    }

    if (newValue <= MIN_NUMBER) {
      subtract.disabled = true;
    }
  };
}

customElements.define('subtract-button', SubtractButton);


const resetButton = document.querySelector('[data-key="reset"]');
const number = document.querySelector('[data-key="number"]');

const resetHandler = () => {
  number.value = '0';
  const resetMessage = document.createElement('h1');
  resetMessage.textContent = 'Counter has been reset';
  document.body.appendChild(resetMessage);
};

resetButton.addEventListener('click', resetHandler);
