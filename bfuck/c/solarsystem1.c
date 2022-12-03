int PiTwice = 1686629713;

// angle change in one hour
int earthMove = 70471993;
int sunMove = 2871999;
int mercuryMove = 1197890;
int venusMove = 289181;
int marsMove = 68562183;
int jupiterMove = 170080307;
int saturnMove = 159870114;
int uranusMove = 97870196;
int neptuneMove = 105414357;


// intial angles of sun and planets
int sunAngle = 0;
int mercuryAngle = 0;
int venusAngle = 0;
int earthAngle = 0;
int marsAngle = 0;
int jupiterAngle = 0;
int saturnAngle = 0;
int uranusAngle = 0;
int neptuneAngle = 0;

int limit = 24; // the planned program will have no limit
int pastedTime = 0; // this will be missing in the planned program

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
}
