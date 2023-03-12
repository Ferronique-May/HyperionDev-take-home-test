import { isbn13 } from "./isbnCheck";


describe('ISBN', () => {
    describe('ISBN-13 validation', () => {
        it('should return "Valid" if a valid ISBN-13 is provided', () => {
            expect(isbn13('9780316066525')).toBe('Valid');
        });
    
        it('should return "Invalid" if an invalid ISBN-13 is provided', () => {
            expect(isbn13('9783161484101')).toBe('Invalid');
        });
    
        it('should return "Invalid" if a string of incorrect length is provided', () => {
            expect(isbn13('978123456789')).toBe('Invalid');
        });
        it('should return "Invalid" if a string contains non-numeric characters', () => {
            expect(isbn13("1234zxcvnmas4")).toBe('Invalid');
        })
    });
  
    describe('ISBN-10 to ISBN-13', () => {
        it('should return a valid ISBN-13 if a valid ISBN-10 is provided', () => {
            expect(isbn13('0316066524')).toBe('9780316066525');
        });
    
        it('should return "Invalid" if an invalid ISBN-10 is provided', () => {
            expect(isbn13('0330301824')).toBe('Invalid');
        });
    
        it('should return "Invalid" if a string of incorrect length is provided', () => {
            expect(isbn13('3164568')).toBe('Invalid');
        });
    });
});