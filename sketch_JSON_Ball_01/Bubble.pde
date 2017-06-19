// A Bubble class

static float maxspeed = 1;

class Bubble {
  float x, y;
  float diameter;
  String name;
  int id;
  float time;

  float speed;
  float direction;
  float omega;    // rotational speed
  float dx, dy;
  boolean over = false;

  Bubble(float x_, float y_, float diameter_, String s, int id_) {
    x = x_;
    y = y_;
    diameter = diameter_;
    name = s;
    id = id_;

    // set speed and directions to 0
    speed = 0;
    direction = 0;
    omega = 0;
  }

  Bubble(float x_, float y_, float diameter_, float speed_, float direction_, float omega_ ) {

    x = x_;
    y = y_;
    diameter = diameter_;
    speed = speed_;
    direction = direction_;
    omega = omega_;
  }

  Bubble() {
    time = millis()/1000;
  }

  // CHecking if mouse is over the Bubble
  void rollover(float px, float py) {
    float d = dist(px, py, x, y);
    if (d < diameter/2) {
      over = true;
    } else {
      over = false;
    }
  }


  void randomiseDirection() {
    speed = random(1);
    direction = random(360);
    omega = randomGaussian() * 0.3;
  }


  void move() {
    /*
     * direction is an angle that represents the current
     * direction of travel.
     * speed is the current speed in units/frame
     */
    dx = cos(radians(direction)) * speed;
    dy = sin(radians(direction)) * speed;
    x += dx;
    y += dy;
    direction += omega;
  }

  void checkBounds() {
    if (x <= 0 || x >= width || y <= 0 || y >= height) {
      direction += 180;
      direction = direction % 360;
    }
  }

  void display() {
    noStroke();
    fill(200, 100);
    ellipseMode(CENTER);
    ellipse(x, y, diameter, diameter);
    if (over) {
      fill(0);
      textAlign(CENTER);
      text(name, x, y+diameter/2+20);
    }
  }
}