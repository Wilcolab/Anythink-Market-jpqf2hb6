/**
 * Converts a string to camelCase.
 * Handles spaces, hyphens, and underscores as word separators.
 * Skips non-letter characters and throws errors for invalid inputs.
 *
 * @param {string} str - The string to convert to camelCase.
 * @returns {string} - The camelCase version of the input string.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * toCamelCase("hello world"); // "helloWorld"
 * toCamelCase("Hello-World"); // "helloWorld"
 * toCamelCase("hello_world"); // "helloWorld"
 * toCamelCase("hello world!"); // "helloWorld"
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    return str
        .replace(/[^a-zA-Z0-9\s-_]/g, '') // Remove non-letter characters
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Usage examples
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("Hello-World")); // "helloWorld"
console.log(toCamelCase("hello_world")); // "helloWorld"
console.log(toCamelCase("hello world!")); // "helloWorld"

/**
 * Converts a string to dot.case.
 * Handles spaces, hyphens, and underscores as word separators.
 * Skips non-letter characters and throws errors for invalid inputs.
 *
 * @param {string} str - The string to convert to dot.case.
 * @returns {string} - The dot.case version of the input string.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * toDotCase("hello world"); // "hello.world"
 * toDotCase("Hello-World"); // "hello.world"
 * toDotCase("hello_world"); // "hello.world"
 * toDotCase("hello world!"); // "hello.world"
 */
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    return str
        .replace(/[^a-zA-Z0-9\s-_]/g, '') // Remove non-letter characters
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map(word => word.toLowerCase())
        .join('.');
}

// Usage examples
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("Hello-World")); // "hello.world"
console.log(toDotCase("hello_world")); // "hello.world"
console.log(toDotCase("hello world!")); // "hello.world"

