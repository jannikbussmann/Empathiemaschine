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
Object[] objects;

void setup() {

  size(720, 720);
  background(255);

  loadData();

};

void loadData(){
    // Tabelle reinladen 
  Table table = loadTable("data.csv", "header"); 
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
    
    objects[k] = new Object(testVal+(k*15), testVal, testVal, testVal);
  }
};

void draw() {
/*  for (int i = 0; i<objects.length; i++) {
    
    objects[clicker].display();
    
  }*/
  //println(clicker);
};

void countEmployee(){
  
};


void mouseClicked(){
  clicker++;
  
  if(clicker>29){
    clicker=0;
    
  };
}