function translateDebug(debug) {
  const output = [];
  const lines = debug.split(/[\r|\n]/);
  for (const one of lines){
    const noSpace = one.replace(/\s/g, '');
    if (noSpace == '') continue;
    if(one.length > 1) {
      output.push(debug$$);
      for (const char of noSpace) {
        if (validSymbols.includes(char)) {
          output.push(char);
        } else {
          return `invalid symbol ${char} in debug sample`;
        }
      }
      output.push(debug$$);
    }
  }
  return output;
}
