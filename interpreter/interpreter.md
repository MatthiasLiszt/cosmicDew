
# On The Interpreter And Tools

Obviously we can't directly paste a .bf file as input to a brainfuck interpreter in Thue because
because the program state has to be saved in the input string. (probably I am terrible in explaining this)

Also using the common brainfuck symbols +-<>[]., is not practical for reasons which become obvious when
coding in Thue.

So basically we intended to code a Boolfuck interpreter in Thue which should be in data/interpreter.thue
and a Brain- to Boolfuck Interpreter for the obvious reasons that a Boolfuck Interpreter is easier to write
and requires less rules and that brainfuck programms are shorter than boolfuck once among various other ones.

The test input provided in the Brain- to Boolfuck interpreter is 42 or > ++++ [< ++++ ++++ ++>-]<++ adapted to 
the planned representation for Thue.

It will probably look like this adb Bgt BpBpBpBp BcoBlt BpBpBpBp BpBpBpBp BpBp BgtBmBcc BltBpBp w
The spaces in the code and input string are only for readability here and will be missing.

# Symbols used in the interpreter

db ... program state; the program state is stored between d and b
a ... beginn of the input string/program to be interpreted (a from alpha)
w ... end of the input string/program to be interpreted (w as a version of omega)

B ... marks a brainfuck instruction
Bgt ... > (gt for greater than)
Blt ... < (lt for less than)
Bp ... + (plus)
Bm ... - (minus)
Bco ... [ (bracket open ?)
Bcc ... ] (bracket close ?)

ooi ... boolfuck instruction !
oio ... boolfuck instruction <
oii ... boolfuck instruction >
ioo ... boolfuck instruction [
ioi ... boolfuck instruction ]

