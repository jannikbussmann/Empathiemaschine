class Rectangle{
  int x;
  int y;
  int sizeX;
  int sizeY;
  
  Rectangle(int x, int y, int sizeX, int sizeY)
  {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  };
  
  void display(){
    noStroke();
    fill(200, 100);
    rect(x,y,sizeX,sizeY);
  };
}