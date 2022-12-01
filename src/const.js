// $ at the end of variables is meant to be read 'symbol'
const zero$ = '00';
const one$ = '01';
const rule$ = '011';
const rule$$ = '@';
const rule$cause = rule$;
const rule$$cause = rule$$;
const rule$effect = rule$ + rule$;
const rule$$effect = rule$$ + rule$$;
const rule$end = rule$ + rule$ + rule$;
const rule$$end = rule$$ + rule$$ + rule$$;
const input$ = '011111111';
const input$$ = '+';
const debug$ = '01111';
const debug$$ = '~';
const bfmarker = '01111111111111111';
const bfmarker$$ = 'ß';

const validSymbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.<>!';
const thueSeparator = '::=';