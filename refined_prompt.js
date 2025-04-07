/**
 * Converts a given string to camelCase format.
 *
 * This function takes an input string, removes any non-alphanumeric characters
 * (except spaces, dashes, and underscores), splits the string into words based
 * on spaces, dashes, or underscores, and then converts it to camelCase.
 *
 * @param {string} input - The input string to be converted to camelCase.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * // Basic usage
 * toCamelCase("hello world"); // Returns "helloWorld"
 *
 * @example
 * // Handles dashes and underscores
 * toCamelCase("hello-world_example"); // Returns "helloWorldExample"
 *
 * @example
 * // Removes non-alphanumeric characters
 * toCamelCase("hello@world!"); // Returns "helloWorld"
 *
 * @example
 * // Handles single-word input
 * toCamelCase("HELLO"); // Returns "hello"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error("Input must be a string");
    }

    // Remove non-alphanumeric characters except spaces, dashes, and underscores
    const sanitized = input.replace(/[^a-zA-Z0-9 _-]/g, '');

    // Split by spaces, dashes, or underscores
    const words = sanitized.split(/[\s_-]+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the rest
        })
        .join('');
}

// Examples
console.log(toCamelCase("hello world"));        // "helloWorld"
console.log(toCamelCase("Hello_world-test"));   // "helloWorldTest"
console.log(toCamelCase("   multiple   spaces   here   ")); // "multipleSpacesHere"
console.log(toCamelCase("123 hello World!"));   // "123HelloWorld"
console.log(toCamelCase(""));                   // ""
try {
    console.log(toCamelCase(123));                // Error
} catch (e) {
    console.error(e.message);
}
try {
    console.log(toCamelCase(null));               // Error
} catch (e) {
    console.error(e.message);
}

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error("Input must be a string");
    }

    // Remove non-alphanumeric characters except spaces, dashes, and underscores
    const sanitized = input.replace(/[^a-zA-Z0-9 _-]/g, '');

    // Split by spaces, dashes, or underscores
    const words = sanitized.split(/[\s_-]+/);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.'); // Join with dots
}

// Examples
console.log(toDotCase("hello world"));        // "hello.world"
console.log(toDotCase("Hello_world-test"));   // "hello.world.test"
console.log(toDotCase("   multiple   spaces   here   ")); // "multiple.spaces.here"
console.log(toDotCase("123 hello World!"));   // "123.hello.world"
console.log(toDotCase(""));                   // ""
try {
    console.log(toDotCase(123));                // Error
} catch (e) {
    console.error(e.message);
}
try {
    console.log(toDotCase(null));               // Error
} catch (e) {
    console.error(e.message);
}


