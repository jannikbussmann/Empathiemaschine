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

int mitarbeiterProfilBefore=0;
int datumBefore=0;

color schichtFarbe;

int xPos;
int yPos = 10;
int xSize = 20;
int ySize = 10;

int yPosFrueh = 0;
int yPosMitte = 0;
int yPosSpaet = 0;

int clicker;

String wunscherfuellung;

Table table;
Object[] objects;

void setup() {

  size(720, 720);
  background(255);

  loadData();
  
  println("früh: "+mitarbeiterFrueh+" mitte: "+mitarbeiterMitte+" spät: "+mitarbeiterSpaet);

};

void loadData(){
    // Tabelle reinladen 
  Table table = loadTable("data.csv", "header"); 
  //objects = new Object[table.getRowCount()];
    objects = new Object[table.getRowCount()];
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
    

    
    println(mitarbeiterProfil+" "+mitarbeiterProfilBefore);
    
    datum = row.getInt("Datum (Tagnummer)"); 
    dienstummer = row.getInt("Dienstnummer");
    dienstart = row.getInt("Dienstart");
    punkteverteilung = row.getInt("Punkteverteilung Dienstwunsch");
    wunscherfuellung = row.getString("Wunscherfüllung");
    
    countEmployee(); 
    //fill(schichtFarbe);

   if(mitarbeiterProfil==1){
    schichtFarbe = #C03779;
    objects[k] = new Object(xPos,yPosFrueh, xSize, ySize, schichtFarbe);
    }
   else if (mitarbeiterProfil==2){
    schichtFarbe = #26DFEE;
    objects[k] = new Object(xPos,yPosMitte, xSize, ySize, schichtFarbe);
    }
    else if (mitarbeiterProfil==3){
    schichtFarbe =#7ABB6B;
    objects[k] = new Object(xPos,yPosSpaet, xSize, ySize, schichtFarbe);
    }
  }
  

};

void draw() {
  
  for (int i = 0; i<objects.length; i++) {   
    objects[i].display();   
  }
  //println(clicker);
};

void countEmployee(){
  
  if(mitarbeiterProfil==1){
    mitarbeiterFrueh++;
    xPos=20;
   //// yPos+=2;
    ////if(mitarbeiterProfilBefore !=1){
     //f(mitarbeiterProfilBefore==2||mitarbeiterProfilBefore==3){
    //  yPosFrueh = 0;
    //} else if (mitarbeiterProfilBefore ==1){
      yPosFrueh+=10;
      
  //  }
    
  }
  
   if(mitarbeiterProfil==2){
    mitarbeiterMitte++;
    xPos=40;
    ////  yPos+=2;
    //if(mitarbeiterProfilBefore==1||mitarbeiterProfilBefore==3){
    ////if(mitarbeiterProfilBefore !=2){
    //  yPosMitte=0;
    //}else if (mitarbeiterProfilBefore ==2){
      yPosMitte+=10;
      
   // }
  }
  
   if(mitarbeiterProfil==3){
    mitarbeiterSpaet++;
    xPos=60;
   //// yPos+=2;
    //if(mitarbeiterProfilBefore==1||mitarbeiterProfilBefore==2){
  ////if(mitarbeiterProfilBefore !=3){
    //  yPosSpaet=0;
    //} else if (mitarbeiterProfilBefore ==3){
      yPosSpaet+=10;
      
   // }
  };
  
  
};


void mouseClicked(){
  clicker++;
  
  if(clicker>29){
    clicker=0;
  };
}