/**The replce() method returns a new string with all or some
 * matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement
 * can be a string or a function to be called for each match.
 * If pattern is a string, only the first occurence will be replaced
 */
const testStr = 'JAVA JS .NET JS JAVA java';
console.log(testStr.replace(/JAVA/gi,'JS'));


