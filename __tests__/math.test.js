const math = require('../src/math');

describe('Math utilities', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(math.add(5, 3)).toBe(8);
    });

    test('should add positive and negative numbers', () => {
      expect(math.add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(math.add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(math.subtract(5, 3)).toBe(2);
    });

    test('should subtract positive and negative numbers', () => {
      expect(math.subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(math.multiply(5, 3)).toBe(15);
    });

    test('should multiply with zero', () => {
      expect(math.multiply(5, 0)).toBe(0);
    });

    test('should multiply positive and negative numbers', () => {
      expect(math.multiply(5, -3)).toBe(-15);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(math.divide(6, 2)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => math.divide(6, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide positive and negative numbers', () => {
      expect(math.divide(-6, 2)).toBe(-3);
    });
  });
});
