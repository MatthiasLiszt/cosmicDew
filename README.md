
# Getting Started

Clone the repo and load the index.html in your browser. 

In the **data** directory are the files in Thue and the debug files which form part of the message.

**.thue** extension includes the Thue files
**.debug** includes one step sample debug test runs 

In the **bfuck** directory are the brainfuck files.
**.bf** extension

# Intro 

This repo is inspired by [CosmicOs](https://cosmicos.github.io/) which was inspired by works of [Freudenthal](https://en.wikipedia.org/wiki/Lincos_language). Instead of using a complex LISP like language I thought of using simpler esoteric language like [Thue](https://en.wikipedia.org/wiki/Thue_(programming_language)).

To my understanding beings are learning by observing cause and effects in their environment. **Thue** comes pretty close to that.
It is a simple language and the next powerful language would be probably [boolfuck](https://esolangs.org/wiki/Boolfuck) which can be translated to the well known
[brainfuck language](https://en.wikipedia.org/wiki/Brainfuck) simply by string replacement.

As far as I have understood the [Dutil-Dumas message](https://en.wikipedia.org/wiki/Cosmic_Call) , CosmicOs and the [Bush message](https://en.wikipedia.org/wiki/Lone_Signal) teach a lot of things just by giving samples. I think we can do with less -- basically just by showing cause and effect and how to program and run programs with that.

I called this repo CosmicDew because it is inspired by CosmicOs and the language Thue.

# Used Symbols

Contrary to what is used in [CosmicOs](https://cosmicos.github.io/) and by [Michael Bush](https://en.wikipedia.org/wiki/Lone_Signal) I prefered to use morse code like symbols.

   - 00 zero
   - 01 one 
   - 011 refered to as rule symbol - (used to create three different symbols for writing a modified [Thue](https://en.wikipedia.org/wiki/Thue_(programming_language)) )
   - 011111111 input symbol -- input on which the Thue rules are performed (used for marking beginning and end) 
   - 01111 debug symbol -- input one step sample run of the Thue rules (used for marking beginning and end)
   
   - 01111111111111111 optional bf marker -- marks the beginning and end of a brainfuck programm
   
# Differences to Thue

  Instead of Thue's usual ::= separator between cause and effect or string with which the left string should be replaced
  there are now free symbols used.
  
  For brevity now I replace the binary 011 (take a look at the used symbols section) with @.
  
  egg:==chicken
  
  In Thue means that the string "egg" is replaced with "chicken".
  In the modified Thue used in the message the same would be
  
  @egg@@chicken@@@
  
  However @ would be coded in binary as 011 and "egg" and "chicken" would be binary number. 
  Please note that 0 is coded as 00 and 1 is coded as 01. Let's assume that "egg" is 100 coded
  as 010000 and "chicken" is 101 coded as 010001.
  
  Thus the whole thing would be coded as 011 010000 011 011 010001 011 011 011. 
  Spaces are just for readability.
  
  Usually after the rules in a Thue program comes the input which originally is introduced in a new line without any symbol.
  
  Here we use the input symbol > which is coded as 011111111 and marks the beginning and end of introduced input.
  
  Thue:
  egg::=chicken
  egg
  
  modified Thue: 
  @egg@@chicken@@@
  >egg>
  
  binary coded: 
  011 010000 011 011 010001 011 011 011 011 011111111 010000 011111111
  
  Thue has no symbol for a one test step run but the very idea of making this whole thing understandable for aliens
  is to provide such a one step debuggin test run. Let's use : for brevity and remember that binary coded it is 01111.
  
  introducing debuging step:
  :chicken:
  
  introducing debuging step (binary coded):
  01111 010001 01111      

# Why Modified Boolfuck or Brainfuck

Brainfuck comes pretty close to the machine languages we use in our computers. Thus it will be pretty easy to translate existing
code to it. People have already written C to brainfuck compilers etc. Also a Thue to boolfuck interpreter in Thue was written by several people. 

As we have no input and output we can remove those instructions from Brainfuck. The aliens should be smart enough to get the gist out of the provided programs
by observing their execution.

Thus our modified brainfuck will have just six instructions usually refered to as + - [ ] < >.
As we define brainfuck through boolfuck by simple string replacement and boolfuck just works on bits or boolean values instead of bytes we can replace + and - with
an instruction ! which is just swapping a bit from 0 to 1 or 1 to 0 which is just negation.

# Converting Brainfuck to Boolfuck

Just in case it gets lost and we have to search for it again.  [Samuel Hughes](http://samuelhughes.com/boof/) provided on his page a table on how to translate
brainfuck to boolfuck just by replacement of instructions. I hope he does not mind if I cite him here.

**+** **instruction**
`
 >[>]!<[!<]>>>>>>>>>[!]<<<<<<<<<
`
**-** **instruction**
`
 >>>>>>>>>!<<<<<<<<![>!]<[<]>>>>>>>>>[!]<<<<<<<<<
`
**<** **instruction**
`
 <<<<<<<<<
`
**>** **instruction**
`
 >>>>>>>>>
`
**[** **instruction**
`
 >>>>>>>>>!<<<<<<<<![>!]<[<]>>>>>>>>>[!<<<<<<<<[>]!<[!<]
`
**]** **instruction**
`
 >>>>>>>>>!<<<<<<<<![>!]<[<]>>>>>>>>>]<[!<]
`

# Basic Message Content

The Basic Message Content consists of programs in modified Thue and their test runs. The only exception
is the simulation of our solar system as it is the input for the Thue to Boolfuck/Brainfuck interpreter.

  - Reflected/Bouncing Ball Program
  - Binary Addition / Counter
  - Wolfram's rule 110 (as it is simple to implement in Thue) ²
  - Thue to Boolfuck/Brainfuck Interpreter
  - - Simulation of our solar system in modified brainfuck which shows the eight planets circling around the sun
  
  ² to show growth and that thue is turing-complete 🤔️
  
# Ideas for optional message content

The Optional Message Content consists of program in modified brainfuck. The input has to be in the brainfuck program
which should be no problem as this is easier done in brainfuck than in thue. 
  
  - Calculation Of Euler's number e
  - a program drawing the mandelbrot set
  - Conway's Game Of Life
  - a [CoreWar](https://en.wikipedia.org/wiki/Core_War) duell (not sure if this would convince them of our peacefull intentions)
  - a small program playing Go or Chess 😀️ ²
  
  ² a bit of a challenge in a language which knows no in- and output
    
  
  
  
