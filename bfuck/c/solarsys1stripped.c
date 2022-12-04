int sunangle = 0;
int mercuryangle = 0;
int venusangle = 0;
int earthangle = 0;
int marsangle = 0;
int jupiterangle = 0;
int saturnangle = 0;
int uranusangle = 0;
int neptuneangle = 0;
int limit = 8766;
int passed = 0;
while (passed < limit) {
  sunangle = sunangle + 2871999;
  mercuryangle =  mercuryangle + 1197890;
  venusangle = venusangle + 289181;
  earthangle = earthangle + 70471993;
  marsangle = marsangle + 68562183;
  jupiterangle = jupiterangle + 170080307;
  saturnangle = saturnangle + 159870114;
  uranusangle = uranusangle + 97870196;
  neptuneangle = neptuneangle + 105414357;
  if (sunangle > 1686629713) {
    sunangle = sunangle - 1686629713;
  }
  if (mercuryangle > 1686629713) {
    mercuryangle = mercuryangle - 1686629713;
  }
  if (venusangle > 1686629713) {
    venusangle = venusangle - 1686629713;
  }
  if (marsangle > 1686629713) {
    marsangle = marsangle - 1686629713;
  }
  if (jupiterangle > 1686629713) {
    jupiterangle = jupiterangle - 1686629713;
  }
  if (saturnangle > 1686629713) {
    saturnangle = saturnangle - 1686629713;
  }
  if (uranusangle > 1686629713) {
    uranusangle = uranusangle - 1686629713;
  }
  if (neptuneangle > 1686629713) {
    neptuneangle = neptuneangle - 1686629713;
  }
  passed = passed + 1;
}
