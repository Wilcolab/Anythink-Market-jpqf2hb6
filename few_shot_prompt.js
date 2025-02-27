function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_ ](.)/g, (match, group1) => group1.toUpperCase());
}

// Examples
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber