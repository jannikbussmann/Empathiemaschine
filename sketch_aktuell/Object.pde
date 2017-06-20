class Object{
  int x,y,sizeX,sizeY;
  color fillColor;
  
  Object(int x, int y, int sizeX, int sizeY, color fillColor)
  {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.fillColor = fillColor;
  };
  
  void display(){
    stroke(0);  
    fill(fillColor);
    rect(x,y,sizeX,sizeY);
  };
  
}