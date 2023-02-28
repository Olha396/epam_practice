const testStr = 'This Is my test string';
console.log(testStr[0]);
console.log(testStr.charAt(0));
console.log(testStr.length);
/**The slice() method extracts a section of a string and
 * returns it as a new string, without modifyin the origin string
 
 */
 const sliced = testStr.slice(0,4);
 console.log(sliced);
 console.log(testStr);
/**The trim() method is used to remove whitespace from both ends of a string.
 * Whitespace in this context is all the whitespace characters
 * (space,tab, no-break, etc.) and all te line terminator characters (LF, CR))
 
 */
const trimmed = testStr.trim();
 console.log(trimmed);
 console.log(testStr);


  /**The toUpperCase() method returns the calling string value
  * converted to uppercase (the value will be converted to a string if it isn't one.).
  * The toLowerCase() method returns the calling string value
  * converted to lowscase
 */
console.log(testStr.toUpperCase());
console.log(testStr.toLowerCase());

/**The match() retrieves the result of matching a string 
 * agaist a regular expression.
 */
const re = /is/gi;
console.log(testStr.match(re).length);

/**The replce() method returns a new string with all or some
 * matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement
 * can be a string or a function to be called for each match.
 * If pattern is a string, only the first occurence will be replaced
 */
console.log(testStr.toUpperCase());
console.log(testStr.toLowerCase());