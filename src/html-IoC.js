/**
 *
 * @param {String[]} strargs
 * @param {Array<String|String[]>} args
 * @returns {String}
 */
export const html = (strargs, ...args) => {
  let res = "";
  for (let i = 0; i < strargs.length - 1; i++) {
    res += strargs[i];
    res += Array.isArray(args[i])
      ? args[i].reduce((accumulator, iterator) => accumulator + iterator, "")
      : args[i];
  }
  res += strargs[strargs.length - 1];
  return res;
};
