$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

//First Obstacle Platforms
    createPlatform(250, 640, 50, 10)
    createPlatform(250, 500, 50, 10)
    createPlatform(250, 350, 50, 10)
    createPlatform(250, 200, 50, 10)
    createPlatform(100, 575, 50, 10)
    createPlatform(100, 425, 50, 10)
    createPlatform(100, 275, 50, 10)
//First Obstacle Walls
    createPlatform(100, 100, 10, 475)
    createPlatform(300, 200, 200, 700)
//Second Obstacle Platforms
    createPlatform(800, 640, 200, 10)
    createPlatform(1000, 600, 200, 10)
    createPlatform(600, 500, 200, 10)
    createPlatform(600, 400, 100, 10)
    createPlatform(900, 300, 100, 10)
    createPlatform(0, 100, 100,10)
//Second Obstacle Walls
    createPlatform(1200, 200, 200, 700)
    createPlatform(600, 0, 10, 500)
    createPlatform(1000, 600, 10, 50)



    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

//database collectibles
    createCollectable("database", 635, 440, 0, 0)
    createCollectable("database", 1100, 680, 0, 0)
    createCollectable("database", 1000, 680, 0, 0)
    createCollectable("database", 1050, 680, 0, 0)
    createCollectable("database", 40, 60, 0, 0)
    createCollectable("database", 45, 60, 0, 0)
    createCollectable("database", 50, 60, 0, 0)
    createCollectable("database", 55, 60, 0, 0)
    createCollectable("database", 60, 60, 0, 0)

//special collectables
    createCollectable("ruby", 1280, 120, 0, 0)
    createCollectable("diamondPiece", 1150, 680, 0, 0)
    createCollectable("gold", 260, 680, 0, 0)
    createCollectable("emerald", 380, 150, 0 ,0)




    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon('top', 610, 2000, 100, 100)
createCannon('right', 750, 2800, 20, 20)
createCannon('left', 10, 5000, 20, 20)
createCannon('left', 360, 27000, 10, 200000)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
