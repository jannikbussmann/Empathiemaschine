int mitarbeiterID;
int mitarbeiterProfil;
int datum;
int dienstummer;
int dienstart;
int punkteverteilung;
int testVal;

int mitarbeiterFrueh = 0;
int mitarbeiterMitte = 0;
int mitarbeiterSpaet = 0;

int dienstFrueh = 0;
int dienstMitte = 0;
int dienstSpaet = 0;


int mitarbeiterProfilBefore=0;
int datumBefore=0;

color schichtFarbe;

int xPos;
int yPos = 200;
int xSize = 20;
int ySize = 10;

int xPosShift;
int yPosShift = 200;
int xSizeShift = 20;
int ySizeShift = 10;

int yPosFrueh = 0;
int yPosMitte = 0;
int yPosSpaet = 0;


int yPosFruehShift = 0;
int yPosMitteShift = 0;
int yPosSpaetShift = 0;


int clicker;

String wunscherfuellung;

Table table;
Object[] objects;
Objectshift[] objectshifts;

void setup() {

  size(720, 720);
  background(255);

  loadData();
  
  //println("früh: "+mitarbeiterFrueh+" mitte: "+mitarbeiterMitte+" spät: "+mitarbeiterSpaet);

};

void loadData(){
    // Tabelle reinladen 
  Table table = loadTable("data.csv", "header"); 
  //objects = new Object[table.getRowCount()];
    objects = new Object[table.getRowCount()];
    objectshifts = new Objectshift[table.getRowCount()];
    
  //Alle Reihen in Tabelle durchgehen und in row Schreiben

  for (int k = 0; k<table.getRowCount(); k++) {
    
   // rowCounter++;
    TableRow row = table.getRow(k);
  
    if(k>0){
     TableRow rowTwo = table.getRow(k-1);
     mitarbeiterProfilBefore   = rowTwo.getInt("Mitarbeiterprofil"); 
     datumBefore = row.getInt("Datum (Tagnummer)");
    }
  
    testVal = row.getInt("test"); 
    
    mitarbeiterID = row.getInt("Mitarbeiter ID"); 
    
    mitarbeiterProfil = row.getInt("Mitarbeiterprofil"); 
    

    
   // println(mitarbeiterProfil+" "+mitarbeiterProfilBefore);
    
    datum = row.getInt("Datum (Tagnummer)"); 
    dienstummer = row.getInt("Dienstnummer");
    dienstart = row.getInt("Dienstart");
    punkteverteilung = row.getInt("Punkteverteilung Dienstwunsch");
    wunscherfuellung = row.getString("Wunscherfüllung");
    
    countEmployee(); 
    countShift();
    //fill(schichtFarbe);

   if(mitarbeiterProfil==1){
    schichtFarbe = #C03779;
    objects[k] = new Object(xPos,yPosFrueh+yPos, xSize, ySize, schichtFarbe);
    }
   else if (mitarbeiterProfil==2){
    schichtFarbe = #26DFEE;
    objects[k] = new Object(xPos,yPosMitte+yPos, xSize, ySize, schichtFarbe);
    }
    else if (mitarbeiterProfil==3){
    schichtFarbe =#7ABB6B;
    objects[k] = new Object(xPos,yPosSpaet+yPos, xSize, ySize, schichtFarbe);
    }
      
   if(dienstart==1){
     println("d1");
    schichtFarbe = #EAAECE;
    objectshifts[k] = new Objectshift(xPosShift,yPosFruehShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    }
   else if (dienstart==2){
     println("d2");
    schichtFarbe = #9F3AC7;
    objectshifts[k] = new Objectshift(xPosShift,yPosMitteShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    }
    else if (dienstart==3){
      println("d3");
    schichtFarbe =#7FDCF9;
    objectshifts[k] = new Objectshift(xPosShift,yPosSpaetShift+yPos, xSizeShift, ySizeShift, schichtFarbe);
    }
  }


};

void draw() {
  
  for (int i = 0; i<(objects.length); i++) {   
    objects[i].display();   
  }
  
  for (int i = 0; i<(objectshifts.length); i++) {   
    objectshifts[i].display();   
  }
  //println(clicker);
};

void countShift(){
  
  if(dienstart==1){
    dienstFrueh++;
    yPosFruehShift+=10;
    xPosShift=20;
  } else if(dienstart==2){
    dienstMitte++;
    yPosMitteShift+=10;
    xPosShift=40;
  } else if(dienstart==3){
    dienstSpaet++;
    yPosSpaetShift+=10;
    xPosShift=60;
  }
}

void countEmployee(){
  
  if(mitarbeiterProfil==1){
    mitarbeiterFrueh++;
    xPos=20;
    yPosFrueh-=10;    
  }  
   else if(mitarbeiterProfil==2){
    mitarbeiterMitte++;
    xPos=40;
    yPosMitte-=10;
  }
  
   else if(mitarbeiterProfil==3){
    mitarbeiterSpaet++;
    xPos=60;
    yPosSpaet-=10;
    
  };
  
  
};


void mouseClicked(){
  clicker++;
  
  if(clicker>29){
    clicker=0;
  };
}