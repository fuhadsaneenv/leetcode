/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // return command.replace(/\(\)/g,"o").replace(/\(al\)/g,"al")
    let result=command.replaceAll("()","o")
    return result.replaceAll("(al)","al")
};