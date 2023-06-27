const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']


const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Console log each name to the console.

/**
 *TODO: ForEach 
 *forEach: iterates over the names array and log each name to the console. 
 * It doesn't return a new array; instead, it  performs an action for each element in the array.
 */

 names.forEach((name) => {
    console.log(name);
});


// each name with a matching province.

/**
 * log each name along with the corresponding province from the provinces array.
 */
names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
   });


   /**
    * TODO: .MAP
    * The map method applies a provided function(UPPERCASE) to each element of an array and returns a new array with the results.
    */

   // map to loop over all province names and turn the string to uppercase.

   const uppercaseProvinces = provinces
   .map((province) => province.toUpperCase());
   console.log(uppercaseProvinces);


   /**
    * length property to each name, we can calculate the number of characters in each name. to create a new array, nameLengths, which contains the length of each name in the names array.

    */
   // Create a new array with map that has the amount of characters in each name

   const nameLength = names.map((name) => name.length);
   console.log(nameLength);

   /*Use filter to remove all provinces that have the word Cape in them. 
    *After filtering the array, return the amount of provinces left. 
    *The final value should be 3 */

    const filterProvinces = provinces.filter((province) => !province.includes('Cape'));
    console.log(filterProvinces.length);

    // !a boolean array by using map and some to determine whether a name contains the character 'S':

    const hasCharacterS = names.map((name) => name.toLowerCase().split('').some((character) => character === 's'));
    console.log(hasCharacterS);
    

    // !Use sort to .toSort all provinces alphabetically:

    const toSorted = (array) => {
        const sortedArray = array.sort((a, b) => a.localeCompare(b));
        return sortedArray;
      };
      
      const sortedProvinces = toSorted(provinces);
      console.log(sortedProvinces);

    // Using only reduce, turn the above into an object that indicates the province of an individual

    const provinceOfIndividual = names.reduce((obj, name, index) => {
        obj[name] = provinces[index];
        return obj;
    }, {});
    console.log(provinceOfIndividual)