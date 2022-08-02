module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (bracketsConfig.find(elem => elem[1] === str[i]) && arr.length !== 0) {
      if (arr.length === 0) return false;

      bracketsConfig.forEach((elem) => {
        if (elem[1] === str[i]) {
          if (arr[arr.length - 1] === elem[0]) arr.pop();   
          else {
            if (elem[1] === elem[0]) arr.push(elem[1]);
            return false;
          };
        };
      });

    } else arr.push(str[i]);
  };
  return arr.length === 0;
}
