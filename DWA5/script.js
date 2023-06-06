const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// No calculation performed & Dividing numbers result in a whole number

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  if (dividend === '' || divider === '') {
    result.innerHTML = 'Division not performed. Both values are required in inputs. Try again.'
  }else{
  const divisionResult = dividend / divider;
  // No decimal calculation
  const roundedResult = Math.round(divisionResult);
  result.innerText = roundedResult
  }
});

// “Division not performed. Both values are required in inputs. Try again”.

