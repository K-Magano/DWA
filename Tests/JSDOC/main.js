//@ts-check

/**
 * 
 * This function will accept details about a person 
 * and create an object for them. 
 * 
 * @param {string}  name - Full name
 * @param {number} age - Persons age
 * @param {Boolean} isDeveloper - Whether or not the person is a developer
 * @returns {Object}  - The person object 
 */


function createPerson(name, age, isDeveloper){ 
        return { name: name, 
                  age: age,  
                  isDeveloper: isDeveloper
                }
            }


/* TODO: If there is no running water in the urinals, Do not use,  use the toilet instead*/


const runingWaterInUrinals = false;

  if (!runningWaterInUrinals) {
    console.log("Use the toilet instead.");
  } else {
  console.log("Use urinals.")
    }


    const runningWaterInUrinals = false;
    const toiletFlushed = true;
    const toiletLidClosed = true;
    
    if (!runningWaterInUrinals) {
      console.log("Do not use, use the toilet instead.")};
    
      // Flush the toilet after use
      if (toiletFlushed) {
        console.log("Thank you for keeping it Clean!.");
      } else {
        console.log("Toilet flushing failed. Please try again.");
      }
    
      // Close the toilet lid
      if (toiletLidClosed) {
        console.log("Thanks for doing it right!.");
      } else {
        console.log("Failed to close the toilet lid. Please try again.")
        };