

function combine(instr, outstr, index) {
    for(let i = index; i < instr.length; i++) {
        outstr = outstr + instr[i];
        combinations.push(outstr)
        combine(instr, outstr, i+1);
        outstr = outstr.slice(0, outstr.length - 1);
    }
}