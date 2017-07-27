// Serial Communication with Sharp Distance Sensor and RFID Reader

#include <SPI.h> // SPI-Bibiothek
#include <MFRC522.h> // RFID-Bibiothek
#define SS_PIN A2 // SDA an Pin A2
#define RST_PIN D3 // RST an Pin D3
MFRC522 mfrc522(SS_PIN, RST_PIN); // RFID-Empfänger benennen

int int_value;

void setup() {
  byte i, port, status;
  Serial.begin(9600);
  SPI.begin(); // SPI-Verbindung aufbauen
  mfrc522.PCD_Init(); // Initialisierung des RFID-Empfängers
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.write(sensorValue);
  Particle.publish("SENSOR-WERT", String(sensorValue), 60, PUBLIC);
  Particle.variable("SENSOR-WERT", &sensorValue, INT);
  delay(1000);

  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return; // gehe weiter...
  }

  if ( ! mfrc522.PICC_ReadCardSerial()) // Wenn ein RFID-Sender ausgewählt wurde
  {
    return; // gehe weiter...
  }

  String cardID;

  for (byte i = 0; i < mfrc522.uid.size; i++) {
        cardID += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
        cardID += String(mfrc522.uid.uidByte[i], HEX);
    }

    Serial.write(cardID);
    Particle.publish("RFID-SCAN", String(cardID), 60, PUBLIC);
    Particle.variable("RFID-SCAN", &cardID, STRING);
    //mfrc522.PICC_HaltA(); einmal
    delay(1000);
}
