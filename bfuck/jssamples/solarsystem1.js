

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

const limit = 24; // the planned program will have no limit
let pastedTime = 0; // this will be missing in the planned program

while (pastedTime < limit) { //planned to be an endless loop
  sunAngle += sunMove;
  sunAngle %= PiTwice;
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
  ++pastedTime;
  // some console.log for debugging
  console.log(`${sunAngle} ${venusAngle} earth ${earthAngle} ${marsAngle}`);
  console.log(`${jupiterAngle} ${saturnAngle} ${uranusAngle} ${neptuneAngle}`);
}
