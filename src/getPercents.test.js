const getPercents = require('./getPercents');

describe('getPercents', () => {
  it('should calculate correct percentages', () => {
    expect(getPercents(10, 200)).toBe(20);
    expect(getPercents(25, 80)).toBe(20);
  }),

  it('should throw an error for non-number arguments', () => {
    expect(() => getPercents("10", 200)).toThrow('Both arguments should be numbers');
    expect(() => getPercents(10, "200")).toThrow('Both arguments should be numbers');
    expect(() => getPercents("10", "200")).toThrow('Both arguments should be numbers');
  }),

  it('should handle corner cases', () => {
    expect(getPercents(0, 150)).toBe(0);
    expect(getPercents(50, 0)).toBe(0);
    expect(getPercents(10000, 50)).toBe(5000);
  });
});



