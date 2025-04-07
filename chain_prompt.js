function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim leading/trailing whitespace
    input = input.trim();

    // Remove non-alphanumeric characters (except spaces, dashes, and underscores)
    input = input.replace(/[^a-zA-Z0-9 _-]/g, '');

    // Replace underscores and dashes with spaces, then split camelCase words
    input = input
        .replace(/[_-]+/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2');

    // Split by spaces, filter out empty strings, and join with hyphens
    return input
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
        .join('-');
}

// Example usage:
console.log(toKebabCase('HelloWorld')); // "hello-world"
console.log(toKebabCase('  hello_world ')); // "hello-world"
console.log(toKebabCase('This--is__a Test!')); // "this-is-a-test"