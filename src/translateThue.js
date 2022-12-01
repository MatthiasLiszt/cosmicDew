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