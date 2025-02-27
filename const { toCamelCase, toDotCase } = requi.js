const { toCamelCase, toDotCase } = require('./refined_prompt');

describe('String Case Conversion Functions', () => {
    describe('toCamelCase', () => {
        test('converts space-separated words to camelCase', () => {
            expect(toCamelCase('hello world')).toBe('helloWorld');
        });

        test('converts hyphen-separated words to camelCase', () => {
            expect(toCamelCase('Hello-World')).toBe('helloWorld');
        });

        test('converts underscore-separated words to camelCase', () => {
            expect(toCamelCase('hello_world')).toBe('helloWorld');
        });

        test('removes non-letter characters and converts to camelCase', () => {
            expect(toCamelCase('hello world!')).toBe('helloWorld');
        });

        test('throws TypeError for non-string inputs', () => {
            expect(() => toCamelCase(123)).toThrow(TypeError);
            expect(() => toCamelCase({})).toThrow(TypeError);
            expect(() => toCamelCase([])).toThrow(TypeError);
            expect(() => toCamelCase(null)).toThrow(TypeError);
            expect(() => toCamelCase(undefined)).toThrow(TypeError);
        });
    });

    describe('toDotCase', () => {
        test('converts space-separated words to dot.case', () => {
            expect(toDotCase('hello world')).toBe('hello.world');
        });

        test('converts hyphen-separated words to dot.case', () => {
            expect(toDotCase('Hello-World')).toBe('hello.world');
        });

        test('converts underscore-separated words to dot.case', () => {
            expect(toDotCase('hello_world')).toBe('hello.world');
        });

        test('removes non-letter characters and converts to dot.case', () => {
            expect(toDotCase('hello world!')).toBe('hello.world');
        });

        test('throws TypeError for non-string inputs', () => {
            expect(() => toDotCase(123)).toThrow(TypeError);
            expect(() => toDotCase({})).toThrow(TypeError);
            expect(() => toDotCase([])).toThrow(TypeError);
            expect(() => toDotCase(null)).toThrow(TypeError);
            expect(() => toDotCase(undefined)).toThrow(TypeError);
        });
    });
});