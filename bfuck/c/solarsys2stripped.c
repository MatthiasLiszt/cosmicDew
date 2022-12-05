int sunangle = 0;
int mercuryangle = 0;
int venusangle = 0;
int earthangle = 0;
int marsangle = 0;
int jupiterangle = 0;
int saturnangle = 0;
int uranusangle = 0;
int neptuneangle = 0;
int mercuryposition = 0;
int venusposition = 0;
int earthposition = 0;
int marsposition = 0;
int jupiterposition = 0;
int saturnposition = 0;
int uranusposition = 0;
int neptuneposition = 0;
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
  mercuryposition = mercuryposition + 1016455;
  venusposition = venusposition + 314984;
  earthposition = earthposition + 195747;
  marsposition = marsposition + 113103;
  jupiterposition = jupiterposition + 17064;
  saturnposition = saturnposition + 6928;
  uranusposition = uranusposition + 2400;
  neptuneposition = neptuneposition + 1180;
  if (mercuryposition > 2145738547) {
    mercuryposition = mercuryposition - 2145738547;
  }
  if (venusposition > 1698395351) {
    venusposition = venusposition - 1698395351;
  }
  if (earthposition > 1715922252) {
    earthposition = earthposition - 1715922252;
  }
  if (marsposition > 1864738295) {
    marsposition = marsposition - 1864738295;
  }
  if (jupiterposition > 1774406600) {
    jupiterposition = jupiterposition - 1774406600;
  }
  if (saturnposition > 1789075812) {
    saturnposition = saturnposition - 1789075812;
  }
  if (uranusposition > 1768274914) {
    uranusposition = uranusposition - 1768274914;
  }
  if (neptuneposition > 1705872503) {
    neptuneposition = neptuneposition - 1705872503;
  }
  passed = passed + 1;
}
