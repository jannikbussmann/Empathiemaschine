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
    
    testVal = row.getInt("test"); 
    mitarbeiterID = row.getInt("Mitarbeiter ID"); 
    mitarbeiterProfil = row.getInt("Mitarbeiterprofil"); 
    datum = row.getInt("Datum (Tagnummer)"); 
    dienstummer = row.getInt("Dienstnummer");
    dienstart = row.getInt("Dienstart");
    punkteverteilung = row.getInt("Punkteverteilung Dienstwunsch");
    wunscherfuellung = row.getString("Wunscherfüllung");
    
    countEmployee(); 

    objects[k] = new Object(xPos,yPos+10+k*2, xSize, ySize);

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
  }
  else if(mitarbeiterProfil==2){
    mitarbeiterMitte++;
    xPos=20;
  }
  else if(mitarbeiterProfil==3){
    mitarbeiterSpaet++;
    xPos=30;
  };
};


void mouseClicked(){
  clicker++;
  
  if(clicker>29){
    clicker=0;
  };
}