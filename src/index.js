module.exports = function check(str, bracketsConfig) {
  function CheckOpenBrackets(bracket) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] === bracket) {
        return true;
      }
    }
    return false;
  }

  function CheckMatches(OpenBracket, CloseBracket) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === OpenBracket && bracketsConfig[j][1] === CloseBracket) {
        return true;
      }
    }
    return false;
  }
  
  function isBracket(char) {
   var bracketsConfig = '{}[]()1234567788||';
    if (bracketsConfig.indexOf(char) > -1) {
      if (bracketsConfig.indexOf(char) === bracketsConfig.lastIndexOf(char)) {
      return true;
      }
    } 
    else {
      return false;
    }
  }
 
function isBalanced() {
    let stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (isBracket(str[i])) {
        if (CheckOpenBrackets(str[i])) {
          stack.push(str[i]);
        } else {
          if (stack.length === 0) {
            return false;
          }
          let top = stack.pop();
          if (!CheckMatches(top, str[i])) {
            return false;
          }
        }
      }
    }
  
    const returnValue = stack.length === 0 ? true : false;
    return returnValue;
  }
  return isBalanced();
}
