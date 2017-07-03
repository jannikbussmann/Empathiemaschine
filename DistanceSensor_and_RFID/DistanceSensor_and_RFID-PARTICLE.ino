// This #include statement was automatically added by the Particle IDE.
#include "MFRC522Extended.h"

// This #include statement was automatically added by the Particle IDE.
#include "MFRC522.h"

// Serial Communication with Sharp Distance Sensor and RFID Reader

#include <SPI.h> // SPI-Bibiothek hinzufügen
#include <MFRC522.h> // RFID-Bibiothek hinzufügen
#define SS_PIN A2 // SDA an Pin A2
#define RST_PIN D3 // RST an Pin D3
MFRC522 mfrc522(SS_PIN, RST_PIN); // RFID-Empfänger benennen



int int_value;



void setup() {

  byte i, port, status;

  Serial.begin(9600); // Serielle Verbindung starten (Monitor)
  SPI.begin(); // SPI-Verbindung aufbauen
  mfrc522.PCD_Init(); // Initialisierung des RFID-Empfängers

}

void loop() {

  int sensorValue = analogRead(A0);
  Serial.write(sensorValue);
  Particle.publish("Sensor Wert", String(sensorValue), 60, PUBLIC);
  Particle.variable("Sensor Wert", &sensorValue, INT);
  delay(1000);

  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return; // gehe weiter...
  }

  if ( ! mfrc522.PICC_ReadCardSerial()) // Wenn ein RFID-Sender ausgewählt wurde
  {
    return; // gehe weiter...
  }

  String cardID = "";

  for (byte i = 0; i < mfrc522.uid.size; i++) {
        cardID += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
        cardID += String(mfrc522.uid.uidByte[i], HEX);
    }

    Particle.publish("RFID_Scan", cardID, 60, PUBLIC);
    Particle.variable("RFID_Scan", &cardID, STRING);
    Serial.println(cardID);
    //mfrc522.PICC_HaltA();
    delay(1000);
}
