/**
 * 
 * @param {String[]} strargs 
 * @param {*} args 
 */
const html = (strargs, args) => {
    let res;
    for(let i = 0; i < strargs.length; i++){
        res += strargs[i];
        res += args[i];
    }
    return res;
}