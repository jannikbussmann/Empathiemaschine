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

color schichtFarbe = #5AA090;

int xPos;
int yPos;
int xSize =10;
int ySize =2;

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
    objects[k] = new Object(xPos,yPos, xSize, ySize);

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
    xPos=10;
   // yPos+=2;
    if(mitarbeiterProfilBefore !=1){
    //if(mitarbeiterProfilBefore==2||mitarbeiterProfilBefore==3){
      yPos+=0;
    } else if (mitarbeiterProfilBefore ==1){
      yPos+=2;
      schichtFarbe = #C03779;
    }
    
  }
  else if(mitarbeiterProfil==2){
    mitarbeiterMitte++;
    xPos=20;
    //  yPos+=2;
    //if(mitarbeiterProfilBefore==1||mitarbeiterProfilBefore==3)
    if(mitarbeiterProfilBefore !=2){
      yPos-=0;
    }else if (mitarbeiterProfilBefore ==2){
      yPos+=2;
      schichtFarbe = #26DFEE;
    }
  }
  else if(mitarbeiterProfil==3){
    mitarbeiterSpaet++;
    xPos=30;
   // yPos+=2;
  //  if(mitarbeiterProfilBefore==1||mitarbeiterProfilBefore==2){
  if(mitarbeiterProfilBefore !=3){
      yPos-=0;
    } else if (mitarbeiterProfilBefore ==3){
      yPos+=2;
      schichtFarbe =#7ABB6B;
    }
  };
  
  
};


void mouseClicked(){
  clicker++;
  
  if(clicker>29){
    clicker=0;
  };
}