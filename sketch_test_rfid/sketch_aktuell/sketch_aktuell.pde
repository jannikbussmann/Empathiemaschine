// Variablen um Daten aus Tabelle einzuschreiben
int mitarbeiterID;
int mitarbeiterProfil;
int datum;
int dienstummer;
int dienstart;
int punkteverteilung;
int testVal;
int firstDay;

//Überführung von wunscherfüllungs-String in boolean Variable
boolean wunscherfuellung_b;

// Unterschiedliche Mitarbeiter für verschieedene Mitarbeiterprofile 
int mitarbeiterFrueh = 0;
int mitarbeiterMitte = 0;
int mitarbeiterSpaet = 0;

// Unterschiedliche Dienste für verschieedene Dienstprofile 
int dienstFrueh = 0;
int dienstMitte = 0;
int dienstSpaet = 0;

//int mitarbeiterProfilBefore=0;
int datumBefore=0;

// Einfärbe-Variable
color schichtFarbe;

// Verschiedene Positionsvariablen für verschiedene Mitarbiter
int xPos;
int yPos = 200;
int xSize = 20;
int ySize = 10;
int yPosFrueh = 0;
int yPosMitte = 0;
int yPosSpaet = 0;

// Verschiedene Positionsvariablen für verschiedene Schichten
int xPosShift;
int yPosShift = 200;
int xSizeShift = 20;
int ySizeShift = 10;
int yPosFruehShift = 0;
int yPosMitteShift = 0;
int yPosSpaetShift = 0;

int clicker;

String wunscherfuellung;

//Tabelle deklarieren
Table table;

//Objekte für Mitarbeiter deklarieren
Object[] objects;

//Objekte für Schichten deklarieren
Objectshift[] objectshifts;

void setup() {

  size(720, 720);
  background(255);
  loadData();
  //println("früh: "+mitarbeiterFrueh+" mitte: "+mitarbeiterMitte+" spät: "+mitarbeiterSpaet);
};

void loadData() {
  // Tabelle reinladen 
  Table table = loadTable("data.csv", "header"); 

  // Objektanzahl für Tabellenreihen erstellen
  objects = new Object[table.getRowCount()];
  objectshifts = new Objectshift[table.getRowCount()];


  //Alle Reihen in Tabelle durchgehen und in row Schreiben
  for (int k = 0; k<table.getRowCount(); k++) {

    TableRow row = table.getRow(k);

    // Tabellendaten in Variablen überführen
    mitarbeiterID = row.getInt("Mitarbeiter ID"); 
    mitarbeiterProfil = row.getInt("Mitarbeiterprofil"); 
    datum = row.getInt("Datum (Tagnummer)");
    dienstummer = row.getInt("Dienstnummer");
    dienstart = row.getInt("Dienstart");
    punkteverteilung = row.getInt("Punkteverteilung Dienstwunsch");
    wunscherfuellung = row.getString("Wunscherfüllung");
    boolean wunscherfuellung_b = boolean(wunscherfuellung);

    // Abfrage nach wunscherfüllung, wenn nicht gegeben wird mitarbeiter und Schicht rot markiert
    if (wunscherfuellung_b) {
      schichtFarbe = #F7E6D9;
    } else {
      schichtFarbe = #C6184B;
    };

    countEmployee(); 
    countShift();

// Objekte werden je nach Mitarbeiterprofil mit unterschiedlichen Positionen erstellt
// 1 = Frühprofil, 2 = Mittleres Profil, 3 = Spätprofil

    if (mitarbeiterProfil==1) {
      //schichtFarbe = #C03779;
      objects[k] = new Object(xPos, yPosFrueh+yPos, xSize, ySize, schichtFarbe);
    } else if (mitarbeiterProfil==2) {
      //schichtFarbe = #26DFEE;
      objects[k] = new Object(xPos, yPosMitte+yPos, xSize, ySize, schichtFarbe);
    } else if (mitarbeiterProfil==3) {
      //schichtFarbe =#7ABB6B;
      objects[k] = new Object(xPos, yPosSpaet+yPos, xSize, ySize, schichtFarbe);
    }
    
// Objekte werden je nach Schichtprofil mit unterschiedlichen Positionen erstellt
    if (dienstart==1) {
      // println("d1");
      // schichtFarbe = #EAAECE;
      objectshifts[k] = new Objectshift(xPosShift, yPosFruehShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    } else if (dienstart==2) {
      // println("d2");
      // schichtFarbe = #9F3AC7;
      objectshifts[k] = new Objectshift(xPosShift, yPosMitteShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    } else if (dienstart==3) {
      //  println("d3");
      // schichtFarbe =#7FDCF9;
      objectshifts[k] = new Objectshift(xPosShift, yPosSpaetShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    }
  }
};

void draw() {

// displayfunktion der Objekte (Rectangle) wird ausgeführt

  for (int i = 0; i<(objects.length); i++) {   
    objects[i].display();
  }

  for (int i = 0; i<(objectshifts.length); i++) {   
    objectshifts[i].display();
  }
  //println(clicker);
  nextDay();

  //println(datum);
};

// erstmal nicht relevant
void countEmployee() {
// Zählen der vorkommenden Mitarbeiterprofile
  if (mitarbeiterProfil==1) {
    mitarbeiterFrueh++;
    xPos=20;
    yPosFrueh-=10;
  } else if (mitarbeiterProfil==2) {
    mitarbeiterMitte++;
    xPos=40;
    yPosMitte-=10;
  } else if (mitarbeiterProfil==3) {
    mitarbeiterSpaet++;
    xPos=60;
    yPosSpaet-=10;
  };
};

// erstmal nicht relevant
void countShift() {
// Zählen der vorkommenden Schichtprofile
  if (dienstart==1) {
    dienstFrueh++;
    yPosFruehShift+=10;
    xPosShift=20;
  } else if (dienstart==2) {
    dienstMitte++;
    yPosMitteShift+=10;
    xPosShift=40;
  } else if (dienstart==3) {
    dienstSpaet++;
    yPosSpaetShift+=10;
    xPosShift=60;
  }
}

// erfassen, ob der nächste Tag eingetreten ist, wenn ja Position der Objekte um 60 Pixel verschieben
void nextDay() {
  if (datum > firstDay) {
    clicker+=1;
    firstDay = datum;
  };
}

// Clicken soll später Anzeige von Objekten beeinflussen
void mouseClicked() {
  clicker++;

  if (clicker>29) {
    clicker=0;
  };
}