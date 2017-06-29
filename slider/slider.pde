// Slider Dummy 
// Empathiemaschine
// Author: Jannik Bussmann

float slideTimer;
int col;
int lastCol;
int status;
int oneBang;
PGraphics pg;

void setup() {
  size(512, 1024, P2D);
  pg = createGraphics(width, height);
}

void draw() {

  pg.beginDraw();
  pg.background(lastCol, 200, 155);
  pg.noStroke();
  pg.endDraw();

  slideTimer = (millis()%1000.0f)/1000.0f;

  if (slideTimer < 0.1) {
    if (oneBang==0) {
      oneBang = 1;
      lastCol = col;
      col = (int)random(255);
      status ++;
      if (status>=4) {
        status=0;
      }
    }
  } else if (slideTimer > 0.5) {
    oneBang = 0;
  }

  fill(lastCol, 200, 255);
  rect(0, 0, width, height);
  fill(col, 200, 255);

  switch(status) {
  case 0:
    image(pg, 0, slideTimer*height, width, height);
    break;

  case 1:
    image(pg, 0, slideTimer*height, width, height);
    break;

  case 2:
    image(pg, 0, slideTimer*height, width, height);
    break;

  case 3:
    image(pg, 0, slideTimer*height, width, height);
    break;
  }

  fill(255);
  textSize(100);
  textAlign(CENTER, CENTER);
  text(status, width/2, height/2-200);
}