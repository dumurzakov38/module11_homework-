const getPercents = require('./getPercents');

describe('getPercents function', () => {
  // Успешное выполнение функции
  it('should calculate correct percentage', () => {
    expect(getPercents(20, 150)).toBe(30); // 20% от 150 = 30
    expect(getPercents(50, 200)).toBe(100); // 50% от 200 = 100
  });

  // Неуспешное выполнение функции
  it('should throw an error if arguments are not numbers', () => {
    expect(() => getPercents('20', 150)).toThrow('Both arguments should be numbers');
    expect(() => getPercents(30, '200')).toThrow('Both arguments should be numbers');
  });

  // Корнер-кейсы
  it('should return 0 if percent is 0', () => {
    expect(getPercents(0, 500)).toBe(0);
  });

  it('should return the same number if percent is 100', () => {
    expect(getPercents(100, 50)).toBe(50);
    expect(getPercents(100, 1000)).toBe(1000);
  });

  it('should handle negative numbers', () => {
    expect(getPercents(25, -200)).toBe(-50); // 25% от -200 = -50
  });
});

