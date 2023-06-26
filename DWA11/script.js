
// Define initial state
const initialState = {
  count: 0
};

 // Store object
const store = {
  state: initialState,
  getState() {
    return this.state;
  },
  setState(newState) {
    this.state = newState;
  }
};

 // Event handlers
const addHandler = () => {
  const STEP_AMOUNT = 1;
  const MAX_NUMBER = 10;
  const number = document.querySelector('[data-key="number"]');
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  const subtract = document.querySelector('[data-key="subtract"]');
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  const add = document.querySelector('[data-key="add"]');
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }

  store.setState({ count: newValue });
};

const subtractHandler = () => {
  const STEP_AMOUNT = 1;
  const MIN_NUMBER = 0;
  const number = document.querySelector('[data-key="number"]')
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  const add = document.querySelector('[data-key="add"]');
  if (add.disabled === true) {
    add.disabled = false;
  }

  const subtract = document.querySelector('[data-key="subtract"]');
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }

  store.setState({ count: newValue });
};

const resetHandler = () => {

  const number = document.querySelector('[data-key="number"]');
  number.value = 0;
  store.setState({ count: 0 });
};

const add = document.querySelector('[data-key="add"]');
add.addEventListener('click', addHandler);

const subtract = document.querySelector('[data-key="subtract"]');
subtract.addEventListener('click', subtractHandler);

const reset = document.querySelector('[data-key="reset"]');
reset.addEventListener('click', resetHandler);
