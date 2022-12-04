

# How To Implement The Solar System Simulation Program In Brainfuck

Actually it might be easier than I thought. Brainfuck provides as mit incrementing and 
decrementing and that on byte level only which means only 256 different values.

However I think we can use natural numbers only. 

I think it's best to separate the programm into several parts. 

## Part 1 --- Days or Rotation of Sun and Planets around themselves

This is the simplest parts as it only requires binary addition and modular division among
the various mathematical operations.

  - Sun 24 days 11 hours 16 minutes
  - Mercury 58 days 16 hours
  - Venus 243 days 26 minutes
  - Earth 23 hours 56 minutes __(surprsingly not our day with 24 hours)__
  - Mars 24 hours 36 minutes
  - Jupiter 9 hours 55 minutes
  - Saturn 10 hours 33 minutes
  - Uranus 17 hours 14 minutes
  - Neptune 16 hours

The program starts with initializing the angles the sun and plantes had during the time we sent
the message. The angle is described in radiands - thus a full turn is 2π - but as 
π is not a natural number we have to use a natural number equivalent as we want to restrict us
to 32bit unsigned integers. Thus a full turn or 2π will be π * 2 * 2²⁸ or approximately 1686629713
or 6487ed51 in hexadecimal.

For a code sample in JavaScript please got to the jssamples directory to solarsystem1.js .

Now I am thinking of limiting the simulation of to one year or 8766 hours.

## Part 2 -- Position in the Solar System

Actually this can be described with angles too as we did in Part 1. However we might not want to use
2π as the planets have elliptical orbits. The circumference of an ellipse can be smaller than a multiple of 2π
and we probably want to show that our planets have elliptical orbits. So we better try to calculate the exact
circumference for each planet or come pretty close to it as far as 32bit integers allow.

So instead of a fraction of 2π we describe the position of how much of the elliptical circumference (orbit) has
been completed.

## Part 3 -- Distance from the sun

This is interesting as the distance from the sun of a planet does not change linear. I suppose I will use
2²⁴ to mean one astronomical unit.

## Part 4 -- Drawing  or calculating the "solar system" as bitmap


---
unicode chars for copy and paste πⁱ⁰¹²³⁴⁵⁶⁷⁸⁹