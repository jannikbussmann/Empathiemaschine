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

int profil;


String wunscherfuellung;

//Tabelle deklarieren
Table table;
  


//Objekte für Mitarbeiter deklarieren
Object[] objects;

//Objekte für Schichten deklarieren
Objectshift[] objectshifts;

ArrayList<Integer> daten = new ArrayList<Integer>();

ArrayList<Integer> mitarbeiterprofil = new ArrayList<Integer>();


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
     
    // Abfrage nach wunscherfüllung, wenn nicht gegeben wird mitarbeiter und Schicht rot markiert
    if (wunscherfuellung_b) {
      schichtFarbe = #F7E6D9;
    } else {
      schichtFarbe = #C6184B;
    };



// Objekte werden je nach Mitarbeiterprofil mit unterschiedlichen Positionen erstellt
// 1 = Frühprofil, 2 = Mittleres Profil, 3 = Spätprofil
   //if (mitarbeiterProfil==1) {
   //   //schichtFarbe = #C03779;
   //   objects[k] = new Object(xPos, yPosFrueh+yPos, xSize, ySize, schichtFarbe);
   // } else if (mitarbeiterProfil==2) {
   //   //schichtFarbe = #26DFEE;
   //   objects[k] = new Object(xPos, yPosMitte+yPos, xSize, ySize, schichtFarbe);
   // } else if (mitarbeiterProfil==3) {
   //   //schichtFarbe =#7ABB6B;
   //   objects[k] = new Object(xPos, yPosSpaet+yPos, xSize, ySize, schichtFarbe);
   // }
    
// Objekte werden je nach Schichtprofil mit unterschiedlichen Positionen erstellt
    //if (dienstart==1) {
    //  // println("d1");
    //  // schichtFarbe = #EAAECE;
    //  objectshifts[k] = new Objectshift(xPosShift, yPosFruehShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    //} else if (dienstart==2) {
    //  // println("d2");
    //  // schichtFarbe = #9F3AC7;
    //  objectshifts[k] = new Objectshift(xPosShift, yPosMitteShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    //} else if (dienstart==3) {
    //  //  println("d3");
    //  // schichtFarbe =#7FDCF9;
    //  objectshifts[k] = new Objectshift(xPosShift, yPosSpaetShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    //}
  }

};

void draw() {
 // countEmployee(); 
 // countShift();
// displayfunktion der Objekte (Rectangle) wird ausgeführt
  nextDay();
for(int j=0; j < mitarbeiterprofil.size();j++){
  
  profil=mitarbeiterprofil.get(j);
  
  if (profil==1) {
      //schichtFarbe = #C03779;
      mitarbeiterFrueh++;
      xPos=20;
      yPosFrueh=-10;
      yPos += 10;
      //println("1");
      //objects[j] = new Object(xPos, yPosFrueh+yPos, xSize, ySize, schichtFarbe);  
    } else if (profil==2) {
      //schichtFarbe = #26DFEE;
      //println("oassiert");
      mitarbeiterMitte++;
      xPos=40;
      yPosMitte+=-10;
      yPos += 10;
      //println(mitarbeiterMitte);
      //objects[i] = new Object(xPos, yPosMitte+yPos, xSize, ySize, schichtFarbe);
    } else if (profil==3) {
      //schichtFarbe =#7ABB6B;
      mitarbeiterSpaet++;
      xPos=60;
      yPosSpaet+=-10;
      yPos += 10;
      
     // objects[i] = new Object(xPos, yPosSpaet+yPos, xSize, ySize, schichtFarbe);
    }
    println(" spät: "+mitarbeiterSpaet+" mitte: "+mitarbeiterMitte+" frueh: "+mitarbeiterFrueh);
   noLoop();
   for (int i = 0; i<(objects.length); i++) {  
    
// Objekte werden je nach Mitarbeiterprofil mit unterschiedlichen Positionen erstellt
// 1 = Frühprofil, 2 = Mittleres Profil, 3 = Spätprofil
 //objects[i] = new Object(xPos, yPosFrueh+yPos, xSize, ySize, schichtFarbe);
 
   objects[i] = new Object(xPos, yPos, xSize, ySize, schichtFarbe);
   objects[i].display();
}
} 


  
//for (int i = 0; i<(objectshifts.length); i++) {  
//// Objekte werden je nach Schichtprofil mit unterschiedlichen Positionen erstellt
//    if (dienstart==1) {
//      // println("d1");
//      // schichtFarbe = #EAAECE;
//      dienstFrueh++;
//      yPosFruehShift+=10;
//      xPosShift=20;
      
//      objectshifts[i] = new Objectshift(xPosShift, yPosFruehShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
//    } else if (dienstart==2) {
//      // println("d2");
//      // schichtFarbe = #9F3AC7;
//     dienstMitte++;
//    yPosMitteShift+=10;
//    xPosShift=40;
//      objectshifts[i] = new Objectshift(xPosShift, yPosMitteShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
//    } else if (dienstart==3) {
//      //  println("d3");
//      // schichtFarbe =#7FDCF9;
//       dienstSpaet++;
//      yPosSpaetShift+=10;
//      xPosShift=60;
//      objectshifts[i] = new Objectshift(xPosShift, yPosSpaetShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
//    } 
     
//  }

// for (int i = 0; i<(objectshifts.length); i++) { 
//   objectshifts[i].display();
// }
 

   
    
  //println(clicker);


  //println(datum);
};

// erfassen, ob der nächste Tag eingetreten ist, wenn ja Position der Objekte um 60 Pixel verschieben
void nextDay() {
   for(int i=0; i < daten.size();i++){
    int firstVal=daten.get(1);
    if(firstVal<daten.get(i)&&checkDay){
      firstVal = daten.get(i);
      println("firstVal: "+firstVal);
      checkDay=false;
      //xPos+=60;
    }
 }
}


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



// Clicken soll später Anzeige von Objekten beeinflussen
void mouseClicked() {
  clicker++;

  if (clicker>29) {
    clicker=0;
  };
}