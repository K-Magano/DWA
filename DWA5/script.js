const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (isNaN(dividend) || isNaN(divider)) {
      // Scenario: Providing anything that is not a number should crash the program.
      throw new Error('Invalid input. Non-numeric value provided.');
    }

    if (divider === "" || dividend === "") {
      // Scenario: Validation when values are missing
      throw new Error('Division not performed. Both values are required in inputs. Try again');
    }

    if (divider === '0') {
      // Scenario: An invalid division should log an error in the console
      throw new Error('Division not performed. Invalid number provided. Try again');
    }

    // Scenario: Dividing numbers result in a decimal number
    result.innerText = Math.floor(dividend / divider);
  } catch (error) {
    document.body.innerHTML = 'Something critical went wrong. Please reload the page';
    console.error(error.message);
  } finally {
    console.log('Code execution complete.');
  }
});
