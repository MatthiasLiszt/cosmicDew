function binaryString2hex (datastring) {
  let offset;
  if (datastring.length % 4 == 1) offset = '000';
  if (datastring.length % 4 == 2) offset = '00';
  if (datastring.length % 4 == 3) offset = '0';
  if (datastring.length % 4 == 0) offset = '';

  const falseNumber = BigInt('0b1111' + datastring + offset).toString(16);
  return falseNumber.slice(1, falseNumber.length);
}