### Bereyziat_screening_test

## Solution

1. Create a function that takes multiple functions as an arguments (function composition) 
   by returning a function that accepts one argument (see example below)
   
   - Built a pipey function that will accept the list of functions as a parameter
   - By using Array.prototype.reduce, returned a new function that will do the calculation 'pipey'
   
2. Find the intersection of two arrays, the intersection would be the common elements that exists within both arrays.
   For this case, these elements should be unique! 
   
   - Used Array.prototype.filter and includes to find the intersection
   - By using Set, extracted the unique values
   
3. Given a string an angle brackets, such as '<><<><>>', write a function that makes a angle brackets string match (balanced the structure)
   
   - The problem was to count the open and close brackets, add missed number of ones at the first and the end
   
 4. Write a function that takes the Object of number with nested item as an argument, and then returns the array of unique number from that Object.
    
    - Made a nested function that loops through the object
    - If an item has a number value, 
        * Added that value to Set if it's the first one
        * Removed the value from Set if it duplicates
    - If an item has another object, doing again the above steps
