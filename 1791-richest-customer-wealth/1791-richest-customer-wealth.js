/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   let a = accounts.map((item) => {
    return item.reduce((acc, crr) => acc + crr, 0);
  });

  return Math.max(...a);

};