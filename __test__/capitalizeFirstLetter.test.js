import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";

describe('capitalizeFirstLetter', () => {
    it('capitalizes the first letter of a word', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
        expect(capitalizeFirstLetter('world')).toBe('World');
    });

    it('returns an empty string if input is an empty string', () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    it('does not change the rest of the string', () => {
        expect(capitalizeFirstLetter('javaScript')).toBe('JavaScript');
    });

    it('handles single character strings correctly', () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
    });

    it('handles strings with leading spaces', () => {
        expect(capitalizeFirstLetter(' hello')).toBe(' hello');
    });

    it('handles non-alphabetic first characters correctly', () => {
        expect(capitalizeFirstLetter('1hello')).toBe('1hello');
        expect(capitalizeFirstLetter('#world')).toBe('#world');
    });
});
