const ThueInput = document.getElementById('ThueInput');
const Message = document.getElementById('Message');
const Compile = document.getElementById('Compile');
const ResetMessage = document.getElementById('ResetMessage');
const Convert2Hex = document.getElementById('Convert2Hex');
const HumanReadable = document.getElementById('HumanReadable');
const Download = document.getElementById('Download');




let MESSAGE = '';
let PSEUDO = '';

console.log('working');
Compile.onclick = identifyCompile;
ResetMessage.onclick = () => {
  MESSAGE = '';
  PSEUDO = '';
  Message.textContent = '';
};
HumanReadable.onclick = () => {
  Message.textContent = PSEUDO;
};

function compileThue() {
  const thue = ThueInput.value;
  const pseudo = translateThue(thue).join('');
  const bits = translatePseudo2binary(pseudo);
  const formated = bits.join('').match(/.{1,49}/g);
  Message.textContent += formated.join('\n');
  console.log(bits.join(''));
  MESSAGE += bits.join('');
  PSEUDO += pseudo;
};

function compileSample() {
  const thue = ThueInput.value;
  const pseudo = translateDebug(thue).join('');
  const bits = translatePseudo2binary(pseudo);
  const formated = bits.join('').match(/.{1,49}/g);
  Message.textContent += formated.join('\n');
  console.log(bits.join(''));
  MESSAGE += bits.join('');
  PSEUDO += pseudo;
};

function identifyCompile() {
  const data = ThueInput.value;
  if (data.includes('::=')) {
    console.log('thue');
    compileThue();
  } else {
    console.log('sample');
    compileSample();
  }
}