// Variablen um Daten aus Tabelle einzuschreiben
int mitarbeiterID;
int mitarbeiterProfil;
int datum;
int dienstummer;
int dienstart;
int punkteverteilung;
int testVal;
int firstDay;
boolean runOnce = true; 
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

int xPosAdd=0;


// Verschiedene Positionsvariablen für verschiedene Schichten
int xPosShift;
int yPosShift = 200;
int xSizeShift = 20;
int ySizeShift = 10;
int yPosFruehShift = 0;
int yPosMitteShift = 0;
int yPosSpaetShift = 0;

int clicker;

int profil;
int schichtprofil;


String wunscherfuellung;

//Tabelle deklarieren
Table table;



//Objekte für Mitarbeiter deklarieren
Object[] objects;

//Objekte für Schichten deklarieren
Objectshift[] objectshifts;

ArrayList<Integer> daten = new ArrayList<Integer>();

ArrayList<Integer> mitarbeiterprofil = new ArrayList<Integer>();

ArrayList<Integer> schichtart = new ArrayList<Integer>();


boolean checkDay = true;

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

    //alle Daten in Arraylist daten schreiben
    daten.add(row.getInt("Datum (Tagnummer)"));
    mitarbeiterprofil.add(row.getInt("Mitarbeiterprofil"));   
     schichtart.add(row.getInt("Dienstart")); 
    // Abfrage nach wunscherfüllung, wenn nicht gegeben wird mitarbeiter und Schicht rot markiert
    if (wunscherfuellung_b) {
      schichtFarbe = #F7E6D9;
    } else {
      schichtFarbe = #C6184B;
    };  
    
   countEmployee(); 
   countShift();
  }
};

void draw() {

  // displayfunktion der Objekte (Rectangle) wird ausgeführt
  nextDay();
 
  if (runOnce) {
 
    for (int i = 0; i<schichtart.size(); i++) { 
      schichtprofil = schichtart.get(i);
  // Objekte werden je nach Schichtprofil mit unterschiedlichen Positionen erstellt
      if (schichtprofil==1) {

        //schichtFarbe = #EAAECE;
        dienstFrueh++;
        yPosFruehShift+=10;
        xPosShift=20;

        objectshifts[i] = new Objectshift(xPosShift, yPosFruehShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
      } else if (schichtprofil==2) {

       //schichtFarbe = #9F3AC7;
       dienstMitte++;
      yPosMitteShift+=10;
      xPosShift=40;
        objectshifts[i] = new Objectshift(xPosShift, yPosMitteShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
      } else if (schichtprofil==3) {

       // schichtFarbe =#7FDCF9;
        dienstSpaet++;
        yPosSpaetShift+=10;
        xPosShift=60;
        objectshifts[i] = new Objectshift(xPosShift, yPosSpaetShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
      } 
     objectshifts[i].display();
    }
    
    for (int j=0; j < mitarbeiterprofil.size(); j++) {

      profil=mitarbeiterprofil.get(j);
      
      if (profil==1) {
        mitarbeiterFrueh++;
        xPos=20;
        yPosFrueh-=10;
        objects[j] = new Object(xPos+xPosAdd, yPosFrueh+yPos, xSize, ySize, schichtFarbe);
      } else if (profil==2) {
        mitarbeiterMitte++;
        xPos=40;
        yPosMitte-=10;
        objects[j] = new Object(xPos+xPosAdd, yPosMitte+yPos, xSize, ySize, schichtFarbe);
      } else if (profil==3) {
        mitarbeiterSpaet++;
        xPos=60;
        yPosSpaet-=10;
        objects[j] = new Object(xPos+xPosAdd, yPosSpaet+yPos, xSize, ySize, schichtFarbe);
      }
      runOnce=false;
      objects[j].display();
    };
  } 
};

// erfassen, ob der nächste Tag eingetreten ist, wenn ja Position der Objekte um 60 Pixel verschieben
void nextDay() {
  for (int i=0; i < daten.size(); i++) {
    int firstVal=daten.get(1);
    if (firstVal<daten.get(i)&&checkDay) {
      firstVal = daten.get(i);
      println("firstVal: "+firstVal);
      
      xPosAdd+=60;
      runOnce=true;
      checkDay=false;
    }
  }
}


// erstmal nicht relevant
void countEmployee() {
  // Zählen der vorkommenden Mitarbeiterprofile
  if (mitarbeiterProfil==1) {
    mitarbeiterFrueh++;
  } else if (mitarbeiterProfil==2) {
    mitarbeiterMitte++;
  } else if (mitarbeiterProfil==3) {
    mitarbeiterSpaet++;
  };
};

// erstmal nicht relevant
void countShift() {
  // Zählen der vorkommenden Schichtprofile
  if (dienstart==1) {
    dienstFrueh++;
  } else if (dienstart==2) {
    dienstMitte++;
  } else if (dienstart==3) {
    dienstSpaet++;
  }
}

// Clicken soll später Anzeige von Objekten beeinflussen
void mouseClicked() {
  clicker++;

  if (clicker>29) {
    clicker=0;
  };
}