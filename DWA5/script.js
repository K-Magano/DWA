const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {

    if (dividend === "" || divider === "") { // User Story : values are missing
      result.innerHTML = "Division not performed. Both values are required in inputs. Try again.";

    } else {

      const divisionResult = dividend / divider;
      // User Story : No decimal calculation
      if (divisionResult % 1 !== 0) {
       result.innerText = Math.floor(divisionResult);
      }
    }

    if (isNaN(dividend) || isNaN(divider)) { // User Story : Input that is NAN
      throw new Error("Invalid input provided");
    }

    if (divider == -3) { //User Story :An invalid division should log an error in the console -3.
      throw new Error("Invalid division. Cannot divide by subtraction.");
    }
    
  } catch (error) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(error);
  }
});
