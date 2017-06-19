float spring = 0.05;
float gravity = 0.03;
float friction = -0.9;
int id = 0;

// An Array of Bubble objects
Bubble[] bubbles = new Bubble[id];
// A JSON object
JSONObject json;

void setup() {
  size(1280, 720);
  colorMode(HSB, 360, 100, 100);
  loadData();
}

void draw() {
  background(255);
  // Display all bubbles
  for (Bubble b : bubbles) {
    b.display();
    //b.collide();
    b.move();
    b.randomiseDirection();
    b.checkBounds();
    b.rollover(mouseX, mouseY);
  }
  //
  textAlign(LEFT);
  fill(0);
  text("Click to add bubbles.", 10, height-10);
}

void loadData() {
  // Load JSON file
  // Temporary full path until path problem resolved.
  json = loadJSONObject("data.json");

  JSONArray bubbleData = json.getJSONArray("bubbles");

  // The size of the array of Bubble objects is determined by the total XML elements named "bubble"
  bubbles = new Bubble[bubbleData.size()]; 

  for (int i = 0; i < bubbleData.size(); i++) {
    // Get each object in the array
    JSONObject bubble = bubbleData.getJSONObject(i); 
    // Get a position object
    JSONObject position = bubble.getJSONObject("position");
    // Get x,y from position
    int x = position.getInt("x");
    int y = position.getInt("y");

    // Get diamter and label
    int id = bubble.getInt("id");
    float diameter = bubble.getFloat("diameter");
    String label = bubble.getString("label");


    // Put object in array
    bubbles[i] = new Bubble(x, y, diameter, label, id);
  }
}

void mousePressed() {
  // Create a new JSON bubble object
  JSONObject newBubble = new JSONObject();

  // Create a new JSON position object
  JSONObject position = new JSONObject();
  position.setInt("x", mouseX);
  position.setInt("y", mouseY);

  // Add position to bubble
  newBubble.setJSONObject("position", position);

  // Add diamater, id and label to bubble
  newBubble.setInt("id", id++);
  newBubble.setFloat("diameter", random(40, 80));
  newBubble.setString("label", "New label");

  // Append the new JSON bubble object to the array
  JSONArray bubbleData = json.getJSONArray("bubbles");
  bubbleData.append(newBubble);

  /* Nicht mehr als 10 gleichzeitig, dann gelöscht */
  if (bubbleData.size() > 15) {
    bubbleData.remove(0);
  }

  // Save new data
  saveJSONObject(json, "data/data.json");
  loadData();
}