/* Serial Communication with Sharp Distance Sensor and RFID Reader
help: https://gist.github.com/timpulver/5ba4a29cddd543b4a900
*/

import processing.serial.*;

int lf = 10;    // Linefeed in ASCII
String RFID = null;
Serial port;  // The serial port
int dataSensor;


void settings () {
  size(400, 400);
}
void setup() {
  // List all the available serial ports
  printArray(Serial.list());
  // Open the port you are using at the rate you want:
  port = new Serial(this, Serial.list()[1], 9600);
  port.clear();
  // Throw out the first reading, in case we started reading 
  // in the middle of a string from the sender.
  RFID = port.readStringUntil(lf);
  RFID = null;
}

void draw() {

  int brightness = (int)map(dataSensor, 0, 1023, 0, 255);
  background(brightness);
  println(brightness);

  // check if there is something new on the serial port
  while (port.available() > 0) {
    // store the data in myString 
    RFID = port.readStringUntil(lf);
    dataSensor = port.read();
    // check if we really have something
    if (RFID != null) {
      RFID = RFID.trim(); // let's remove whitespace characters
      // if we have at least one character...
      if (RFID.length() > 0) {
        println(RFID); // print out the data we just received
        fill(255);
        text(RFID, 140, 130);
      }
    }
  }
}


/*

======================================ARDUINO CODE=================================

#include <SPI.h> // SPI-Bibiothek hinzufügen
#include <MFRC522.h> // RFID-Bibiothek hinzufügen
#define SS_PIN 10 // SDA an Pin 10 (bei MEGA anders)
#define RST_PIN 9 // RST an Pin 9 (bei MEGA anders)
MFRC522 mfrc522(SS_PIN, RST_PIN); // RFID-Empfänger benennen


void setup() {
  Serial.begin(9600); // Serielle Verbindung starten (Monitor)
  SPI.begin(); // SPI-Verbindung aufbauen
  mfrc522.PCD_Init(); // Initialisierung des RFID-Empfängers
}

void loop() {
  
  int sensorValue = analogRead(A0);
  Serial.write(sensorValue);


  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return; // gehe weiter...
  }

  if ( ! mfrc522.PICC_ReadCardSerial()) // Wenn ein RFID-Sender ausgewählt wurde
  {
    return; // gehe weiter...
  }

  //Serial.print("Die ID des RFID-TAGS lautet:"); 

  for (byte i = 0; i < mfrc522.uid.size; i++)
  {
    Serial.print(mfrc522.uid.uidByte[i], HEX);
    // Dann wird die UID ausgelesen, die aus vier einzelnen Blöcken besteht und der Reihe nach an den Serial Monitor gesendet. Die Endung Hex bedeutet, dass die vier Blöcke der UID als HEX-Zahl (also auch mit Buchstaben) ausgegeben wird
    Serial.print(" "); 
    // Der Befehl „Serial.print(" ");“ sorgt dafür, dass zwischen den einzelnen ausgelesenen Blöcken ein Leerzeichen steht.
  }

  Serial.println(); 
  // Mit dieser Zeile wird auf dem Serial Monitor nur ein Zeilenumbruch gemacht.
}

*/