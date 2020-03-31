// font size
var FONT = 32;

// map dimensions
var ROWS = 10;
var COLS = 15;

// number of actors per level, including player
var ACTORS = 10;

// initialize phaser, call create() once done
// the column number is multiplied by 0.6 because it is being assumed that the default monospace font will be about %60 as wide as they are high
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create
});

function create() {
  // init keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
}

function onKeyUp(event) {
  switch (event.KeyCode) {
    case Keyboard.LEFT:

    case Keyboard.RIGHT:

    case Keyboard.UP:

    case Keyboard.DOWN:

  }
}

// the structure of the map
var map;

function initMap() {
  //create a new random map
  map = [];
  for (let y = 0; y < ROWS; y++) {
    var newRow = [];
    for (let x = 0; x < COLS; x++) {
      if (Math.random() > 0.8) {
        newRow.push('#');
      } else {
        newRow.push('.');
      }
    }
    map.push(newRow);
  }
}