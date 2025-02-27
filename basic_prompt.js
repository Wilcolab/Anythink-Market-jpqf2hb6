function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

// Example usage:
console.log(toCamelCase('user_id')); // Output: userId