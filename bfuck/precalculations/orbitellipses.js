const mercuryAphelion = 0.4667;
const mercuryPerihelion = 0.3075;
const venusAphelion = 0.728; 
const venusPerihelion = 0.718;
const earthAphelion = 1.017;
const earthPerihelion = 0.983;
const marsPerihelion = 1.381;
const marsAphelion = 1.666;
const jupiterPerihelion = 4.950;
const jupiterAphelion = 5.459;
const saturnPerihelion = 9.041;
const saturnAphelion = 10.124;
const uranusPerihelion = 18.324;
const uranusAphelion = 20.078;
const neptunePerihelion = 29.709;
const neptuneAphelion = 30.385;

const mercuryAP = mercuryAphelion / mercuryPerihelion;
const venusAP = venusAphelion / venusPerihelion;
const earthAP = earthAphelion / earthPerihelion;
const marsAP = marsAphelion / marsPerihelion;
const jupiterAP = jupiterAphelion / jupiterPerihelion;
const saturnAP = saturnAphelion / saturnPerihelion;
const uranusAP = uranusAphelion / uranusPerihelion;
const neptuneAP = neptuneAphelion / neptunePerihelion;

const mercuryLambda = (mercuryAP - 1) / (mercuryAP + 1);
const venusLambda = (venusAP - 1) / (venusAP + 1);
const earthLambda = (earthAP -1) / (earthAP + 1);
const marsLambda = (marsAP -1) / (marsAP + 1);
const jupiterLambda = (jupiterAP -1) / (jupiterAP + 1);
const saturnLambda = (saturnAP -1) / (saturnAP + 1);
const uranusLambda = (uranusAP -1) / (uranusAP + 1);
const neptuneLambda = (neptuneAP -1) / (neptuneAP + 1);

const mercuryC = Math.PI * (mercuryAP + 1) * (1 + ( 3 * mercuryLambda ** 2) / ( 10 + (4 - 3 * mercuryLambda ** 2)**0.5 ));
const venusC = Math.PI * (venusAP + 1) * (1 + ( 3 * venusLambda ** 2) / ( 10 + (4 - 3 * venusLambda ** 2)**0.5 ));
const earthC = Math.PI * (earthAP + 1) * (1 + ( 3 * earthLambda ** 2) / ( 10 + (4 - 3 * earthLambda ** 2)**0.5 ));
const marsC = Math.PI * (marsAP + 1) * (1 + ( 3 * marsLambda ** 2) / ( 10 + (4 - 3 * marsLambda ** 2)**0.5 ));
const jupiterC = Math.PI * (jupiterAP + 1) * (1 + ( 3 * jupiterLambda ** 2) / ( 10 + (4 - 3 * jupiterLambda ** 2)**0.5 ));
const saturnC = Math.PI * (saturnAP + 1) * (1 + ( 3 * saturnLambda ** 2) / ( 10 + (4 - 3 * saturnLambda ** 2)**0.5 ));
const uranusC = Math.PI * (uranusAP + 1) * (1 + ( 3 * uranusLambda ** 2) / ( 10 + (4 - 3 * uranusLambda ** 2)**0.5 ));
const neptuneC = Math.PI * (neptuneAP + 1) * (1 + ( 3 * neptuneLambda ** 2) / ( 10 + (4 - 3 * neptuneLambda ** 2)**0.5 ));


const mercuryCC = Math.floor(mercuryC * 2 ** 28);
const venusCC = Math.floor(venusC * 2 ** 28);
const earthCC = Math.floor(earthC * 2 ** 28);
const marsCC = Math.floor(marsC * 2 ** 28);
const jupiterCC = Math.floor(jupiterC * 2 ** 28);
const saturnCC = Math.floor(saturnC * 2 ** 28);
const uranusCC = Math.floor(uranusC * 2 ** 28);
const neptuneCC = Math.floor(neptuneC * 2 ** 28);

console.log(`mercury ${mercuryC} ${mercuryCC}`);
console.log(`venus ${venusC} ${venusCC}`);
console.log(`earth ${earthC} ${earthCC}`);
console.log(`mars ${marsC} ${marsCC}`);
console.log(`jupiter ${jupiterC} ${jupiterCC}`);
console.log(`saturn ${saturnC} ${saturnCC}`);
console.log(`uranus ${uranusC} ${uranusCC}`);
console.log(`neptune ${neptuneC} ${neptuneCC}`);
