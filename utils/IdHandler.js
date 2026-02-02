module.exports = {
    getMaxID: function (data) {
      if (!Array.isArray(data) || data.length === 0) {
        return 0;
      }
  
      const ids = data
        .map(item => Number(item.id))
        .filter(id => !isNaN(id));
  
      if (ids.length === 0) {
        return 0;
      }
  
      return Math.max(...ids);
    }
  };
  