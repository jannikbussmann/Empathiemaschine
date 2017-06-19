class Object{
  int x,y,sizeX,sizeY;
  
  Object(int x, int y, int sizeX, int sizeY)
  {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  };
  
  void display(){
    stroke(0);
    fill(schichtFarbe);
    rect(x,y,sizeX,sizeY);
  };
  
}