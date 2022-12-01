function translateThue(thue) {
  const output = [];
  const lines = thue.split(/[\s|\r|\n]/);
  for (const one of lines){
    if(one.length > 1){
      if(one.includes(thueSeparator))
       {const rule = one.split(thueSeparator);
        if(rule.length == 2) {
          const Rule = rule$$cause + rule[0] + rule$$effect +  rule[1] + rule$$end;
          output.push(Rule);
        } else {
          return 'thue separator error --- occurs more than once';
        }
       } else {
        const input = input$$ + one + input$$;
        output.push(input);
       }
      
    }
  }
  return output;
}

function translateThue2binary(pseudo) {
  const output = [];
  for (const one of pseudo.split('')) {
    if (metaSymbols.includes(one)) {
      if (one == rule$$) output.push(rule$);
      if (one == input$$) output.push(input$);
      if (one == debug$$) output.push(debug$);
      if (one == bfmarker$$) output.push(bfmarker);
    }
    if (validSymbols.includes(one)) {
      const index = validSymbols.indexOf(one);
      const toBeCoded = (maxValidSymbols * 2 - index).toString(2);
      output.push(toBeCoded.replaceAll('0', zero$).replaceAll('1',one$));
    } else {
      if(!metaSymbols.includes(one)) return `invalid symbol ${one}`;
    }
  }
  return output;
}