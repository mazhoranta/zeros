module.exports = function getZerosCount(number) {
  var zerosCount = 0;
  for (var i = number; i > 0; i--) {
    if (i % 5 == 0) {
      number = i;
      break;
    }
  }

  for (var i = number; i > 0; i-=5) {
    var k = i;
    while (k % 5 == 0) {
      zerosCount++;
      k = k / 5;
    }
  }
  
  return zerosCount;
}
