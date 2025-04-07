function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (match, char) => (char ? char.toUpperCase() : ''))
        .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

// Examples
console.log(toCamelCase("first name")); // firstName
console.log(toCamelCase("user_id")); // userId
console.log(toCamelCase("SCREEN_NAME")); // screenName
console.log(toCamelCase("mobile-number")); // mobileNumber