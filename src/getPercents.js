function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
      throw new Error('Both arguments should be numbers');
    }
    
    const result = (percent / 100) * number;
    return result;
  }

  module.exports = getPercents;

