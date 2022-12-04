const mercuryAphelion = 0.4667;
const mercuryPerihelion = 0.3075;
const venusAphelion = 0.728; 
const venusPerihelion = 0.718;
const earthAphelion = 1.017;
const earthPerihelion = 0.983;

const mercuryAP = mercuryAphelion / mercuryPerihelion;
const venusAP = venusAphelion / venusPerihelion;
const earthAP = earthAphelion / earthPerihelion;

const mercuryLambda = (mercuryAP - 1) / (mercuryAP + 1);
const venusLambda = (venusAP - 1) / (venusAP + 1);
const earthLambda = (earthAP -1) / (earthAP + 1);

const mercuryC = Math.PI * (mercuryAP + 1) * (1 + ( 3 * mercuryLambda ** 2) / ( 10 + (4 - 3 * mercuryLambda ** 2)**0.5 ));
const venusC = Math.PI * (venusAP + 1) * (1 + ( 3 * venusLambda ** 2) / ( 10 + (4 - 3 * venusLambda ** 2)**0.5 ));
const earthC = Math.PI * (earthAP + 1) * (1 + ( 3 * earthLambda ** 2) / ( 10 + (4 - 3 * earthLambda ** 2)**0.5 ));

const mercuryCC = Math.floor(mercuryC * 2 ** 28);
const venusCC = Math.floor(venusC * 2 ** 28);
const earthCC = Math.floor(earthC * 2 ** 28);

console.log(`mercury ${mercuryC} ${mercuryCC}`);
console.log(`venus ${venusC} ${venusCC}`);
console.log(`earth ${earthC} ${earthCC}`);
