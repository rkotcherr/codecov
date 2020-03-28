module.exports = function(list) {
  const ret = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 !== 0) {
      ret.push(list[i]);
    }
  }

  return ret;
};

