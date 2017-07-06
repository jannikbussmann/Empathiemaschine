import processing.serial.*;
Serial myPort;        // The serial port
float inByte = 0;

float spring = 0.05;
float gravity = 0.03;
float friction = -0.9;


int mitarbeiterID;
int mitarbeiterProfil;
int datum;
int dienstummer;
int dienstart;
int punkteverteilung;
int testVal;

int mitarbeiterFrueh;
int mitarbeiterMitte;
int mitarbeiterSpaet;

int clicker;

String wunscherfuellung;

Table table;

//Add and Array of Rectangle Objects
Rectangle[] rectangles = new Rectangle[mitarbeiterID];

// Add an Array of Bubble objects
Bubble[] bubbles = new Bubble[mitarbeiterID];

void setup() {

  size(720, 720);
  background(255);

  println(Serial.list());
  myPort = new Serial(this, Serial.list()[1], 9600);
  myPort.bufferUntil('\n');

  loadData();
};

void loadData() {
  // Tabelle reinladen 
  Table table = loadTable("data.csv", "header"); 
  rectangles = new Rectangle[table.getRowCount()];
  bubbles = new Bubble[table.getRowCount()];
  //Alle Reihen in Tabelle durchgehen und in row Schreiben
  for (int k = 0; k < table.getRowCount(); k++) {

    // rowCounter++;
    TableRow row = table.getRow(k);

    testVal = row.getInt("test"); 
    mitarbeiterID = row.getInt("Mitarbeiter ID"); 
    mitarbeiterProfil = row.getInt("Mitarbeiterprofil"); 
    datum = row.getInt("Datum (Tagnummer)"); 
    dienstummer = row.getInt("Dienstnummer");
    dienstart = row.getInt("Dienstart");
    punkteverteilung = row.getInt("Punkteverteilung Dienstwunsch");
    wunscherfuellung = row.getString("Wunscherfüllung");



    rectangles[k] = new Rectangle(testVal+(k*15), testVal, testVal, testVal);
    bubbles[k] = new Bubble(random(0, width), random(0, height), testVal);
  }
};

void draw() {

  background(255);


  if (inByte < 100) {

    for (Rectangle r : rectangles) {
      r.display();
    }

    for (int i = 0; i < rectangles.length; i++) {
      rectangles[clicker].display();
    }
  } else if (inByte >= 100) {

    for (Bubble b : bubbles) {
      b.display();
      b.move();
      b.randomiseDirection();
      b.checkBounds();
    }

    for (int i = 0; i < bubbles.length; i++) {
      bubbles[clicker].display();
    }
  }

  textAlign(LEFT);
  fill(0);
  text("Click to highlight objects.", 10, height-10);

  println(clicker);
};

void countEmployee() {
};


void serialEvent (Serial myPort) {
  // get the ASCII string:
  String inString = myPort.readStringUntil('\n');

  if (inString != null) {
    // trim off any whitespace:
    inString = trim(inString);
    // convert to an int and map to the screen height:
    inByte = float(inString);
    println(inByte);
    inByte = map(inByte, 0, 1023, 0, height);
  }
};


void mouseClicked() {
  clicker++;

  if (clicker >= 2) {
    clicker=0;
  };
  
  if (inByte >=100) {
    
    
  }
}