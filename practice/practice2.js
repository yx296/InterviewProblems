var str = 'star wars';

function reverseStrOOP(str) {
  var res = '';

  for (var i = str.length - 1; i >=0; i--) {
    res+= str[i];
  }

  return res;
}


console.log(reverseStrOOP(str));
console.log(str);
