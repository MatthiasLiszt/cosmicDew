
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

It will probably look like this mmm Mpt0 aaa .trn. Bgt BplBplBplBpl BcoBlt BplBplBplBpl BplBplBplBpl BplBpl BgtBmBcc BltBplBpl www
The spaces in the code and input string are only for readability here and will be missing.

# Symbols used in the interpreter

  .. ... program state; the program state is stored between d and b
  mmm ... beginning of the memory section
  aaa ... begin of the input string/program to be interpreted (a from alpha)
  www ... end of the input string/program to be interpreted (w as a version of omega)
  trn ... brain- to boolfuck translate state
  rtn ... returning to aaa after completing trn

  B ... marks a brainfuck instruction
  Bgt ... > (gt for greater than)
  Blt ... < (lt for less than)
  Bpl ... + (plus)
  Bmn ... - (minus)
  Bco ... [ (bracket open ?)
  Bcc ... ] (bracket close ?)

  ooi ... boolfuck instruction !
  oio ... boolfuck instruction <
  oii ... boolfuck instruction >
  ioo ... boolfuck instruction [
  ioi ... boolfuck instruction ]

  Mpt ... memory pointer
  Ppt ... instruction pointer
  swpA ... ! instruction state (swp = swap)
  swpR ... return state of the ! instruction
  whlQ ... [ instruction state (whl = while) checking if memory cell is 1
  whlF ... state of [ instructino if memory cell was 0
  whlT ... state of [ instructino if memory cell was 1
  bckQ ... ] instruction state (bck = back) checking if memory cell is 1
  bwdA ... < instruction state (bwd = backward)
  bwdR ... return state of the < instruction
  fwdA ... > instruction state (fwd = forward)
  fwdR ... return state of the > instruction

  O and I are used for deactivated instructions just like o and i are for active instructions
  ! ... an unary counter used to process the [ and ] instruction

## the [ instruction (ioo)

Obviously one of the most difficult instructions in this whole interpreter. I better start with it as the rest will be pretty easy.
Triggered by ..ioo::=ioo.whlQ.Ppt

Getting result from memory mell

  Mpt.whlQ.0 ::= Mpt0.whlF.
  Mpt.whlQ.1 ::= Mpt1.whlT.

execute body if memory cell was 1 

  .whlT.Ppt::=..

deactiving instructions if memorcy cell was 0

  ioo .whlF. Ppt ::= IOOWN
  Nooi ::= OOIN
  Noio ::= OION
  Noii ::= OIIN
  Nioo ::= IOO!N

When N reaches ioi (]) it has to be checked whether there are any remaining !. If there are no remaining ! then 
deactivating or neutralizing of instructions has to stop.

  ONioi ::= OIOIX
  INioi ::= IIOIX
  !X::=X

The ! and W obviously have to move too but have to be stopped by X.

  !O::=O!
  !I::=I!
  !W::=W!
  WO::=OW
  WI::=IW

If W reaches X then it transforms to .. again WX::=..
This is important as the tail of ! behind N can be arbitrarily long.

## the ] instruction (ioi)

Obviously one of the most difficult instructions in this whole interpreter. I better start with it as the rest will be pretty easy.
Triggered by ..ioi::=ioi.bckQ.Ppt

Getting result from memory mell

  Mpt.bckQ.0 ::= Mpt0.bckF.
  Mpt.bckQ.1 ::= Mpt1.bckT.

if memory cell was 0 then continue with next instruction

  .bckF.Ppt::=..

if memory cell was 1 then the trouble starts again

  ioi.bckT.Ppt::=QH.Ppt.ioi

obviously Q has to move

  ooiQ::=Qooi
  oioQ::=Qoio
  oiiQ::=Qoii
  ioiQ::=QCioi

When Q reaches [ (ioo) it has to be checked again if there are remaining C like ! where for [ .

  iooQo::=Yiooo
  iooQi::=Yiooi
  YC::=Y

The C and H obviously have to move too but have to be stopped by Y.

  oC::=Co
  iC::=Ci
  HC::=CH
  oH::=Ho
  iH::=Hi

If H reaches Y then it transforms to .. again HY::=..
This is important as the tail of C behind Q can be arbitrarily long.

## the < instruction (oio)

Moves the memory pointer (Mpt) backward. Triggered by ..oio::=.bwdA.oioPpt 
Probably should not go beyond the beginning of the memory.

  mmm.bwdA.Mpt::=mmmMpt.bwdR.

So the line above describes that in case of reaching the end of memory it is just returned without doing anything.

  .bwdA. 0 Mpt ::= Mpt 0 .bwdR.
  .bwdA. 1 Mpt ::= Mpt 1 .bwdR.

The obvious end of the instruction is .bwdR.Ppt::=..

## the > instruction (oii)

Moves the memory pointer (Mpt) forward. Triggered by ..oii::=.fwdA.oiiPpt
Creates new memory when hitting aaa (begin of program section).

  Mpt .fwdR. aaa ::= Mpt 0 aaa .fwdR.

  Mpt 0 .fwdA. ::= 0 Mpt .fwdR.
  Mpt 1 .fwdA. ::= 1 Mpt .fwdR.

The obvious end of the instruction is .fwdR.Ppt::=..

## the ! instruction (ooi)

The easiest of all five. Triggered by ..ooi::=.swpA.ooiPpt
Once .swpA. reaches the memory pointer Mpt it changes a 0 to 1 and a 1 to 0.

  Mpt.swpA.0::=Mpt1.swpR.
  Mpt.swpA.1::=Mpt0.swpR.
  .swpR.Ppt::=..

# moving rules

## state swpA and swpR

  aaa.swpA.::=.swpA.aaa
  o.swpA.::=.swpA.o
  i.swpA.::=.swpA.i

  .swpR.aaa::=aaa.swpR.
  .swpR.o::=o.swpR.
  .swpR.i::=i.swpR.

## state bwdA and bwdR

## state fwdA and fwdR
