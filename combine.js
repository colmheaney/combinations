
function combine(instr) {
    result = [];
    _combine(instr, "", 0, result);
   return result; 
}

function _combine(instr, outstr, index, result) {
    for(let i = index; i < instr.length; i++) {
        outstr = outstr + instr[i];
        result.push(outstr)
        _combine(instr, outstr, i+1, result);
        outstr = outstr.slice(0, outstr.length - 1);
    }
}