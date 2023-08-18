const getPercents = require('./getPercents');

describe('getPercents', () => {
  const percent10 = 10;
  const percent20 = 20;
  const percent25 = 25;
  const percent80 = 80;
  const percent200 = 200;

  const percent0 = 0;
  const percent50 = 50;
  const percent150 = 150;
  const percent5000 = 5000;
  const percent10000 = 10000;

  it('should calculate correct percentages', () => {
    expect(getPercents(percent10, percent200)).toBe(percent20);
    expect(getPercents(percent25, percent80)).toBe(percent20);
  }),

  it('should throw an error for non-number arguments', () => {
    expect(() => getPercents("10", percent200)).toThrow('Both arguments should be numbers');
    expect(() => getPercents(percent10, "200")).toThrow('Both arguments should be numbers');
    expect(() => getPercents("10", "200")).toThrow('Both arguments should be numbers');
  }),

  it('should handle corner cases', () => {
    expect(getPercents(percent0, percent150)).toBe(percent0);
    expect(getPercents(percent50, percent0)).toBe(percent0);
    expect(getPercents(percent10000, percent50)).toBe(percent5000);
  });
});



