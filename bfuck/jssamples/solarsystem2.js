

// precalculations
const hour = 60; // 60 minutes
const day = 24 * hour;

const sunDay = 24 * day + 11 * hour + 16;
const mercuryDay = 58 * day + 16 * hour;
const venusDay = 243 * day + 26;
const earthDay = 23 * hour + 56;
const marsDay = 24 * hour + 36;
const jupiterDay = 9 * hour + 55;
const saturnDay = 10 * hour + 33;
const uranusDay = 17 * hour + 14;
const neptuneDay = 16 * hour;

const PiTwice = Math.floor(Math.PI * 2 * (2 ** 28));

// angle change in one hour
const earthMove = Math.floor((PiTwice / earthDay) * 60);
const sunMove = Math.floor((PiTwice / sunDay) * 60);
const mercuryMove = Math.floor((PiTwice / mercuryDay) * 60);
const venusMove = Math.floor((PiTwice / venusDay) * 60);
const marsMove = Math.floor((PiTwice / marsDay) * 60);
const jupiterMove = Math.floor((PiTwice / jupiterDay) * 60);
const saturnMove = Math.floor((PiTwice / saturnDay) * 60);
const uranusMove = Math.floor((PiTwice / uranusDay) * 60);
const neptuneMove = Math.floor((PiTwice / neptuneDay) * 60);


// intial angles of sun and planets
let sunAngle = 0;
let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let marsAngle = 0;
let jupiterAngle = 0;
let saturnAngle = 0;
let uranusAngle = 0;
let neptuneAngle = 0;

// initial position of planets
let earthPosition = 0;
let venusPosition = 0;
let mercuryPosition = 0;
let marsPosition = 0;
let jupiterPosition = 0;
let saturnPosition = 0;
let uranusPosition = 0;
let neptunePosition = 0;

const limit = 24 * 365 + 6; 
let passedTime = 0;

// orbital circumferences of planets where perihelion is one
const mercuryC = Math.floor(7.993498995204553 * 2**28);
const venusC = Math.floor(6.327015727686465 * 2**28); 
const earthC = Math.floor(6.392308520364474 * 2**28);
const marsC = Math.floor(6.946691481873291 * 2**28);
const jupiterC = Math.floor(6.610179694849506 * 2**28);
const saturnC = Math.floor(6.6648267675644925 * 2**28);
const uranusC = Math.floor(6.587337384495398  * 2**28);
const neptuneC = Math.floor(6.354870289039782 * 2**28);

// orbital period of the planets
const earthYear = 365 * 24 + 6;
const mercuryYear = Math.floor(87.9691 * 24);
const venusYear = Math.floor(224.701 * 24);
const marsYear = Math.floor(686.980 * 24);
const jupiterYear = Math.floor(4332.59 * 24);
const saturnYear = Math.floor(10759.22 * 24);
const uranusYear = Math.floor(30688.5 * 24);
const neptuneYear = Math.floor(60195 * 24);

// elliptical orbital angle speed per hour
const mercuryESP = Math.floor(mercuryC / mercuryYear);
const venusESP = Math.floor(venusC / venusYear);
const earthESP = Math.floor(earthC / earthYear);
const marsESP = Math.floor(marsC / marsYear);
const jupiterESP = Math.floor(jupiterC / jupiterYear);
const saturnESP = Math.floor(saturnC / saturnYear);
const uranusESP = Math.floor(uranusC / uranusYear);
const neptuneESP = Math.floor(neptuneC / neptuneYear);

while (passedTime < limit) {
  sunAngle += sunMove;
  sunAngle %= PiTwice;
  mercuryAngle += mercuryMove;
  mercuryAngle %= mercuryMove;
  venusAngle += venusMove;
  venusAngle %= PiTwice;
  earthAngle += earthMove;
  earthAngle %= PiTwice;
  marsAngle += marsMove;
  marsAngle %= PiTwice;
  jupiterAngle += jupiterMove;
  jupiterAngle %= PiTwice;
  saturnAngle += saturnMove;
  saturnAngle %= PiTwice;
  uranusAngle += uranusMove;
  uranusAngle %= PiTwice;
  neptuneAngle += neptuneMove;
  neptuneAngle %= PiTwice;
  mercuryPosition += mercuryESP;
  mercuryPosition %= mercuryC;
  venusPosition += venusESP;
  venusPosition %= venusC;
  earthPosition += earthESP;
  earthPosition %= earthC;
  marsPosition += marsESP;
  marsPosition %= marsC;
  jupiterPosition += jupiterESP;
  jupiterPosition %= jupiterC;
  saturnPosition += saturnESP;
  saturnPosition %= saturnC;
  uranusPosition += uranusESP;
  uranusPosition %= uranusC;
  neptunePosition += neptuneESP;
  neptunePosition %= neptuneC;
  ++passedTime;
  // some console.log for debugging
  console.log(`${sunAngle} ${mercuryAngle} ${venusAngle} earth ${earthAngle} ${marsAngle}`);
  console.log(`${jupiterAngle} ${saturnAngle} ${uranusAngle} ${neptuneAngle}`);
  console.log(`${mercuryPosition} venus ${venusPosition} earth ${earthPosition} mars ${marsPosition}`);
  console.log(`${jupiterPosition} ${saturnPosition} ${uranusPosition} ${neptunePosition}`);
}
